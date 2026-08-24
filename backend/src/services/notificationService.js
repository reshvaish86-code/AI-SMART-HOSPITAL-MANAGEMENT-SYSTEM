const nodemailer = require('nodemailer');
const twilio = require('twilio');
const Notification = require('../models/Notification');

// ==========================================
// 1. NODEMAILER TRANSPORTER INITIALIZATION
// ==========================================
let transporter = null;

function getEmailTransporter() {
  const user = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : '';
  const rawPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.trim() : '';
  const pass = rawPass.replace(/\s+/g, ''); // Strip any spaces from 16-letter App Password

  if (user && pass) {
    try {
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: user,
          pass: pass
        },
        tls: {
          rejectUnauthorized: false
        }
      });
      return transport;
    } catch (err) {
      console.warn('⚠️ [Notification Service] Nodemailer initialization failed:', err.message);
      return null;
    }
  }
  return null;
}

transporter = getEmailTransporter();
if (transporter) {
  console.log(`✅ [Notification Service] Nodemailer Gmail Transporter configured for: ${process.env.EMAIL_USER}`);
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ [Gmail SMTP Auth Error]:', error.message);
      console.warn('💡 Make sure you use a 16-character Google App Password (not your normal Gmail login password) from https://myaccount.google.com/apppasswords');
    } else {
      console.log('🎉 [Gmail SMTP Success] Server is ready to deliver real emails to patient inboxes!');
    }
  });
} else {
  console.log('ℹ️ [Notification Service] EMAIL_USER / EMAIL_PASS not set. Email alerts will log to console & MongoDB in-app inbox.');
}

// ==========================================
// 2. TWILIO SMS CLIENT INITIALIZATION
// ==========================================
let twilioClient = null;

if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
  try {
    twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID.trim(), process.env.TWILIO_AUTH_TOKEN.trim());
    console.log('✅ [Notification Service] Twilio SMS client initialized');
  } catch (err) {
    console.warn('⚠️ [Notification Service] Twilio initialization failed:', err.message);
  }
} else {
  console.log('ℹ️ [Notification Service] Twilio credentials not set. SMS alerts will log to console & MongoDB in-app inbox.');
}

/**
 * Universal Email Sender Helper
 */
