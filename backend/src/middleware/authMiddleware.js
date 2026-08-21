const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

/**
 * Protect routes - Verifies JWT token and attaches user & profile to request
 */
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      message: 'Access denied. Please log in with a valid authorization token.'
    });
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev_jwt_secret_hospital_management_system_secure_key_2026');

    // Retrieve user
    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res.status(401).json({
        status: 'fail',
        message: 'The user belonging to this token no longer exists.'
      });
    }

    if (!currentUser.isActive) {
      return res.status(403).json({
        status: 'fail',
        message: 'Your account has been deactivated. Please contact hospital administrator.'
      });
    }

    req.user = currentUser;

    // Attach role-specific profile document if exists
    if (currentUser.role === 'patient') {
      req.patientProfile = await Patient.findOne({ user: currentUser._id });
    } else if (currentUser.role === 'doctor') {
      req.doctorProfile = await Doctor.findOne({ user: currentUser._id });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid or expired token. Please log in again.'
    });
  }
};

module.exports = { protect };
