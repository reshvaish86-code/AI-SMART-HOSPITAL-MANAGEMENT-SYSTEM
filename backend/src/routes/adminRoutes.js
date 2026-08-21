const express = require('express');
const router = express.Router();
const {
  getAdminOverview,
  getAllUsers,
  toggleUserStatus,
  broadcastSystemNotification
} = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.use(protect);
router.use(authorize('admin'));

router.get('/overview', getAdminOverview);
router.get('/users', getAllUsers);
router.patch('/users/:id/toggle-status', toggleUserStatus);
router.post('/broadcast', broadcastSystemNotification);

module.exports = router;
