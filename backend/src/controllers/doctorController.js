const Doctor = require('../models/Doctor');
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const { APPOINTMENT_STATUS } = require('../utils/constants');

/**
 * @desc    Get all doctors with filtering by specialty, Tamil Nadu district, and search query
 * @route   GET /api/doctors
 * @access  Public
 */
const getAllDoctors = async (req, res, next) => {
  try {
    const { specialization, district, search, minFee, maxFee } = req.query;
    let query = { isVerified: true };

    if (specialization && specialization !== 'All') {
      query.specialization = specialization;
    }

    if (district && district !== 'All') {
      query.district = district;
    }

    if (minFee || maxFee) {
      query.consultationFee = {};
      if (minFee) query.consultationFee.$gte = Number(minFee);
      if (maxFee) query.consultationFee.$lte = Number(maxFee);
    }

    let doctors = await Doctor.find(query)
      .populate('user', 'name email mobile avatar isActive')
      .sort({ rating: -1, experience: -1 });

    // Filter out inactive users and apply search query if provided
    doctors = doctors.filter(doc => doc.user && doc.user.isActive);

    if (search) {
      const searchLower = search.toLowerCase();
      doctors = doctors.filter(doc => 
        (doc.user && doc.user.name.toLowerCase().includes(searchLower)) ||
        doc.hospital.toLowerCase().includes(searchLower) ||
        doc.specialization.toLowerCase().includes(searchLower) ||
        doc.district.toLowerCase().includes(searchLower)
      );
    }

    res.status(200).json({
      status: 'success',
      results: doctors.length,
      data: doctors
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single doctor by ID
 * @route   GET /api/doctors/:id
 * @access  Public
 */
const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate('user', 'name email mobile avatar isActive');

    if (!doctor) {
      return res.status(404).json({
        status: 'fail',
        message: 'Doctor not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: doctor
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update Doctor Profile and Schedule
 * @route   PUT /api/doctors/profile
 * @access  Private (Doctor only)
 */
const updateDoctorProfile = async (req, res, next) => {
  try {
    const doctor = await Doctor.findOne({ user: req.user._id });
    if (!doctor) {
      return res.status(404).json({
        status: 'fail',
        message: 'Doctor profile not found'
      });
    }

    const {
      qualification,
      specialization,
      experience,
      hospital,
      district,
      address,
      consultationFee,
      availableDays,
      availableTimeSlots,
      bio
    } = req.body;

    if (qualification) doctor.qualification = qualification;
    if (specialization) doctor.specialization = specialization;
    if (experience !== undefined) doctor.experience = experience;
    if (hospital) doctor.hospital = hospital;
    if (district) doctor.district = district;
    if (address !== undefined) doctor.address = address;
    if (consultationFee !== undefined) doctor.consultationFee = consultationFee;
    if (availableDays) doctor.availableDays = availableDays;
    if (availableTimeSlots) doctor.availableTimeSlots = availableTimeSlots;
    if (bio !== undefined) doctor.bio = bio;

    await doctor.save();

    res.status(200).json({
      status: 'success',
      message: 'Doctor profile updated successfully',
      data: doctor
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Doctor Dashboard Metrics
 * @route   GET /api/doctors/dashboard/stats
 * @access  Private (Doctor only)
 */
const getDoctorDashboardStats = async (req, res, next) => {
  try {
    const doctor = await Doctor.findOne({ user: req.user._id });
    if (!doctor) {
      return res.status(404).json({ status: 'fail', message: 'Doctor profile not found' });
    }

    const todayStr = new Date().toISOString().split('T')[0];

    const todayAppointments = await Appointment.countDocuments({
      doctor: doctor._id,
      appointmentDate: todayStr,
      status: { $in: [APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.PENDING] }
    });

    const pendingRequests = await Appointment.countDocuments({
      doctor: doctor._id,
      status: APPOINTMENT_STATUS.PENDING
    });

    const completedAppointments = await Appointment.find({
      doctor: doctor._id,
      status: APPOINTMENT_STATUS.COMPLETED
    });

    const totalPatientsTreated = completedAppointments.length;
    const estimatedEarnings = totalPatientsTreated * (doctor.consultationFee || 500);

    res.status(200).json({
      status: 'success',
      data: {
        todayAppointments,
        pendingRequests,
        totalPatientsTreated,
        estimatedEarnings,
        consultationFee: doctor.consultationFee,
        rating: doctor.rating,
        reviewCount: doctor.reviewCount
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDoctors,
  getDoctorById,
  updateDoctorProfile,
  getDoctorDashboardStats
};
