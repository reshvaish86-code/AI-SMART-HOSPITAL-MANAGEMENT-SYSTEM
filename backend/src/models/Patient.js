const mongoose = require('mongoose');

const medicineReminderSchema = new mongoose.Schema({
  medicineName: {
    type: String,
    required: true
  },
  dosage: String,
  time: String, // e.g. '08:00 AM'
  frequency: String, // e.g. 'Daily', 'Twice a day'
  instructions: String,
  isActive: {
    type: Boolean,
    default: true
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
