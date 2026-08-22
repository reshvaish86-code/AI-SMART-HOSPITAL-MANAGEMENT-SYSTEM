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
      // Format current date in YYYY-MM-DD
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const todayStr = `${year}-${month}-${day}`;

      // Current hour and minute
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
        // Parse timeSlot (e.g., "10:00 AM", "03:30 PM")
        const slotTime = parseTimeSlot(appt.timeSlot);
        if (!slotTime) continue;

        const slotTotalMinutes = slotTime.hours * 60 + slotTime.minutes;
        const nowTotalMinutes = currentHour * 60 + currentMinute;
        const diffMinutes = slotTotalMinutes - nowTotalMinutes;

        // Trigger if appointment is between 45 and 75 minutes from now (approx 1 hour)
        if (diffMinutes >= 40 && diffMinutes <= 75) {
          console.log(`⏰ [Cron Trigger] Dispatching 1-hour pre-appointment reminder for Appt #${appt._id} (${appt.timeSlot})`);
          
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
  // CRON JOB 2: Exact-Minute Medicine Reminder Dispatcher (Runs every 1 minute)
  // =========================================================================
  cron.schedule('* * * * *', async () => {
    try {
      const now = new Date();
      // Format current time into "hh:mm A" string (e.g., "08:00 AM", "09:30 PM")
      const currentFormattedTime = formatTimeTo12Hour(now);

      // Query patients who have active medicine reminders
      const patients = await Patient.find({
        'medicineReminders.isActive': true
      }).populate('user', 'name email mobile');

      for (const patient of patients) {
        if (!patient.medicineReminders || !patient.user) continue;

        for (const reminder of patient.medicineReminders) {
          if (!reminder.isActive || !reminder.time) continue;

          // Normalize times for comparison (e.g., "8:00 AM" vs "08:00 AM")
          if (normalizeTime(reminder.time) === normalizeTime(currentFormattedTime)) {
            console.log(`💊 [Cron Trigger] Dispatching medicine reminder for patient: ${patient.user.name} | Med: ${reminder.medicineName} at ${reminder.time}`);
            
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

// Helper: Parse 12-hour time string into 24-hour hour & minute
function parseTimeSlot(slotStr) {
  if (!slotStr) return null;
  const match = slotStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;

  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();

  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  return { hours, minutes };
}

// Helper: Format Date object to "hh:mm A"
function formatTimeTo12Hour(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedHours = String(hours).padStart(2, '0');

  return `${paddedHours}:${paddedMinutes} ${period}`;
}

// Helper: Normalize time strings (e.g., "8:00 AM" -> "08:00 AM")
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
