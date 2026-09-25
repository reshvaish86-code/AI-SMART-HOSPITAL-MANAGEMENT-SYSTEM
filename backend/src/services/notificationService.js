const https = require('https');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const Notification = require('../models/Notification');

// ==========================================
// 1. UNIVERSAL WORLDWIDE EMAIL DISPATCH ENGINE
// ==========================================

/**
 * Send email to ANY recipient worldwide via Brevo HTTPS API (300 free emails/day to ANY email address)
 */
function sendViaBrevoAPI({ apiKey, to, subject, html, text }) {
  return new Promise((resolve) => {
    const cleanTo = (to || '').trim();
    const payload = JSON.stringify({
      sender: {
        name: 'AI Smart Hospital',
        email: process.env.EMAIL_USER || 'hospital.notifications.system@gmail.com'
      },
      to: [{ email: cleanTo }],
      subject: subject,
      htmlContent: html,
      textContent: text || subject
    });

    const options = {
      hostname: 'api.brevo.com',
      port: 443,
      path: '/v3/smtp/email',
      method: 'POST',
      headers: {
        'api-key': apiKey.trim(),
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log(`📧 [Brevo Worldwide Delivery Success] Delivered to ${cleanTo} | MessageId: ${parsed.messageId}`);
            resolve({ success: true, messageId: parsed.messageId });
          } else {
            console.warn(`⚠️ [Brevo API Error ${res.statusCode}]:`, parsed);
            resolve({ success: false, error: parsed.message || 'Brevo error' });
          }
        } catch (e) {
          resolve({ success: false, error: data });
        }
      });
    });

    req.on('error', (err) => {
      console.error('❌ [Brevo HTTPS Error]:', err.message);
      resolve({ success: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ success: false, error: 'Brevo request timeout' });
    });

    req.write(payload);
    req.end();
  });
}

/**
 * Send email via Resend HTTPS API
 */
function sendViaResendAPI({ apiKey, to, subject, html, text }) {
  return new Promise((resolve) => {
    const cleanTo = (to || '').trim();
    const payload = JSON.stringify({
      from: process.env.EMAIL_FROM || 'AI Smart Hospital <onboarding@resend.dev>',
      to: [cleanTo],
      subject: subject,
      html: html,
      text: text || subject
    });

    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey.trim()}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log(`📧 [Resend HTTPS Success] Delivered to ${cleanTo} | ID: ${parsed.id}`);
            resolve({ success: true, messageId: parsed.id });
          } else {
            console.warn(`⚠️ [Resend Sandbox Restriction]: ${parsed.message || data}`);
            const fallbackEmail = process.env.EMAIL_USER || 'reshvaish86@gmail.com';
            if (cleanTo.toLowerCase() !== fallbackEmail.toLowerCase()) {
              const retryPayload = JSON.stringify({
                from: process.env.EMAIL_FROM || 'AI Smart Hospital <onboarding@resend.dev>',
                to: [fallbackEmail.trim()],
                subject: `[Patient: ${cleanTo}] ${subject}`,
                html: `<div style="background:#eff6ff;padding:8px 12px;border-left:4px solid #3b82f6;margin-bottom:12px;font-size:13px;"><strong>Patient Alert:</strong> Intended for registered user <code>${cleanTo}</code></div>` + html,
                text: `[For: ${cleanTo}]\n` + (text || subject)
              });

              const retryReq = https.request({
                ...options,
                headers: {
                  ...options.headers,
                  'Content-Length': Buffer.byteLength(retryPayload)
                }
              }, (retryRes) => {
                let rData = '';
                retryRes.on('data', c => rData += c);
                retryRes.on('end', () => {
                  try {
                    const rParsed = JSON.parse(rData);
                    resolve({ success: true, messageId: rParsed.id, sandboxRedirect: true });
                  } catch (e) {
                    resolve({ success: false, error: rData });
                  }
                });
              });
              retryReq.on('error', () => resolve({ success: false, error: parsed.message }));
              retryReq.write(retryPayload);
              retryReq.end();
            } else {
              resolve({ success: false, error: parsed.message || 'Resend error' });
            }
          }
        } catch (e) {
          resolve({ success: false, error: data });
        }
      });
    });

    req.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ success: false, error: 'Resend timeout' });
    });

    req.write(payload);
    req.end();
  });
}

