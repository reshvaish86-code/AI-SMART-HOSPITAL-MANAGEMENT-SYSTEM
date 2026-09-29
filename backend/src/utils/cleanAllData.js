const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '../../.env') });

const mongoose = require('mongoose');
const Appointment = require('../models/Appointment');
const MedicalRecord = require('../models/MedicalRecord');
const Prescription = require('../models/Prescription');
const Notification = require('../models/Notification');
const Patient = require('../models/Patient');
const User = require('../models/User');

async function cleanAllData() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not set in backend/.env');
    }

    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB Atlas cluster');

    // 1. Clear Appointments
    const apptRes = await Appointment.deleteMany({});
    console.log(`🗑️ Deleted Appointments: ${apptRes.deletedCount}`);

    // 2. Clear Medical Records
    const medRes = await MedicalRecord.deleteMany({});
    console.log(`🗑️ Deleted Medical Records: ${medRes.deletedCount}`);

    // 3. Clear Prescriptions
    const rxRes = await Prescription.deleteMany({});
    console.log(`🗑️ Deleted Prescriptions: ${rxRes.deletedCount}`);

    // 4. Clear Notifications
    const notifRes = await Notification.deleteMany({});
    console.log(`🗑️ Deleted Notifications: ${notifRes.deletedCount}`);

    // 5. Clear Patient Profiles
    const patRes = await Patient.deleteMany({});
    console.log(`🗑️ Deleted Patient Profiles: ${patRes.deletedCount}`);

    // 6. Clear Non-Doctor Patient Users
    const userRes = await User.deleteMany({ role: 'patient' });
    console.log(`🗑️ Deleted Patient User Accounts: ${userRes.deletedCount}`);

    console.log('\n🎉 ALL USER-ENTERED DATA HAS BEEN COMPLETELY WIPED FROM MONGODB ATLAS!');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error while wiping database data:', error);
    process.exit(1);
  }
}

cleanAllData();
