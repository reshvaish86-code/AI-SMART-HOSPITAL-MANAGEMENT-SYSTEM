const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const { 
  sendAppointmentConfirmation, 
  sendAppointmentStatusUpdate,
  sendPreAppointmentReminder
} = require('../services/notificationService');
const { parseTimeSlot } = require('../services/cronService');
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
      status: APPOINTMENT_STATUS.PENDING,
      reminderSent: false
    });

    // 6. Dispatch Multi-Channel Notifications (Email, SMS & In-App)
    await sendAppointmentConfirmation({
      appointment,
      patientUser: req.user,
      doctorUser: doctor.user,
      doctorProfile: doctor
    });

    // Check if slot starts today within 90 minutes -> Send 1-Hour pre-appointment reminder email too!
    const slotTime = parseTimeSlot(timeSlot);
    if (slotTime && appointmentDate === today) {
      const now = new Date();
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const slotMinutes = slotTime.hours * 60 + slotTime.minutes;
      const diff = slotMinutes - currentMinutes;
      if (diff >= 0 && diff <= 90) {
        sendPreAppointmentReminder({
          appointment,
          patientUser: req.user,
          doctorUser: doctor.user,
          doctorProfile: doctor
        }).catch(err => console.error('Error auto-triggering pre-appointment reminder:', err));
        appointment.reminderSent = true;
        await appointment.save();
      }
    }

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
    if (req.user.role === 'patient') {
      query.patientUser = req.user._id;
    } else if (req.user.role === 'doctor') {
      query.doctorUser = req.user._id;
    }

    const appointments = await Appointment.find(query)
      .populate('doctor', 'hospital specialization consultationFee experience district rating')
      .populate('doctorUser', 'name email mobile')
      .populate('patientUser', 'name email mobile')
      .populate('patient', 'age gender bloodGroup emergencyContact')
      .sort({ appointmentDate: -1, createdAt: -1 });

    res.status(200).json({
      status: 'success',
      count: appointments.length,
      data: appointments
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get booked slots for a specific doctor on a specific date (for real-time frontend disable)
 * @route   GET /api/appointments/booked-slots
 * @access  Public
 */
const getBookedSlots = async (req, res, next) => {
  try {
    const { doctorId, date } = req.query;
    if (!doctorId || !date) {
      return res.status(400).json({
        status: 'fail',
        message: 'doctorId and date query parameters are required'
      });
    }

    const appointments = await Appointment.find({
      doctor: doctorId,
      appointmentDate: date,
      status: { $in: [APPOINTMENT_STATUS.PENDING, APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.RESCHEDULED] }
    }).select('timeSlot status -_id');

    const bookedSlots = appointments.map(a => a.timeSlot);

    res.status(200).json({
      status: 'success',
      doctorId,
      date,
      bookedSlots
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update Appointment Status (Confirm, Complete, Cancel, Reschedule)
 * @route   PATCH /api/appointments/:id/status
 * @access  Private (Doctor, Patient, Admin)
 */
const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, doctorNotes, cancellationReason, newDate, newTimeSlot } = req.body;

    const appointment = await Appointment.findById(id)
      .populate('patientUser', 'name email mobile')
      .populate('doctorUser', 'name email mobile')
      .populate('doctor', 'hospital specialization');

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
        doctor: appointment.doctor._id || appointment.doctor,
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
      appointment.reminderSent = false; // Reset reminder flag for new date
    }

    if (status) appointment.status = status;
    if (doctorNotes) appointment.doctorNotes = doctorNotes;
    if (cancellationReason) appointment.cancellationReason = cancellationReason;

    await appointment.save();

    // Dispatch status update notifications (Email, In-App)
    await sendAppointmentStatusUpdate({
      appointment,
      patientUser: appointment.patientUser,
      doctorUser: appointment.doctorUser,
      status,
      reason: cancellationReason || doctorNotes
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

/**
 * @desc    Manually dispatch 1-Hour Pre-Appointment Reminder Email & Alerts on demand
 * @route   POST /api/appointments/:id/send-reminder
 * @access  Private (Patient, Doctor, Admin)
 */
const sendManualAppointmentReminder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id)
      .populate('patientUser', 'name email mobile')
      .populate('doctorUser', 'name email mobile')
      .populate('doctor', 'hospital specialization');

    if (!appointment) {
      return res.status(404).json({ status: 'fail', message: 'Appointment not found' });
    }

    // Role-based access check
    if (req.user.role === 'patient' && req.user._id.toString() !== appointment.patientUser._id.toString()) {
      return res.status(403).json({ status: 'fail', message: 'Unauthorized to send reminder for this appointment' });
    }

    await sendPreAppointmentReminder({
      appointment,
      patientUser: appointment.patientUser,
      doctorUser: appointment.doctorUser,
      doctorProfile: appointment.doctor
    });

    appointment.reminderSent = true;
    await appointment.save();

    res.status(200).json({
      status: 'success',
      message: `⏰ 1-Hour Pre-Appointment Reminder successfully dispatched to ${appointment.patientUser?.email || 'patient'}!`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  bookAppointment,
  getMyAppointments,
  getBookedSlots,
  updateAppointmentStatus,
  sendManualAppointmentReminder
};
