const Prescription = require('../models/Prescription');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const { sendNotification } = require('../services/notificationService');

/**
 * @desc    Create Digital Prescription (by Doctor)
 * @route   POST /api/prescriptions
 * @access  Private (Doctor only)
 */
const createPrescription = async (req, res, next) => {
  try {
    const { patientId, appointmentId, diagnosis, medicines, generalAdvice, dietaryRestrictions } = req.body;

    const doctor = await Doctor.findOne({ user: req.user._id });
    if (!doctor) {
      return res.status(403).json({ status: 'fail', message: 'Doctor profile required' });
    }

    const patient = await Patient.findById(patientId).populate('user', 'name email');
    if (!patient) {
      return res.status(404).json({ status: 'fail', message: 'Patient not found' });
    }

    if (!medicines || !Array.isArray(medicines) || medicines.length === 0) {
      return res.status(400).json({ status: 'fail', message: 'At least one medicine is required' });
    }

    const prescription = await Prescription.create({
      patient: patient._id,
      doctor: doctor._id,
      appointment: appointmentId || undefined,
      diagnosis,
      medicines,
      generalAdvice: generalAdvice || 'Take rest and drink plenty of water.',
      dietaryRestrictions: dietaryRestrictions || '',
      isDigitallySigned: true
    });

    // Optionally mark appointment as completed if associated
    if (appointmentId) {
      await Appointment.findByIdAndUpdate(appointmentId, { status: 'Completed' });
    }

    // Auto-create medicine reminders for patient if desired
    if (patient.medicineReminders) {
      medicines.forEach(med => {
        patient.medicineReminders.push({
          medicineName: med.medicineName,
          dosage: med.dosage,
          time: '08:00 AM',
          frequency: med.frequency,
          instructions: med.instructions || 'After food',
          isActive: true
        });
      });
      await patient.save();
    }

    // Send Notification to Patient
    await sendNotification({
      recipient: patient.user._id,
      title: 'Digital Prescription Generated',
      message: `Dr. ${req.user.name} has issued a digital prescription for "${diagnosis}" with ${medicines.length} medication(s).`,
      type: 'prescription',
      relatedId: prescription._id.toString()
    });

    res.status(201).json({
      status: 'success',
      message: 'Prescription generated successfully',
      data: prescription
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Prescriptions
 * @route   GET /api/prescriptions
 * @access  Private
 */
const getPrescriptions = async (req, res, next) => {
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

    const prescriptions = await Prescription.find(query)
      .populate({
        path: 'doctor',
        populate: { path: 'user', select: 'name email' }
      })
      .populate({
        path: 'patient',
        populate: { path: 'user', select: 'name email mobile' }
      })
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: prescriptions.length,
      data: prescriptions
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Single Prescription by ID
 * @route   GET /api/prescriptions/:id
 * @access  Private
 */
const getPrescriptionById = async (req, res, next) => {
  try {
    const prescription = await Prescription.findById(req.params.id)
      .populate({
        path: 'doctor',
        populate: { path: 'user', select: 'name email mobile' }
      })
      .populate({
        path: 'patient',
        populate: { path: 'user', select: 'name email mobile' }
      });

    if (!prescription) {
      return res.status(404).json({ status: 'fail', message: 'Prescription not found' });
    }

    res.status(200).json({
      status: 'success',
      data: prescription
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPrescription,
  getPrescriptions,
  getPrescriptionById
};
