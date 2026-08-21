const express = require('express');
const router = express.Router();
const {
  getAllDoctors,
  getDoctorById,
  updateDoctorProfile,
  getDoctorDashboardStats
} = require('../controllers/doctorController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.get('/', getAllDoctors);
router.get('/dashboard/stats', protect, authorize('doctor'), getDoctorDashboardStats);
router.put('/profile', protect, authorize('doctor'), updateDoctorProfile);
router.get('/:id', getDoctorById);

module.exports = router;