function getEmailTransporter() {
  const user = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : '';
  const rawPass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.trim() : '';
  const pass = rawPass.replace(/\s+/g, '');

  if (user && pass) {
    try {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass }
      });
    } catch (err) {
      return null;
    }
  }
  return null;
}

let transporter = getEmailTransporter();

// ==========================================
// 2. TWILIO SMS CLIENT INITIALIZATION
// ==========================================
let twilioClient = null;

if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
  try {
    twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID.trim(), process.env.TWILIO_AUTH_TOKEN.trim());
    console.log('✅ [Notification Service] Twilio SMS client initialized');
  } catch (err) {}
}

/**
 * Universal Email Sender Helper (Supports Brevo Worldwide API, Resend, and Gmail SMTP)
 */
async function sendEmail({ to, subject, html, text }) {
  if (!to) {
    console.warn('⚠️ [Email Warning] No recipient email provided.');
    return { success: false, error: 'No recipient email' };
  }

  // 1. First priority: Brevo Worldwide API (Sends to ANY email address worldwide for free without domain lock!)
  if (process.env.BREVO_API_KEY) {
    const brevoResult = await sendViaBrevoAPI({
      apiKey: process.env.BREVO_API_KEY,
      to,
      subject,
      html,
      text
    });
    if (brevoResult.success) {
      return brevoResult;
    }
  }

  // 2. Second priority: Resend HTTPS API
  if (process.env.RESEND_API_KEY) {
    const resendResult = await sendViaResendAPI({
      apiKey: process.env.RESEND_API_KEY,
      to,
      subject,
      html,
      text
    });
    if (resendResult.success) {
      return resendResult;
    }
  }

  // 3. Third priority: Gmail SMTP Transporter
  if (!transporter) {
    transporter = getEmailTransporter();
  }

  if (transporter && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
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
      console.log(`📧 [Gmail SMTP Sent Successfully] To: ${to} | MessageId: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error(`❌ [Gmail SMTP Delivery Failed] to ${to}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  console.log(`📫 [Mock Email Dispatch] To: ${to} | Subject: "${subject}"`);
  return { success: false, reason: 'No email service configured' };
}

/**
 * Universal SMS Sender Helper
 */
async function sendSMS({ to, body }) {
  if (!to) return { success: false, error: 'No phone number' };

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
  const doctorName = doctorUser ? (doctorUser.name || 'Doctor') : 'Your Specialist';
  const hospitalName = (doctorProfile && doctorProfile.hospital) ? doctorProfile.hospital : (appointment.hospital || 'AI Smart Hospital Medical Center');
  const patientEmail = (patientUser && patientUser.email) ? patientUser.email : null;
  const patientMobile = (patientUser && patientUser.mobile) ? patientUser.mobile : null;
  const patientName = (patientUser && patientUser.name) ? patientUser.name : 'Patient';
  const bookingId = appointment.bookingId || ('BK-' + (appointment._id ? appointment._id.toString().slice(-5).toUpperCase() : Math.floor(10000 + Math.random() * 90000)));
  const doctorId = doctorProfile?.doctorId || doctorUser?.doctorId || 'DOC-TN-101';

  // In-app alert for Patient
  if (patientUser && patientUser._id) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'appointment',
      title: 'Appointment Request Submitted 📅',
      message: `Your appointment with ${doctorName} (Doctor ID: ${doctorId}) on ${appointment.appointmentDate} at ${appointment.timeSlot} is submitted. Booking ID: ${bookingId}.`,
      link: '/pages/patient/dashboard.html'
    });
  }

  // In-app alert for Doctor
  if (doctorUser && doctorUser._id) {
    await createInAppNotification({
      recipient: doctorUser._id,
      type: 'appointment',
      title: 'New Patient Booking Request 🩺',
      message: `Patient ${patientName} has booked slot on ${appointment.appointmentDate} at ${appointment.timeSlot}. Booking ID: ${bookingId}.`,
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
          <p>Dear <strong>${patientName}</strong>,</p>
          <p>Your appointment has been successfully scheduled. Here are your consultation details:</p>
          
          <div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px; padding: 12px 16px; margin: 16px 0; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <span style="font-size: 12px; color: #0369a1; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Unique Booking ID</span>
              <div style="font-size: 18px; font-weight: bold; color: #0284c7; font-family: monospace;">🎟️ ${bookingId}</div>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 12px; color: #475569; text-transform: uppercase; font-weight: bold; letter-spacing: 0.5px;">Doctor ID</span>
              <div style="font-size: 15px; font-weight: bold; color: #334155; font-family: monospace;">🆔 ${doctorId}</div>
            </div>
          </div>

          <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 14px; margin: 18px 0;">
            <p style="margin: 4px 0;"><strong>Unique Booking ID:</strong> <span style="font-family: monospace; font-weight: bold; color: #0284c7;">${bookingId}</span></p>
            <p style="margin: 4px 0;"><strong>Doctor:</strong> ${doctorName} (Doctor ID: <span style="font-family: monospace; font-weight: bold;">${doctorId}</span>) - ${appointment.specialist || 'Specialist'}</p>
            <p style="margin: 4px 0;"><strong>Hospital / Clinic:</strong> ${hospitalName}</p>
            <p style="margin: 4px 0;"><strong>Date:</strong> ${appointment.appointmentDate}</p>
            <p style="margin: 4px 0;"><strong>Time Slot:</strong> ${appointment.timeSlot}</p>
            <p style="margin: 4px 0;"><strong>Consultation Fee:</strong> ₹${appointment.consultationFee || 600}</p>
            <p style="margin: 4px 0;"><strong>Reason:</strong> ${appointment.reasonForVisit || 'General checkup'}</p>
            <p style="margin: 4px 0;"><strong>Status:</strong> <span style="color:#0284c7;font-weight:bold;">${appointment.status || 'Confirmed'}</span></p>
          </div>
          <p>Please arrive 15 minutes before your scheduled consultation slot.</p>
          <p style="font-size: 13px; color: #64748b; margin-top: 24px;">For assistance, visit your dashboard at <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}" style="color: #0284c7;">AI Smart Hospital Portal</a>.</p>
        </div>
      </div>
    `;

    try {
      const emailRes = await sendEmail({
        to: patientEmail,
        subject: `🎉 Booking Confirmed [ID: ${bookingId}] with ${doctorName} - AI Smart Hospital`,
        html
      });
      console.log(`📧 [Patient Confirmation Email Sent] To: ${patientEmail} | Booking ID: ${bookingId} | Success: ${emailRes?.success} | MessageId: ${emailRes?.messageId || emailRes?.error}`);
    } catch (err) {
      console.error('❌ [Error sending patient confirmation email]:', err.message);
    }

    // Also send admin notification copy if different from patient email
    const adminEmail = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : '';
    if (adminEmail && adminEmail.toLowerCase() !== patientEmail.toLowerCase()) {
      try {
        await sendEmail({
          to: adminEmail,
          subject: `[Hospital Booking Alert] ${patientName} booked with ${doctorName} (Booking ID: ${bookingId})`,
          html: `<div style="background:#eff6ff;padding:10px 14px;border-left:4px solid #0284c7;margin-bottom:14px;font-size:13px;"><strong>Hospital Alert:</strong> New appointment booked by patient <code>${patientEmail}</code> (Booking ID: <code>${bookingId}</code>, Doctor ID: <code>${doctorId}</code>)</div>` + html
        });
        console.log(`📧 [Admin Booking Notification Sent] To: ${adminEmail}`);
      } catch (err) {
        console.error('❌ [Error sending admin copy]:', err.message);
      }
    }
  }

  // SMS to Patient
  if (patientMobile) {
    const body = `AI Smart Hospital: Hi ${patientName}, your appointment with ${doctorName} (Doctor ID: ${doctorId}) is confirmed for ${appointment.appointmentDate} at ${appointment.timeSlot} at ${hospitalName}. Unique Booking ID: ${bookingId}.`;
    sendSMS({ to: patientMobile, body }).catch(err => console.error('Error in sendSMS:', err));
  }
}

/**
 * 2. 1-Hour Pre-Appointment Reminder Notification
 */
async function sendPreAppointmentReminder({ appointment, patientUser, doctorUser, doctorProfile }) {
  const doctorName = doctorUser ? (doctorUser.name || 'Doctor') : 'Your Specialist';
  const hospital = (doctorProfile && doctorProfile.hospital) ? doctorProfile.hospital : (appointment.hospital || 'Hospital');
  const patientEmail = (patientUser && patientUser.email) ? patientUser.email : null;
  const patientMobile = (patientUser && patientUser.mobile) ? patientUser.mobile : null;
  const patientName = (patientUser && patientUser.name) ? patientUser.name : 'Patient';
  const bookingId = appointment.bookingId || ('BK-' + (appointment._id ? appointment._id.toString().slice(-5).toUpperCase() : Math.floor(10000 + Math.random() * 90000)));
  const doctorId = doctorProfile?.doctorId || doctorUser?.doctorId || 'DOC-TN-101';

  if (patientUser && patientUser._id) {
    await createInAppNotification({
      recipient: patientUser._id,
      type: 'reminder',
      title: 'Upcoming Consultation in 1 Hour ⏰',
      message: `Reminder for ${patientName}: Your consultation with ${doctorName} (Doctor ID: ${doctorId}, Booking ID: ${bookingId}) starts in ~1 hour (${appointment.timeSlot}).`,
      link: '/pages/patient/dashboard.html'
    });
  }

  if (patientEmail) {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 550px; margin: auto; padding: 20px; border: 1px solid #cbd5e1; border-radius: 8px;">
        <h3 style="color: #0284c7; margin-top: 0;">⏰ 1-Hour Appointment Reminder</h3>
        <p>Dear <strong>${patientName}</strong>,</p>
        <p>This is an automated reminder that your medical appointment starts in approximately <strong>1 hour</strong>:</p>
        <div style="background: #f1f5f9; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
          <p style="margin: 4px 0;"><strong>Booking ID:</strong> <span style="font-family:monospace;color:#0284c7;font-weight:bold;">${bookingId}</span></p>
          <p style="margin: 4px 0;"><strong>Patient Name:</strong> ${patientName}</p>
          <p style="margin: 4px 0;"><strong>Doctor:</strong> ${doctorName} (Doctor ID: <span style="font-family:monospace;font-weight:bold;">${doctorId}</span>)</p>
          <p style="margin: 4px 0;"><strong>Hospital:</strong> ${hospital}</p>
          <p style="margin: 4px 0;"><strong>Time:</strong> ${appointment.timeSlot} (Today)</p>
        </div>
        <p>Please ensure you are present or ready on time.</p>
      </div>
    `;

    try {
      await sendEmail({
        to: patientEmail,
        subject: `⏰ 1-Hour Reminder [Booking ID: ${bookingId}]: Consultation with ${doctorName} at ${appointment.timeSlot}`,
        html
      });
      console.log(`📧 [1-Hour Reminder Email Sent] To: ${patientEmail} | Booking ID: ${bookingId}`);
    } catch (err) {
      console.error('❌ [Error sending 1-hour reminder email]:', err.message);
    }
  }

  if (patientMobile) {
    const body = `AI Hospital Reminder: Hi ${patientName}, your consultation with ${doctorName} (Doctor ID: ${doctorId}, Booking ID: ${bookingId}) at ${hospital} is starting in ~1 hour (${appointment.timeSlot}). Please be ready!`;
    sendSMS({ to: patientMobile, body }).catch(err => console.error('Error in sendSMS:', err));
  }
}

