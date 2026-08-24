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
 * @desc    Instant diagnostic status for Email and SMS settings
 * @route   GET /api/notifications/status
 * @access  Public
 */
const getNotificationConfigStatus = async (req, res, next) => {
  try {
    const user = process.env.EMAIL_USER ? process.env.EMAIL_USER.trim() : '';
    const pass = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.trim().replace(/\s+/g, '') : '';
    const twilioSid = process.env.TWILIO_ACCOUNT_SID ? process.env.TWILIO_ACCOUNT_SID.trim() : '';

    let maskedEmail = 'NOT SET';
    if (user && user.includes('@')) {
      const parts = user.split('@');
      maskedEmail = `${parts[0].slice(0, 3)}***@${parts[1]}`;
    }

    res.status(200).json({
      status: 'success',
      diagnostics: {
        EMAIL_USER_SET: !!user,
        EMAIL_USER_MASKED: maskedEmail,
        EMAIL_PASS_SET: !!pass,
        EMAIL_PASS_LENGTH: pass.length,
        EMAIL_PASS_IS_16_CHARS: pass.length === 16,
        TWILIO_SMS_SET: !!twilioSid
      },
      instructions: !user || pass.length !== 16 
        ? 'Please make sure EMAIL_USER is your Gmail address and EMAIL_PASS is exactly the 16-letter App Password generated from https://myaccount.google.com/apppasswords without spaces.'
        : 'Credentials configured properly on server!'
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

    // Attempt to send email with a fast 10-second timeout
    const result = await Promise.race([
      sendEmail({
        to,
        subject: '✅ Live Test Email: AI Smart Hospital Management System',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #0284c7; border-radius: 8px; max-width: 500px;">
            <h2 style="color: #0284c7; margin-top: 0;">AI Smart Hospital</h2>
            <p>🎉 <strong>Congratulations!</strong> Your email notification service is active and working properly.</p>
            <p>All appointment confirmations, 1-hour pre-appointment reminders, and medicine alerts will now arrive in real-time.</p>
          </div>
        `
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('SMTP Connection Timed Out after 10s. Verify Google App Password.')), 10000))
    ]).catch(err => ({ success: false, error: err.message }));

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
  getNotificationConfigStatus,
  testEmail
};
