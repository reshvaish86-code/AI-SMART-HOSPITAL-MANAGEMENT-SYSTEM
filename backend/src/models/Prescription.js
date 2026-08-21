const mongoose = require('mongoose');

const medicineItemSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: [true, 'Please provide medicine name'],
    trim: true
  },
  dosage: {
    type: String,
    required: [true, 'Please provide dosage (e.g., 500mg, 1 tablet)'],
    trim: true
  },
  frequency: {
    type: String,
    required: [true, 'Please specify frequency (e.g., 1-0-1, Once daily)'],
    trim: true
  },
  duration: {
    type: String,
    required: [true, 'Please specify duration (e.g., 5 Days, 1 Month)'],
    trim: true
  },
  instructions: {
    type: String,
    default: 'After food',
    trim: true
  }
});

const prescriptionSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
    index: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  diagnosis: {
    type: String,
    required: [true, 'Please provide clinical diagnosis for prescription'],
    trim: true
  },
  medicines: {
    type: [medicineItemSchema],
    validate: [v => Array.isArray(v) && v.length > 0, 'Prescription must contain at least one medication']
  },
  generalAdvice: {
    type: String,
    default: 'Drink adequate water, maintain balanced nutrition, and rest properly.'
  },
  dietaryRestrictions: {
    type: String,
    default: ''
  },
  isDigitallySigned: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
