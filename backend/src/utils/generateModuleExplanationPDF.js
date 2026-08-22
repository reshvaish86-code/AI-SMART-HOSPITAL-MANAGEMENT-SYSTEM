const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../../../AI_SMART_HOSPITAL_MODULES_EXPLANATION.pdf');
const doc = new PDFDocument({ margin: 40, size: 'A4', bufferPages: true });

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Color Palette
const PRIMARY = '#0284c7';
const PRIMARY_DARK = '#0369a1';
const DARK = '#0f172a';
const SECONDARY = '#334155';
const MUTED = '#64748b';
const ACCENT = '#d97706';
const LIGHT_BOX = '#f8fafc';
const BORDER_COLOR = '#cbd5e1';

function drawHeader(title, subtitle) {
  doc.rect(40, 40, 515, 65).fill(DARK);
  doc.fillColor('#ffffff').fontSize(16).font('Helvetica-Bold')
     .text(title, 55, 52);
  doc.fillColor('#38bdf8').fontSize(9.5).font('Helvetica')
     .text(subtitle, 55, 76);
  doc.y = 120;
}

function drawModuleHeader(moduleNum, moduleTitle, icon = '🔷') {
  doc.moveDown(0.6);
  doc.rect(40, doc.y, 515, 24).fill('#e0f2fe');
  doc.fillColor(PRIMARY_DARK).fontSize(11).font('Helvetica-Bold')
     .text(`${icon} MODULE ${moduleNum}: ${moduleTitle.toUpperCase()}`, 48, doc.y - 18);
  doc.moveDown(0.4);
}

function drawSubSection(title) {
  doc.moveDown(0.2);
  doc.fillColor(DARK).fontSize(9.5).font('Helvetica-Bold')
     .text(title);
  doc.moveDown(0.15);
}

function drawText(text) {
  doc.fillColor(SECONDARY).fontSize(8.5).font('Helvetica')
     .text(text, { align: 'justify', lineGap: 2 });
  doc.moveDown(0.25);
}

function drawBullet(title, desc) {
  doc.fillColor(DARK).fontSize(8.5).font('Helvetica-Bold')
     .text(` • ${title}: `, { continued: true })
     .fillColor(SECONDARY).font('Helvetica')
     .text(desc, { lineGap: 2 });
  doc.moveDown(0.15);
}

function drawBox(contentCallback, fill = LIGHT_BOX, stroke = BORDER_COLOR) {
  const startY = doc.y;
  doc.moveDown(0.2);
  contentCallback();
  const endY = doc.y;
  const height = endY - startY + 4;
  doc.rect(40, startY - 2, 515, height).fillAndStroke(fill, stroke);
  doc.y = startY;
  contentCallback();
  doc.moveDown(0.4);
}

// ================= PAGE 1 =================
drawHeader(
  'AI SMART HOSPITAL MANAGEMENT SYSTEM',
  'Comprehensive Module-by-Module Technical & Functional Specification'
);

drawText(
  'This official specification document provides an exhaustive explanation of all core architectural modules engineered within the AI Smart Hospital Management System. It outlines data models, functional responsibilities, security mechanisms, API interactions, and business rules across the full-stack ecosystem.'
);

// MODULE 1
drawModuleHeader(1, 'Authentication, Role-Based Access Control & Security', '🔒');
drawText(
  'The Authentication & Security module manages identity verification, session persistence, and role-based permissions across three system roles: Patient, Doctor, and Administrator.'
);
drawBullet('Password Encryption', 'Utilizes bcryptjs with 10 salt rounds to hash user passwords prior to database persistence. Plaintext passwords are never stored or logged.');
drawBullet('Stateless JWT Authorization', 'Generates signed JSON Web Tokens containing user IDs and role claims, passed in Authorization Bearer headers for protected REST endpoints.');
drawBullet('RBAC Middleware Layer', 'Strict route guards (authorize("patient"), authorize("doctor"), authorize("admin")) verify access rights before controller execution.');
drawBullet('Account State Enforcer', 'Instantly checks the isActive boolean flag during authentication and subsequent requests to prevent deactivated accounts from accessing services.');

