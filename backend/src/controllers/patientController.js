const Patient = require('../models/Patient');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription');
const Notification = require('../models/Notification');
const { APPOINTMENT_STATUS } = require('../utils/constants');

/**
 * @desc    Get Patient Profile
 * @route   GET /api/patients/profile
 * @access  Private (Patient only)
 */
const getPatientProfile = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ user: req.user._id })
      .populate('user', 'name email mobile avatar');

    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient profile not found' });
    }

    res.status(200).json({
      status: 'success',
      data: patient
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update Patient Profile
 * @route   PUT /api/patients/profile
 * @access  Private (Patient only)
 */
const updatePatientProfile = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ user: req.user._id });
    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient profile not found' });
    }

    const { age, gender, address, district, bloodGroup, allergies, emergencyContact } = req.body;

    if (age !== undefined) patient.age = age;
    if (gender) patient.gender = gender;
    if (address) patient.address = address;
    if (district) patient.district = district;
    if (bloodGroup) patient.bloodGroup = bloodGroup;
    if (allergies) patient.allergies = Array.isArray(allergies) ? allergies : allergies.split(',').map(s => s.trim());
    if (emergencyContact) patient.emergencyContact = emergencyContact;

    await patient.save();

    res.status(200).json({
      status: 'success',
      message: 'Patient profile updated successfully',
      data: patient
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Patient Dashboard Stats
 * @route   GET /api/patients/dashboard/stats
 * @access  Private (Patient only)
 */
const getPatientDashboardStats = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ user: req.user._id });
    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient profile not found' });
    }

    const todayStr = new Date().toISOString().split('T')[0];

    const totalAppointments = await Appointment.countDocuments({ patient: patient._id });
    const upcomingAppointments = await Appointment.countDocuments({
      patient: patient._id,
      appointmentDate: { $gte: todayStr },
      status: { $in: [APPOINTMENT_STATUS.PENDING, APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.RESCHEDULED] }
    });

    const totalPrescriptions = await Prescription.countDocuments({ patient: patient._id });
    const unreadNotifications = await Notification.countDocuments({ recipient: req.user._id, isRead: false });

    res.status(200).json({
      status: 'success',
      data: {
        totalAppointments,
        upcomingAppointments,
        totalPrescriptions,
        unreadNotifications,
        medicineRemindersCount: patient.medicineReminders ? patient.medicineReminders.length : 0
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add Medicine Reminder with Patient Name & Mobile Number
 * @route   POST /api/patients/reminders
 * @access  Private (Patient only)
 */
const addMedicineReminder = async (req, res, next) => {
  try {
    const { patientName, mobileNumber, medicineName, dosage, time, frequency, instructions } = req.body;
    const patient = await Patient.findOne({ user: req.user._id }).populate('user', 'name mobile email');

    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient profile not found' });
    }

    if (!medicineName || !time) {
      return res.status(400).json({ status: 'fail', message: 'Medicine name and reminder time are required' });
    }

    patient.medicineReminders.push({
      patientName: patientName || patient.user.name,
      mobileNumber: mobileNumber || patient.user.mobile,
      medicineName,
      dosage: dosage || '1 Tablet / Dose',
      time,
      frequency: frequency || 'Daily',
      instructions: instructions || 'Take after meals with water',
      isActive: true
    });

    await patient.save();

    res.status(201).json({
      status: 'success',
      message: `Medicine reminder registered for ${patientName || patient.user.name} at ${time}`,
      data: patient.medicineReminders
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete Medicine Reminder
 * @route   DELETE /api/patients/reminders/:id
 * @access  Private (Patient only)
 */
const deleteMedicineReminder = async (req, res, next) => {
  try {
    const patient = await Patient.findOne({ user: req.user._id });
    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient profile not found' });
    }

    patient.medicineReminders = patient.medicineReminders.filter(
      r => r._id.toString() !== req.params.id
    );

    await patient.save();

    res.status(200).json({
      status: 'success',
      message: 'Reminder removed',
      data: patient.medicineReminders
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPatientProfile,
  updatePatientProfile,
  getPatientDashboardStats,
  addMedicineReminder,
  deleteMedicineReminder
};
