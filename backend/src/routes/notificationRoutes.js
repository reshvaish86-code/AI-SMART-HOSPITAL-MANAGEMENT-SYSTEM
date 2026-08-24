const express = require('express');
const router = express.Router();
const {
  getMyNotifications,
  markAsRead,
  markAllAsRead,
  testEmail
} = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

// Diagnostic test endpoint (public for quick health validation)
router.get('/test-email', testEmail);

// Protected routes
router.use(protect);

router.get('/', getMyNotifications);
router.patch('/:id/read', markAsRead);
router.patch('/read-all', markAllAsRead);

module.exports = router;
