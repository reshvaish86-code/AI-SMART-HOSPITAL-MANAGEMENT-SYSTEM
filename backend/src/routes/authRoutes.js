const express = require('express');
const router = express.Router();
const { 
  registerPatient, 
  registerDoctor, 
  login, 
  getMe,
  forgotPassword,
  verifyResetOTP,
  resetPassword
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register-patient', registerPatient);
router.post('/register-doctor', registerDoctor);
router.post('/login', login);
router.get('/me', protect, getMe);

// Password Recovery Routes
router.post('/forgot-password', forgotPassword);
router.post('/verify-otp', verifyResetOTP);
router.post('/reset-password', resetPassword);

module.exports = router;
