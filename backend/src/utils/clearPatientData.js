const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const User = require('../models/User');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const MedicalRecord = require('../models/MedicalRecord');
const Prescription = require('../models/Prescription');
const Notification = require('../models/Notification');

async function clearPatientData() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_smart_hospital';
  console.log(`⏳ Connecting to MongoDB at: ${uri.replace(/:([^:@]+)@/, ':****@')}...`);

  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB.');

    // 1. Find all Patient users
    const patientUsers = await User.find({ role: 'patient' });
    const patientUserIds = patientUsers.map(u => u._id);
    console.log(`🔍 Found ${patientUsers.length} registered patient accounts.`);

    // 2. Delete Appointments associated with patients
    const apptDelete = await Appointment.deleteMany({});
    console.log(`🗑️ Deleted ${apptDelete.deletedCount} appointments.`);

    // 3. Delete Medical Records
    const medRecDelete = await MedicalRecord.deleteMany({});
    console.log(`🗑️ Deleted ${medRecDelete.deletedCount} medical records.`);

    // 4. Delete Prescriptions
    const rxDelete = await Prescription.deleteMany({});
    console.log(`🗑️ Deleted ${rxDelete.deletedCount} digital prescriptions.`);

    // 5. Delete Patient Notifications
    const notifDelete = await Notification.deleteMany({ recipient: { $in: patientUserIds } });
    console.log(`🗑️ Deleted ${notifDelete.deletedCount} patient notifications.`);

    // 6. Delete Patient Profiles
    const patientProfileDelete = await Patient.deleteMany({});
    console.log(`🗑️ Deleted ${patientProfileDelete.deletedCount} patient demographic profiles.`);

    // 7. Delete Patient User Accounts
    const userDelete = await User.deleteMany({ role: 'patient' });
    console.log(`🗑️ Deleted ${userDelete.deletedCount} patient user accounts.`);

    // Verify Remaining Data
    const remainingDoctors = await User.countDocuments({ role: 'doctor' });
    const remainingAdmins = await User.countDocuments({ role: 'admin' });

    console.log('========================================================');
    console.log('✨ PATIENT DATA CLEANUP COMPLETE!');
    console.log(`🩺 Doctors preserved: ${remainingDoctors}`);
    console.log(`👑 Admin preserved:   ${remainingAdmins}`);
    console.log('👤 All patient registrations, history, and records are clean.');
    console.log('========================================================');

    await mongoose.disconnect();
    console.log('🔌 Database disconnected successfully.');
  } catch (err) {
    console.error('❌ Error clearing patient data:', err.message);
    process.exit(1);
  }
}

clearPatientData();
