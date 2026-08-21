const express = require('express');
const router = express.Router();
const {
  getPatientProfile,
  updatePatientProfile,
  getPatientDashboardStats,
  addMedicineReminder,
  deleteMedicineReminder
} = require('../controllers/patientController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.use(protect);
router.use(authorize('patient'));

router.get('/profile', getPatientProfile);
router.put('/profile', updatePatientProfile);
router.get('/dashboard/stats', getPatientDashboardStats);
router.post('/reminders', addMedicineReminder);
router.delete('/reminders/:id', deleteMedicineReminder);

module.exports = router;
