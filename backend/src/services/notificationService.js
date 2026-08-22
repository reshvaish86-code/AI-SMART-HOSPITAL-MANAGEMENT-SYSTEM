const nodemailer = require('nodemailer');
const twilio = require('twilio');
const Notification = require('../models/Notification');

// ==========================================
// 1. NODEMAILER TRANSPORTER INITIALIZATION
// ==========================================
let transporter = null;

if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT, 10) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log('✅ [Notification Service] Nodemailer email transporter active with user:', process.env.EMAIL_USER);
  } catch (err) {
    console.warn('⚠️ [Notification Service] Nodemailer initialization failed:', err.message);
  }
} else {
  console.log('ℹ️ [Notification Service] EMAIL_USER / EMAIL_PASS not configured. Emails log to console & MongoDB.');
}

// ==========================================
// 2. TWILIO SMS CLIENT INITIALIZATION
// ==========================================
let twilioClient = null;

if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
  try {
    twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    console.log('✅ [Notification Service] Twilio SMS client active with phone:', process.env.TWILIO_PHONE_NUMBER);
  } catch (err) {
    console.warn('⚠️ [Notification Service] Twilio initialization failed:', err.message);
  }
} else {
  console.log('ℹ️ [Notification Service] Twilio credentials not configured. SMS logs to console & MongoDB.');
}

/**
 * Universal Email Sender Helper
 */
async function sendEmail({ to, subject, html, text }) {
  if (!to) return;

  if (transporter) {
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || `"AI Smart Hospital" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text: text || subject,
        html
      });
      console.log(`📧 [Email Dispatched] to ${to} | Subject: ${subject}`);
      return info;
    } catch (error) {
      console.error(`❌ [Email Delivery Error] to ${to}: ${error.message}`);
    }
  } else {
    console.log(`📫 [Simulated Email] To: ${to} | Subject: ${subject}`);
  }
}

/**
 * Universal SMS Sender Helper
 */
async function sendSMS({ to, body }) {
  if (!to) return;

  if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
    try {
      const message = await twilioClient.messages.create({
        body,
        from: process.env.TWILIO_PHONE_NUMBER,
        to
      });
      console.log(`📱 [SMS Dispatched] to ${to} | SID: ${message.sid}`);
      return message;
    } catch (error) {
      console.error(`❌ [SMS Delivery Error] to ${to}: ${error.message}`);
    }
  } else {
    console.log(`📲 [Simulated SMS] To: ${to} | Body: ${body}`);
  }
}

/**
 * In-App Notification Generator Helper
 */
async function createInAppNotification({ recipient, type = 'appointment', title, message, link = '' }) {
  try {
    const notif = await Notification.create({
      recipient,
      type,
      title,
      message,
      link,
      isRead: false
    });
    return notif;
  } catch (error) {
    console.error(`❌ [In-App Notification Error]: ${error.message}`);
  }
}

// ==========================================
// 3. DOMAIN EVENT DISPATCHERS
// ==========================================

/**
 * 1. Instant Appointment Confirmation Notification (Email + SMS + In-App)
 */
async function sendAppointmentConfirmation({ appointment, patientUser, doctorUser, doctorProfile }) {
  const patientName = patientUser ? patientUser.name : 'Patient';
  const doctorName = doctorUser ? doctorUser.name : 'Your Specialist';
  const hospitalName = doctorProfile ? doctorProfile.hospital : 'AI Smart Hospital Center';
  const patientEmail = patientUser ? patientUser.email : null;
  const patientMobile = patientUser ? patientUser.mobile : null;

  // In-app alert for Patient
  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'appointment',
      title: 'Appointment Request Submitted 📅',
      message: `Dear ${patientName}, your appointment with ${doctorName} on ${appointment.appointmentDate} at ${appointment.timeSlot} is submitted.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  // In-app alert for Doctor
  if (doctorUser) {
    await createInAppNotification({
      recipient: doctorUser._id,
      type: 'appointment',
      title: 'New Patient Booking Request 🩺',
      message: `Patient ${patientName} has requested a slot on ${appointment.appointmentDate} at ${appointment.timeSlot}.`,
      link: '/pages/doctor/dashboard.html'
    });
  }

  // Real Email to Patient
  if (patientEmail) {
    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0284c7; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0;">AI Smart Hospital</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Appointment Booking Confirmation</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <p>Dear <strong>${patientName}</strong>,</p>
          <p>Your appointment has been successfully scheduled. Here are your consultation details:</p>
          <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 14px; margin: 18px 0;">
            <p style="margin: 4px 0;"><strong>Patient Name:</strong> ${patientName}</p>
            <p style="margin: 4px 0;"><strong>Doctor:</strong> ${doctorName} (${appointment.specialist})</p>
            <p style="margin: 4px 0;"><strong>Hospital / Clinic:</strong> ${hospitalName}</p>
            <p style="margin: 4px 0;"><strong>Date:</strong> ${appointment.appointmentDate}</p>
            <p style="margin: 4px 0;"><strong>Time Slot:</strong> ${appointment.timeSlot}</p>
            <p style="margin: 4px 0;"><strong>Location:</strong> ${appointment.location}</p>
            <p style="margin: 4px 0;"><strong>Status:</strong> ${appointment.status}</p>
          </div>
          <p>Please arrive 15 minutes before your scheduled consultation slot.</p>
          <p style="font-size: 13px; color: #64748b; margin-top: 24px;">For assistance, visit your dashboard at <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}" style="color: #0284c7;">AI Smart Hospital Portal</a>.</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `Appointment Confirmed for ${patientName} with ${doctorName}`,
      html
    });
  }

  // Real SMS to Patient
  if (patientMobile) {
    const body = `AI Smart Hospital: Hello ${patientName}, your appointment with ${doctorName} is confirmed for ${appointment.appointmentDate} at ${appointment.timeSlot} at ${hospitalName}.`;
    await sendSMS({ to: patientMobile, body });
  }
}

