const mongoose = require('mongoose');

const medicineReminderSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: [true, 'Please enter patient name for this reminder'],
    trim: true
  },
  mobileNumber: {
    type: String,
    required: [true, 'Please enter mobile number to receive reminder alerts'],
    trim: true
  },
  medicineName: {
    type: String,
    required: [true, 'Please provide medicine name'],
    trim: true
  },
  dosage: {
    type: String,
    default: '1 Tablet / Dose'
  },
  time: {
    type: String, // e.g. '09:00 PM' or '21:00'
    required: [true, 'Please select reminder time']
  },
  frequency: {
    type: String,
    default: 'Daily'
  },
  instructions: {
    type: String,
    default: 'Take after meals with water'
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
