const Notification = require('../models/Notification');
const { sendEmail } = require('../services/notificationService');

/**
 * @desc    Get user notifications
 * @route   GET /api/notifications
 * @access  Private
 */
const getMyNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id })
      .sort({ createdAt: -1 })
      .limit(30);

    const unreadCount = await Notification.countDocuments({
      recipient: req.user._id,
      isRead: false
    });

    res.status(200).json({
      status: 'success',
      unreadCount,
      data: notifications
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Mark notification as read
 * @route   PATCH /api/notifications/:id/read
 * @access  Private
 */
const markAsRead = async (req, res, next) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, recipient: req.user._id },
      { isRead: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ status: 'fail', message: 'Notification not found' });
    }

    res.status(200).json({
      status: 'success',
      data: notification
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Mark all user notifications as read
 * @route   PATCH /api/notifications/read-all
 * @access  Private
 */
const markAllAsRead = async (req, res, next) => {
  try {
    await Notification.updateMany(
      { recipient: req.user._id, isRead: false },
      { isRead: true }
    );

    res.status(200).json({
      status: 'success',
      message: 'All notifications marked as read'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Diagnostic test email endpoint
 * @route   GET /api/notifications/test-email
 * @access  Public
 */
const testEmail = async (req, res, next) => {
  try {
    const to = req.query.to || process.env.EMAIL_USER;
    if (!to) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide ?to=your_email@gmail.com in the URL to test.'
      });
    }

    const result = await sendEmail({
      to,
      subject: '✅ Live Test Email: AI Smart Hospital Management System',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #0284c7; border-radius: 8px; max-width: 500px;">
          <h2 style="color: #0284c7; margin-top: 0;">AI Smart Hospital</h2>
          <p>🎉 <strong>Congratulations!</strong> Your email notification service is 100% active and working properly.</p>
          <p>All appointment confirmations, 1-hour pre-appointment reminders, and medicine alerts will now arrive in real-time.</p>
        </div>
      `
    });

    res.status(200).json({
      status: 'success',
      recipient: to,
      configuredSender: process.env.EMAIL_USER || 'Not Set',
      deliveryResult: result
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMyNotifications,
  markAsRead,
  markAllAsRead,
  testEmail
};