/**
 * 2. 1-Hour Pre-Appointment Reminder Notification
 */
async function sendPreAppointmentReminder({ appointment, patientUser, doctorUser, doctorProfile }) {
  const patientName = patientUser ? patientUser.name : 'Patient';
  const doctorName = doctorUser ? doctorUser.name : 'Your Specialist';
  const hospital = doctorProfile ? doctorProfile.hospital : 'Hospital';
  const patientEmail = patientUser ? patientUser.email : null;
  const patientMobile = patientUser ? patientUser.mobile : null;

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'reminder',
      title: 'Upcoming Consultation in 1 Hour ⏰',
      message: `Dear ${patientName}, your consultation with ${doctorName} at ${hospital} starts in ~1 hour (${appointment.timeSlot}).`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 550px; margin: auto; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px;">
        <h3 style="color: #0284c7; margin-top: 0;">⏰ 1-Hour Pre-Appointment Reminder</h3>
        <p>Dear <strong>${patientName}</strong>,</p>
        <p>This is your automated reminder that your consultation is scheduled in approximately <strong>1 hour</strong>:</p>
        <ul>
          <li><strong>Patient Name:</strong> ${patientName}</li>
          <li><strong>Doctor:</strong> ${doctorName}</li>
          <li><strong>Hospital:</strong> ${hospital}</li>
          <li><strong>Time:</strong> ${appointment.timeSlot} (Today)</li>
        </ul>
        <p>Please ensure you are present or ready on time.</p>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `Reminder: Consultation in 1 Hour for ${patientName} with ${doctorName}`,
      html
    });
  }

  if (patientMobile) {
    const body = `AI Smart Hospital: Reminder for ${patientName} - Your consultation with ${doctorName} at ${hospital} starts in ~1 hour (${appointment.timeSlot}).`;
    await sendSMS({ to: patientMobile, body });
  }
}

/**
 * 3. Appointment Status Update (Confirmed, Rejected, Rescheduled)
 */