async function sendEmail({ to, subject, html, text }) {
  if (!to) {
    console.warn('⚠️ [Email Warning] No recipient email provided.');
    return;
  }

  // Re-check transporter in case env vars were loaded dynamically
  if (!transporter) {
    transporter = getEmailTransporter();
  }

  if (transporter && process.env.EMAIL_USER) {
    try {
      const cleanUser = process.env.EMAIL_USER.trim();
      const mailOptions = {
        from: process.env.EMAIL_FROM || `"AI Smart Hospital" <${cleanUser}>`,
        to: to.trim(),
        subject: subject,
        text: text || subject,
        html: html
      };

      const info = await transporter.sendMail(mailOptions);
      console.log(`📧 [Real Email Sent Successfully] To: ${to} | Subject: "${subject}" | MessageId: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error(`❌ [Email Delivery Failed] to ${to}:`, error.message);
      return { success: false, error: error.message };
    }
  } else {
    console.log(`📫 [Mock Email Dispatch] To: ${to} | Subject: "${subject}"`);
    return { success: false, reason: 'EMAIL_USER / EMAIL_PASS not set' };
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
        from: process.env.TWILIO_PHONE_NUMBER.trim(),
        to: to.trim()
      });
      console.log(`📱 [Real SMS Sent Successfully] To: ${to} | SID: ${message.sid}`);
      return { success: true, sid: message.sid };
    } catch (error) {
      console.error(`❌ [SMS Error] Could not send SMS to ${to}:`, error.message);
      return { success: false, error: error.message };
    }
  } else {
    console.log(`📲 [Mock SMS Dispatch] To: ${to} | Body: ${body}`);
    return { success: false, reason: 'Twilio not configured' };
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

/**
 * Generic sendNotification wrapper for backward compatibility across auth/records
 */
async function sendNotification({ recipient, title, message, type = 'system', relatedId = '' }) {
  return await createInAppNotification({
    recipient,
    title,
    message,
    type,
    link: '/pages/patient/dashboard.html'
  });
}

/**
 * Broadcast Notification (Admin dispatch to all users or role)
 */
async function broadcastNotification({ targetRole = 'all', title, message }) {
  const User = require('../models/User');
  let query = { isActive: true };
  if (targetRole !== 'all') {
    query.role = targetRole;
  }
  const users = await User.find(query).select('_id email mobile');
  for (const user of users) {
    await createInAppNotification({
      recipient: user._id,
      title,
      message,
      type: 'broadcast'
    });
  }
  return users.length;
}

// ==========================================
// 3. HIGH-LEVEL DOMAIN NOTIFICATION HANDLERS
// ==========================================

/**
 * 1. Instant Appointment Confirmation Notification (Email + SMS + In-App)
 */
async function sendAppointmentConfirmation({ appointment, patientUser, doctorUser, doctorProfile }) {
  const doctorName = doctorUser ? doctorUser.name : 'Your Specialist';
  const hospitalName = doctorProfile ? doctorProfile.hospital : 'AI Smart Hospital Medical Center';
  const patientEmail = patientUser ? patientUser.email : null;
  const patientMobile = patientUser ? patientUser.mobile : null;

  // In-app alert for Patient
  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'appointment',
      title: 'Appointment Request Submitted 📅',
      message: `Your appointment with ${doctorName} on ${appointment.appointmentDate} at ${appointment.timeSlot} is submitted.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  // In-app alert for Doctor
  if (doctorUser) {
    await createInAppNotification({
      recipient: doctorUser._id,
      type: 'appointment',
      title: 'New Patient Booking Request 🩺',
      message: `Patient ${patientUser ? patientUser.name : ''} has booked slot on ${appointment.appointmentDate} at ${appointment.timeSlot}.`,
      link: '/pages/doctor/dashboard.html'
    });
  }

  // Email to Patient
  if (patientEmail) {
    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0284c7; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0;">AI Smart Hospital</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Appointment Booking Confirmation</p>
        </div>
        <div style="padding: 24px; color: #334155; line-height: 1.6;">
          <p>Dear <strong>${patientUser ? patientUser.name : 'Patient'}</strong>,</p>
          <p>Your appointment has been successfully scheduled. Here are your consultation details:</p>
          <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 14px; margin: 18px 0;">
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
      subject: `Appointment Confirmed with ${doctorName} - AI Smart Hospital`,
      html
    });
  }

  // SMS to Patient
  if (patientMobile) {
    const body = `AI Smart Hospital: Hi ${patientUser ? patientUser.name : 'Patient'}, your appointment with ${doctorName} is confirmed for ${appointment.appointmentDate} at ${appointment.timeSlot} at ${hospitalName}.`;
    await sendSMS({ to: patientMobile, body });
  }
}

/**
 * 2. 1-Hour Pre-Appointment Reminder Notification
 */
async function sendPreAppointmentReminder({ appointment, patientUser, doctorUser, doctorProfile }) {
  const doctorName = doctorUser ? doctorUser.name : 'Your Specialist';
  const hospital = doctorProfile ? doctorProfile.hospital : 'Hospital';
  const patientEmail = patientUser ? patientUser.email : null;
  const patientMobile = patientUser ? patientUser.mobile : null;

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'reminder',
      title: 'Upcoming Consultation in 1 Hour ⏰',
      message: `Reminder for ${patientUser.name}: Your consultation with ${doctorName} starts in ~1 hour (${appointment.timeSlot}).`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 550px; margin: auto; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px;">
        <h3 style="color: #0284c7; margin-top: 0;">⏰ 1-Hour Appointment Reminder</h3>
        <p>Dear <strong>${patientUser ? patientUser.name : 'Patient'}</strong>,</p>
        <p>This is an automated reminder that your medical appointment starts in approximately <strong>1 hour</strong>:</p>
        <ul>
          <li><strong>Patient Name:</strong> ${patientUser ? patientUser.name : 'Patient'}</li>
          <li><strong>Doctor:</strong> ${doctorName}</li>
          <li><strong>Hospital:</strong> ${hospital}</li>
          <li><strong>Time:</strong> ${appointment.timeSlot} (Today)</li>
        </ul>
        <p>Please ensure you are present or ready on time.</p>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `⏰ 1-Hour Reminder: Consultation with ${doctorName} at ${appointment.timeSlot}`,
      html
    });
  }

  if (patientMobile) {
    const body = `AI Hospital Reminder: Hi ${patientUser ? patientUser.name : 'Patient'}, your consultation with ${doctorName} at ${hospital} is starting in ~1 hour (${appointment.timeSlot}). Please be ready!`;
    await sendSMS({ to: patientMobile, body });
  }
}

/**
 * 3. Appointment Status Update (Confirmed, Rejected, Rescheduled)
 */