/**
 * 3. Appointment Status Update (Confirmed, Rejected, Rescheduled)
 */
async function sendAppointmentStatusUpdate({ appointment, patientUser, doctorUser, status, reason = '' }) {
  const doctorName = doctorUser ? doctorUser.name : 'Doctor';
  const patientEmail = patientUser ? patientUser.email : null;
  const patientName = patientUser ? patientUser.name : 'Patient';
  const bookingId = appointment.bookingId || ('BK-' + (appointment._id ? appointment._id.toString().slice(-5).toUpperCase() : Math.floor(10000 + Math.random() * 90000)));

  let title = `Appointment ${status}`;
  let message = `Your appointment with ${doctorName} (Booking ID: ${bookingId}) for ${appointment.appointmentDate} is now ${status}.`;

  if (status === 'Rescheduled') {
    message = `Your appointment with ${doctorName} (Booking ID: ${bookingId}) has been rescheduled to ${appointment.appointmentDate} at ${appointment.timeSlot}.`;
  }

  if (patientUser && patientUser._id) {
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
        <p style="background: #f8fafc; padding: 10px; border-left: 3px solid #0284c7;"><strong>Booking ID:</strong> <span style="font-family:monospace;color:#0284c7;font-weight:bold;">${bookingId}</span></p>
        <p>${message}</p>
        ${reason ? `<p><strong>Note:</strong> ${reason}</p>` : ''}
        <p>Log in to your <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/patient/dashboard.html">Patient Portal</a> to view details.</p>
      </div>
    `;

    sendEmail({
      to: patientEmail,
      subject: `Appointment Status Update [${bookingId}]: ${status} - AI Smart Hospital`,
      html
    }).catch(err => console.error('Error in sendEmail:', err));
  }
}

/**
 * 4. Digital Prescription Ready Notification
 */
async function sendPrescriptionNotification({ prescription, patientUser, doctorUser }) {
  const doctorName = doctorUser ? doctorUser.name : 'Your Doctor';
  const patientEmail = patientUser ? patientUser.email : null;
  const patientName = patientUser ? patientUser.name : 'Patient';

  if (patientUser && patientUser._id) {
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
        <p>Dear ${patientName},</p>
        <p>Your certified digital prescription from <strong>${doctorName}</strong> is now available.</p>
        <p>You can view, save, and print your official prescription directly from your <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/patient/dashboard.html">Patient Dashboard</a>.</p>
      </div>
    `;

    sendEmail({
      to: patientEmail,
      subject: `Your Digital Prescription from ${doctorName} is Ready - AI Smart Hospital`,
      html
    }).catch(err => console.error('Error in sendEmail:', err));
  }
}

