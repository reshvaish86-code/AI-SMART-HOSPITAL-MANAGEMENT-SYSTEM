const express = require('express');
const router = express.Router();
const {
  getMyNotifications,
  markAsRead,
  markAllAsRead,
  getNotificationConfigStatus,
  testEmail
} = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

// Public diagnostic endpoints
router.get('/status', getNotificationConfigStatus);
router.get('/test-email', testEmail);

// Protected routes
router.use(protect);

router.get('/', getMyNotifications);
router.patch('/:id/read', markAsRead);
router.patch('/read-all', markAllAsRead);

module.exports = router;
