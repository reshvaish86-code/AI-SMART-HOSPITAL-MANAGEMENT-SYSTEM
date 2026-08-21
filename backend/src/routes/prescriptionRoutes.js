const express = require('express');
const router = express.Router();
const {
  createPrescription,
  getPrescriptions,
  getPrescriptionById
} = require('../controllers/prescriptionController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.use(protect);

router.post('/', authorize('doctor'), createPrescription);
router.get('/', getPrescriptions);
router.get('/:id', getPrescriptionById);

module.exports = router;