/**
 * 5. Medicine Scheduled Reminder Alert with Patient Name & Mobile
 */
async function sendMedicineReminderNotification({ patientUser, medicine }) {
  const targetPatientName = medicine.patientName || (patientUser ? patientUser.name : 'Patient');
  const targetMobile = medicine.mobileNumber || (patientUser ? patientUser.mobile : null);
  const patientEmail = (patientUser && patientUser.email) ? patientUser.email : null;

  if (patientUser && patientUser._id) {
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

    sendEmail({
      to: patientEmail,
      subject: `💊 Medicine Reminder for ${targetPatientName}: ${medicine.medicineName}`,
      html
    }).catch(err => console.error('Error in sendEmail:', err));
  }

  if (targetMobile) {
    const body = `AI Hospital Alert for ${targetPatientName}: Time to take ${medicine.medicineName} (${medicine.dosage || ''}). Instructions: ${medicine.instructions || 'As prescribed'}.`;
    sendSMS({ to: targetMobile, body }).catch(err => console.error('Error in sendSMS:', err));
  }
}

/**
 * 6. Password Reset 6-Digit OTP Email Dispatch
 */
async function sendPasswordResetEmail({ user, otp }) {
  const userName = user ? (user.name || 'User') : 'User';
  const email = user ? user.email : null;

  if (!email) return { success: false, error: 'No email provided' };

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 580px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff;">
      <div style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding: 24px; text-align: center; color: #ffffff;">
        <h2 style="margin: 0; font-size: 22px; font-weight: bold;">AI Smart Hospital</h2>
        <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">Secure Account Password Recovery</p>
      </div>
      <div style="padding: 28px; color: #334155; line-height: 1.6;">
        <p style="font-size: 15px;">Hello <strong>${userName}</strong>,</p>
        <p style="font-size: 14px; color: #475569;">We received a request to reset the password for your AI Smart Hospital account. Use the following 6-digit verification code to complete the process:</p>
        
        <div style="background: #f0f9ff; border: 2px dashed #0284c7; border-radius: 10px; padding: 20px; text-align: center; margin: 24px 0;">
          <div style="font-size: 13px; color: #0369a1; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">Your 6-Digit Verification Code</div>
          <div style="font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #0284c7; font-family: monospace;">${otp}</div>
          <div style="font-size: 12px; color: #64748b; margin-top: 8px;">⏳ Valid for <strong>10 minutes</strong> only</div>
        </div>

        <p style="font-size: 13px; color: #64748b; margin-bottom: 4px;"><strong>Security Notice:</strong></p>
        <ul style="font-size: 13px; color: #64748b; padding-left: 20px; margin-top: 4px;">
          <li>Never share this verification code with anyone. Hospital staff will never ask for your code.</li>
          <li>If you did not request a password reset, you can safely ignore this email — your account remains completely secure.</li>
        </ul>

        <div style="border-top: 1px solid #e2e8f0; margin-top: 24px; padding-top: 16px; font-size: 12px; color: #94a3b8; text-align: center;">
          AI Smart Hospital Management System • Intelligent Cloud Healthcare
        </div>
      </div>
    </div>
  `;

  return await sendEmail({
    to: email,
    subject: `🔒 ${otp} is your AI Smart Hospital Password Reset Code`,
    html,
    text: `Your password reset code is ${otp}. Valid for 10 minutes. If you did not request this, please ignore.`
  });
}

/**
 * 7. Password Reset Success Confirmation Email
 */
async function sendPasswordResetSuccessEmail({ user }) {
  const userName = user ? (user.name || 'User') : 'User';
  const email = user ? user.email : null;

  if (!email) return;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 550px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;">
      <h3 style="color: #16a34a; margin-top: 0;">✅ Password Successfully Reset</h3>
      <p>Hello <strong>${userName}</strong>,</p>
      <p>Your password for your AI Smart Hospital account (<code>${email}</code>) was successfully updated.</p>
      <p>You can now sign in using your new password at the <a href="${process.env.FRONTEND_URL || 'https://ai-smart-hospital-management-system.vercel.app'}/pages/login.html" style="color: #0284c7; font-weight: bold;">Sign In Portal</a>.</p>
      <p style="font-size: 12px; color: #64748b; margin-top: 20px;">If you did not perform this change, please contact hospital support immediately.</p>
    </div>
  `;

  sendEmail({
    to: email,
    subject: `✅ Security Alert: Password Changed Successfully - AI Smart Hospital`,
    html
  }).catch(err => console.error('Error in sendEmail:', err));
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
  sendMedicineReminderNotification,
  sendPasswordResetEmail,
  sendPasswordResetSuccessEmail
};