// MODULE 2
drawModuleHeader(2, 'Patient Portal & Profile Management', '👤');
drawText(
  'Provides an intuitive, self-service dashboard for patients to manage their demographic profile, emergency contacts, medical records, digital prescriptions, and daily medicine reminders.'
);
drawBullet('Patient Demographics', 'Stores complete personal details including Age, Gender, Blood Group, Residential Address, Tamil Nadu District, and Known Allergies.');
drawBullet('Personal Medical Vault', 'Gives patients instant access to historical clinical consultation notes, recorded vital signs, and diagnostic summaries.');
drawBullet('Medicine Reminder Subsystem', 'Allows patients to configure automated daily medicine reminders with dosage, timing (e.g. 08:00 AM), frequency, and intake instructions (e.g. After food).');

// MODULE 3
drawModuleHeader(3, 'Doctor Discovery & Tamil Nadu District Lookup', '🩺');
drawText(
  'A high-performance search and filtering engine designed to connect patients with verified medical consultants across Tamil Nadu based on specialty, geography, and fee criteria.'
);
drawBullet('14 Medical Specialties Supported', 'General Physician, Cardiologist, Dermatologist, Neurologist, Pediatrician, Orthopedic, Gynecologist, ENT Specialist, Ophthalmologist, Psychiatrist, Dentist, Pulmonologist, Gastroenterologist, Urologist.');
drawBullet('District-Level Filtering', 'Indexes doctors across all 38 districts of Tamil Nadu (Chennai, Coimbatore, Madurai, Salem, Trichy, Vellore, Erode, Tirunelveli, etc.).');
drawBullet('Doctor Profile Transparency', 'Displays verified qualifications (MBBS, MD, MS, DM), years of experience, clinic/hospital affiliations, consultation fees, and patient ratings.');

// ================= PAGE 2 =================
doc.addPage();

// MODULE 4
drawModuleHeader(4, 'Smart Appointment Scheduling & Collision Prevention', '📅');
drawText(
  'An atomic, zero-collision scheduling engine engineered to strictly eliminate double-booking and past-date appointments.'
);
drawBullet('Compound Collision Index', 'Database-level indexing ({ doctor: 1, appointmentDate: 1, timeSlot: 1 }) combined with pre-booking validation ensures no two active appointments can share the same doctor, date, and slot.');
drawBullet('Past-Date Protection', 'Validates requested booking dates against real-time UTC/IST calendars, preventing accidental reservations for expired dates.');
drawBullet('Real-Time Slot Availability Visualizer', 'Dynamic API endpoint (/api/appointments/booked-slots) queries active bookings and dynamically marks occupied slots as disabled on the frontend.');
drawBullet('Full Lifecycle State Machine', 'Tracks 6 appointment lifecycle stages: Pending -> Confirmed -> Rejected -> Rescheduled -> Completed -> Cancelled, with audit logging.');

// MODULE 5
drawModuleHeader(5, 'Clinical Consultation & Diagnostic Records Vault', '📋');
drawText(
  'Enables doctors to document detailed clinical evaluations, vital sign telemetry, and diagnosis during patient visits.'
);
drawBullet('Patient Vital Signs Capture', 'Records Blood Pressure (BP), Heart Rate (Pulse), Body Temperature, SpO2 Oxygen Saturation, Weight, and Height.');
drawBullet('Diagnostic Documentation', 'Stores definitive diagnosis, presenting symptoms, clinical auscultation findings, and recommended diagnostic lab investigations.');
drawBullet('Follow-Up Schedule Tracking', 'Logs recommended follow-up dates and clinical instructions accessible to both patient and consulting physician.');

// MODULE 6
drawModuleHeader(6, 'Structured Digital Prescription Generator (E-Rx)', '💊');
drawText(
  'A certified electronic prescription module that eliminates handwritten prescription ambiguity and dispensing errors.'
);
drawBullet('Dynamic Medication Builder', 'Structured medication items with Medicine Name, Dosage (e.g. 500mg), Frequency (1-0-1, Morning, Night), Duration (e.g. 5 Days), and Instructions (After food).');
drawBullet('Dietary & Lifestyle Advice', 'Stores customized dietary restrictions and lifestyle recommendations.');
drawBullet('Digital Signing & Printable Layout', 'Generates official, tamper-evident digital prescription views formatted with hospital branding, doctor credentials, and print stylesheets.');

