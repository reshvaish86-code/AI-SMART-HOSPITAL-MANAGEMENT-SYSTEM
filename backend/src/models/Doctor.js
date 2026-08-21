const mongoose = require('mongoose');
const { SPECIALIZATIONS, TAMIL_NADU_DISTRICTS, DAYS_OF_WEEK, DEFAULT_TIME_SLOTS } = require('../utils/constants');

const doctorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  qualification: {
    type: String,
    required: [true, 'Please provide doctor qualification (e.g., MBBS, MD, MS)'],
    trim: true
  },
  specialization: {
    type: String,
    required: [true, 'Please select a medical specialization'],
    enum: SPECIALIZATIONS,
    index: true
  },
  experience: {
    type: Number,
    required: [true, 'Please specify years of medical experience'],
    min: [0, 'Experience cannot be negative']
  },
  hospital: {
    type: String,
    required: [true, 'Please provide Hospital or Clinic name'],
    trim: true
  },
  district: {
    type: String,
    required: [true, 'Please select Tamil Nadu District/Location'],
    enum: TAMIL_NADU_DISTRICTS,
    index: true
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  consultationFee: {
    type: Number,
    required: [true, 'Please specify consultation fee in INR'],
    min: [0, 'Fee cannot be negative'],
    default: 500
  },
  availableDays: {
    type: [String],
    enum: DAYS_OF_WEEK,
    default: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  availableTimeSlots: {
    type: [String],
    default: DEFAULT_TIME_SLOTS
  },
  rating: {
    type: Number,
    default: 4.8,
    min: 1,
    max: 5
  },
  reviewCount: {
    type: Number,
    default: 24
  },
  bio: {
    type: String,
    default: 'Experienced healthcare professional dedicated to comprehensive and compassionate patient care.'
  },
  isVerified: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Text indexing for fast search by name, hospital, specialization and district
doctorSchema.index({ specialization: 1, district: 1 });

module.exports = mongoose.model('Doctor', doctorSchema);
