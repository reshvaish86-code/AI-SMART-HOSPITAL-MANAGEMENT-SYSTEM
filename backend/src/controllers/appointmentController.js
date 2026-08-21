const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const { sendNotification } = require('../services/notificationService');
const { APPOINTMENT_STATUS } = require('../utils/constants');

/**
 * @desc    Book a new Appointment with collision prevention & past date check
 * @route   POST /api/appointments
 * @access  Private (Patient only)
 */
const bookAppointment = async (req, res, next) => {
  try {
    const { doctorId, appointmentDate, timeSlot, reasonForVisit } = req.body;

    if (!doctorId || !appointmentDate || !timeSlot || !reasonForVisit) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide doctorId, appointmentDate, timeSlot, and reasonForVisit'
      });
    }

    // 1. Past-date protection
    const today = new Date().toISOString().split('T')[0];
    if (appointmentDate < today) {
      return res.status(400).json({
        status: 'fail',
        message: 'Cannot schedule an appointment for a past date.'
      });
    }

    // 2. Fetch Doctor
    const doctor = await Doctor.findById(doctorId).populate('user', 'name email mobile');
    if (!doctor) {
      return res.status(404).json({
        status: 'fail',
        message: 'Selected doctor could not be found'
      });
    }

    // 3. Fetch Patient
    const patient = await Patient.findOne({ user: req.user._id }).populate('user', 'name email mobile');
    if (!patient) {
      return res.status(404).json({
        status: 'fail',
        message: 'Patient profile not found for this account'
      });
    }

    // 4. Strict Slot Collision / Double-Booking Prevention
    const existingBooking = await Appointment.findOne({
      doctor: doctor._id,
      appointmentDate: appointmentDate,
      timeSlot: timeSlot,
      status: { $in: [APPOINTMENT_STATUS.PENDING, APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.RESCHEDULED] }
    });

    if (existingBooking) {
      return res.status(409).json({
        status: 'fail',
        message: `Collision Detected: Dr. ${doctor.user.name} is already booked at ${timeSlot} on ${appointmentDate}. Please choose another available slot.`
      });
    }

    // 5. Create Appointment
    const appointment = await Appointment.create({
      patient: patient._id,
      patientUser: req.user._id,
      doctor: doctor._id,
      doctorUser: doctor.user._id,
      specialist: doctor.specialization,
      appointmentDate,
      timeSlot,
      location: doctor.district,
      hospital: doctor.hospital,
      reasonForVisit,
      consultationFee: doctor.consultationFee || 500,
      status: APPOINTMENT_STATUS.PENDING
    });

    // 6. Dispatch Notifications
    // To Doctor
    await sendNotification({
      recipient: doctor.user._id,
      title: 'New Appointment Booking Request',
      message: `Patient ${patient.user.name} requested an appointment on ${appointmentDate} at ${timeSlot} for "${reasonForVisit}".`,
      type: 'appointment',
      relatedId: appointment._id.toString()
    });

    // To Patient
    await sendNotification({
      recipient: req.user._id,
      title: 'Appointment Request Submitted',
      message: `Your appointment with Dr. ${doctor.user.name} (${doctor.specialization}) on ${appointmentDate} at ${timeSlot} has been submitted (Status: Pending).`,
      type: 'appointment',
      relatedId: appointment._id.toString()
    });

    res.status(201).json({
      status: 'success',
      message: 'Appointment booked successfully and awaiting doctor confirmation',
      data: appointment
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get user's appointments (Patient or Doctor or Admin)
 * @route   GET /api/appointments
 * @access  Private
 */
const getMyAppointments = async (req, res, next) => {
  try {
    let query = {};
    const { status, date } = req.query;

    if (req.user.role === 'patient') {
      const patient = await Patient.findOne({ user: req.user._id });
      if (!patient) return res.status(200).json({ status: 'success', results: 0, data: [] });
      query.patient = patient._id;
    } else if (req.user.role === 'doctor') {
      const doctor = await Doctor.findOne({ user: req.user._id });
      if (!doctor) return res.status(200).json({ status: 'success', results: 0, data: [] });
      query.doctor = doctor._id;
    }

    if (status && status !== 'All') {
      query.status = status;
    }

    if (date) {
      query.appointmentDate = date;
    }

    const appointments = await Appointment.find(query)
      .populate({
        path: 'patient',
        populate: { path: 'user', select: 'name email mobile' }
      })
      .populate({
        path: 'doctor',
        populate: { path: 'user', select: 'name email mobile' }
      })
      .sort({ appointmentDate: -1, timeSlot: 1 });

    res.status(200).json({
      status: 'success',
      results: appointments.length,
      data: appointments
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get Booked slots for a doctor on a specific date (Slot Collision visualizer)
 * @route   GET /api/appointments/booked-slots
 * @access  Public
 */
const getBookedSlots = async (req, res, next) => {
  try {
    const { doctorId, date } = req.query;

    if (!doctorId || !date) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide doctorId and date'
      });
    }

    const activeBookings = await Appointment.find({
      doctor: doctorId,
      appointmentDate: date,
      status: { $in: [APPOINTMENT_STATUS.PENDING, APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.RESCHEDULED] }
    }).select('timeSlot status');

    const bookedSlots = activeBookings.map(b => b.timeSlot);

    res.status(200).json({
      status: 'success',
      date,
      bookedSlots
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update Appointment Status (Accept, Reject, Reschedule, Complete, Cancel)
 * @route   PATCH /api/appointments/:id/status
 * @access  Private (Doctor, Patient, Admin)
 */
const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { status, doctorNotes, cancellationReason, newDate, newTimeSlot } = req.body;
    const appointment = await Appointment.findById(req.params.id)
      .populate('patientUser', 'name email')
      .populate('doctorUser', 'name email');

    if (!appointment) {
      return res.status(404).json({
        status: 'fail',
        message: 'Appointment not found'
      });
    }

    // Role-based action checks
    if (req.user.role === 'patient' && req.user._id.toString() !== appointment.patientUser._id.toString()) {
      return res.status(403).json({ status: 'fail', message: 'Unauthorized to modify this appointment' });
    }

    if (req.user.role === 'doctor' && req.user._id.toString() !== appointment.doctorUser._id.toString()) {
      return res.status(403).json({ status: 'fail', message: 'Unauthorized to modify this appointment' });
    }

    // Handling Rescheduling
    if (status === APPOINTMENT_STATUS.RESCHEDULED && newDate && newTimeSlot) {
      // Check collision on the new slot
      const collision = await Appointment.findOne({
        _id: { $ne: appointment._id },
        doctor: appointment.doctor,
        appointmentDate: newDate,
        timeSlot: newTimeSlot,
        status: { $in: [APPOINTMENT_STATUS.PENDING, APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.RESCHEDULED] }
      });

      if (collision) {
        return res.status(409).json({
          status: 'fail',
          message: `Slot collision: Target slot ${newTimeSlot} on ${newDate} is already occupied.`
        });
      }

      appointment.rescheduleHistory.push({
        previousDate: appointment.appointmentDate,
        previousTimeSlot: appointment.timeSlot,
        rescheduledAt: new Date()
      });

      appointment.appointmentDate = newDate;
      appointment.timeSlot = newTimeSlot;
    }

    if (status) appointment.status = status;
    if (doctorNotes) appointment.doctorNotes = doctorNotes;
    if (cancellationReason) appointment.cancellationReason = cancellationReason;

    await appointment.save();

    // Send notifications regarding status update
    const notificationTarget = req.user.role === 'doctor' ? appointment.patientUser._id : appointment.doctorUser._id;
    const actionBy = req.user.role === 'doctor' ? `Dr. ${req.user.name}` : req.user.name;

    await sendNotification({
      recipient: notificationTarget,
      title: `Appointment ${status}`,
      message: `Your appointment for ${appointment.appointmentDate} (${appointment.timeSlot}) has been marked as '${status}' by ${actionBy}.`,
      type: 'appointment',
      relatedId: appointment._id.toString()
    });

    res.status(200).json({
      status: 'success',
      message: `Appointment successfully updated to ${status}`,
      data: appointment
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  bookAppointment,
  getMyAppointments,
  getBookedSlots,
  updateAppointmentStatus
};
