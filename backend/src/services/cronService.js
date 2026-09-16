const cron = require('node-cron');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const { sendPreAppointmentReminder, sendMedicineReminderNotification } = require('./notificationService');

/**
 * Helper to compute both UTC and IST (Asia/Kolkata, UTC+5:30) times
 */
function getDualTimezones() {
  const nowUtc = new Date();
  const istOffsetMs = (5 * 60 + 30) * 60 * 1000;
  const nowIst = new Date(nowUtc.getTime() + istOffsetMs);

  const formatYMD = (d) => {
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  const to12H = (hours, minutes) => {
    const period = hours >= 12 ? 'PM' : 'AM';
    let h12 = hours % 12;
    h12 = h12 ? h12 : 12;
    return `${String(h12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
  };

  const to24H = (hours, minutes) => {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  return {
    utc: {
      dateStr: formatYMD(nowUtc),
      hour: nowUtc.getUTCHours(),
      minute: nowUtc.getUTCMinutes(),
      totalMinutes: nowUtc.getUTCHours() * 60 + nowUtc.getUTCMinutes(),
      formatted12: to12H(nowUtc.getUTCHours(), nowUtc.getUTCMinutes()),
      formatted24: to24H(nowUtc.getUTCHours(), nowUtc.getUTCMinutes())
    },
    ist: {
      dateStr: formatYMD(nowIst),
      hour: nowIst.getUTCHours(),
      minute: nowIst.getUTCMinutes(),
      totalMinutes: nowIst.getUTCHours() * 60 + nowIst.getUTCMinutes(),
      formatted12: to12H(nowIst.getUTCHours(), nowIst.getUTCMinutes()),
      formatted24: to24H(nowIst.getUTCHours(), nowIst.getUTCMinutes())
    }
  };
}

/**
 * Initialize all automated background cron jobs
 */
function initCronJobs() {
  console.log('⏰ [Cron Service] Initializing background healthcare schedulers (IST & UTC Timezone Aware)...');

  // =========================================================================
  // CRON JOB 1: 1-Hour Pre-Appointment Reminder (Runs every 2 minutes)
  // =========================================================================
  cron.schedule('*/2 * * * *', async () => {
    try {
      const times = getDualTimezones();
      const validDates = Array.from(new Set([times.ist.dateStr, times.utc.dateStr]));

      // Find active appointments for today where reminder has not been dispatched
      const upcomingAppointments = await Appointment.find({
        appointmentDate: { $in: validDates },
        status: { $in: ['Pending', 'Confirmed', 'Rescheduled'] },
        reminderSent: { $ne: true }
      })
      .populate('patientUser', 'name email mobile')
      .populate('doctorUser', 'name email mobile')
      .populate('doctor', 'hospital specialization');

      for (const appt of upcomingAppointments) {
        const slotTime = parseTimeSlot(appt.timeSlot);
        if (!slotTime) continue;

        const slotTotalMinutes = slotTime.hours * 60 + slotTime.minutes;

        // Calculate diff in IST and UTC
        const diffMinutesIST = slotTotalMinutes - times.ist.totalMinutes;
        const diffMinutesUTC = slotTotalMinutes - times.utc.totalMinutes;

        // Trigger if appointment is starting within 0 to 75 minutes (approx 1 hour pre-reminder)
        const isDueInIST = (appt.appointmentDate === times.ist.dateStr && diffMinutesIST >= 0 && diffMinutesIST <= 75);
        const isDueInUTC = (appt.appointmentDate === times.utc.dateStr && diffMinutesUTC >= 0 && diffMinutesUTC <= 75);

        if (isDueInIST || isDueInUTC) {
          console.log(`⏰ [Cron Trigger] Dispatching 1-hour pre-appointment reminder for Appt #${appt._id} (${appt.timeSlot}) to ${appt.patientUser?.email}`);
          
          await sendPreAppointmentReminder({
            appointment: appt,
            patientUser: appt.patientUser,
            doctorUser: appt.doctorUser,
            doctorProfile: appt.doctor
          });

          appt.reminderSent = true;
          await appt.save();
        }
      }
    } catch (err) {
      console.error(`❌ [Cron Error - Appointment Reminder]: ${err.message}`);
    }
  });

  // =========================================================================
  // CRON JOB 2: Robust Medicine Reminder Dispatcher (Runs every 1 minute)
  // =========================================================================
  cron.schedule('* * * * *', async () => {
    try {
      const times = getDualTimezones();

      const patients = await Patient.find({
        'medicineReminders.isActive': true
      }).populate('user', 'name email mobile');

      for (const patient of patients) {
        if (!patient.medicineReminders || !patient.user) continue;

        for (const reminder of patient.medicineReminders) {
          if (!reminder.isActive || !reminder.time) continue;

          // Target normalized time (e.g., "09:00" or "21:00")
          const targetTime = normalizeTime(reminder.time);
          const currentIST12 = normalizeTime(times.ist.formatted12);
          const currentIST24 = normalizeTime(times.ist.formatted24);
          const currentUTC12 = normalizeTime(times.utc.formatted12);
          const currentUTC24 = normalizeTime(times.utc.formatted24);

          const matchesIST = (targetTime === currentIST12 || targetTime === currentIST24);
          const matchesUTC = (targetTime === currentUTC12 || targetTime === currentUTC24);

          if (matchesIST || matchesUTC) {
            console.log(`💊 [Cron Trigger] Time reached for ${patient.user.name}: Take ${reminder.medicineName} at ${reminder.time}`);
            
            await sendMedicineReminderNotification({
              patientUser: patient.user,
              medicine: reminder
            });
          }
        }
      }
    } catch (err) {
      console.error(`❌ [Cron Error - Medicine Reminder]: ${err.message}`);
    }
  });

  console.log('✅ [Cron Service] Schedulers active: Pre-appointment check (2m) & Medicine alarms (1m) with dual IST/UTC synchronization');
}

// Helper: Parse any time string (e.g. "10:00 AM", "9.00PM", "21:00", "09:30 pm")
function parseTimeSlot(slotStr) {
  if (!slotStr) return null;
  const cleaned = slotStr.trim().replace('.', ':');
  
  // 12-Hour format with AM/PM
  const match12 = cleaned.match(/(\d+):?(\d*)\s*(AM|PM)/i);
  if (match12) {
    let hours = parseInt(match12[1], 10);
    const minutes = match12[2] ? parseInt(match12[2], 10) : 0;
    const period = match12[3].toUpperCase();

    if (period === 'PM' && hours < 12) hours += 12;
    if (period === 'AM' && hours === 12) hours = 0;

    return { hours, minutes };
  }

  // 24-Hour format (e.g. "21:00")
  const match24 = cleaned.match(/(\d+):(\d+)/);
  if (match24) {
    return {
      hours: parseInt(match24[1], 10),
      minutes: parseInt(match24[2], 10)
    };
  }

  return null;
}

// Helper: Normalize time strings into standard "HH:mm" for exact comparison
function normalizeTime(tStr) {
  if (!tStr) return '';
  const parsed = parseTimeSlot(tStr.trim());
  if (!parsed) return tStr.trim().toUpperCase();
  const paddedH = String(parsed.hours).padStart(2, '0');
  const paddedM = String(parsed.minutes).padStart(2, '0');
  return `${paddedH}:${paddedM}`;
}

module.exports = {
  initCronJobs,
  getDualTimezones,
  parseTimeSlot,
  normalizeTime
};
