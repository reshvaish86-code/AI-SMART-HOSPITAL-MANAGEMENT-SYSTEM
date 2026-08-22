const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, '../../../AI_SMART_HOSPITAL_PROJECT_REPORT.pdf');
const doc = new PDFDocument({ margin: 45, size: 'A4' });

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Styling Colors
const PRIMARY = '#0284c7';
const DARK = '#0f172a';
const SECONDARY = '#475569';
const ACCENT = '#d97706';
const LIGHT_BG = '#f8fafc';

function drawHeader() {
  doc.rect(45, 45, 505, 75).fill(DARK);
  doc.fillColor('#ffffff').fontSize(20).font('Helvetica-Bold')
     .text('AI SMART HOSPITAL MANAGEMENT SYSTEM', 60, 60);
  doc.fillColor('#38bdf8').fontSize(11).font('Helvetica')
     .text('Comprehensive Technical Architecture, System Analysis & Implementation Report', 60, 88);
  doc.moveDown(3);
}

function drawSectionHeading(title, icon = '•') {
  doc.moveDown(0.8);
  doc.fillColor(PRIMARY).fontSize(14).font('Helvetica-Bold')
     .text(`${icon} ${title}`);
  doc.strokeColor(PRIMARY).lineWidth(1.5)
     .moveTo(45, doc.y + 2).lineTo(550, doc.y + 2).stroke();
  doc.moveDown(0.6);
}

function drawSubHeading(title) {
  doc.moveDown(0.4);
  doc.fillColor(DARK).fontSize(11).font('Helvetica-Bold')
     .text(title);
  doc.moveDown(0.2);
}

function drawBodyText(text) {
  doc.fillColor(SECONDARY).fontSize(9.5).font('Helvetica')
     .text(text, { align: 'justify', lineGap: 3 });
  doc.moveDown(0.4);
}

function drawBullet(title, desc) {
  doc.fillColor(DARK).fontSize(9.5).font('Helvetica-Bold')
     .text(`  ▪ ${title}: `, { continued: true })
     .fillColor(SECONDARY).font('Helvetica')
     .text(desc, { lineGap: 2 });
  doc.moveDown(0.25);
}

// ================= PAGE 1 =================
drawHeader();

drawSectionHeading('1. Executive Project Overview');
drawBodyText(
  'The "AI Smart Hospital Management System" is an enterprise-grade, full-stack healthcare ecosystem engineered to digitize, streamline, and intelligently automate medical workflows. Built using Node.js, Express.js, MongoDB Atlas, Mongoose, HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5.3, the platform unifies three distinct stakeholder interfaces—Patients, Doctors, and Administrators—into a cohesive, secure, and responsive healthcare hub.'
);
drawBodyText(
  'The platform introduces next-generation features including real-time AI Clinical Symptom Triage, district-level medical specialist lookup (focused on Tamil Nadu districts such as Chennai, Coimbatore, Madurai, and Salem across 14 specialties), strict slot collision prevention algorithms, certified digital prescription generation (E-Rx), and automated medicine reminder queues.'
);

drawSectionHeading('2. The Existing Traditional Healthcare System');
drawBodyText(
  'Traditional healthcare delivery and legacy hospital management systems rely heavily on manual in-person interactions, paper-based slips, fragmented spreadsheet registries, and siloed software databases. Patients typically queue at hospital reception desks without prior visibility into doctor availability, consultation fees, or specialist schedules.'
);

drawSectionHeading('3. Critical Problems in the Existing System');
drawBullet('Manual Double-Booking & Slot Collisions', 'Paper registers and basic software lack atomic booking validations, resulting in multiple patients assigned to the same doctor at the identical time.');
drawBullet('Patient Uncertainty in Specialist Selection', 'Patients often do not know which medical specialist to consult for their symptoms (e.g. consulting an Orthopedic for nerve pain instead of a Neurologist), leading to unnecessary delays and repeat consultations.');
drawBullet('Geographical Inefficiency', 'Absence of district-filtered specialist directories forces patients to travel long distances without certainty of consultant availability.');
drawBullet('Lost Records & Illegible Handwritten Prescriptions', 'Handwritten prescriptions cause medication dispensing errors, lack dosage clarity, and are easily misplaced by patients.');
drawBullet('Absence of Triage & Proactive Alerts', 'Lack of automated reminders leads to missed medication schedules, while administrators lack global broadcast tools for emergency alerts.');

