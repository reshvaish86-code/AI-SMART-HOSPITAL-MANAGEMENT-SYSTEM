const express = require('express');
const router = express.Router();
const { createMedicalRecord, getMedicalRecords } = require('../controllers/medicalRecordController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.use(protect);

router.post('/', authorize('doctor'), createMedicalRecord);
router.get('/', getMedicalRecords);

module.exports = router;
