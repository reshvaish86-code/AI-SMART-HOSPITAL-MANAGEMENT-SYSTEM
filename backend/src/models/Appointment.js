const mongoose = require('mongoose');
const { APPOINTMENT_STATUS } = require('../utils/constants');

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  patientUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  doctorUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  specialist: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: String, // Stored as ISO YYYY-MM-DD for deterministic date matching
    required: [true, 'Please select appointment date']
  },
  timeSlot: {
    type: String, // e.g., '10:00 AM'
    required: [true, 'Please select appointment time slot']
  },
  location: {
    type: String,
    required: true
  },
  hospital: {
    type: String,
    default: ''
  },
  reasonForVisit: {
    type: String,
    required: [true, 'Please provide reason for visit or symptoms'],
    trim: true
  },
  status: {
    type: String,
    enum: Object.values(APPOINTMENT_STATUS),
    default: APPOINTMENT_STATUS.PENDING,
    index: true
  },
  consultationFee: {
    type: Number,
    default: 500
  },
  paymentStatus: {
    type: String,
    enum: ['Unpaid', 'Paid', 'Waived'],
    default: 'Unpaid'
  },
  doctorNotes: {
    type: String,
    default: ''
  },
  cancellationReason: {
    type: String,
    default: ''
  },
  rescheduleHistory: [{
    previousDate: String,
    previousTimeSlot: String,
    rescheduledAt: { type: Date, default: Date.now }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for query optimization on appointments by doctor and date
appointmentSchema.index({ doctor: 1, appointmentDate: 1, timeSlot: 1 });
appointmentSchema.index({ patient: 1, appointmentDate: 1 });

module.exports = mongoose.model('Appointment', appointmentSchema);