drawSectionHeading('4. Disadvantages of the Existing System');
drawBullet('High Administrative Overhead', 'Excessive hospital staff time consumed in manual appointment logging, paper filing, and scheduling conflicts.');
drawBullet('Extended Patient Wait Times', 'Chaotic OPD queues and uncoordinated arrival times create overcrowding in waiting lobbies.');
drawBullet('Compromised Patient Safety', 'Risk of clinical miscommunication and medication non-adherence due to non-digital prescriptions.');

// ================= PAGE 2 =================
doc.addPage();

drawSectionHeading('5. The Proposed "AI Smart Hospital" System');
drawBodyText(
  'The proposed platform resolves these challenges by introducing a unified, role-based, intelligent cloud platform equipped with data integrity rules, clinical intelligence, and accessible user interfaces.'
);

drawSubHeading('Core System Pillars:');
drawBullet('Multi-Role Access Control (RBAC)', 'Dedicated portals for Patients (finder, booking, E-Rx, reminders), Doctors (queue, status manager, prescription builder), and Admins (metrics, user activation toggles, broadcast).');
drawBullet('AI Health Assistant & Clinical Triage', 'Rule-based deterministic clinical knowledge graph spanning 14 specialties with urgency categorization and strict safety disclaimers.');
drawBullet('100% Collision-Free Appointment Scheduler', 'Compound unique index and pre-validation preventing double-booking and past-date reservations.');
drawBullet('Certified Digital Prescriptions (E-Rx)', 'Structured digital medication items (dosage, frequency, duration, instructions) with instant PDF/print export.');
drawBullet('District-Level Specialist Discovery', 'Dynamic filtering across 38 Tamil Nadu districts and 14 medical disciplines.');

drawSectionHeading('6. Advantages of the Proposed System');
drawBullet('Elimination of Queue Collisions', 'Automated slot validation ensures seamless patient flow and predictable consultation schedules.');
drawBullet('Intelligent Preliminary Triage', 'Guides patients to the exact right specialist before booking, preventing misdiagnosis and wasted visits.');
drawBullet('Enhanced Medication Adherence', 'Structured e-prescriptions and integrated medicine reminders ensure patient compliance.');
drawBullet('Centralized Hospital Governance', 'Administrators maintain real-time oversight over KPIs, user access, and emergency notifications.');
drawBullet('Zero-Install Cloud Portability', 'Lightweight responsive web interface accessible from mobile phones, tablets, and desktops.');

drawSectionHeading('7. Project Implementation Blueprint (Stages 1 - 6)');
drawBullet('Stage 1: Architecture Setup', 'Standardized project directory layout, npm dependencies (Express, Mongoose, JWT, bcryptjs, CORS), environment configurations.');
drawBullet('Stage 2: Database Modeling', 'Created 7 Mongoose schemas (User, Patient, Doctor, Appointment, MedicalRecord, Prescription, Notification) with indexing.');
drawBullet('Stage 3: Security & RBAC Middleware', 'JWT authentication, bcryptjs password hashing, role authorization middleware, and global error handlers.');
drawBullet('Stage 4: REST API & AI Engine', 'Controllers for booking, doctors lookup, e-prescriptions, triage analysis, and comprehensive database seeder (seedData.js).');
drawBullet('Stage 5: Client Dashboards & UI', 'Modern medical design system in CSS3, responsive sidebars, interactive slot chips, modal workflows, and demo autofill buttons.');
drawBullet('Stage 6: Testing & Deployment', 'Full end-to-end verification, GitHub repository initialization, and deployment blueprints for Vercel and Render.');

doc.moveDown(1);
doc.rect(45, doc.y, 505, 30).fill('#e0f2fe');
doc.fillColor(PRIMARY).fontSize(9).font('Helvetica-Bold')
   .text('AI Smart Hospital Management System — Certified Production-Ready Architecture', 60, doc.y - 20, { align: 'center' });

doc.end();

stream.on('finish', () => {
  console.log(`✅ [PDF Generator] Project report PDF created at: ${outputPath}`);
});