async function sendAppointmentStatusUpdate({ appointment, patientUser, doctorUser, status, reason = '' }) {
  const patientName = patientUser ? patientUser.name : 'Patient';
  const doctorName = doctorUser ? doctorUser.name : 'Doctor';
  const patientEmail = patientUser ? patientUser.email : null;

  let title = `Appointment ${status}`;
  let message = `Dear ${patientName}, your appointment with ${doctorName} for ${appointment.appointmentDate} is now ${status}.`;

  if (status === 'Rescheduled') {
    message = `Dear ${patientName}, your appointment with ${doctorName} has been rescheduled to ${appointment.appointmentDate} at ${appointment.timeSlot}.`;
  }

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'appointment',
      title,
      message,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="color: #0f172a;">Appointment Update: <span style="color: #0284c7;">${status}</span></h3>
        <p>Dear ${patientName},</p>
        <p>${message}</p>
        ${reason ? `<p><strong>Note:</strong> ${reason}</p>` : ''}
        <p>Manage your appointments on the <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/patient/dashboard.html">Patient Portal</a>.</p>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `Appointment Status Update: ${status} - AI Smart Hospital`,
      html
    });
  }
}

/**
 * 4. Digital Prescription Ready Notification
 */
async function sendPrescriptionNotification({ prescription, patientUser, doctorUser }) {
  const patientName = patientUser ? patientUser.name : 'Patient';
  const doctorName = doctorUser ? doctorUser.name : 'Your Doctor';
  const patientEmail = patientUser ? patientUser.email : null;

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'prescription',
      title: 'Digital Prescription (E-Rx) Ready 💊',
      message: `${doctorName} has issued a certified digital prescription for ${patientName}.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="color: #0284c7;">💊 Digital Prescription Ready</h3>
        <p>Dear ${patientName},</p>
        <p>Your certified digital prescription from <strong>${doctorName}</strong> is now available.</p>
        <p>You can view and print your prescription from your <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/patient/dashboard.html">Patient Dashboard</a>.</p>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `Your Digital Prescription from ${doctorName} is Ready - AI Smart Hospital`,
      html
    });
  }
}

/**
 * 5. Daily Medicine Scheduled Reminder Alert (With Target Patient Name & Mobile)
 */
async function sendMedicineReminderNotification({ patientUser, medicine }) {
  const targetPatientName = medicine.patientName || (patientUser ? patientUser.name : 'Patient');
  const targetMobile = medicine.mobileNumber || (patientUser ? patientUser.mobile : null);
  const patientEmail = patientUser ? patientUser.email : null;

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'reminder',
      title: `Medicine Alert for ${targetPatientName}: ${medicine.medicineName} 💊`,
      message: `Time for ${targetPatientName} to take ${medicine.medicineName} (${medicine.dosage || '1 dose'}) - ${medicine.instructions || 'As advised'}.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="color: #d97706;">💊 Medicine Reminder Alert</h3>
        <p>Dear <strong>${targetPatientName}</strong>,</p>
        <p>This is your scheduled reminder to take your medication:</p>
        <div style="background-color: #fffbeb; border-left: 4px solid #d97706; padding: 12px; margin: 15px 0;">
          <p style="margin: 4px 0;"><strong>Patient Name:</strong> ${targetPatientName}</p>
          <p style="margin: 4px 0;"><strong>Medicine:</strong> ${medicine.medicineName}</p>
          <p style="margin: 4px 0;"><strong>Dosage:</strong> ${medicine.dosage || '1 dose'}</p>
          <p style="margin: 4px 0;"><strong>Scheduled Time:</strong> ${medicine.time}</p>
          <p style="margin: 4px 0;"><strong>Instructions:</strong> ${medicine.instructions || 'Take as advised'}</p>
        </div>
        <p style="font-size: 13px; color: #64748b;">Stay healthy with AI Smart Hospital Management System.</p>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `Medication Reminder for ${targetPatientName}: Take ${medicine.medicineName}`,
      html
    });
  }

  if (targetMobile) {
    const body = `AI Hospital Alert for ${targetPatientName}: Time to take ${medicine.medicineName} (${medicine.dosage || '1 dose'}). Instructions: ${medicine.instructions || 'As advised'}.`;
    await sendSMS({ to: targetMobile, body });
  }
}

module.exports = {
  sendEmail,
  sendSMS,
  createInAppNotification,
  sendAppointmentConfirmation,
  sendPreAppointmentReminder,
  sendAppointmentStatusUpdate,
  sendPrescriptionNotification,
  sendMedicineReminderNotification
};
