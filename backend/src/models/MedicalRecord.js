const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  bloodPressure: { type: String, default: '120/80 mmHg' },
  heartRate: { type: String, default: '72 bpm' },
  temperature: { type: String, default: '98.6 °F' },
  weight: { type: String, default: '68 kg' },
  height: { type: String, default: '170 cm' },
  oxygenSaturation: { type: String, default: '99%' }
});

const medicalRecordSchema = new mongoose.Schema({
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
  recordDate: {
    type: Date,
    default: Date.now
  },
  diagnosis: {
    type: String,
    required: [true, 'Please provide clinical diagnosis'],
    trim: true
  },
  symptoms: {
    type: String,
    default: '',
    trim: true
  },
  vitals: {
    type: vitalsSchema,
    default: () => ({})
  },
  clinicalFindings: {
    type: String,
    default: ''
  },
  doctorNotes: {
    type: String,
    default: ''
  },
  recommendedTests: [String],
  followUpDate: {
    type: String, // YYYY-MM-DD
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
