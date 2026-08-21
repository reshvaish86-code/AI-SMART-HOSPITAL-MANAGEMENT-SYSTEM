const Notification = require('../models/Notification');

/**
 * Send In-App Notification
 */
const sendNotification = async ({ recipient, title, message, type = 'appointment', relatedId = '' }) => {
  try {
    const notification = await Notification.create({
      recipient,
      title,
      message,
      type,
      relatedId
    });
    return notification;
  } catch (error) {
    console.error('❌ [Notification Error]:', error.message);
    return null;
  }
};

/**
 * Broadcast notification to all active users or specific role
 */
const broadcastNotification = async ({ userIds, title, message, type = 'system' }) => {
  try {
    const notifications = userIds.map(id => ({
      recipient: id,
      title,
      message,
      type
    }));
    await Notification.insertMany(notifications);
    return true;
  } catch (error) {
    console.error('❌ [Broadcast Error]:', error.message);
    return false;
  }
};

module.exports = {
  sendNotification,
  broadcastNotification
};
