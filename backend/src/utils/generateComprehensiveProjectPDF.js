const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function generateProjectReport() {
  const outputPath = path.join(__dirname, '../../../AI_SMART_HOSPITAL_COMPREHENSIVE_PROJECT_REPORT.pdf');
  console.log(`📄 Generating Comprehensive Project PDF at: ${outputPath}`);

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 40, bottom: 40, left: 45, right: 45 },
    bufferPages: true
  });

  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const colors = {
    primary: '#0284c7',    // Sky blue 600
    primaryDark: '#0369a1',// Sky blue 700
    dark: '#0f172a',       // Slate 900
    text: '#334155',       // Slate 700
    lightBg: '#f8fafc',    // Slate 50
    cardBorder: '#e2e8f0', // Slate 200
    accent: '#d97706',     // Amber 600
    success: '#16a34a'     // Green 600
  };

  // Helper: Draw Section Header
  function drawSectionHeader(title, icon = '🔹') {
    doc.moveDown(0.8);
    const y = doc.y;
    doc.rect(45, y, 505, 24).fill(colors.primaryDark);
    doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text(`${icon}  ${title.toUpperCase()}`, 55, y + 6);
    doc.fillColor(colors.text).font('Helvetica').fontSize(9.5);
    doc.moveDown(0.8);
  }

  // Helper: Draw Callout Box
  function drawCalloutBox(content, title = null, bgColor = '#f0f9ff', borderColor = '#0284c7') {
    const startY = doc.y;
    doc.save();
    doc.fontSize(9).font('Helvetica');
    const textHeight = doc.heightOfString(content, { width: 475 });
    const boxHeight = textHeight + (title ? 28 : 16);

    doc.rect(45, startY, 505, boxHeight).fillAndStroke(bgColor, borderColor);
    
    if (title) {
      doc.fillColor(borderColor).font('Helvetica-Bold').fontSize(9.5).text(title, 55, startY + 8);
      doc.fillColor(colors.text).font('Helvetica').fontSize(9).text(content, 55, startY + 22, { width: 485, lineGap: 3 });
    } else {
      doc.fillColor(colors.text).font('Helvetica').fontSize(9).text(content, 55, startY + 8, { width: 485, lineGap: 3 });
    }
    doc.restore();
    doc.y = startY + boxHeight + 10;
  }

  // Helper: Add Bullet Point
  function addBulletPoint(boldPrefix, text) {
    const startY = doc.y;
    doc.circle(52, startY + 5, 2.5).fill(colors.primary);
    doc.fillColor(colors.dark).font('Helvetica-Bold').fontSize(9).text(boldPrefix + ' ', 60, startY, { continued: true });
    doc.fillColor(colors.text).font('Helvetica').text(text, { lineGap: 2.5 });
    doc.moveDown(0.3);
  }

  // =========================================================================
  // PAGE 1: TITLE & COVER HEADER
  // =========================================================================
  
  // Top Banner
  doc.rect(45, 40, 505, 80).fill(colors.dark);
  doc.fillColor('#ffffff').fontSize(18).font('Helvetica-Bold').text('AI SMART HOSPITAL MANAGEMENT SYSTEM', 55, 55, { align: 'center' });
  doc.fillColor('#38bdf8').fontSize(9.5).font('Helvetica-Bold').text('Full-Stack Cloud Healthcare Platform | Clinical AI Triage | Multi-Channel Automated Reminders', 55, 80, { align: 'center' });
  doc.fillColor('#94a3b8').fontSize(8).font('Helvetica').text('Production Architecture • Node.js • Express • MongoDB Atlas • Bootstrap 5.3 • Vercel • Render • Brevo API', 55, 96, { align: 'center' });

  doc.y = 135;

  // 1. ABSTRACT
  drawSectionHeader('1. Project Abstract', '📄');
  const abstractText = "The AI Smart Hospital Management System is a cloud-native, full-stack healthcare platform engineered to modernize clinical workflows, eliminate appointment double-booking, and maximize patient engagement through intelligent automation. Built with Node.js, Express, MongoDB Atlas, HTML5, CSS3, Vanilla JS, and Bootstrap 5.3, and deployed across Vercel and Render, the system integrates ten key modules including Role-Based Access Control (Patient, Doctor, Admin) with JWT authentication, a District-Wise Specialist Directory, and a Strict Collision-Free Appointment Scheduler. It features an Automated Multi-Channel Notification Engine (Brevo HTTPS, Nodemailer, Twilio) providing instant booking confirmations and a 24/7 Background Cron Service that dispatches automated 1-Hour Pre-Appointment Reminders. To ensure medication adherence, the platform incorporates a Personalized Medicine Reminder Module equipped with patient-specific routing, native browser push notifications, Web Audio chimes, and Text-to-Speech voice alarms. Completing the clinical ecosystem are Certified Digital Prescriptions (E-Rx), Electronic Health Records (EHR) with physiological vitals tracking, an AI Symptom Triage & Clinical Assistant for preliminary specialty guidance, and an Administrative Analytics Dashboard with broadcast messaging. The resulting architecture delivers sub-second transactional speed, zero scheduling collisions, and seamless worldwide healthcare accessibility.";
  drawCalloutBox(abstractText, 'EXECUTIVE ABSTRACT (Single Paragraph)', '#f0f9ff', '#0284c7');

  // 2. PROBLEM STATEMENT
  drawSectionHeader('2. Problem Statement', '📌');
  doc.fillColor(colors.text).fontSize(9).font('Helvetica').text(
    'Traditional healthcare administration and legacy hospital management systems rely heavily on manual, paper-intensive, and disconnected workflows. In these conventional environments:',
    { lineGap: 3 }
  );
  doc.moveDown(0.4);

  addBulletPoint('Patient Inefficiencies:', 'Patients face long physical hospital queues, lack transparent visibility into doctor availability across districts, experience appointment scheduling conflicts (double-booking), and struggle to adhere to medication schedules due to the complete absence of timely reminders.');
  addBulletPoint('Physician Workload Bottlenecks:', 'Physicians are burdened with illegible handwritten prescriptions, fragmented patient medical histories, and chaotic daily consultation schedules without real-time status controls.');
  addBulletPoint('Administrative Blindspots:', 'Hospital Administrators lack centralized real-time analytics to monitor institutional load, verify practitioner credentials, and broadcast urgent public health advisories.');
  addBulletPoint('High Pre-Consultation Dropouts:', 'A major percentage of outpatient appointments are missed simply because patients forget their consultation time without automated, timely countdown reminders.');

  doc.moveDown(0.4);
  doc.text(
    'There is a critical need for a unified, cloud-native, and intelligent healthcare platform that automates appointment scheduling with collision prevention, provides multi-channel notifications, empowers patients with AI symptom triage and audible medicine alarms, and standardizes electronic medical records and digital prescriptions.',
    { lineGap: 3 }
  );

  // =========================================================================
  // PAGE 2: LIMITATIONS IN EXISTING SYSTEMS & PROPOSED SYSTEM
  // =========================================================================
  doc.addPage();

  // 3. LIMITATIONS IN EXISTING SYSTEMS
  drawSectionHeader('3. Limitations of Existing / Legacy Systems', '⚠️');
  addBulletPoint('1. Manual & Collision-Prone Scheduling:', 'Appointment booking relies on manual phone calls or registers, frequently causing double-booking collisions for the same doctor at the same time.');
  addBulletPoint('2. Absence of Pre-Appointment Reminders:', 'No automated reminder is sent prior to the consultation, resulting in a high patient "no-show" rate (20%–30% missed appointments).');
  addBulletPoint('3. Paper-Based Handwritten Prescriptions:', 'Vulnerable to physical damage, loss, illegible physician handwriting, and potential pharmacy medication dispensing errors.');
  addBulletPoint('4. Poor Medication Adherence:', 'Patients and elderly family members frequently forget daily dosage times due to the complete lack of automated reminder alarms or schedules.');
  addBulletPoint('5. Unguided Symptom Confusion:', 'Patients lack preliminary triage to evaluate symptoms, often leading them to book the wrong medical specialist.');
  addBulletPoint('6. Fragmented Medical Histories:', 'Patient vitals (Blood Pressure, Heart Rate, SpO2) and past clinical consultation records are kept in loose paper files that are easily misplaced between hospital visits.');
  addBulletPoint('7. No Remote Accessibility:', 'Legacy desktop software cannot be accessed by patients remotely from their smartphones or home browsers.');
  addBulletPoint('8. Lack of Instant Communication:', 'Patients receive no automated email or SMS confirmations upon booking, leading to uncertainty and long waiting times at the clinic.');
  addBulletPoint('9. Single Point of Failure:', 'On-premise local hospital computers lack automated cloud backups, risking permanent loss of medical records during hardware crashes.');
  addBulletPoint('10. Zero Centralized Administrative Analytics:', 'Hospital management has no unified real-time dashboard to monitor patient load, doctor availability, or broadcast institutional health notices.');

  // 4. PROPOSED SYSTEM
  drawSectionHeader('4. Proposed System & Innovations', '🚀');
  doc.fillColor(colors.text).fontSize(9).font('Helvetica').text(
    'The AI Smart Hospital Management System is a production-ready, cloud-native 3-tier web platform engineered using Node.js, Express.js, MongoDB Atlas (Mongoose), HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.3, deployed globally on Vercel and Render.',
    { lineGap: 3 }
  );
  doc.moveDown(0.4);

  addBulletPoint('Intelligent Collision-Free Scheduling Engine:', 'Enforces atomic database validation and compound indexing (doctor + date + timeSlot) alongside past-date restrictions to guarantee 100% zero double-booking.');
  addBulletPoint('Automated Worldwide Multi-Channel Notification Subsystem:', 'Integrates Brevo HTTPS API & Nodemailer to dispatch instantaneous, official booking confirmation emails to any patient worldwide within 1 second, alongside Twilio SMS and persistent MongoDB In-App Notification Bell drawers.');
  addBulletPoint('24/7 Cloud Background Cron Service (node-cron):', 'Autonomous cloud worker continuously scans upcoming appointments every 5 minutes and automatically dispatches a 1-Hour Pre-Appointment Reminder Email & SMS (~60 minutes before the visit) even when the user\'s phone or laptop is closed.');
  addBulletPoint('Multi-Sensory Patient Medicine Reminder & Alarm Engine:', 'Allows patients to configure scheduled doses with explicit Patient Name and Mobile Number routing for family members. Triggers Native Browser / OS Push Notifications, Web Audio API Chimes, and Web Speech API Text-to-Speech Voice Alarms.');
  addBulletPoint('Certified Digital Prescription (E-Rx) & Printable PDFs:', 'Physicians build standardized electronic prescriptions with dosage, frequency, and dietary guidelines, digitally signed and instantly viewable/printable by patients.');
  addBulletPoint('Longitudinal Electronic Health Records (EHR):', 'Secure digital repository tracking physiological vitals (Blood Pressure, Heart Rate, Body Temperature, SpO2), clinical diagnoses, and follow-up schedules.');
  addBulletPoint('Clinical AI Health Assistant & Symptom Triage:', 'Real-time clinical evaluation tool that analyzes patient symptoms, categorizes urgency levels (Emergency, High, Normal), provides home care advice, and automatically filters the Doctor Directory by the recommended medical specialty.');
  addBulletPoint('Executive Administrative Governance:', 'Centralized institutional oversight tracking registered users, active consultations, doctor verifications, and system-wide broadcast emergency alerts.');

  // =========================================================================
  // PAGE 3: DETAILED MODULES USED
  // =========================================================================
  doc.addPage();

  drawSectionHeader('5. In-Depth Architectural Modules Used in Project', '📦');

  // Module A: Frontend
  doc.fillColor(colors.primaryDark).font('Helvetica-Bold').fontSize(9.5).text('A. FRONTEND PRESENTATION LAYER (HTML5, CSS3, Vanilla JS, Bootstrap 5.3)');
  doc.fillColor(colors.text).font('Helvetica').fontSize(9).text(
    'The client-side interface delivers a responsive, single-page application experience with zero heavy framework bloat:',
    { lineGap: 2.5 }
  );
  addBulletPoint('Modern Design Tokens & Glassmorphism:', 'Custom design system with curated primary gradients (#0284c7 to #0369a1), soft card elevation shadows, and status-coded chips in frontend/css/style.css.');
  addBulletPoint('Client REST API Layer (api.js & auth.js):', 'Centralized Fetch API wrapper handling JWT token storage, automatic bearer header attachment, error handling, and toast alerts.');
  addBulletPoint('Native Browser Web APIs:', 'Utilizes Web Notifications API for desktop banners, Web Audio API for synthetic audio chime alarms, and Web Speech API for voice dosage announcements.');
  doc.moveDown(0.6);

  // Module B: Backend API & Cron Services
  doc.fillColor(colors.primaryDark).font('Helvetica-Bold').fontSize(9.5).text('B. BACKEND API & 24/7 BACKGROUND CRON SERVICE (Node.js, Express, node-cron)');
  doc.fillColor(colors.text).font('Helvetica').fontSize(9).text(
    'The server layer manages business logic, authorization, collision checking, and automated cron workers:',
    { lineGap: 2.5 }
  );
  addBulletPoint('RESTful Controller Architecture:', 'Dedicated controllers for Authentication, Patients, Doctors, Appointments, Prescriptions, Medical Records, AI Triage, and Admin Governance.');
  addBulletPoint('JWT & Bcrypt Security Middleware:', 'Protects routes with stateless token validation, extracting req.user and enforcing role boundaries (Patient, Doctor, Admin).');
  addBulletPoint('Automated Cloud Cron Jobs (cronService.js):', 'Dual background schedulers: 1-Hour pre-appointment scanner running every 5 minutes (*/5 * * * *) and medicine alarm dispatcher running every 1 minute (* * * * *).');
  doc.moveDown(0.6);

  // Module C: Database Layer
  doc.fillColor(colors.primaryDark).font('Helvetica-Bold').fontSize(9.5).text('C. DATABASE & DATA MODELING LAYER (MongoDB Atlas & Mongoose)');
  doc.fillColor(colors.text).font('Helvetica').fontSize(9).text(
    'Cloud-hosted NoSQL cluster managing 7 structured collections with strict schema validation and relationships:',
    { lineGap: 2.5 }
  );
  addBulletPoint('Core Collections:', 'Users, Patients, Doctors, Appointments, MedicalRecords, Prescriptions, and Notifications.');
  addBulletPoint('Compound Indexing for Collision Protection:', 'Compound unique indexes ensure that no two appointments can exist for the same doctor at the same date and time slot.');
  doc.moveDown(0.6);

  // Module D: Dashboards
  doc.fillColor(colors.primaryDark).font('Helvetica-Bold').fontSize(9.5).text('D. USER ROLES & SPECIALIZED DASHBOARDS');
  addBulletPoint('1. Patient Dashboard (patient/dashboard.html):', 'Specialist discovery across 38 TN districts, booking modal with live slot collision prevention, digital E-Rx viewer/printer, clinical consultation records, medicine alarms, and AI triage.');
  addBulletPoint('2. Doctor Dashboard (doctor/dashboard.html):', 'Consultation queue, 1-click status actions (Accept, Reject, Reschedule, Complete), clinical notes & vitals recorder (BP, HR, Temp, SpO2), and digital prescription creator.');
  addBulletPoint('3. Admin Dashboard (admin/dashboard.html):', 'Hospital oversight metrics, doctor credential verification, patient directory, and emergency institutional broadcast dispatcher.');
  doc.moveDown(0.6);

  // Module E: Cloud Communication & Environment
  doc.fillColor(colors.primaryDark).font('Helvetica-Bold').fontSize(9.5).text('E. CLOUD COMMUNICATION & ENVIRONMENT ARCHITECTURE');
  addBulletPoint('Brevo Universal HTTPS API:', 'Delivers instant booking confirmations and 1-hour countdown reminders to ANY email address worldwide over secure Port 443.');
  addBulletPoint('Twilio SMS Client:', 'Direct cellular SMS gateway for patient mobile telephone alerts.');
  addBulletPoint('Secure Environment Architecture (.env):', 'Configured with PORT, NODE_ENV, MONGODB_URI, JWT_SECRET, JWT_EXPIRE, BREVO_API_KEY, RESEND_API_KEY, EMAIL_USER, EMAIL_PASS, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER.');
  addBulletPoint('Live Deployment Topology:', 'Frontend hosted on Vercel Global Edge CDN (https://ai-smart-hospital-management-system.vercel.app), Backend API and background cron jobs hosted on Render Cloud Compute (https://ai-smart-hospital-backend-w26k.onrender.com).');

  // =========================================================================
  // PAGE NUMBERS & FOOTERS
  // =========================================================================
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    doc.rect(45, 800, 505, 0.5).fill(colors.cardBorder);
    doc.fillColor('#94a3b8').fontSize(7.5).font('Helvetica').text(
      'AI Smart Hospital Management System | Production Engineering Project Report',
      45, 808, { align: 'left' }
    );
    doc.text(
      `Page ${i + 1} of ${range.count}`,
      45, 808, { align: 'right' }
    );
  }

  doc.end();
  writeStream.on('finish', () => {
    console.log(`✅ [PDF Generation Success] Comprehensive report created at: ${outputPath}`);
  });
}

generateProjectReport();