async function sendAppointmentStatusUpdate({ appointment, patientUser, doctorUser, status, reason = '' }) {
  const doctorName = doctorUser ? doctorUser.name : 'Doctor';
  const patientEmail = patientUser ? patientUser.email : null;

  let title = `Appointment ${status}`;
  let message = `Your appointment with ${doctorName} for ${appointment.appointmentDate} is now ${status}.`;

  if (status === 'Rescheduled') {
    message = `Your appointment with ${doctorName} has been rescheduled to ${appointment.appointmentDate} at ${appointment.timeSlot}.`;
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
        <p>Dear ${patientUser ? patientUser.name : 'Patient'},</p>
        <p>${message}</p>
        ${reason ? `<p><strong>Note:</strong> ${reason}</p>` : ''}
        <p>Log in to your <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/patient/dashboard.html">Patient Portal</a> to view details.</p>
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
  const doctorName = doctorUser ? doctorUser.name : 'Your Doctor';
  const patientEmail = patientUser ? patientUser.email : null;

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'prescription',
      title: 'Digital Prescription (E-Rx) Ready 💊',
      message: `${doctorName} has generated and digitally signed your official prescription.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="color: #0284c7;">💊 Digital Prescription Ready</h3>
        <p>Dear ${patientUser ? patientUser.name : 'Patient'},</p>
        <p>Your certified digital prescription from <strong>${doctorName}</strong> is now available.</p>
        <p>You can view, save, and print your official prescription directly from your <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/patient/dashboard.html">Patient Dashboard</a>.</p>
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
 * 5. Medicine Scheduled Reminder Alert with Patient Name & Mobile
 */
async function sendMedicineReminderNotification({ patientUser, medicine }) {
  const targetPatientName = medicine.patientName || (patientUser ? patientUser.name : 'Patient');
  const targetMobile = medicine.mobileNumber || (patientUser ? patientUser.mobile : null);
  const patientEmail = patientUser ? patientUser.email : null;

  if (patientUser) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'reminder',
      title: `Medicine Alert for ${targetPatientName} 💊`,
      message: `Time for ${targetPatientName} (${targetMobile || ''}) to take ${medicine.medicineName} (${medicine.dosage || '1 dose'}) - ${medicine.instructions || 'As prescribed'}.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 550px; margin: auto;">
        <div style="background-color: #d97706; color: white; padding: 14px; text-align: center; border-radius: 6px;">
          <h3 style="margin: 0;">💊 Medicine Reminder Alert</h3>
        </div>
        <div style="padding: 16px 0;">
          <p>Dear <strong>${targetPatientName}</strong> (or Caregiver),</p>
          <p>This is your automated medication reminder from AI Smart Hospital:</p>
          <div style="background-color: #fffbeb; border-left: 4px solid #d97706; padding: 12px; margin: 15px 0;">
            <p style="margin: 4px 0;"><strong>👤 Patient Name:</strong> <span style="color: #d97706; font-weight: bold;">${targetPatientName}</span></p>
            <p style="margin: 4px 0;"><strong>📱 Registered Mobile:</strong> ${targetMobile || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>💊 Medicine Name:</strong> ${medicine.medicineName}</p>
            <p style="margin: 4px 0;"><strong>⚖️ Dosage:</strong> ${medicine.dosage || '1 dose'}</p>
            <p style="margin: 4px 0;"><strong>⏰ Scheduled Time:</strong> ${medicine.time}</p>
            <p style="margin: 4px 0;"><strong>📋 Instructions:</strong> ${medicine.instructions || 'Take as advised'}</p>
          </div>
          <p style="font-size: 13px; color: #64748b;">Stay healthy with AI Smart Hospital Management System.</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: patientEmail,
      subject: `💊 Medicine Reminder for ${targetPatientName}: ${medicine.medicineName}`,
      html
    });
  }

  if (targetMobile) {
    const body = `AI Hospital Alert for ${targetPatientName}: Time to take ${medicine.medicineName} (${medicine.dosage || ''}). Instructions: ${medicine.instructions || 'As prescribed'}.`;
    await sendSMS({ to: targetMobile, body });
  }
}

module.exports = {
  sendEmail,
  sendSMS,
  createInAppNotification,
  sendNotification,
  broadcastNotification,
  sendAppointmentConfirmation,
  sendPreAppointmentReminder,
  sendAppointmentStatusUpdate,
  sendPrescriptionNotification,
  sendMedicineReminderNotification
};
