const MedicalRecord = require('../models/MedicalRecord');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const { sendNotification } = require('../services/notificationService');

/**
 * @desc    Create Medical Record (by Doctor)
 * @route   POST /api/medical-records
 * @access  Private (Doctor only)
 */
const createMedicalRecord = async (req, res, next) => {
  try {
    const { patientId, appointmentId, diagnosis, symptoms, vitals, clinicalFindings, doctorNotes, recommendedTests, followUpDate } = req.body;

    const doctor = await Doctor.findOne({ user: req.user._id });
    if (!doctor) {
      return res.status(403).json({ status: 'fail', message: 'Doctor profile required to create medical record' });
    }

    const patient = await Patient.findById(patientId).populate('user', 'name email');
    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient not found' });
    }

    const record = await MedicalRecord.create({
      patient: patient._id,
      doctor: doctor._id,
      appointment: appointmentId || undefined,
      diagnosis,
      symptoms,
      vitals: vitals || {},
      clinicalFindings,
      doctorNotes,
      recommendedTests: Array.isArray(recommendedTests) ? recommendedTests : (recommendedTests ? recommendedTests.split(',').map(t => t.trim()) : []),
      followUpDate
    });

    // Notify patient
    await sendNotification({
      recipient: patient.user._id,
      title: 'New Clinical Consultation Record',
      message: `Dr. ${req.user.name} has recorded a consultation record for your visit (${diagnosis}).`,
      type: 'appointment',
      relatedId: record._id.toString()
    });

    res.status(201).json({
      status: 'success',
      message: 'Medical record created successfully',
      data: record
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Medical Records (Patient sees own, Doctor sees patient's or all)
 * @route   GET /api/medical-records
 * @access  Private
 */
const getMedicalRecords = async (req, res, next) => {
  try {
    let query = {};
    const { patientId } = req.query;

    if (req.user.role === 'patient') {
      const patient = await Patient.findOne({ user: req.user._id });
      if (!patient) return res.status(200).json({ status: 'success', results: 0, data: [] });
      query.patient = patient._id;
    } else if (patientId) {
      query.patient = patientId;
    } else if (req.user.role === 'doctor') {
      const doctor = await Doctor.findOne({ user: req.user._id });
      if (doctor) query.doctor = doctor._id;
    }

    const records = await MedicalRecord.find(query)
      .populate({
        path: 'doctor',
        populate: { path: 'user', select: 'name email' }
      })
      .populate({
        path: 'patient',
        populate: { path: 'user', select: 'name email mobile' }
      })
      .sort({ recordDate: -1 });

    res.status(200).json({
      status: 'success',
      results: records.length,
      data: records
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMedicalRecord,
  getMedicalRecords
};