// MODULE 7
drawModuleHeader(7, 'AI Health Assistant & Clinical Symptom Triage', '🤖');
drawText(
  'A clinical decision-support engine providing instant symptom triage, urgency scoring, home care guidance, and specialty recommendation.'
);
drawBullet('Deterministic Clinical Knowledge Graph', 'Comprehensive internal rule engine mapping symptom keywords across all 14 medical disciplines for 100% reliable offline operation.');
drawBullet('Urgency Level Categorization', 'Calculates severity score: Emergency (immediate 108/112 alert), High, Moderate, or Routine.');
drawBullet('LLM Provider Architecture', 'Modular adapter architecture supporting external LLM APIs (Gemini / OpenAI) via environment secrets.');
drawBullet('Prominent Safety Disclaimers', 'Enforces strict medical disclaimers on every output, identifying itself as an informational support tool and not a replacement for clinical diagnosis.');

// ================= PAGE 3 =================
doc.addPage();

// MODULE 8
drawModuleHeader(8, 'In-App Notification Stream & Alert Subsystem', '🔔');
drawText(
  'A bidirectional messaging pipeline that keeps patients and clinicians updated on critical schedule and clinical events.'
);
drawBullet('Automated Booking Alerts', 'Dispatches instant notifications to doctors upon new booking requests and alerts patients upon confirmation, rejection, or rescheduling.');
drawBullet('Prescription Readiness Alerts', 'Notifies patients immediately when a doctor finalizes and digitally signs a new E-Prescription.');
drawBullet('Unread Notification Counters', 'Real-time badge counters and interactive notification drawers with 1-click "Mark All as Read" capability.');

// MODULE 9
drawModuleHeader(9, 'Admin Hospital Governance & System Analytics', '👑');
drawText(
  'Provides executive hospital administrators with comprehensive supervisory tools, operational analytics, and safety controls.'
);
drawBullet('Real-Time KPI Metrics', 'Live counter cards tracking Total Patients, Registered Doctors, Total Appointments, Completed Consultations, Pending Requests, and E-Prescriptions.');
drawBullet('User Directory & Access Toggle', 'Comprehensive searchable directory of all patients and doctors with instant 1-click Activate / Deactivate account controls.');
drawBullet('Master Appointment Oversight', 'Hospital-wide appointment monitoring with filters by date, status, doctor, and patient.');
drawBullet('Hospital-Wide Broadcast Engine', 'Enables administrators to dispatch broadcast notifications to all registered users, all patients, or all doctors for emergency health camp alerts.');

// MODULE 10
drawModuleHeader(10, 'Technical Stack, Database Schemas & Infrastructure', '⚙️');
drawText(
  'Modern, decoupled full-stack architecture engineered for cloud scalability, resilience, and fast page load speeds.'
);
drawBullet('Backend Layer', 'Node.js runtime with Express.js REST API, Morgan request logging, CORS, and centralized error handling middleware.');
drawBullet('Database Architecture', 'MongoDB Atlas cloud database with 7 normalized Mongoose models (User, Patient, Doctor, Appointment, MedicalRecord, Prescription, Notification).');
drawBullet('Frontend Architecture', 'Vanilla CSS3 design system with Inter & Outfit typography, Bootstrap 5.3 grid, Font Awesome 6 icons, and asynchronous Fetch API client.');
drawBullet('Production Deployment', 'Backend configured for Render Web Services (Node.js engine) and Frontend configured for Vercel Static Hosting with clean URL rewrites.');

// Footer Badge on Final Page
doc.moveDown(1.5);
doc.rect(40, doc.y, 515, 28).fill(DARK);
doc.fillColor('#38bdf8').fontSize(9).font('Helvetica-Bold')
   .text('AI Smart Hospital Management System — Certified Comprehensive Module Documentation', 50, doc.y - 19, { align: 'center' });

doc.end();

stream.on('finish', () => {
  console.log(`✅ [PDF Generator] Detailed Module Explanation PDF created at: ${outputPath}`);
});
