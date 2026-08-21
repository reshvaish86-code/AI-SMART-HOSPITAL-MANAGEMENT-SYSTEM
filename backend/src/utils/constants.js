/**
 * AI Smart Hospital Management System - Domain Constants
 */

const SPECIALIZATIONS = [
  'General Physician',
  'Cardiologist',
  'Dermatologist',
  'Neurologist',
  'Pediatrician',
  'Orthopedic',
  'Gynecologist',
  'ENT Specialist',
  'Ophthalmologist',
  'Psychiatrist',
  'Dentist',
  'Pulmonologist',
  'Gastroenterologist',
  'Urologist'
];

const TAMIL_NADU_DISTRICTS = [
  'Chennai',
  'Coimbatore',
  'Madurai',
  'Salem',
  'Tiruchirappalli',
  'Tirunelveli',
  'Vellore',
  'Erode',
  'Thanjavur',
  'Dindigul',
  'Kanchipuram',
  'Chengalpattu',
  'Tiruppur',
  'Cuddalore',
  'Karur',
  'Nagapattinam',
  'Namakkal',
  'Nilgiris',
  'Pudukkottai',
  'Ramanathapuram',
  'Sivaganga',
  'Tenkasi',
  'Theni',
  'Thoothukudi',
  'Tiruvallur',
  'Tiruvannamalai',
  'Tiruvarur',
  'Ranipet',
  'Tirupattur',
  'Viluppuram',
  'Virudhunagar',
  'Krishnagiri',
  'Dharmapuri',
  'Ariyalur',
  'Perambalur',
  'Kallakurichi',
  'Mayiladuthurai',
  'Kanniyakumari'
];

const USER_ROLES = {
  PATIENT: 'patient',
  DOCTOR: 'doctor',
  ADMIN: 'admin'
};

const APPOINTMENT_STATUS = {
  PENDING: 'Pending',
  CONFIRMED: 'Confirmed',
  REJECTED: 'Rejected',
  RESCHEDULED: 'Rescheduled',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled'
};

const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const DEFAULT_TIME_SLOTS = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM'
];

module.exports = {
  SPECIALIZATIONS,
  TAMIL_NADU_DISTRICTS,
  USER_ROLES,
  APPOINTMENT_STATUS,
  DAYS_OF_WEEK,
  DEFAULT_TIME_SLOTS
};
