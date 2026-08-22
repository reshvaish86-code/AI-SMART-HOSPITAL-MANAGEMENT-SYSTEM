const mongoose = require('mongoose');

const medicineReminderSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: String,
    trim: true
  },
  medicineName: {
    type: String,
    required: true,
    trim: true
  },
  dosage: {
    type: String,
    default: '1 Tablet'
  },
  time: {
    type: String, // e.g. '08:00 AM' or '21:00'
    required: true
  },
  frequency: {
    type: String, // e.g. 'Daily', 'Twice a day'
    default: 'Daily'
  },
  instructions: {
    type: String, // e.g. 'After food with warm water'
    default: 'After food'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const patientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: [true, 'Please provide patient age'],
    min: [0, 'Age cannot be negative'],
    max: [130, 'Age is invalid']
  },
  gender: {
    type: String,
    required: [true, 'Please provide patient gender'],
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    type: String,
    required: [true, 'Please provide residential address'],
    trim: true
  },
  district: {
    type: String,
    default: 'Chennai',
    trim: true
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Unknown'],
    default: 'Unknown'
  },
  allergies: {
    type: [String],
    default: []
  },
  chronicConditions: {
    type: [String],
    default: []
  },
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  medicineReminders: [medicineReminderSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Patient', patientSchema);
