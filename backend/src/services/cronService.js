const cron = require('node-cron');
const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');
const { sendPreAppointmentReminder, sendMedicineReminderNotification } = require('./notificationService');

/**
 * Initialize all automated background cron jobs
 */
function initCronJobs() {
  console.log('⏰ [Cron Service] Initializing background healthcare schedulers...');

  // =========================================================================
  // CRON JOB 1: 1-Hour Pre-Appointment Reminder (Runs every 5 minutes)
  // =========================================================================
  cron.schedule('*/5 * * * *', async () => {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const todayStr = `${year}-${month}-${day}`;

      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // Find today's active appointments where reminder has not been sent yet
      const upcomingAppointments = await Appointment.find({
        appointmentDate: todayStr,
        status: { $in: ['Pending', 'Confirmed'] },
        reminderSent: false
      })
      .populate('patientUser', 'name email mobile')
      .populate('doctorUser', 'name email mobile')
      .populate('doctor', 'hospital specialization');

      for (const appt of upcomingAppointments) {
        const slotTime = parseTimeSlot(appt.timeSlot);
        if (!slotTime) continue;

        const slotTotalMinutes = slotTime.hours * 60 + slotTime.minutes;
        const nowTotalMinutes = currentHour * 60 + currentMinute;
        const diffMinutes = slotTotalMinutes - nowTotalMinutes;

        // Trigger if appointment is between 40 and 75 minutes from now (approx 1 hour)
        if (diffMinutes >= 40 && diffMinutes <= 75) {
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
      const now = new Date();
      const currentFormattedTime = formatTimeTo12Hour(now); // e.g. "09:00 PM"
      const current24HTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`; // e.g. "21:00"

      const patients = await Patient.find({
        'medicineReminders.isActive': true
      }).populate('user', 'name email mobile');

      for (const patient of patients) {
        if (!patient.medicineReminders || !patient.user) continue;

        for (const reminder of patient.medicineReminders) {
          if (!reminder.isActive || !reminder.time) continue;

          // Normalize both 12H, 24H, and dotted time formats (e.g., "9.00PM", "09:00 PM", "21:00")
          const targetTime = normalizeTime(reminder.time);
          const currentTime12 = normalizeTime(currentFormattedTime);
          const currentTime24 = normalizeTime(current24HTime);

          if (targetTime === currentTime12 || targetTime === currentTime24) {
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

  console.log('✅ [Cron Service] Schedulers active: Pre-appointment check (5m) & Medicine alarms (1m)');
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

// Helper: Format Date object to "hh:mm A"
function formatTimeTo12Hour(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedHours = String(hours).padStart(2, '0');

  return `${paddedHours}:${paddedMinutes} ${period}`;
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
  initCronJobs
};
