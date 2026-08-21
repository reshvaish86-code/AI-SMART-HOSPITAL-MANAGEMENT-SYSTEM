/**
 * AI Smart Hospital Management System - Frontend Configuration
 */

const CONFIG = {
  API_BASE_URL: window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
    ? 'http://localhost:5000/api'
    : '/api',

  SPECIALIZATIONS: [
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
  ],

  TAMIL_NADU_DISTRICTS: [
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
  ],

  CLINICAL_DISCLAIMER: '⚠️ IMPORTANT MEDICAL DISCLAIMER: This AI Health Assistant provides preliminary triage, educational guidance, and specialist recommendations only. It is NOT a certified medical practitioner, diagnostic device, or substitute for professional clinical judgment. If you are experiencing an emergency, call 108/112 or visit the nearest emergency department immediately.'
};
