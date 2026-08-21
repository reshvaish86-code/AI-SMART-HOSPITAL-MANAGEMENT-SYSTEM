const express = require('express');
const router = express.Router();
const {
  triageSymptoms,
  chatWithAssistant,
  getSystemMetadata
} = require('../controllers/aiController');

router.post('/triage', triageSymptoms);
router.post('/chat', chatWithAssistant);
router.get('/metadata', getSystemMetadata);

module.exports = router;
