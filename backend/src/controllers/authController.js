const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const { sendNotification } = require('../services/notificationService');

// Helper to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'dev_jwt_secret_hospital_management_system_secure_key_2026', {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  });
};

/**
 * @desc    Register Patient
 * @route   POST /api/auth/register-patient
 * @access  Public
 */
const registerPatient = async (req, res, next) => {
  try {
    const { name, email, mobile, password, age, gender, address, district, bloodGroup, allergies, emergencyContact } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'An account with this email already exists'
      });
    }

    // Create User record
    const user = await User.create({
      name,
      email,
      mobile,
      password,
      role: 'patient'
    });

    // Create Patient Profile
    const patient = await Patient.create({
      user: user._id,
      age: Number(age) || 30,
      gender: gender || 'Male',
      address: address || 'Chennai, Tamil Nadu',
      district: district || 'Chennai',
      bloodGroup: bloodGroup || 'O+',
      allergies: Array.isArray(allergies) ? allergies : (allergies ? allergies.split(',').map(s => s.trim()) : []),
      emergencyContact: emergencyContact || {}
    });

    // Send Welcome Notification
    await sendNotification({
      recipient: user._id,
      title: 'Welcome to AI Smart Hospital!',
      message: `Hello ${user.name}, your patient account has been created successfully. You can now search for specialists across Tamil Nadu and book appointments.`,
      type: 'system'
    });

    const token = generateToken(user._id);

    res.status(201).json({
      status: 'success',
      message: 'Patient registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role
      },
      profile: patient
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Register Doctor
 * @route   POST /api/auth/register-doctor
 * @access  Public
 */
const registerDoctor = async (req, res, next) => {
  try {
    const {
      name,
      email,
      mobile,
      password,
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

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'An account with this email already exists'
      });
    }

    // Create User
    const user = await User.create({
      name,
      email,
      mobile,
      password,
      role: 'doctor'
    });

    // Create Doctor Profile
    const doctor = await Doctor.create({
      user: user._id,
      qualification: qualification || 'MBBS, MD',
      specialization: specialization || 'General Physician',
      experience: Number(experience) || 5,
      hospital: hospital || 'Apollo Hospitals',
      district: district || 'Chennai',
      address: address || 'Greams Road, Chennai',
      consultationFee: Number(consultationFee) || 500,
      availableDays: Array.isArray(availableDays) && availableDays.length ? availableDays : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      availableTimeSlots: Array.isArray(availableTimeSlots) && availableTimeSlots.length ? availableTimeSlots : undefined,
      bio: bio || 'Dedicated healthcare specialist providing attentive patient care.'
    });

    // Send Welcome Notification
    await sendNotification({
      recipient: user._id,
      title: 'Doctor Portal Activated',
      message: `Welcome Dr. ${user.name}! Your medical profile in ${doctor.specialization} (${doctor.district}) is now active.`,
      type: 'system'
    });

    const token = generateToken(user._id);

    res.status(201).json({
      status: 'success',
      message: 'Doctor registered successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role
      },
      profile: doctor
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Login User (Patient, Doctor, or Admin)
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password'
      });
    }

    // Find user and explicitly select password field
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid email or password'
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        status: 'fail',
        message: 'Account has been deactivated. Please contact administration.'
      });
    }

    let profile = null;
    if (user.role === 'patient') {
      profile = await Patient.findOne({ user: user._id });
    } else if (user.role === 'doctor') {
      profile = await Doctor.findOne({ user: user._id });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        avatar: user.avatar
      },
      profile
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Current Logged in User Profile
 * @route   GET /api/auth/me
 * @access  Private
 */
const getMe = async (req, res, next) => {
  try {
    let profile = null;
    if (req.user.role === 'patient') {
      profile = await Patient.findOne({ user: req.user._id });
    } else if (req.user.role === 'doctor') {
      profile = await Doctor.findOne({ user: req.user._id });
    }

    res.status(200).json({
      status: 'success',
      user: req.user,
      profile
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerPatient,
  registerDoctor,
  login,
  getMe
};
