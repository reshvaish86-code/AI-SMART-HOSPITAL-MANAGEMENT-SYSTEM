const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription');
const { broadcastNotification } = require('../services/notificationService');

/**
 * @desc    Get Admin System Overview & Analytics
 * @route   GET /api/admin/overview
 * @access  Private (Admin only)
 */
const getAdminOverview = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalPatients = await Patient.countDocuments();
    const totalDoctors = await Doctor.countDocuments();
    const totalAppointments = await Appointment.countDocuments();
    const totalPrescriptions = await Prescription.countDocuments();

    const pendingAppointments = await Appointment.countDocuments({ status: 'Pending' });
    const confirmedAppointments = await Appointment.countDocuments({ status: 'Confirmed' });
    const completedAppointments = await Appointment.countDocuments({ status: 'Completed' });
    const cancelledAppointments = await Appointment.countDocuments({ status: 'Cancelled' });

    // Recent 5 appointments
    const recentAppointments = await Appointment.find()
      .populate('patientUser', 'name email mobile')
      .populate('doctorUser', 'name email')
      .sort({ createdAt: -1 })
      .limit(5);

    // Specialty distribution
    const doctors = await Doctor.find().select('specialization district');
    const specialtyDistribution = {};
    const districtDistribution = {};

    doctors.forEach(doc => {
      specialtyDistribution[doc.specialization] = (specialtyDistribution[doc.specialization] || 0) + 1;
      districtDistribution[doc.district] = (districtDistribution[doc.district] || 0) + 1;
    });

    res.status(200).json({
      status: 'success',
      data: {
        metrics: {
          totalUsers,
          totalPatients,
          totalDoctors,
          totalAppointments,
          totalPrescriptions,
          pendingAppointments,
          confirmedAppointments,
          completedAppointments,
          cancelledAppointments
        },
        specialtyDistribution,
        districtDistribution,
        recentAppointments
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all users with filtering
 * @route   GET /api/admin/users
 * @access  Private (Admin only)
 */
const getAllUsers = async (req, res, next) => {
  try {
    const { role, search, isActive } = req.query;
    let query = {};

    if (role && role !== 'All') {
      query.role = role;
    }

    if (isActive !== undefined && isActive !== 'All') {
      query.isActive = isActive === 'true';
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { mobile: { $regex: search, $options: 'i' } }
      ];
    }

    const users = await User.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: users
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Toggle User Active / Deactive status
 * @route   PATCH /api/admin/users/:id/toggle-status
 * @access  Private (Admin only)
 */
const toggleUserStatus = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ status: 'fail', message: 'User not found' });
    }

    if (user.role === 'admin') {
      return res.status(400).json({ status: 'fail', message: 'Cannot deactivate an administrator' });
    }

    user.isActive = !user.isActive;
    await user.save();

    res.status(200).json({
      status: 'success',
      message: `User '${user.name}' has been ${user.isActive ? 'activated' : 'deactivated'} successfully`,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Broadcast System Notification
 * @route   POST /api/admin/broadcast
 * @access  Private (Admin only)
 */
const broadcastSystemNotification = async (req, res, next) => {
  try {
    const { targetRole, title, message } = req.body;

    if (!title || !message) {
      return res.status(400).json({ status: 'fail', message: 'Please provide title and message' });
    }

    let query = { isActive: true };
    if (targetRole && targetRole !== 'All') {
      query.role = targetRole;
    }

    const users = await User.find(query).select('_id');
    const userIds = users.map(u => u._id);

    await broadcastNotification({
      userIds,
      title: `[Hospital Broadcast] ${title}`,
      message,
      type: 'system'
    });

    res.status(200).json({
      status: 'success',
      message: `Notification broadcasted to ${userIds.length} user(s)`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAdminOverview,
  getAllUsers,
  toggleUserStatus,
  broadcastSystemNotification
};
