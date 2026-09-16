const express = require('express');
const router = express.Router();
const {
  bookAppointment,
  getMyAppointments,
  getBookedSlots,
  updateAppointmentStatus,
  sendManualAppointmentReminder
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.get('/booked-slots', getBookedSlots);

router.use(protect);

router.post('/', authorize('patient'), bookAppointment);
router.get('/', getMyAppointments);
router.patch('/:id/status', updateAppointmentStatus);
router.post('/:id/send-reminder', sendManualAppointmentReminder);

module.exports = router;
