const express = require('express');
const router = express.Router();
const {
  bookAppointment,
  getMyAppointments,
  getBookedSlots,
  updateAppointmentStatus,
  sendManualAppointmentReminder
} = require('../controllers/appointmentController');
const { protect, optionalProtect } = require('../middleware/authMiddleware');

router.get('/booked-slots', getBookedSlots);

// Support both registered patients and instant guest booking with automated email dispatch
router.post('/', optionalProtect, bookAppointment);

router.use(protect);

router.get('/', getMyAppointments);
router.patch('/:id/status', updateAppointmentStatus);
router.post('/:id/send-reminder', sendManualAppointmentReminder);

module.exports = router;
