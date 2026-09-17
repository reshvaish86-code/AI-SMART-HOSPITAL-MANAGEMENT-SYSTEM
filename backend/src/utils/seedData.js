/**
 * Database Seed Data with 22 Specialties & All 38 Tamil Nadu Districts (220 Doctors)
 */
const mongoose = require('mongoose');
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription');
const MedicalRecord = require('../models/MedicalRecord');

const SEED_DOCTORS = [
  {
    "name": "Dr. Ayaan Kapoor",
    "email": "_ayaan_kapoor1@hospital.com",
    "mobile": "+91 9840100001",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Apollo Hospitals, Greams Road",
    "district": "Chennai",
    "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 9,
    "bio": "Certified General Physician specialist at Apollo Hospitals, Greams Road providing comprehensive clinical healthcare for patients in Chennai and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Kapoor",
    "email": "_kiara_kapoor2@hospital.com",
    "mobile": "+91 9840100002",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "PSG Hospitals, Peelamedu",
    "district": "Coimbatore",
    "address": "PSG Hospitals, Peelamedu, Coimbatore, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 10,
    "bio": "Certified General Physician specialist at PSG Hospitals, Peelamedu providing comprehensive clinical healthcare for patients in Coimbatore and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Malhotra",
    "email": "_vihaan_malhotra3@hospital.com",
    "mobile": "+91 9840100003",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Government Rajaji Hospital & Medical College",
    "district": "Madurai",
    "address": "Government Rajaji Hospital & Medical College, Madurai, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 11,
    "bio": "Certified General Physician specialist at Government Rajaji Hospital & Medical College providing comprehensive clinical healthcare for patients in Madurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Bansal",
    "email": "_pooja_bansal4@hospital.com",
    "mobile": "+91 9840100004",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Manipal Hospitals, Dalmia Board",
    "district": "Salem",
    "address": "Manipal Hospitals, Dalmia Board, Salem, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 12,
    "bio": "Certified General Physician specialist at Manipal Hospitals, Dalmia Board providing comprehensive clinical healthcare for patients in Salem and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Chawla",
    "email": "_riaan_chawla5@hospital.com",
    "mobile": "+91 9840100005",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Kauvery Hospital, Cantonment",
    "district": "Tiruchirappalli",
    "address": "Kauvery Hospital, Cantonment, Tiruchirappalli, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 13,
    "bio": "Certified General Physician specialist at Kauvery Hospital, Cantonment providing comprehensive clinical healthcare for patients in Tiruchirappalli and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Advani",
    "email": "_alia_advani6@hospital.com",
    "mobile": "+91 9840100006",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Tirunelveli Medical College Hospital, High Ground",
    "district": "Tirunelveli",
    "address": "Tirunelveli Medical College Hospital, High Ground, Tirunelveli, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 14,
    "bio": "Certified General Physician specialist at Tirunelveli Medical College Hospital, High Ground providing comprehensive clinical healthcare for patients in Tirunelveli and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Mehta",
    "email": "_reyansh_mehta7@hospital.com",
    "mobile": "+91 9840100007",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Christian Medical College (CMC) Hospital, Ida Scudder Road",
    "district": "Vellore",
    "address": "Christian Medical College (CMC) Hospital, Ida Scudder Road, Vellore, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 15,
    "bio": "Certified General Physician specialist at Christian Medical College (CMC) Hospital, Ida Scudder Road providing comprehensive clinical healthcare for patients in Vellore and across Tamil Nadu."
  },
  {
    "name": "Dr. Shruthi Menon",
    "email": "_shruthi_menon8@hospital.com",
    "mobile": "+91 9840100008",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Government Erode Medical College Hospital, Perundurai",
    "district": "Erode",
    "address": "Government Erode Medical College Hospital, Perundurai, Erode, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 16,
    "bio": "Certified General Physician specialist at Government Erode Medical College Hospital, Perundurai providing comprehensive clinical healthcare for patients in Erode and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Khanna",
    "email": "_advik_khanna9@hospital.com",
    "mobile": "+91 9840100009",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Thanjavur Medical College Hospital, Medical College Road",
    "district": "Thanjavur",
    "address": "Thanjavur Medical College Hospital, Medical College Road, Thanjavur, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 17,
    "bio": "Certified General Physician specialist at Thanjavur Medical College Hospital, Medical College Road providing comprehensive clinical healthcare for patients in Thanjavur and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Sethi",
    "email": "_myra_sethi10@hospital.com",
    "mobile": "+91 9840100010",
    "specialization": "General Physician",
    "qualification": "MBBS, MD (General Medicine)",
    "hospital": "Government District Headquarters Hospital, Dindigul",
    "district": "Dindigul",
    "address": "Government District Headquarters Hospital, Dindigul, Dindigul, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 18,
    "bio": "Certified General Physician specialist at Government District Headquarters Hospital, Dindigul providing comprehensive clinical healthcare for patients in Dindigul and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Khanna",
    "email": "_kareena_khanna11@hospital.com",
    "mobile": "+91 9840100011",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government Erode Medical College Hospital, Perundurai",
    "district": "Erode",
    "address": "Government Erode Medical College Hospital, Perundurai, Erode, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 19,
    "bio": "Certified Cardiologist specialist at Government Erode Medical College Hospital, Perundurai providing comprehensive clinical healthcare for patients in Erode and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Kapoor",
    "email": "_arush_kapoor12@hospital.com",
    "mobile": "+91 9840100012",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Thanjavur Medical College Hospital, Medical College Road",
    "district": "Thanjavur",
    "address": "Thanjavur Medical College Hospital, Medical College Road, Thanjavur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 20,
    "bio": "Certified Cardiologist specialist at Thanjavur Medical College Hospital, Medical College Road providing comprehensive clinical healthcare for patients in Thanjavur and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Malhotra",
    "email": "_deepika_malhotra13@hospital.com",
    "mobile": "+91 9840100013",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government District Headquarters Hospital, Dindigul",
    "district": "Dindigul",
    "address": "Government District Headquarters Hospital, Dindigul, Dindigul, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 21,
    "bio": "Certified Cardiologist specialist at Government District Headquarters Hospital, Dindigul providing comprehensive clinical healthcare for patients in Dindigul and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Siddiqui",
    "email": "_zayan_siddiqui14@hospital.com",
    "mobile": "+91 9840100014",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Arignar Anna Memorial Cancer Hospital & Research Institute",
    "district": "Kanchipuram",
    "address": "Arignar Anna Memorial Cancer Hospital & Research Institute, Kanchipuram, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 22,
    "bio": "Certified Cardiologist specialist at Arignar Anna Memorial Cancer Hospital & Research Institute providing comprehensive clinical healthcare for patients in Kanchipuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Mehra",
    "email": "_kriti_mehra15@hospital.com",
    "mobile": "+91 9840100015",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Chengalpattu Government Medical College Hospital, GST Road",
    "district": "Chengalpattu",
    "address": "Chengalpattu Government Medical College Hospital, GST Road, Chengalpattu, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 8,
    "bio": "Certified Cardiologist specialist at Chengalpattu Government Medical College Hospital, GST Road providing comprehensive clinical healthcare for patients in Chengalpattu and across Tamil Nadu."
  },
  {
    "name": "Dr. Ahan Oberoi",
    "email": "_ahan_oberoi16@hospital.com",
    "mobile": "+91 9840100016",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government Medical College Hospital, Tiruppur",
    "district": "Tiruppur",
    "address": "Government Medical College Hospital, Tiruppur, Tiruppur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 9,
    "bio": "Certified Cardiologist specialist at Government Medical College Hospital, Tiruppur providing comprehensive clinical healthcare for patients in Tiruppur and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Fernandes",
    "email": "_catherine_fernandes17@hospital.com",
    "mobile": "+91 9840100017",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government Headquarters Hospital, Cuddalore",
    "district": "Cuddalore",
    "address": "Government Headquarters Hospital, Cuddalore, Cuddalore, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 10,
    "bio": "Certified Cardiologist specialist at Government Headquarters Hospital, Cuddalore providing comprehensive clinical healthcare for patients in Cuddalore and across Tamil Nadu."
  },
  {
    "name": "Dr. Nivaan Arora",
    "email": "_nivaan_arora18@hospital.com",
    "mobile": "+91 9840100018",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government Medical College Hospital, Gandhigramam, Karur",
    "district": "Karur",
    "address": "Government Medical College Hospital, Gandhigramam, Karur, Karur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 11,
    "bio": "Certified Cardiologist specialist at Government Medical College Hospital, Gandhigramam, Karur providing comprehensive clinical healthcare for patients in Karur and across Tamil Nadu."
  },
  {
    "name": "Dr. Tara Kapoor",
    "email": "_tara_kapoor19@hospital.com",
    "mobile": "+91 9840100019",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government District Headquarters Hospital, Nagapattinam",
    "district": "Nagapattinam",
    "address": "Government District Headquarters Hospital, Nagapattinam, Nagapattinam, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 12,
    "bio": "Certified Cardiologist specialist at Government District Headquarters Hospital, Nagapattinam providing comprehensive clinical healthcare for patients in Nagapattinam and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Khurana",
    "email": "_reyansh_khurana20@hospital.com",
    "mobile": "+91 9840100020",
    "specialization": "Cardiologist",
    "qualification": "MBBS, MD, DM (Cardiology)",
    "hospital": "Government Medical College Hospital, Namakkal",
    "district": "Namakkal",
    "address": "Government Medical College Hospital, Namakkal, Namakkal, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 13,
    "bio": "Certified Cardiologist specialist at Government Medical College Hospital, Namakkal providing comprehensive clinical healthcare for patients in Namakkal and across Tamil Nadu."
  },
  {
    "name": "Dr. Rayaan Kapoor",
    "email": "_rayaan_kapoor21@hospital.com",
    "mobile": "+91 9840100021",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College Hospital, Gandhigramam, Karur",
    "district": "Karur",
    "address": "Government Medical College Hospital, Gandhigramam, Karur, Karur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 14,
    "bio": "Certified Neurologist specialist at Government Medical College Hospital, Gandhigramam, Karur providing comprehensive clinical healthcare for patients in Karur and across Tamil Nadu."
  },
  {
    "name": "Dr. Karthik Raman",
    "email": "_karthik_raman22@hospital.com",
    "mobile": "+91 9840100022",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government District Headquarters Hospital, Nagapattinam",
    "district": "Nagapattinam",
    "address": "Government District Headquarters Hospital, Nagapattinam, Nagapattinam, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 15,
    "bio": "Certified Neurologist specialist at Government District Headquarters Hospital, Nagapattinam providing comprehensive clinical healthcare for patients in Nagapattinam and across Tamil Nadu."
  },
  {
    "name": "Dr. Naveen Chandran",
    "email": "_naveen_chandran23@hospital.com",
    "mobile": "+91 9840100023",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College Hospital, Namakkal",
    "district": "Namakkal",
    "address": "Government Medical College Hospital, Namakkal, Namakkal, Tamil Nadu",
    "consultationFee": 850,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 16,
    "bio": "Certified Neurologist specialist at Government Medical College Hospital, Namakkal providing comprehensive clinical healthcare for patients in Namakkal and across Tamil Nadu."
  },
  {
    "name": "Dr. Harish Balan",
    "email": "_harish_balan24@hospital.com",
    "mobile": "+91 9840100024",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College & District Hospital, Ooty",
    "district": "Nilgiris",
    "address": "Government Medical College & District Hospital, Ooty, Nilgiris, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 17,
    "bio": "Certified Neurologist specialist at Government Medical College & District Hospital, Ooty providing comprehensive clinical healthcare for patients in Nilgiris and across Tamil Nadu."
  },
  {
    "name": "Dr. Manish Gupta",
    "email": "_manish_gupta25@hospital.com",
    "mobile": "+91 9840100025",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College Hospital, Pudukkottai",
    "district": "Pudukkottai",
    "address": "Government Medical College Hospital, Pudukkottai, Pudukkottai, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 18,
    "bio": "Certified Neurologist specialist at Government Medical College Hospital, Pudukkottai providing comprehensive clinical healthcare for patients in Pudukkottai and across Tamil Nadu."
  },
  {
    "name": "Dr. Rohit Mehta",
    "email": "_rohit_mehta26@hospital.com",
    "mobile": "+91 9840100026",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College Hospital, Ramanathapuram",
    "district": "Ramanathapuram",
    "address": "Government Medical College Hospital, Ramanathapuram, Ramanathapuram, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 19,
    "bio": "Certified Neurologist specialist at Government Medical College Hospital, Ramanathapuram providing comprehensive clinical healthcare for patients in Ramanathapuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Abhinav Singh",
    "email": "_abhinav_singh27@hospital.com",
    "mobile": "+91 9840100027",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College Hospital, Sivaganga",
    "district": "Sivaganga",
    "address": "Government Medical College Hospital, Sivaganga, Sivaganga, Tamil Nadu",
    "consultationFee": 850,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 20,
    "bio": "Certified Neurologist specialist at Government Medical College Hospital, Sivaganga providing comprehensive clinical healthcare for patients in Sivaganga and across Tamil Nadu."
  },
  {
    "name": "Dr. Arvind Krishnan",
    "email": "_arvind_krishnan28@hospital.com",
    "mobile": "+91 9840100028",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government District Headquarters Hospital, Tenkasi",
    "district": "Tenkasi",
    "address": "Government District Headquarters Hospital, Tenkasi, Tenkasi, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 21,
    "bio": "Certified Neurologist specialist at Government District Headquarters Hospital, Tenkasi providing comprehensive clinical healthcare for patients in Tenkasi and across Tamil Nadu."
  },
  {
    "name": "Dr. Sidharth Nanda",
    "email": "_sidharth_nanda29@hospital.com",
    "mobile": "+91 9840100029",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Theni Medical College & Hospital, Kanavilku",
    "district": "Theni",
    "address": "Government Theni Medical College & Hospital, Kanavilku, Theni, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 22,
    "bio": "Certified Neurologist specialist at Government Theni Medical College & Hospital, Kanavilku providing comprehensive clinical healthcare for patients in Theni and across Tamil Nadu."
  },
  {
    "name": "Dr. Tanisha Kapoor",
    "email": "_tanisha_kapoor30@hospital.com",
    "mobile": "+91 9840100030",
    "specialization": "Neurologist",
    "qualification": "MBBS, MD, DM (Neurology)",
    "hospital": "Government Medical College Hospital, Thoothukudi",
    "district": "Thoothukudi",
    "address": "Government Medical College Hospital, Thoothukudi, Thoothukudi, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 8,
    "bio": "Certified Neurologist specialist at Government Medical College Hospital, Thoothukudi providing comprehensive clinical healthcare for patients in Thoothukudi and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Mehta",
    "email": "_alia_mehta31@hospital.com",
    "mobile": "+91 9840100031",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government District Headquarters Hospital, Tenkasi",
    "district": "Tenkasi",
    "address": "Government District Headquarters Hospital, Tenkasi, Tenkasi, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 9,
    "bio": "Certified Nephrologist specialist at Government District Headquarters Hospital, Tenkasi providing comprehensive clinical healthcare for patients in Tenkasi and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Khurana",
    "email": "_vihaan_khurana32@hospital.com",
    "mobile": "+91 9840100032",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Theni Medical College & Hospital, Kanavilku",
    "district": "Theni",
    "address": "Government Theni Medical College & Hospital, Kanavilku, Theni, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 10,
    "bio": "Certified Nephrologist specialist at Government Theni Medical College & Hospital, Kanavilku providing comprehensive clinical healthcare for patients in Theni and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Sethi",
    "email": "_malavika_sethi33@hospital.com",
    "mobile": "+91 9840100033",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Medical College Hospital, Thoothukudi",
    "district": "Thoothukudi",
    "address": "Government Medical College Hospital, Thoothukudi, Thoothukudi, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 11,
    "bio": "Certified Nephrologist specialist at Government Medical College Hospital, Thoothukudi providing comprehensive clinical healthcare for patients in Thoothukudi and across Tamil Nadu."
  },
  {
    "name": "Dr. Aarav Bansal",
    "email": "_aarav_bansal34@hospital.com",
    "mobile": "+91 9840100034",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Medical College Hospital, Tiruvallur",
    "district": "Tiruvallur",
    "address": "Government Medical College Hospital, Tiruvallur, Tiruvallur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 12,
    "bio": "Certified Nephrologist specialist at Government Medical College Hospital, Tiruvallur providing comprehensive clinical healthcare for patients in Tiruvallur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Mehra",
    "email": "_kiara_mehra35@hospital.com",
    "mobile": "+91 9840100035",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Medical College Hospital, Tiruvannamalai",
    "district": "Tiruvannamalai",
    "address": "Government Medical College Hospital, Tiruvannamalai, Tiruvannamalai, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 13,
    "bio": "Certified Nephrologist specialist at Government Medical College Hospital, Tiruvannamalai providing comprehensive clinical healthcare for patients in Tiruvannamalai and across Tamil Nadu."
  },
  {
    "name": "Dr. Zoya Kapoor",
    "email": "_zoya_kapoor36@hospital.com",
    "mobile": "+91 9840100036",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Tiruvarur Medical College Hospital, Vilamal",
    "district": "Tiruvarur",
    "address": "Government Tiruvarur Medical College Hospital, Vilamal, Tiruvarur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 14,
    "bio": "Certified Nephrologist specialist at Government Tiruvarur Medical College Hospital, Vilamal providing comprehensive clinical healthcare for patients in Tiruvarur and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Malhotra",
    "email": "_riaan_malhotra37@hospital.com",
    "mobile": "+91 9840100037",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Headquarters Hospital, Ranipet",
    "district": "Ranipet",
    "address": "Government Headquarters Hospital, Ranipet, Ranipet, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 15,
    "bio": "Certified Nephrologist specialist at Government Headquarters Hospital, Ranipet providing comprehensive clinical healthcare for patients in Ranipet and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Krishnan",
    "email": "_shobana_krishnan38@hospital.com",
    "mobile": "+91 9840100038",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Headquarters Hospital, Tirupattur",
    "district": "Tirupattur",
    "address": "Government Headquarters Hospital, Tirupattur, Tirupattur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 16,
    "bio": "Certified Nephrologist specialist at Government Headquarters Hospital, Tirupattur providing comprehensive clinical healthcare for patients in Tirupattur and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Suri",
    "email": "_advik_suri39@hospital.com",
    "mobile": "+91 9840100039",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Medical College Hospital, Mundiyampakkam, Viluppuram",
    "district": "Viluppuram",
    "address": "Government Medical College Hospital, Mundiyampakkam, Viluppuram, Viluppuram, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 17,
    "bio": "Certified Nephrologist specialist at Government Medical College Hospital, Mundiyampakkam, Viluppuram providing comprehensive clinical healthcare for patients in Viluppuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Anaya Chawla",
    "email": "_anaya_chawla40@hospital.com",
    "mobile": "+91 9840100040",
    "specialization": "Nephrologist",
    "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
    "hospital": "Government Medical College Hospital, Virudhunagar",
    "district": "Virudhunagar",
    "address": "Government Medical College Hospital, Virudhunagar, Virudhunagar, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 18,
    "bio": "Certified Nephrologist specialist at Government Medical College Hospital, Virudhunagar providing comprehensive clinical healthcare for patients in Virudhunagar and across Tamil Nadu."
  },
  {
    "name": "Dr. Zendaya Thomas",
    "email": "_zendaya_thomas41@hospital.com",
    "mobile": "+91 9840100041",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Headquarters Hospital, Tirupattur",
    "district": "Tirupattur",
    "address": "Government Headquarters Hospital, Tirupattur, Tirupattur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 19,
    "bio": "Certified Psychiatrist specialist at Government Headquarters Hospital, Tirupattur providing comprehensive clinical healthcare for patients in Tirupattur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Khanna",
    "email": "_kabir_khanna42@hospital.com",
    "mobile": "+91 9840100042",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Medical College Hospital, Mundiyampakkam, Viluppuram",
    "district": "Viluppuram",
    "address": "Government Medical College Hospital, Mundiyampakkam, Viluppuram, Viluppuram, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 20,
    "bio": "Certified Psychiatrist specialist at Government Medical College Hospital, Mundiyampakkam, Viluppuram providing comprehensive clinical healthcare for patients in Viluppuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Anand",
    "email": "_deepika_anand43@hospital.com",
    "mobile": "+91 9840100043",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Medical College Hospital, Virudhunagar",
    "district": "Virudhunagar",
    "address": "Government Medical College Hospital, Virudhunagar, Virudhunagar, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 21,
    "bio": "Certified Psychiatrist specialist at Government Medical College Hospital, Virudhunagar providing comprehensive clinical healthcare for patients in Virudhunagar and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Kapoor",
    "email": "_pooja_kapoor44@hospital.com",
    "mobile": "+91 9840100044",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Medical College Hospital, Krishnagiri",
    "district": "Krishnagiri",
    "address": "Government Medical College Hospital, Krishnagiri, Krishnagiri, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 22,
    "bio": "Certified Psychiatrist specialist at Government Medical College Hospital, Krishnagiri providing comprehensive clinical healthcare for patients in Krishnagiri and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Sethi",
    "email": "_vihaan_sethi45@hospital.com",
    "mobile": "+91 9840100045",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Medical College Hospital, Dharmapuri",
    "district": "Dharmapuri",
    "address": "Government Medical College Hospital, Dharmapuri, Dharmapuri, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 8,
    "bio": "Certified Psychiatrist specialist at Government Medical College Hospital, Dharmapuri providing comprehensive clinical healthcare for patients in Dharmapuri and across Tamil Nadu."
  },
  {
    "name": "Dr. Diana Prince",
    "email": "_diana_prince46@hospital.com",
    "mobile": "+91 9840100046",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Medical College Hospital, Ariyalur",
    "district": "Ariyalur",
    "address": "Government Medical College Hospital, Ariyalur, Ariyalur, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 9,
    "bio": "Certified Psychiatrist specialist at Government Medical College Hospital, Ariyalur providing comprehensive clinical healthcare for patients in Ariyalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Malhotra",
    "email": "_myra_malhotra47@hospital.com",
    "mobile": "+91 9840100047",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur",
    "district": "Perambalur",
    "address": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur, Perambalur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 10,
    "bio": "Certified Psychiatrist specialist at Dhanalakshmi Srinivasan Medical College Hospital, Perambalur providing comprehensive clinical healthcare for patients in Perambalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Mehra",
    "email": "_ayaan_mehra48@hospital.com",
    "mobile": "+91 9840100048",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government Medical College Hospital, Kallakurichi",
    "district": "Kallakurichi",
    "address": "Government Medical College Hospital, Kallakurichi, Kallakurichi, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 11,
    "bio": "Certified Psychiatrist specialist at Government Medical College Hospital, Kallakurichi providing comprehensive clinical healthcare for patients in Kallakurichi and across Tamil Nadu."
  },
  {
    "name": "Dr. Rhea Chawla",
    "email": "_rhea_chawla49@hospital.com",
    "mobile": "+91 9840100049",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Government District Headquarters Hospital, Mayiladuthurai",
    "district": "Mayiladuthurai",
    "address": "Government District Headquarters Hospital, Mayiladuthurai, Mayiladuthurai, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 12,
    "bio": "Certified Psychiatrist specialist at Government District Headquarters Hospital, Mayiladuthurai providing comprehensive clinical healthcare for patients in Mayiladuthurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Bhatia",
    "email": "_arush_bhatia50@hospital.com",
    "mobile": "+91 9840100050",
    "specialization": "Psychiatrist",
    "qualification": "MBBS, MD, DPM (Psychiatry)",
    "hospital": "Kanyakumari Government Medical College Hospital, Asaripallam",
    "district": "Kanniyakumari",
    "address": "Kanyakumari Government Medical College Hospital, Asaripallam, Kanniyakumari, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 13,
    "bio": "Certified Psychiatrist specialist at Kanyakumari Government Medical College Hospital, Asaripallam providing comprehensive clinical healthcare for patients in Kanniyakumari and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Kapoor",
    "email": "_kriti_kapoor51@hospital.com",
    "mobile": "+91 9840100051",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Government Medical College Hospital, Kallakurichi",
    "district": "Kallakurichi",
    "address": "Government Medical College Hospital, Kallakurichi, Kallakurichi, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 14,
    "bio": "Certified Dentist specialist at Government Medical College Hospital, Kallakurichi providing comprehensive clinical healthcare for patients in Kallakurichi and across Tamil Nadu."
  },
  {
    "name": "Dr. Ahan Mehta",
    "email": "_ahan_mehta52@hospital.com",
    "mobile": "+91 9840100052",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Government District Headquarters Hospital, Mayiladuthurai",
    "district": "Mayiladuthurai",
    "address": "Government District Headquarters Hospital, Mayiladuthurai, Mayiladuthurai, Tamil Nadu",
    "consultationFee": 400,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 15,
    "bio": "Certified Dentist specialist at Government District Headquarters Hospital, Mayiladuthurai providing comprehensive clinical healthcare for patients in Mayiladuthurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Sethi",
    "email": "_kareena_sethi53@hospital.com",
    "mobile": "+91 9840100053",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Kanyakumari Government Medical College Hospital, Asaripallam",
    "district": "Kanniyakumari",
    "address": "Kanyakumari Government Medical College Hospital, Asaripallam, Kanniyakumari, Tamil Nadu",
    "consultationFee": 350,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 16,
    "bio": "Certified Dentist specialist at Kanyakumari Government Medical College Hospital, Asaripallam providing comprehensive clinical healthcare for patients in Kanniyakumari and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Arora",
    "email": "_vihaan_arora54@hospital.com",
    "mobile": "+91 9840100054",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Apollo Hospitals, Greams Road",
    "district": "Chennai",
    "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
    "consultationFee": 400,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 17,
    "bio": "Certified Dentist specialist at Apollo Hospitals, Greams Road providing comprehensive clinical healthcare for patients in Chennai and across Tamil Nadu."
  },
  {
    "name": "Dr. Shruthi Bansal",
    "email": "_shruthi_bansal55@hospital.com",
    "mobile": "+91 9840100055",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "PSG Hospitals, Peelamedu",
    "district": "Coimbatore",
    "address": "PSG Hospitals, Peelamedu, Coimbatore, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 18,
    "bio": "Certified Dentist specialist at PSG Hospitals, Peelamedu providing comprehensive clinical healthcare for patients in Coimbatore and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Malhotra",
    "email": "_riaan_malhotra56@hospital.com",
    "mobile": "+91 9840100056",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Government Rajaji Hospital & Medical College",
    "district": "Madurai",
    "address": "Government Rajaji Hospital & Medical College, Madurai, Tamil Nadu",
    "consultationFee": 350,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 19,
    "bio": "Certified Dentist specialist at Government Rajaji Hospital & Medical College providing comprehensive clinical healthcare for patients in Madurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine D'Souza",
    "email": "_catherine_d_souza57@hospital.com",
    "mobile": "+91 9840100057",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Manipal Hospitals, Dalmia Board",
    "district": "Salem",
    "address": "Manipal Hospitals, Dalmia Board, Salem, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 20,
    "bio": "Certified Dentist specialist at Manipal Hospitals, Dalmia Board providing comprehensive clinical healthcare for patients in Salem and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Khurana",
    "email": "_advik_khurana58@hospital.com",
    "mobile": "+91 9840100058",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Kauvery Hospital, Cantonment",
    "district": "Tiruchirappalli",
    "address": "Kauvery Hospital, Cantonment, Tiruchirappalli, Tamil Nadu",
    "consultationFee": 400,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 21,
    "bio": "Certified Dentist specialist at Kauvery Hospital, Cantonment providing comprehensive clinical healthcare for patients in Tiruchirappalli and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Mehra",
    "email": "_pooja_mehra59@hospital.com",
    "mobile": "+91 9840100059",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Tirunelveli Medical College Hospital, High Ground",
    "district": "Tirunelveli",
    "address": "Tirunelveli Medical College Hospital, High Ground, Tirunelveli, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 22,
    "bio": "Certified Dentist specialist at Tirunelveli Medical College Hospital, High Ground providing comprehensive clinical healthcare for patients in Tirunelveli and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Kapoor",
    "email": "_zayan_kapoor60@hospital.com",
    "mobile": "+91 9840100060",
    "specialization": "Dentist",
    "qualification": "BDS, MDS (Conservative Dentistry & Endodontics)",
    "hospital": "Christian Medical College (CMC) Hospital, Ida Scudder Road",
    "district": "Vellore",
    "address": "Christian Medical College (CMC) Hospital, Ida Scudder Road, Vellore, Tamil Nadu",
    "consultationFee": 350,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 8,
    "bio": "Certified Dentist specialist at Christian Medical College (CMC) Hospital, Ida Scudder Road providing comprehensive clinical healthcare for patients in Vellore and across Tamil Nadu."
  },
  {
    "name": "Dr. Anaya Kapoor",
    "email": "_anaya_kapoor61@hospital.com",
    "mobile": "+91 9840100061",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Kauvery Hospital, Cantonment",
    "district": "Tiruchirappalli",
    "address": "Kauvery Hospital, Cantonment, Tiruchirappalli, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 9,
    "bio": "Certified Physiotherapist specialist at Kauvery Hospital, Cantonment providing comprehensive clinical healthcare for patients in Tiruchirappalli and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Bhatia",
    "email": "_reyansh_bhatia62@hospital.com",
    "mobile": "+91 9840100062",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Tirunelveli Medical College Hospital, High Ground",
    "district": "Tirunelveli",
    "address": "Tirunelveli Medical College Hospital, High Ground, Tirunelveli, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 10,
    "bio": "Certified Physiotherapist specialist at Tirunelveli Medical College Hospital, High Ground providing comprehensive clinical healthcare for patients in Tirunelveli and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Suri",
    "email": "_deepika_suri63@hospital.com",
    "mobile": "+91 9840100063",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Christian Medical College (CMC) Hospital, Ida Scudder Road",
    "district": "Vellore",
    "address": "Christian Medical College (CMC) Hospital, Ida Scudder Road, Vellore, Tamil Nadu",
    "consultationFee": 400,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 11,
    "bio": "Certified Physiotherapist specialist at Christian Medical College (CMC) Hospital, Ida Scudder Road providing comprehensive clinical healthcare for patients in Vellore and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Mehta",
    "email": "_ayaan_mehta64@hospital.com",
    "mobile": "+91 9840100064",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Government Erode Medical College Hospital, Perundurai",
    "district": "Erode",
    "address": "Government Erode Medical College Hospital, Perundurai, Erode, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 12,
    "bio": "Certified Physiotherapist specialist at Government Erode Medical College Hospital, Perundurai providing comprehensive clinical healthcare for patients in Erode and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Kapoor",
    "email": "_malavika_kapoor65@hospital.com",
    "mobile": "+91 9840100065",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Thanjavur Medical College Hospital, Medical College Road",
    "district": "Thanjavur",
    "address": "Thanjavur Medical College Hospital, Medical College Road, Thanjavur, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 13,
    "bio": "Certified Physiotherapist specialist at Thanjavur Medical College Hospital, Medical College Road providing comprehensive clinical healthcare for patients in Thanjavur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Anand",
    "email": "_kabir_anand66@hospital.com",
    "mobile": "+91 9840100066",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Government District Headquarters Hospital, Dindigul",
    "district": "Dindigul",
    "address": "Government District Headquarters Hospital, Dindigul, Dindigul, Tamil Nadu",
    "consultationFee": 400,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 14,
    "bio": "Certified Physiotherapist specialist at Government District Headquarters Hospital, Dindigul providing comprehensive clinical healthcare for patients in Dindigul and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Bansal",
    "email": "_kiara_bansal67@hospital.com",
    "mobile": "+91 9840100067",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Arignar Anna Memorial Cancer Hospital & Research Institute",
    "district": "Kanchipuram",
    "address": "Arignar Anna Memorial Cancer Hospital & Research Institute, Kanchipuram, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 15,
    "bio": "Certified Physiotherapist specialist at Arignar Anna Memorial Cancer Hospital & Research Institute providing comprehensive clinical healthcare for patients in Kanchipuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Nivaan Malhotra",
    "email": "_nivaan_malhotra68@hospital.com",
    "mobile": "+91 9840100068",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Chengalpattu Government Medical College Hospital, GST Road",
    "district": "Chengalpattu",
    "address": "Chengalpattu Government Medical College Hospital, GST Road, Chengalpattu, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 16,
    "bio": "Certified Physiotherapist specialist at Chengalpattu Government Medical College Hospital, GST Road providing comprehensive clinical healthcare for patients in Chengalpattu and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Sethi",
    "email": "_shobana_sethi69@hospital.com",
    "mobile": "+91 9840100069",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Government Medical College Hospital, Tiruppur",
    "district": "Tiruppur",
    "address": "Government Medical College Hospital, Tiruppur, Tiruppur, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 17,
    "bio": "Certified Physiotherapist specialist at Government Medical College Hospital, Tiruppur providing comprehensive clinical healthcare for patients in Tiruppur and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Khanna",
    "email": "_arush_khanna70@hospital.com",
    "mobile": "+91 9840100070",
    "specialization": "Physiotherapist",
    "qualification": "BPT, MPT (Orthopedics & Neuro Rehab)",
    "hospital": "Government Headquarters Hospital, Cuddalore",
    "district": "Cuddalore",
    "address": "Government Headquarters Hospital, Cuddalore, Cuddalore, Tamil Nadu",
    "consultationFee": 400,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 18,
    "bio": "Certified Physiotherapist specialist at Government Headquarters Hospital, Cuddalore providing comprehensive clinical healthcare for patients in Cuddalore and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Kapoor",
    "email": "_alia_kapoor71@hospital.com",
    "mobile": "+91 9840100071",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Chengalpattu Government Medical College Hospital, GST Road",
    "district": "Chengalpattu",
    "address": "Chengalpattu Government Medical College Hospital, GST Road, Chengalpattu, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 19,
    "bio": "Certified ENT Specialist specialist at Chengalpattu Government Medical College Hospital, GST Road providing comprehensive clinical healthcare for patients in Chengalpattu and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Suri",
    "email": "_vihaan_suri72@hospital.com",
    "mobile": "+91 9840100072",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College Hospital, Tiruppur",
    "district": "Tiruppur",
    "address": "Government Medical College Hospital, Tiruppur, Tiruppur, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 20,
    "bio": "Certified ENT Specialist specialist at Government Medical College Hospital, Tiruppur providing comprehensive clinical healthcare for patients in Tiruppur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Malhotra",
    "email": "_kareena_malhotra73@hospital.com",
    "mobile": "+91 9840100073",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Headquarters Hospital, Cuddalore",
    "district": "Cuddalore",
    "address": "Government Headquarters Hospital, Cuddalore, Cuddalore, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 21,
    "bio": "Certified ENT Specialist specialist at Government Headquarters Hospital, Cuddalore providing comprehensive clinical healthcare for patients in Cuddalore and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Mehta",
    "email": "_riaan_mehta74@hospital.com",
    "mobile": "+91 9840100074",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College Hospital, Gandhigramam, Karur",
    "district": "Karur",
    "address": "Government Medical College Hospital, Gandhigramam, Karur, Karur, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 22,
    "bio": "Certified ENT Specialist specialist at Government Medical College Hospital, Gandhigramam, Karur providing comprehensive clinical healthcare for patients in Karur and across Tamil Nadu."
  },
  {
    "name": "Dr. Shruthi Kapoor",
    "email": "_shruthi_kapoor75@hospital.com",
    "mobile": "+91 9840100075",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government District Headquarters Hospital, Nagapattinam",
    "district": "Nagapattinam",
    "address": "Government District Headquarters Hospital, Nagapattinam, Nagapattinam, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 8,
    "bio": "Certified ENT Specialist specialist at Government District Headquarters Hospital, Nagapattinam providing comprehensive clinical healthcare for patients in Nagapattinam and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Arora",
    "email": "_zayan_arora76@hospital.com",
    "mobile": "+91 9840100076",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College Hospital, Namakkal",
    "district": "Namakkal",
    "address": "Government Medical College Hospital, Namakkal, Namakkal, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 9,
    "bio": "Certified ENT Specialist specialist at Government Medical College Hospital, Namakkal providing comprehensive clinical healthcare for patients in Namakkal and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Sethi",
    "email": "_pooja_sethi77@hospital.com",
    "mobile": "+91 9840100077",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College & District Hospital, Ooty",
    "district": "Nilgiris",
    "address": "Government Medical College & District Hospital, Ooty, Nilgiris, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 10,
    "bio": "Certified ENT Specialist specialist at Government Medical College & District Hospital, Ooty providing comprehensive clinical healthcare for patients in Nilgiris and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Bhatia",
    "email": "_advik_bhatia78@hospital.com",
    "mobile": "+91 9840100078",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College Hospital, Pudukkottai",
    "district": "Pudukkottai",
    "address": "Government Medical College Hospital, Pudukkottai, Pudukkottai, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 11,
    "bio": "Certified ENT Specialist specialist at Government Medical College Hospital, Pudukkottai providing comprehensive clinical healthcare for patients in Pudukkottai and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Khanna",
    "email": "_myra_khanna79@hospital.com",
    "mobile": "+91 9840100079",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College Hospital, Ramanathapuram",
    "district": "Ramanathapuram",
    "address": "Government Medical College Hospital, Ramanathapuram, Ramanathapuram, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 12,
    "bio": "Certified ENT Specialist specialist at Government Medical College Hospital, Ramanathapuram providing comprehensive clinical healthcare for patients in Ramanathapuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Ahan Kapoor",
    "email": "_ahan_kapoor80@hospital.com",
    "mobile": "+91 9840100080",
    "specialization": "ENT Specialist",
    "qualification": "MBBS, MS (ENT), DLO",
    "hospital": "Government Medical College Hospital, Sivaganga",
    "district": "Sivaganga",
    "address": "Government Medical College Hospital, Sivaganga, Sivaganga, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 13,
    "bio": "Certified ENT Specialist specialist at Government Medical College Hospital, Sivaganga providing comprehensive clinical healthcare for patients in Sivaganga and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Malhotra",
    "email": "_kiara_malhotra81@hospital.com",
    "mobile": "+91 9840100081",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Medical College Hospital, Pudukkottai",
    "district": "Pudukkottai",
    "address": "Government Medical College Hospital, Pudukkottai, Pudukkottai, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 14,
    "bio": "Certified Dermatologist specialist at Government Medical College Hospital, Pudukkottai providing comprehensive clinical healthcare for patients in Pudukkottai and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Sethi",
    "email": "_ayaan_sethi82@hospital.com",
    "mobile": "+91 9840100082",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Medical College Hospital, Ramanathapuram",
    "district": "Ramanathapuram",
    "address": "Government Medical College Hospital, Ramanathapuram, Ramanathapuram, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 15,
    "bio": "Certified Dermatologist specialist at Government Medical College Hospital, Ramanathapuram providing comprehensive clinical healthcare for patients in Ramanathapuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Kapoor",
    "email": "_deepika_kapoor83@hospital.com",
    "mobile": "+91 9840100083",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Medical College Hospital, Sivaganga",
    "district": "Sivaganga",
    "address": "Government Medical College Hospital, Sivaganga, Sivaganga, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 16,
    "bio": "Certified Dermatologist specialist at Government Medical College Hospital, Sivaganga providing comprehensive clinical healthcare for patients in Sivaganga and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Bansal",
    "email": "_reyansh_bansal84@hospital.com",
    "mobile": "+91 9840100084",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government District Headquarters Hospital, Tenkasi",
    "district": "Tenkasi",
    "address": "Government District Headquarters Hospital, Tenkasi, Tenkasi, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 17,
    "bio": "Certified Dermatologist specialist at Government District Headquarters Hospital, Tenkasi providing comprehensive clinical healthcare for patients in Tenkasi and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Arora",
    "email": "_kriti_arora85@hospital.com",
    "mobile": "+91 9840100085",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Theni Medical College & Hospital, Kanavilku",
    "district": "Theni",
    "address": "Government Theni Medical College & Hospital, Kanavilku, Theni, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 18,
    "bio": "Certified Dermatologist specialist at Government Theni Medical College & Hospital, Kanavilku providing comprehensive clinical healthcare for patients in Theni and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Khanna",
    "email": "_vihaan_khanna86@hospital.com",
    "mobile": "+91 9840100086",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Medical College Hospital, Thoothukudi",
    "district": "Thoothukudi",
    "address": "Government Medical College Hospital, Thoothukudi, Thoothukudi, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 19,
    "bio": "Certified Dermatologist specialist at Government Medical College Hospital, Thoothukudi providing comprehensive clinical healthcare for patients in Thoothukudi and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Mehra",
    "email": "_malavika_mehra87@hospital.com",
    "mobile": "+91 9840100087",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Medical College Hospital, Tiruvallur",
    "district": "Tiruvallur",
    "address": "Government Medical College Hospital, Tiruvallur, Tiruvallur, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 20,
    "bio": "Certified Dermatologist specialist at Government Medical College Hospital, Tiruvallur providing comprehensive clinical healthcare for patients in Tiruvallur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Malhotra",
    "email": "_kabir_malhotra88@hospital.com",
    "mobile": "+91 9840100088",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Medical College Hospital, Tiruvannamalai",
    "district": "Tiruvannamalai",
    "address": "Government Medical College Hospital, Tiruvannamalai, Tiruvannamalai, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 21,
    "bio": "Certified Dermatologist specialist at Government Medical College Hospital, Tiruvannamalai providing comprehensive clinical healthcare for patients in Tiruvannamalai and across Tamil Nadu."
  },
  {
    "name": "Dr. Rhea Kapoor",
    "email": "_rhea_kapoor89@hospital.com",
    "mobile": "+91 9840100089",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Tiruvarur Medical College Hospital, Vilamal",
    "district": "Tiruvarur",
    "address": "Government Tiruvarur Medical College Hospital, Vilamal, Tiruvarur, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 22,
    "bio": "Certified Dermatologist specialist at Government Tiruvarur Medical College Hospital, Vilamal providing comprehensive clinical healthcare for patients in Tiruvarur and across Tamil Nadu."
  },
  {
    "name": "Dr. Zoya Bhatia",
    "email": "_zoya_bhatia90@hospital.com",
    "mobile": "+91 9840100090",
    "specialization": "Dermatologist",
    "qualification": "MBBS, MD (DVL)",
    "hospital": "Government Headquarters Hospital, Ranipet",
    "district": "Ranipet",
    "address": "Government Headquarters Hospital, Ranipet, Ranipet, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 8,
    "bio": "Certified Dermatologist specialist at Government Headquarters Hospital, Ranipet providing comprehensive clinical healthcare for patients in Ranipet and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Kapoor",
    "email": "_kareena_kapoor91@hospital.com",
    "mobile": "+91 9840100091",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Medical College Hospital, Tiruvannamalai",
    "district": "Tiruvannamalai",
    "address": "Government Medical College Hospital, Tiruvannamalai, Tiruvannamalai, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 9,
    "bio": "Certified Pulmonologist specialist at Government Medical College Hospital, Tiruvannamalai providing comprehensive clinical healthcare for patients in Tiruvannamalai and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Mehta",
    "email": "_arush_mehta92@hospital.com",
    "mobile": "+91 9840100092",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Tiruvarur Medical College Hospital, Vilamal",
    "district": "Tiruvarur",
    "address": "Government Tiruvarur Medical College Hospital, Vilamal, Tiruvarur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 10,
    "bio": "Certified Pulmonologist specialist at Government Tiruvarur Medical College Hospital, Vilamal providing comprehensive clinical healthcare for patients in Tiruvarur and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Malhotra",
    "email": "_shobana_malhotra93@hospital.com",
    "mobile": "+91 9840100093",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Headquarters Hospital, Ranipet",
    "district": "Ranipet",
    "address": "Government Headquarters Hospital, Ranipet, Ranipet, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 11,
    "bio": "Certified Pulmonologist specialist at Government Headquarters Hospital, Ranipet providing comprehensive clinical healthcare for patients in Ranipet and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Bhatia",
    "email": "_ayaan_bhatia94@hospital.com",
    "mobile": "+91 9840100094",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Headquarters Hospital, Tirupattur",
    "district": "Tirupattur",
    "address": "Government Headquarters Hospital, Tirupattur, Tirupattur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 12,
    "bio": "Certified Pulmonologist specialist at Government Headquarters Hospital, Tirupattur providing comprehensive clinical healthcare for patients in Tirupattur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Sethi",
    "email": "_kiara_sethi95@hospital.com",
    "mobile": "+91 9840100095",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Medical College Hospital, Mundiyampakkam, Viluppuram",
    "district": "Viluppuram",
    "address": "Government Medical College Hospital, Mundiyampakkam, Viluppuram, Viluppuram, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 13,
    "bio": "Certified Pulmonologist specialist at Government Medical College Hospital, Mundiyampakkam, Viluppuram providing comprehensive clinical healthcare for patients in Viluppuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Kapoor",
    "email": "_vihaan_kapoor96@hospital.com",
    "mobile": "+91 9840100096",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Medical College Hospital, Virudhunagar",
    "district": "Virudhunagar",
    "address": "Government Medical College Hospital, Virudhunagar, Virudhunagar, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 14,
    "bio": "Certified Pulmonologist specialist at Government Medical College Hospital, Virudhunagar providing comprehensive clinical healthcare for patients in Virudhunagar and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Mehra",
    "email": "_catherine_mehra97@hospital.com",
    "mobile": "+91 9840100097",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Medical College Hospital, Krishnagiri",
    "district": "Krishnagiri",
    "address": "Government Medical College Hospital, Krishnagiri, Krishnagiri, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 15,
    "bio": "Certified Pulmonologist specialist at Government Medical College Hospital, Krishnagiri providing comprehensive clinical healthcare for patients in Krishnagiri and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Khanna",
    "email": "_riaan_khanna98@hospital.com",
    "mobile": "+91 9840100098",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Medical College Hospital, Dharmapuri",
    "district": "Dharmapuri",
    "address": "Government Medical College Hospital, Dharmapuri, Dharmapuri, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 16,
    "bio": "Certified Pulmonologist specialist at Government Medical College Hospital, Dharmapuri providing comprehensive clinical healthcare for patients in Dharmapuri and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Arora",
    "email": "_pooja_arora99@hospital.com",
    "mobile": "+91 9840100099",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Government Medical College Hospital, Ariyalur",
    "district": "Ariyalur",
    "address": "Government Medical College Hospital, Ariyalur, Ariyalur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 17,
    "bio": "Certified Pulmonologist specialist at Government Medical College Hospital, Ariyalur providing comprehensive clinical healthcare for patients in Ariyalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Kapoor",
    "email": "_advik_kapoor100@hospital.com",
    "mobile": "+91 9840100100",
    "specialization": "Pulmonologist",
    "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
    "hospital": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur",
    "district": "Perambalur",
    "address": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur, Perambalur, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 18,
    "bio": "Certified Pulmonologist specialist at Dhanalakshmi Srinivasan Medical College Hospital, Perambalur providing comprehensive clinical healthcare for patients in Perambalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Malhotra",
    "email": "_alia_malhotra101@hospital.com",
    "mobile": "+91 9840100101",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Government Medical College Hospital, Dharmapuri",
    "district": "Dharmapuri",
    "address": "Government Medical College Hospital, Dharmapuri, Dharmapuri, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 19,
    "bio": "Certified Gastroenterologist specialist at Government Medical College Hospital, Dharmapuri providing comprehensive clinical healthcare for patients in Dharmapuri and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Mehta",
    "email": "_kabir_mehta102@hospital.com",
    "mobile": "+91 9840100102",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Government Medical College Hospital, Ariyalur",
    "district": "Ariyalur",
    "address": "Government Medical College Hospital, Ariyalur, Ariyalur, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 20,
    "bio": "Certified Gastroenterologist specialist at Government Medical College Hospital, Ariyalur providing comprehensive clinical healthcare for patients in Ariyalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Sethi",
    "email": "_deepika_sethi103@hospital.com",
    "mobile": "+91 9840100103",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur",
    "district": "Perambalur",
    "address": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur, Perambalur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 21,
    "bio": "Certified Gastroenterologist specialist at Dhanalakshmi Srinivasan Medical College Hospital, Perambalur providing comprehensive clinical healthcare for patients in Perambalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Kapoor",
    "email": "_reyansh_kapoor104@hospital.com",
    "mobile": "+91 9840100104",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Government Medical College Hospital, Kallakurichi",
    "district": "Kallakurichi",
    "address": "Government Medical College Hospital, Kallakurichi, Kallakurichi, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 22,
    "bio": "Certified Gastroenterologist specialist at Government Medical College Hospital, Kallakurichi providing comprehensive clinical healthcare for patients in Kallakurichi and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Bansal",
    "email": "_kriti_bansal105@hospital.com",
    "mobile": "+91 9840100105",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Government District Headquarters Hospital, Mayiladuthurai",
    "district": "Mayiladuthurai",
    "address": "Government District Headquarters Hospital, Mayiladuthurai, Mayiladuthurai, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 8,
    "bio": "Certified Gastroenterologist specialist at Government District Headquarters Hospital, Mayiladuthurai providing comprehensive clinical healthcare for patients in Mayiladuthurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Ahan Khanna",
    "email": "_ahan_khanna106@hospital.com",
    "mobile": "+91 9840100106",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Kanyakumari Government Medical College Hospital, Asaripallam",
    "district": "Kanniyakumari",
    "address": "Kanyakumari Government Medical College Hospital, Asaripallam, Kanniyakumari, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 9,
    "bio": "Certified Gastroenterologist specialist at Kanyakumari Government Medical College Hospital, Asaripallam providing comprehensive clinical healthcare for patients in Kanniyakumari and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Mehra",
    "email": "_myra_mehra107@hospital.com",
    "mobile": "+91 9840100107",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Apollo Hospitals, Greams Road",
    "district": "Chennai",
    "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 10,
    "bio": "Certified Gastroenterologist specialist at Apollo Hospitals, Greams Road providing comprehensive clinical healthcare for patients in Chennai and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Kapoor",
    "email": "_zayan_kapoor108@hospital.com",
    "mobile": "+91 9840100108",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "PSG Hospitals, Peelamedu",
    "district": "Coimbatore",
    "address": "PSG Hospitals, Peelamedu, Coimbatore, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 11,
    "bio": "Certified Gastroenterologist specialist at PSG Hospitals, Peelamedu providing comprehensive clinical healthcare for patients in Coimbatore and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Arora",
    "email": "_malavika_arora109@hospital.com",
    "mobile": "+91 9840100109",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Government Rajaji Hospital & Medical College",
    "district": "Madurai",
    "address": "Government Rajaji Hospital & Medical College, Madurai, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 12,
    "bio": "Certified Gastroenterologist specialist at Government Rajaji Hospital & Medical College providing comprehensive clinical healthcare for patients in Madurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Nivaan Sethi",
    "email": "_nivaan_sethi110@hospital.com",
    "mobile": "+91 9840100110",
    "specialization": "Gastroenterologist",
    "qualification": "MBBS, MD, DM (Gastroenterology)",
    "hospital": "Manipal Hospitals, Dalmia Board",
    "district": "Salem",
    "address": "Manipal Hospitals, Dalmia Board, Salem, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 13,
    "bio": "Certified Gastroenterologist specialist at Manipal Hospitals, Dalmia Board providing comprehensive clinical healthcare for patients in Salem and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Bhatia",
    "email": "_kiara_bhatia111@hospital.com",
    "mobile": "+91 9840100111",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "PSG Hospitals, Peelamedu",
    "district": "Coimbatore",
    "address": "PSG Hospitals, Peelamedu, Coimbatore, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 14,
    "bio": "Certified Pediatrician specialist at PSG Hospitals, Peelamedu providing comprehensive clinical healthcare for patients in Coimbatore and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Kapoor",
    "email": "_ayaan_kapoor112@hospital.com",
    "mobile": "+91 9840100112",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Government Rajaji Hospital & Medical College",
    "district": "Madurai",
    "address": "Government Rajaji Hospital & Medical College, Madurai, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 15,
    "bio": "Certified Pediatrician specialist at Government Rajaji Hospital & Medical College providing comprehensive clinical healthcare for patients in Madurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Mehra",
    "email": "_pooja_mehra113@hospital.com",
    "mobile": "+91 9840100113",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Manipal Hospitals, Dalmia Board",
    "district": "Salem",
    "address": "Manipal Hospitals, Dalmia Board, Salem, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 16,
    "bio": "Certified Pediatrician specialist at Manipal Hospitals, Dalmia Board providing comprehensive clinical healthcare for patients in Salem and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Sethi",
    "email": "_vihaan_sethi114@hospital.com",
    "mobile": "+91 9840100114",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Kauvery Hospital, Cantonment",
    "district": "Tiruchirappalli",
    "address": "Kauvery Hospital, Cantonment, Tiruchirappalli, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 17,
    "bio": "Certified Pediatrician specialist at Kauvery Hospital, Cantonment providing comprehensive clinical healthcare for patients in Tiruchirappalli and across Tamil Nadu."
  },
  {
    "name": "Dr. Shruthi Malhotra",
    "email": "_shruthi_malhotra115@hospital.com",
    "mobile": "+91 9840100115",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Tirunelveli Medical College Hospital, High Ground",
    "district": "Tirunelveli",
    "address": "Tirunelveli Medical College Hospital, High Ground, Tirunelveli, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 18,
    "bio": "Certified Pediatrician specialist at Tirunelveli Medical College Hospital, High Ground providing comprehensive clinical healthcare for patients in Tirunelveli and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Kapoor",
    "email": "_arush_kapoor116@hospital.com",
    "mobile": "+91 9840100116",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Christian Medical College (CMC) Hospital, Ida Scudder Road",
    "district": "Vellore",
    "address": "Christian Medical College (CMC) Hospital, Ida Scudder Road, Vellore, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 19,
    "bio": "Certified Pediatrician specialist at Christian Medical College (CMC) Hospital, Ida Scudder Road providing comprehensive clinical healthcare for patients in Vellore and across Tamil Nadu."
  },
  {
    "name": "Dr. Anaya Khanna",
    "email": "_anaya_khanna117@hospital.com",
    "mobile": "+91 9840100117",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Government Erode Medical College Hospital, Perundurai",
    "district": "Erode",
    "address": "Government Erode Medical College Hospital, Perundurai, Erode, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 20,
    "bio": "Certified Pediatrician specialist at Government Erode Medical College Hospital, Perundurai providing comprehensive clinical healthcare for patients in Erode and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Mehra",
    "email": "_riaan_mehra118@hospital.com",
    "mobile": "+91 9840100118",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Thanjavur Medical College Hospital, Medical College Road",
    "district": "Thanjavur",
    "address": "Thanjavur Medical College Hospital, Medical College Road, Thanjavur, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 21,
    "bio": "Certified Pediatrician specialist at Thanjavur Medical College Hospital, Medical College Road providing comprehensive clinical healthcare for patients in Thanjavur and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Bansal",
    "email": "_catherine_bansal119@hospital.com",
    "mobile": "+91 9840100119",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Government District Headquarters Hospital, Dindigul",
    "district": "Dindigul",
    "address": "Government District Headquarters Hospital, Dindigul, Dindigul, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 22,
    "bio": "Certified Pediatrician specialist at Government District Headquarters Hospital, Dindigul providing comprehensive clinical healthcare for patients in Dindigul and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Suri",
    "email": "_advik_suri120@hospital.com",
    "mobile": "+91 9840100120",
    "specialization": "Pediatrician",
    "qualification": "MBBS, MD (Pediatrics), DCH",
    "hospital": "Arignar Anna Memorial Cancer Hospital & Research Institute",
    "district": "Kanchipuram",
    "address": "Arignar Anna Memorial Cancer Hospital & Research Institute, Kanchipuram, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 8,
    "bio": "Certified Pediatrician specialist at Arignar Anna Memorial Cancer Hospital & Research Institute providing comprehensive clinical healthcare for patients in Kanchipuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Kapoor",
    "email": "_deepika_kapoor121@hospital.com",
    "mobile": "+91 9840100121",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Thanjavur Medical College Hospital, Medical College Road",
    "district": "Thanjavur",
    "address": "Thanjavur Medical College Hospital, Medical College Road, Thanjavur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 9,
    "bio": "Certified Gynecologist specialist at Thanjavur Medical College Hospital, Medical College Road providing comprehensive clinical healthcare for patients in Thanjavur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Malhotra",
    "email": "_kareena_malhotra122@hospital.com",
    "mobile": "+91 9840100122",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government District Headquarters Hospital, Dindigul",
    "district": "Dindigul",
    "address": "Government District Headquarters Hospital, Dindigul, Dindigul, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 10,
    "bio": "Certified Gynecologist specialist at Government District Headquarters Hospital, Dindigul providing comprehensive clinical healthcare for patients in Dindigul and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Sethi",
    "email": "_alia_sethi123@hospital.com",
    "mobile": "+91 9840100123",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Arignar Anna Memorial Cancer Hospital & Research Institute",
    "district": "Kanchipuram",
    "address": "Arignar Anna Memorial Cancer Hospital & Research Institute, Kanchipuram, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 11,
    "bio": "Certified Gynecologist specialist at Arignar Anna Memorial Cancer Hospital & Research Institute providing comprehensive clinical healthcare for patients in Kanchipuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Bhatia",
    "email": "_vihaan_bhatia124@hospital.com",
    "mobile": "+91 9840100124",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Chengalpattu Government Medical College Hospital, GST Road",
    "district": "Chengalpattu",
    "address": "Chengalpattu Government Medical College Hospital, GST Road, Chengalpattu, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 12,
    "bio": "Certified Gynecologist specialist at Chengalpattu Government Medical College Hospital, GST Road providing comprehensive clinical healthcare for patients in Chengalpattu and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Kapoor",
    "email": "_kriti_kapoor125@hospital.com",
    "mobile": "+91 9840100125",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government Medical College Hospital, Tiruppur",
    "district": "Tiruppur",
    "address": "Government Medical College Hospital, Tiruppur, Tiruppur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 13,
    "bio": "Certified Gynecologist specialist at Government Medical College Hospital, Tiruppur providing comprehensive clinical healthcare for patients in Tiruppur and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Mehra",
    "email": "_malavika_mehra126@hospital.com",
    "mobile": "+91 9840100126",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government Headquarters Hospital, Cuddalore",
    "district": "Cuddalore",
    "address": "Government Headquarters Hospital, Cuddalore, Cuddalore, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 14,
    "bio": "Certified Gynecologist specialist at Government Headquarters Hospital, Cuddalore providing comprehensive clinical healthcare for patients in Cuddalore and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Khanna",
    "email": "_myra_khanna127@hospital.com",
    "mobile": "+91 9840100127",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government Medical College Hospital, Gandhigramam, Karur",
    "district": "Karur",
    "address": "Government Medical College Hospital, Gandhigramam, Karur, Karur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 15,
    "bio": "Certified Gynecologist specialist at Government Medical College Hospital, Gandhigramam, Karur providing comprehensive clinical healthcare for patients in Karur and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Malhotra",
    "email": "_pooja_malhotra128@hospital.com",
    "mobile": "+91 9840100128",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government District Headquarters Hospital, Nagapattinam",
    "district": "Nagapattinam",
    "address": "Government District Headquarters Hospital, Nagapattinam, Nagapattinam, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 16,
    "bio": "Certified Gynecologist specialist at Government District Headquarters Hospital, Nagapattinam providing comprehensive clinical healthcare for patients in Nagapattinam and across Tamil Nadu."
  },
  {
    "name": "Dr. Rhea Sethi",
    "email": "_rhea_sethi129@hospital.com",
    "mobile": "+91 9840100129",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government Medical College Hospital, Namakkal",
    "district": "Namakkal",
    "address": "Government Medical College Hospital, Namakkal, Namakkal, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 17,
    "bio": "Certified Gynecologist specialist at Government Medical College Hospital, Namakkal providing comprehensive clinical healthcare for patients in Namakkal and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Kapoor",
    "email": "_shobana_kapoor130@hospital.com",
    "mobile": "+91 9840100130",
    "specialization": "Gynecologist",
    "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
    "hospital": "Government Medical College & District Hospital, Ooty",
    "district": "Nilgiris",
    "address": "Government Medical College & District Hospital, Ooty, Nilgiris, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 18,
    "bio": "Certified Gynecologist specialist at Government Medical College & District Hospital, Ooty providing comprehensive clinical healthcare for patients in Nilgiris and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Mehra",
    "email": "_kiara_mehra131@hospital.com",
    "mobile": "+91 9840100131",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government District Headquarters Hospital, Nagapattinam",
    "district": "Nagapattinam",
    "address": "Government District Headquarters Hospital, Nagapattinam, Nagapattinam, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 19,
    "bio": "Certified Ophthalmologist specialist at Government District Headquarters Hospital, Nagapattinam providing comprehensive clinical healthcare for patients in Nagapattinam and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Kapoor",
    "email": "_ayaan_kapoor132@hospital.com",
    "mobile": "+91 9840100132",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College Hospital, Namakkal",
    "district": "Namakkal",
    "address": "Government Medical College Hospital, Namakkal, Namakkal, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 20,
    "bio": "Certified Ophthalmologist specialist at Government Medical College Hospital, Namakkal providing comprehensive clinical healthcare for patients in Namakkal and across Tamil Nadu."
  },
  {
    "name": "Dr. Zendaya Thomas",
    "email": "_zendaya_thomas133@hospital.com",
    "mobile": "+91 9840100133",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College & District Hospital, Ooty",
    "district": "Nilgiris",
    "address": "Government Medical College & District Hospital, Ooty, Nilgiris, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 21,
    "bio": "Certified Ophthalmologist specialist at Government Medical College & District Hospital, Ooty providing comprehensive clinical healthcare for patients in Nilgiris and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Malhotra",
    "email": "_arush_malhotra134@hospital.com",
    "mobile": "+91 9840100134",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College Hospital, Pudukkottai",
    "district": "Pudukkottai",
    "address": "Government Medical College Hospital, Pudukkottai, Pudukkottai, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 22,
    "bio": "Certified Ophthalmologist specialist at Government Medical College Hospital, Pudukkottai providing comprehensive clinical healthcare for patients in Pudukkottai and across Tamil Nadu."
  },
  {
    "name": "Dr. Shruthi Sethi",
    "email": "_shruthi_sethi135@hospital.com",
    "mobile": "+91 9840100135",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College Hospital, Ramanathapuram",
    "district": "Ramanathapuram",
    "address": "Government Medical College Hospital, Ramanathapuram, Ramanathapuram, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 8,
    "bio": "Certified Ophthalmologist specialist at Government Medical College Hospital, Ramanathapuram providing comprehensive clinical healthcare for patients in Ramanathapuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Bansal",
    "email": "_kabir_bansal136@hospital.com",
    "mobile": "+91 9840100136",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College Hospital, Sivaganga",
    "district": "Sivaganga",
    "address": "Government Medical College Hospital, Sivaganga, Sivaganga, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 9,
    "bio": "Certified Ophthalmologist specialist at Government Medical College Hospital, Sivaganga providing comprehensive clinical healthcare for patients in Sivaganga and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Khanna",
    "email": "_deepika_khanna137@hospital.com",
    "mobile": "+91 9840100137",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government District Headquarters Hospital, Tenkasi",
    "district": "Tenkasi",
    "address": "Government District Headquarters Hospital, Tenkasi, Tenkasi, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 10,
    "bio": "Certified Ophthalmologist specialist at Government District Headquarters Hospital, Tenkasi providing comprehensive clinical healthcare for patients in Tenkasi and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Kapoor",
    "email": "_reyansh_kapoor138@hospital.com",
    "mobile": "+91 9840100138",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Theni Medical College & Hospital, Kanavilku",
    "district": "Theni",
    "address": "Government Theni Medical College & Hospital, Kanavilku, Theni, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 11,
    "bio": "Certified Ophthalmologist specialist at Government Theni Medical College & Hospital, Kanavilku providing comprehensive clinical healthcare for patients in Theni and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Mehra",
    "email": "_catherine_mehra139@hospital.com",
    "mobile": "+91 9840100139",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College Hospital, Thoothukudi",
    "district": "Thoothukudi",
    "address": "Government Medical College Hospital, Thoothukudi, Thoothukudi, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 12,
    "bio": "Certified Ophthalmologist specialist at Government Medical College Hospital, Thoothukudi providing comprehensive clinical healthcare for patients in Thoothukudi and across Tamil Nadu."
  },
  {
    "name": "Dr. Nivaan Arora",
    "email": "_nivaan_arora140@hospital.com",
    "mobile": "+91 9840100140",
    "specialization": "Ophthalmologist",
    "qualification": "MBBS, MS (Ophthalmology), DO",
    "hospital": "Government Medical College Hospital, Tiruvallur",
    "district": "Tiruvallur",
    "address": "Government Medical College Hospital, Tiruvallur, Tiruvallur, Tamil Nadu",
    "consultationFee": 450,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 13,
    "bio": "Certified Ophthalmologist specialist at Government Medical College Hospital, Tiruvallur providing comprehensive clinical healthcare for patients in Tiruvallur and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Kapoor",
    "email": "_vihaan_kapoor141@hospital.com",
    "mobile": "+91 9840100141",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Theni Medical College & Hospital, Kanavilku",
    "district": "Theni",
    "address": "Government Theni Medical College & Hospital, Kanavilku, Theni, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 14,
    "bio": "Certified Urologist specialist at Government Theni Medical College & Hospital, Kanavilku providing comprehensive clinical healthcare for patients in Theni and across Tamil Nadu."
  },
  {
    "name": "Dr. Ahan Malhotra",
    "email": "_ahan_malhotra142@hospital.com",
    "mobile": "+91 9840100142",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Medical College Hospital, Thoothukudi",
    "district": "Thoothukudi",
    "address": "Government Medical College Hospital, Thoothukudi, Thoothukudi, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 15,
    "bio": "Certified Urologist specialist at Government Medical College Hospital, Thoothukudi providing comprehensive clinical healthcare for patients in Thoothukudi and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Sethi",
    "email": "_kareena_sethi143@hospital.com",
    "mobile": "+91 9840100143",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Medical College Hospital, Tiruvallur",
    "district": "Tiruvallur",
    "address": "Government Medical College Hospital, Tiruvallur, Tiruvallur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 16,
    "bio": "Certified Urologist specialist at Government Medical College Hospital, Tiruvallur providing comprehensive clinical healthcare for patients in Tiruvallur and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Bhatia",
    "email": "_zayan_bhatia144@hospital.com",
    "mobile": "+91 9840100144",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Medical College Hospital, Tiruvannamalai",
    "district": "Tiruvannamalai",
    "address": "Government Medical College Hospital, Tiruvannamalai, Tiruvannamalai, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 17,
    "bio": "Certified Urologist specialist at Government Medical College Hospital, Tiruvannamalai providing comprehensive clinical healthcare for patients in Tiruvannamalai and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Khanna",
    "email": "_kiara_khanna145@hospital.com",
    "mobile": "+91 9840100145",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Tiruvarur Medical College Hospital, Vilamal",
    "district": "Tiruvarur",
    "address": "Government Tiruvarur Medical College Hospital, Vilamal, Tiruvarur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 18,
    "bio": "Certified Urologist specialist at Government Tiruvarur Medical College Hospital, Vilamal providing comprehensive clinical healthcare for patients in Tiruvarur and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Mehra",
    "email": "_arush_mehra146@hospital.com",
    "mobile": "+91 9840100146",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Headquarters Hospital, Ranipet",
    "district": "Ranipet",
    "address": "Government Headquarters Hospital, Ranipet, Ranipet, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 19,
    "bio": "Certified Urologist specialist at Government Headquarters Hospital, Ranipet providing comprehensive clinical healthcare for patients in Ranipet and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Kapoor",
    "email": "_malavika_kapoor147@hospital.com",
    "mobile": "+91 9840100147",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Headquarters Hospital, Tirupattur",
    "district": "Tirupattur",
    "address": "Government Headquarters Hospital, Tirupattur, Tirupattur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 20,
    "bio": "Certified Urologist specialist at Government Headquarters Hospital, Tirupattur providing comprehensive clinical healthcare for patients in Tirupattur and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Sethi",
    "email": "_riaan_sethi148@hospital.com",
    "mobile": "+91 9840100148",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Medical College Hospital, Mundiyampakkam, Viluppuram",
    "district": "Viluppuram",
    "address": "Government Medical College Hospital, Mundiyampakkam, Viluppuram, Viluppuram, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 21,
    "bio": "Certified Urologist specialist at Government Medical College Hospital, Mundiyampakkam, Viluppuram providing comprehensive clinical healthcare for patients in Viluppuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Khanna",
    "email": "_pooja_khanna149@hospital.com",
    "mobile": "+91 9840100149",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Medical College Hospital, Virudhunagar",
    "district": "Virudhunagar",
    "address": "Government Medical College Hospital, Virudhunagar, Virudhunagar, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 22,
    "bio": "Certified Urologist specialist at Government Medical College Hospital, Virudhunagar providing comprehensive clinical healthcare for patients in Virudhunagar and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Mehta",
    "email": "_advik_mehta150@hospital.com",
    "mobile": "+91 9840100150",
    "specialization": "Urologist",
    "qualification": "MBBS, MS, M.Ch (Urology)",
    "hospital": "Government Medical College Hospital, Krishnagiri",
    "district": "Krishnagiri",
    "address": "Government Medical College Hospital, Krishnagiri, Krishnagiri, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 8,
    "bio": "Certified Urologist specialist at Government Medical College Hospital, Krishnagiri providing comprehensive clinical healthcare for patients in Krishnagiri and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Kapoor",
    "email": "_alia_kapoor151@hospital.com",
    "mobile": "+91 9840100151",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government Medical College Hospital, Mundiyampakkam, Viluppuram",
    "district": "Viluppuram",
    "address": "Government Medical College Hospital, Mundiyampakkam, Viluppuram, Viluppuram, Tamil Nadu",
    "consultationFee": 850,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 9,
    "bio": "Certified Plastic Surgeon specialist at Government Medical College Hospital, Mundiyampakkam, Viluppuram providing comprehensive clinical healthcare for patients in Viluppuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Malhotra",
    "email": "_kabir_malhotra152@hospital.com",
    "mobile": "+91 9840100152",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government Medical College Hospital, Virudhunagar",
    "district": "Virudhunagar",
    "address": "Government Medical College Hospital, Virudhunagar, Virudhunagar, Tamil Nadu",
    "consultationFee": 900,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 10,
    "bio": "Certified Plastic Surgeon specialist at Government Medical College Hospital, Virudhunagar providing comprehensive clinical healthcare for patients in Virudhunagar and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Sethi",
    "email": "_deepika_sethi153@hospital.com",
    "mobile": "+91 9840100153",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government Medical College Hospital, Krishnagiri",
    "district": "Krishnagiri",
    "address": "Government Medical College Hospital, Krishnagiri, Krishnagiri, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 11,
    "bio": "Certified Plastic Surgeon specialist at Government Medical College Hospital, Krishnagiri providing comprehensive clinical healthcare for patients in Krishnagiri and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Khanna",
    "email": "_ayaan_khanna154@hospital.com",
    "mobile": "+91 9840100154",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government Medical College Hospital, Dharmapuri",
    "district": "Dharmapuri",
    "address": "Government Medical College Hospital, Dharmapuri, Dharmapuri, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 12,
    "bio": "Certified Plastic Surgeon specialist at Government Medical College Hospital, Dharmapuri providing comprehensive clinical healthcare for patients in Dharmapuri and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Kapoor",
    "email": "_kriti_kapoor155@hospital.com",
    "mobile": "+91 9840100155",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government Medical College Hospital, Ariyalur",
    "district": "Ariyalur",
    "address": "Government Medical College Hospital, Ariyalur, Ariyalur, Tamil Nadu",
    "consultationFee": 850,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 13,
    "bio": "Certified Plastic Surgeon specialist at Government Medical College Hospital, Ariyalur providing comprehensive clinical healthcare for patients in Ariyalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Bansal",
    "email": "_reyansh_bansal156@hospital.com",
    "mobile": "+91 9840100156",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur",
    "district": "Perambalur",
    "address": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur, Perambalur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 14,
    "bio": "Certified Plastic Surgeon specialist at Dhanalakshmi Srinivasan Medical College Hospital, Perambalur providing comprehensive clinical healthcare for patients in Perambalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Mehra",
    "email": "_myra_mehra157@hospital.com",
    "mobile": "+91 9840100157",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government Medical College Hospital, Kallakurichi",
    "district": "Kallakurichi",
    "address": "Government Medical College Hospital, Kallakurichi, Kallakurichi, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 15,
    "bio": "Certified Plastic Surgeon specialist at Government Medical College Hospital, Kallakurichi providing comprehensive clinical healthcare for patients in Kallakurichi and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Kapoor",
    "email": "_zayan_kapoor158@hospital.com",
    "mobile": "+91 9840100158",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Government District Headquarters Hospital, Mayiladuthurai",
    "district": "Mayiladuthurai",
    "address": "Government District Headquarters Hospital, Mayiladuthurai, Mayiladuthurai, Tamil Nadu",
    "consultationFee": 850,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 16,
    "bio": "Certified Plastic Surgeon specialist at Government District Headquarters Hospital, Mayiladuthurai providing comprehensive clinical healthcare for patients in Mayiladuthurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Malhotra",
    "email": "_shobana_malhotra159@hospital.com",
    "mobile": "+91 9840100159",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Kanyakumari Government Medical College Hospital, Asaripallam",
    "district": "Kanniyakumari",
    "address": "Kanyakumari Government Medical College Hospital, Asaripallam, Kanniyakumari, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 17,
    "bio": "Certified Plastic Surgeon specialist at Kanyakumari Government Medical College Hospital, Asaripallam providing comprehensive clinical healthcare for patients in Kanniyakumari and across Tamil Nadu."
  },
  {
    "name": "Dr. Nivaan Sethi",
    "email": "_nivaan_sethi160@hospital.com",
    "mobile": "+91 9840100160",
    "specialization": "Plastic Surgeon",
    "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
    "hospital": "Apollo Hospitals, Greams Road",
    "district": "Chennai",
    "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 18,
    "bio": "Certified Plastic Surgeon specialist at Apollo Hospitals, Greams Road providing comprehensive clinical healthcare for patients in Chennai and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Bansal",
    "email": "_kiara_bansal161@hospital.com",
    "mobile": "+91 9840100161",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Government District Headquarters Hospital, Mayiladuthurai",
    "district": "Mayiladuthurai",
    "address": "Government District Headquarters Hospital, Mayiladuthurai, Mayiladuthurai, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 19,
    "bio": "Certified Radiologist specialist at Government District Headquarters Hospital, Mayiladuthurai providing comprehensive clinical healthcare for patients in Mayiladuthurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Kapoor",
    "email": "_vihaan_kapoor162@hospital.com",
    "mobile": "+91 9840100162",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Kanyakumari Government Medical College Hospital, Asaripallam",
    "district": "Kanniyakumari",
    "address": "Kanyakumari Government Medical College Hospital, Asaripallam, Kanniyakumari, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 20,
    "bio": "Certified Radiologist specialist at Kanyakumari Government Medical College Hospital, Asaripallam providing comprehensive clinical healthcare for patients in Kanniyakumari and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Mehra",
    "email": "_pooja_mehra163@hospital.com",
    "mobile": "+91 9840100163",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Apollo Hospitals, Greams Road",
    "district": "Chennai",
    "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 21,
    "bio": "Certified Radiologist specialist at Apollo Hospitals, Greams Road providing comprehensive clinical healthcare for patients in Chennai and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Sethi",
    "email": "_arush_sethi164@hospital.com",
    "mobile": "+91 9840100164",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "PSG Hospitals, Peelamedu",
    "district": "Coimbatore",
    "address": "PSG Hospitals, Peelamedu, Coimbatore, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 22,
    "bio": "Certified Radiologist specialist at PSG Hospitals, Peelamedu providing comprehensive clinical healthcare for patients in Coimbatore and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Khanna",
    "email": "_malavika_khanna165@hospital.com",
    "mobile": "+91 9840100165",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Government Rajaji Hospital & Medical College",
    "district": "Madurai",
    "address": "Government Rajaji Hospital & Medical College, Madurai, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 8,
    "bio": "Certified Radiologist specialist at Government Rajaji Hospital & Medical College providing comprehensive clinical healthcare for patients in Madurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Ahan Bhatia",
    "email": "_ahan_bhatia166@hospital.com",
    "mobile": "+91 9840100166",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Manipal Hospitals, Dalmia Board",
    "district": "Salem",
    "address": "Manipal Hospitals, Dalmia Board, Salem, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 9,
    "bio": "Certified Radiologist specialist at Manipal Hospitals, Dalmia Board providing comprehensive clinical healthcare for patients in Salem and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Kapoor",
    "email": "_catherine_kapoor167@hospital.com",
    "mobile": "+91 9840100167",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Kauvery Hospital, Cantonment",
    "district": "Tiruchirappalli",
    "address": "Kauvery Hospital, Cantonment, Tiruchirappalli, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 10,
    "bio": "Certified Radiologist specialist at Kauvery Hospital, Cantonment providing comprehensive clinical healthcare for patients in Tiruchirappalli and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Malhotra",
    "email": "_riaan_malhotra168@hospital.com",
    "mobile": "+91 9840100168",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Tirunelveli Medical College Hospital, High Ground",
    "district": "Tirunelveli",
    "address": "Tirunelveli Medical College Hospital, High Ground, Tirunelveli, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 11,
    "bio": "Certified Radiologist specialist at Tirunelveli Medical College Hospital, High Ground providing comprehensive clinical healthcare for patients in Tirunelveli and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Arora",
    "email": "_deepika_arora169@hospital.com",
    "mobile": "+91 9840100169",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Christian Medical College (CMC) Hospital, Ida Scudder Road",
    "district": "Vellore",
    "address": "Christian Medical College (CMC) Hospital, Ida Scudder Road, Vellore, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 12,
    "bio": "Certified Radiologist specialist at Christian Medical College (CMC) Hospital, Ida Scudder Road providing comprehensive clinical healthcare for patients in Vellore and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Mehta",
    "email": "_advik_mehta170@hospital.com",
    "mobile": "+91 9840100170",
    "specialization": "Radiologist",
    "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
    "hospital": "Government Erode Medical College Hospital, Perundurai",
    "district": "Erode",
    "address": "Government Erode Medical College Hospital, Perundurai, Erode, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 13,
    "bio": "Certified Radiologist specialist at Government Erode Medical College Hospital, Perundurai providing comprehensive clinical healthcare for patients in Erode and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Kapoor",
    "email": "_kareena_kapoor171@hospital.com",
    "mobile": "+91 9840100171",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Tirunelveli Medical College Hospital, High Ground",
    "district": "Tirunelveli",
    "address": "Tirunelveli Medical College Hospital, High Ground, Tirunelveli, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 14,
    "bio": "Certified Neonatologist specialist at Tirunelveli Medical College Hospital, High Ground providing comprehensive clinical healthcare for patients in Tirunelveli and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Malhotra",
    "email": "_ayaan_malhotra172@hospital.com",
    "mobile": "+91 9840100172",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Christian Medical College (CMC) Hospital, Ida Scudder Road",
    "district": "Vellore",
    "address": "Christian Medical College (CMC) Hospital, Ida Scudder Road, Vellore, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 15,
    "bio": "Certified Neonatologist specialist at Christian Medical College (CMC) Hospital, Ida Scudder Road providing comprehensive clinical healthcare for patients in Vellore and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Mehra",
    "email": "_shobana_mehra173@hospital.com",
    "mobile": "+91 9840100173",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Government Erode Medical College Hospital, Perundurai",
    "district": "Erode",
    "address": "Government Erode Medical College Hospital, Perundurai, Erode, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 16,
    "bio": "Certified Neonatologist specialist at Government Erode Medical College Hospital, Perundurai providing comprehensive clinical healthcare for patients in Erode and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Bansal",
    "email": "_vihaan_bansal174@hospital.com",
    "mobile": "+91 9840100174",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Thanjavur Medical College Hospital, Medical College Road",
    "district": "Thanjavur",
    "address": "Thanjavur Medical College Hospital, Medical College Road, Thanjavur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 17,
    "bio": "Certified Neonatologist specialist at Thanjavur Medical College Hospital, Medical College Road providing comprehensive clinical healthcare for patients in Thanjavur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Sethi",
    "email": "_kiara_sethi175@hospital.com",
    "mobile": "+91 9840100175",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Government District Headquarters Hospital, Dindigul",
    "district": "Dindigul",
    "address": "Government District Headquarters Hospital, Dindigul, Dindigul, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 18,
    "bio": "Certified Neonatologist specialist at Government District Headquarters Hospital, Dindigul providing comprehensive clinical healthcare for patients in Dindigul and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Kapoor",
    "email": "_reyansh_kapoor176@hospital.com",
    "mobile": "+91 9840100176",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Arignar Anna Memorial Cancer Hospital & Research Institute",
    "district": "Kanchipuram",
    "address": "Arignar Anna Memorial Cancer Hospital & Research Institute, Kanchipuram, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 19,
    "bio": "Certified Neonatologist specialist at Arignar Anna Memorial Cancer Hospital & Research Institute providing comprehensive clinical healthcare for patients in Kanchipuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Khanna",
    "email": "_pooja_khanna177@hospital.com",
    "mobile": "+91 9840100177",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Chengalpattu Government Medical College Hospital, GST Road",
    "district": "Chengalpattu",
    "address": "Chengalpattu Government Medical College Hospital, GST Road, Chengalpattu, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 20,
    "bio": "Certified Neonatologist specialist at Chengalpattu Government Medical College Hospital, GST Road providing comprehensive clinical healthcare for patients in Chengalpattu and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Mehra",
    "email": "_zayan_mehra178@hospital.com",
    "mobile": "+91 9840100178",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Government Medical College Hospital, Tiruppur",
    "district": "Tiruppur",
    "address": "Government Medical College Hospital, Tiruppur, Tiruppur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 21,
    "bio": "Certified Neonatologist specialist at Government Medical College Hospital, Tiruppur providing comprehensive clinical healthcare for patients in Tiruppur and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Kapoor",
    "email": "_myra_kapoor179@hospital.com",
    "mobile": "+91 9840100179",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Government Headquarters Hospital, Cuddalore",
    "district": "Cuddalore",
    "address": "Government Headquarters Hospital, Cuddalore, Cuddalore, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 22,
    "bio": "Certified Neonatologist specialist at Government Headquarters Hospital, Cuddalore providing comprehensive clinical healthcare for patients in Cuddalore and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Sethi",
    "email": "_arush_sethi180@hospital.com",
    "mobile": "+91 9840100180",
    "specialization": "Neonatologist",
    "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
    "hospital": "Government Medical College Hospital, Gandhigramam, Karur",
    "district": "Karur",
    "address": "Government Medical College Hospital, Gandhigramam, Karur, Karur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 8,
    "bio": "Certified Neonatologist specialist at Government Medical College Hospital, Gandhigramam, Karur providing comprehensive clinical healthcare for patients in Karur and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Kapoor",
    "email": "_alia_kapoor181@hospital.com",
    "mobile": "+91 9840100181",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College Hospital, Tiruppur",
    "district": "Tiruppur",
    "address": "Government Medical College Hospital, Tiruppur, Tiruppur, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 9,
    "bio": "Certified Geriatrician specialist at Government Medical College Hospital, Tiruppur providing comprehensive clinical healthcare for patients in Tiruppur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kabir Mehra",
    "email": "_kabir_mehra182@hospital.com",
    "mobile": "+91 9840100182",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Headquarters Hospital, Cuddalore",
    "district": "Cuddalore",
    "address": "Government Headquarters Hospital, Cuddalore, Cuddalore, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 10,
    "bio": "Certified Geriatrician specialist at Government Headquarters Hospital, Cuddalore providing comprehensive clinical healthcare for patients in Cuddalore and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Bansal",
    "email": "_deepika_bansal183@hospital.com",
    "mobile": "+91 9840100183",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College Hospital, Gandhigramam, Karur",
    "district": "Karur",
    "address": "Government Medical College Hospital, Gandhigramam, Karur, Karur, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 11,
    "bio": "Certified Geriatrician specialist at Government Medical College Hospital, Gandhigramam, Karur providing comprehensive clinical healthcare for patients in Karur and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Sethi",
    "email": "_ayaan_sethi184@hospital.com",
    "mobile": "+91 9840100184",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government District Headquarters Hospital, Nagapattinam",
    "district": "Nagapattinam",
    "address": "Government District Headquarters Hospital, Nagapattinam, Nagapattinam, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 12,
    "bio": "Certified Geriatrician specialist at Government District Headquarters Hospital, Nagapattinam providing comprehensive clinical healthcare for patients in Nagapattinam and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Kapoor",
    "email": "_kriti_kapoor185@hospital.com",
    "mobile": "+91 9840100185",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College Hospital, Namakkal",
    "district": "Namakkal",
    "address": "Government Medical College Hospital, Namakkal, Namakkal, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 13,
    "bio": "Certified Geriatrician specialist at Government Medical College Hospital, Namakkal providing comprehensive clinical healthcare for patients in Namakkal and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Khanna",
    "email": "_vihaan_khanna186@hospital.com",
    "mobile": "+91 9840100186",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College & District Hospital, Ooty",
    "district": "Nilgiris",
    "address": "Government Medical College & District Hospital, Ooty, Nilgiris, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 14,
    "bio": "Certified Geriatrician specialist at Government Medical College & District Hospital, Ooty providing comprehensive clinical healthcare for patients in Nilgiris and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Mehra",
    "email": "_malavika_mehra187@hospital.com",
    "mobile": "+91 9840100187",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College Hospital, Pudukkottai",
    "district": "Pudukkottai",
    "address": "Government Medical College Hospital, Pudukkottai, Pudukkottai, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 15,
    "bio": "Certified Geriatrician specialist at Government Medical College Hospital, Pudukkottai providing comprehensive clinical healthcare for patients in Pudukkottai and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Kapoor",
    "email": "_riaan_kapoor188@hospital.com",
    "mobile": "+91 9840100188",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College Hospital, Ramanathapuram",
    "district": "Ramanathapuram",
    "address": "Government Medical College Hospital, Ramanathapuram, Ramanathapuram, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 16,
    "bio": "Certified Geriatrician specialist at Government Medical College Hospital, Ramanathapuram providing comprehensive clinical healthcare for patients in Ramanathapuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Sethi",
    "email": "_pooja_sethi189@hospital.com",
    "mobile": "+91 9840100189",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government Medical College Hospital, Sivaganga",
    "district": "Sivaganga",
    "address": "Government Medical College Hospital, Sivaganga, Sivaganga, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 17,
    "bio": "Certified Geriatrician specialist at Government Medical College Hospital, Sivaganga providing comprehensive clinical healthcare for patients in Sivaganga and across Tamil Nadu."
  },
  {
    "name": "Dr. Nivaan Bhatia",
    "email": "_nivaan_bhatia190@hospital.com",
    "mobile": "+91 9840100190",
    "specialization": "Geriatrician",
    "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
    "hospital": "Government District Headquarters Hospital, Tenkasi",
    "district": "Tenkasi",
    "address": "Government District Headquarters Hospital, Tenkasi, Tenkasi, Tamil Nadu",
    "consultationFee": 500,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 18,
    "bio": "Certified Geriatrician specialist at Government District Headquarters Hospital, Tenkasi providing comprehensive clinical healthcare for patients in Tenkasi and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Mehra",
    "email": "_kiara_mehra191@hospital.com",
    "mobile": "+91 9840100191",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Medical College Hospital, Ramanathapuram",
    "district": "Ramanathapuram",
    "address": "Government Medical College Hospital, Ramanathapuram, Ramanathapuram, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 19,
    "bio": "Certified Hepatologist specialist at Government Medical College Hospital, Ramanathapuram providing comprehensive clinical healthcare for patients in Ramanathapuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Kapoor",
    "email": "_arush_kapoor192@hospital.com",
    "mobile": "+91 9840100192",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Medical College Hospital, Sivaganga",
    "district": "Sivaganga",
    "address": "Government Medical College Hospital, Sivaganga, Sivaganga, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 20,
    "bio": "Certified Hepatologist specialist at Government Medical College Hospital, Sivaganga providing comprehensive clinical healthcare for patients in Sivaganga and across Tamil Nadu."
  },
  {
    "name": "Dr. Kareena Malhotra",
    "email": "_kareena_malhotra193@hospital.com",
    "mobile": "+91 9840100193",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government District Headquarters Hospital, Tenkasi",
    "district": "Tenkasi",
    "address": "Government District Headquarters Hospital, Tenkasi, Tenkasi, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 21,
    "bio": "Certified Hepatologist specialist at Government District Headquarters Hospital, Tenkasi providing comprehensive clinical healthcare for patients in Tenkasi and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Sethi",
    "email": "_vihaan_sethi194@hospital.com",
    "mobile": "+91 9840100194",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Theni Medical College & Hospital, Kanavilku",
    "district": "Theni",
    "address": "Government Theni Medical College & Hospital, Kanavilku, Theni, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 22,
    "bio": "Certified Hepatologist specialist at Government Theni Medical College & Hospital, Kanavilku providing comprehensive clinical healthcare for patients in Theni and across Tamil Nadu."
  },
  {
    "name": "Dr. Shruthi Kapoor",
    "email": "_shruthi_kapoor195@hospital.com",
    "mobile": "+91 9840100195",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Medical College Hospital, Thoothukudi",
    "district": "Thoothukudi",
    "address": "Government Medical College Hospital, Thoothukudi, Thoothukudi, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 8,
    "bio": "Certified Hepatologist specialist at Government Medical College Hospital, Thoothukudi providing comprehensive clinical healthcare for patients in Thoothukudi and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Bansal",
    "email": "_ayaan_bansal196@hospital.com",
    "mobile": "+91 9840100196",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Medical College Hospital, Tiruvallur",
    "district": "Tiruvallur",
    "address": "Government Medical College Hospital, Tiruvallur, Tiruvallur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 9,
    "bio": "Certified Hepatologist specialist at Government Medical College Hospital, Tiruvallur providing comprehensive clinical healthcare for patients in Tiruvallur and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Mehra",
    "email": "_catherine_mehra197@hospital.com",
    "mobile": "+91 9840100197",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Medical College Hospital, Tiruvannamalai",
    "district": "Tiruvannamalai",
    "address": "Government Medical College Hospital, Tiruvannamalai, Tiruvannamalai, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 10,
    "bio": "Certified Hepatologist specialist at Government Medical College Hospital, Tiruvannamalai providing comprehensive clinical healthcare for patients in Tiruvannamalai and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Kapoor",
    "email": "_zayan_kapoor198@hospital.com",
    "mobile": "+91 9840100198",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Tiruvarur Medical College Hospital, Vilamal",
    "district": "Tiruvarur",
    "address": "Government Tiruvarur Medical College Hospital, Vilamal, Tiruvarur, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 11,
    "bio": "Certified Hepatologist specialist at Government Tiruvarur Medical College Hospital, Vilamal providing comprehensive clinical healthcare for patients in Tiruvarur and across Tamil Nadu."
  },
  {
    "name": "Dr. Malavika Sethi",
    "email": "_malavika_sethi199@hospital.com",
    "mobile": "+91 9840100199",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Headquarters Hospital, Ranipet",
    "district": "Ranipet",
    "address": "Government Headquarters Hospital, Ranipet, Ranipet, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 12,
    "bio": "Certified Hepatologist specialist at Government Headquarters Hospital, Ranipet providing comprehensive clinical healthcare for patients in Ranipet and across Tamil Nadu."
  },
  {
    "name": "Dr. Advik Khanna",
    "email": "_advik_khanna200@hospital.com",
    "mobile": "+91 9840100200",
    "specialization": "Hepatologist",
    "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
    "hospital": "Government Headquarters Hospital, Tirupattur",
    "district": "Tirupattur",
    "address": "Government Headquarters Hospital, Tirupattur, Tirupattur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 13,
    "bio": "Certified Hepatologist specialist at Government Headquarters Hospital, Tirupattur providing comprehensive clinical healthcare for patients in Tirupattur and across Tamil Nadu."
  },
  {
    "name": "Dr. Rithvik Malhotra",
    "email": "_rithvik_malhotra201@hospital.com",
    "mobile": "+91 9840100201",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Tiruvarur Medical College Hospital, Vilamal",
    "district": "Tiruvarur",
    "address": "Government Tiruvarur Medical College Hospital, Vilamal, Tiruvarur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 14,
    "bio": "Certified Hematologist specialist at Government Tiruvarur Medical College Hospital, Vilamal providing comprehensive clinical healthcare for patients in Tiruvarur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Kapoor",
    "email": "_kiara_kapoor202@hospital.com",
    "mobile": "+91 9840100202",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Headquarters Hospital, Ranipet",
    "district": "Ranipet",
    "address": "Government Headquarters Hospital, Ranipet, Ranipet, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 15,
    "bio": "Certified Hematologist specialist at Government Headquarters Hospital, Ranipet providing comprehensive clinical healthcare for patients in Ranipet and across Tamil Nadu."
  },
  {
    "name": "Dr. Aarush Khanna",
    "email": "_aarush_khanna203@hospital.com",
    "mobile": "+91 9840100203",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Headquarters Hospital, Tirupattur",
    "district": "Tirupattur",
    "address": "Government Headquarters Hospital, Tirupattur, Tirupattur, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 16,
    "bio": "Certified Hematologist specialist at Government Headquarters Hospital, Tirupattur providing comprehensive clinical healthcare for patients in Tirupattur and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepika Mehra",
    "email": "_deepika_mehra204@hospital.com",
    "mobile": "+91 9840100204",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Medical College Hospital, Mundiyampakkam, Viluppuram",
    "district": "Viluppuram",
    "address": "Government Medical College Hospital, Mundiyampakkam, Viluppuram, Viluppuram, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 17,
    "bio": "Certified Hematologist specialist at Government Medical College Hospital, Mundiyampakkam, Viluppuram providing comprehensive clinical healthcare for patients in Viluppuram and across Tamil Nadu."
  },
  {
    "name": "Dr. Vihaan Bhatia",
    "email": "_vihaan_bhatia205@hospital.com",
    "mobile": "+91 9840100205",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Medical College Hospital, Virudhunagar",
    "district": "Virudhunagar",
    "address": "Government Medical College Hospital, Virudhunagar, Virudhunagar, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 18,
    "bio": "Certified Hematologist specialist at Government Medical College Hospital, Virudhunagar providing comprehensive clinical healthcare for patients in Virudhunagar and across Tamil Nadu."
  },
  {
    "name": "Dr. Alia Sethi",
    "email": "_alia_sethi206@hospital.com",
    "mobile": "+91 9840100206",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Medical College Hospital, Krishnagiri",
    "district": "Krishnagiri",
    "address": "Government Medical College Hospital, Krishnagiri, Krishnagiri, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 19,
    "bio": "Certified Hematologist specialist at Government Medical College Hospital, Krishnagiri providing comprehensive clinical healthcare for patients in Krishnagiri and across Tamil Nadu."
  },
  {
    "name": "Dr. Zayan Kapoor",
    "email": "_zayan_kapoor207@hospital.com",
    "mobile": "+91 9840100207",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Medical College Hospital, Dharmapuri",
    "district": "Dharmapuri",
    "address": "Government Medical College Hospital, Dharmapuri, Dharmapuri, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 20,
    "bio": "Certified Hematologist specialist at Government Medical College Hospital, Dharmapuri providing comprehensive clinical healthcare for patients in Dharmapuri and across Tamil Nadu."
  },
  {
    "name": "Dr. Pooja Malhotra",
    "email": "_pooja_malhotra208@hospital.com",
    "mobile": "+91 9840100208",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Medical College Hospital, Ariyalur",
    "district": "Ariyalur",
    "address": "Government Medical College Hospital, Ariyalur, Ariyalur, Tamil Nadu",
    "consultationFee": 800,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 21,
    "bio": "Certified Hematologist specialist at Government Medical College Hospital, Ariyalur providing comprehensive clinical healthcare for patients in Ariyalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Myra Khanna",
    "email": "_myra_khanna209@hospital.com",
    "mobile": "+91 9840100209",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur",
    "district": "Perambalur",
    "address": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur, Perambalur, Tamil Nadu",
    "consultationFee": 750,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 22,
    "bio": "Certified Hematologist specialist at Dhanalakshmi Srinivasan Medical College Hospital, Perambalur providing comprehensive clinical healthcare for patients in Perambalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Reyansh Mehra",
    "email": "_reyansh_mehra210@hospital.com",
    "mobile": "+91 9840100210",
    "specialization": "Hematologist",
    "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
    "hospital": "Government Medical College Hospital, Kallakurichi",
    "district": "Kallakurichi",
    "address": "Government Medical College Hospital, Kallakurichi, Kallakurichi, Tamil Nadu",
    "consultationFee": 700,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 8,
    "bio": "Certified Hematologist specialist at Government Medical College Hospital, Kallakurichi providing comprehensive clinical healthcare for patients in Kallakurichi and across Tamil Nadu."
  },
  {
    "name": "Dr. Yuvika Menon",
    "email": "_yuvika_menon211@hospital.com",
    "mobile": "+91 9840100211",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Government Medical College Hospital, Ariyalur",
    "district": "Ariyalur",
    "address": "Government Medical College Hospital, Ariyalur, Ariyalur, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 9,
    "bio": "Certified Allergist & Immunologist specialist at Government Medical College Hospital, Ariyalur providing comprehensive clinical healthcare for patients in Ariyalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Ayaan Kapoor",
    "email": "_ayaan_kapoor212@hospital.com",
    "mobile": "+91 9840100212",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur",
    "district": "Perambalur",
    "address": "Dhanalakshmi Srinivasan Medical College Hospital, Perambalur, Perambalur, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 10,
    "bio": "Certified Allergist & Immunologist specialist at Dhanalakshmi Srinivasan Medical College Hospital, Perambalur providing comprehensive clinical healthcare for patients in Perambalur and across Tamil Nadu."
  },
  {
    "name": "Dr. Kriti Malhotra",
    "email": "_kriti_malhotra213@hospital.com",
    "mobile": "+91 9840100213",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Government Medical College Hospital, Kallakurichi",
    "district": "Kallakurichi",
    "address": "Government Medical College Hospital, Kallakurichi, Kallakurichi, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 11,
    "bio": "Certified Allergist & Immunologist specialist at Government Medical College Hospital, Kallakurichi providing comprehensive clinical healthcare for patients in Kallakurichi and across Tamil Nadu."
  },
  {
    "name": "Dr. Zendaya Thomas",
    "email": "_zendaya_thomas214@hospital.com",
    "mobile": "+91 9840100214",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Government District Headquarters Hospital, Mayiladuthurai",
    "district": "Mayiladuthurai",
    "address": "Government District Headquarters Hospital, Mayiladuthurai, Mayiladuthurai, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 12,
    "bio": "Certified Allergist & Immunologist specialist at Government District Headquarters Hospital, Mayiladuthurai providing comprehensive clinical healthcare for patients in Mayiladuthurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Kiara Sethi",
    "email": "_kiara_sethi215@hospital.com",
    "mobile": "+91 9840100215",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Kanyakumari Government Medical College Hospital, Asaripallam",
    "district": "Kanniyakumari",
    "address": "Kanyakumari Government Medical College Hospital, Asaripallam, Kanniyakumari, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 13,
    "bio": "Certified Allergist & Immunologist specialist at Kanyakumari Government Medical College Hospital, Asaripallam providing comprehensive clinical healthcare for patients in Kanniyakumari and across Tamil Nadu."
  },
  {
    "name": "Dr. Arush Mehra",
    "email": "_arush_mehra216@hospital.com",
    "mobile": "+91 9840100216",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Apollo Hospitals, Greams Road",
    "district": "Chennai",
    "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 14,
    "bio": "Certified Allergist & Immunologist specialist at Apollo Hospitals, Greams Road providing comprehensive clinical healthcare for patients in Chennai and across Tamil Nadu."
  },
  {
    "name": "Dr. Shobana Kapoor",
    "email": "_shobana_kapoor217@hospital.com",
    "mobile": "+91 9840100217",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "PSG Hospitals, Peelamedu",
    "district": "Coimbatore",
    "address": "PSG Hospitals, Peelamedu, Coimbatore, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.8,
    "experience": 15,
    "bio": "Certified Allergist & Immunologist specialist at PSG Hospitals, Peelamedu providing comprehensive clinical healthcare for patients in Coimbatore and across Tamil Nadu."
  },
  {
    "name": "Dr. Riaan Bhatia",
    "email": "_riaan_bhatia218@hospital.com",
    "mobile": "+91 9840100218",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Government Rajaji Hospital & Medical College",
    "district": "Madurai",
    "address": "Government Rajaji Hospital & Medical College, Madurai, Tamil Nadu",
    "consultationFee": 650,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.9,
    "experience": 16,
    "bio": "Certified Allergist & Immunologist specialist at Government Rajaji Hospital & Medical College providing comprehensive clinical healthcare for patients in Madurai and across Tamil Nadu."
  },
  {
    "name": "Dr. Catherine Fernandes",
    "email": "_catherine_fernandes219@hospital.com",
    "mobile": "+91 9840100219",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Manipal Hospitals, Dalmia Board",
    "district": "Salem",
    "address": "Manipal Hospitals, Dalmia Board, Salem, Tamil Nadu",
    "consultationFee": 600,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 5,
    "experience": 17,
    "bio": "Certified Allergist & Immunologist specialist at Manipal Hospitals, Dalmia Board providing comprehensive clinical healthcare for patients in Salem and across Tamil Nadu."
  },
  {
    "name": "Dr. Anaya Khanna",
    "email": "_anaya_khanna220@hospital.com",
    "mobile": "+91 9840100220",
    "specialization": "Allergist & Immunologist",
    "qualification": "MBBS, MD, DAA (Allergy & Clinical Immunology)",
    "hospital": "Kauvery Hospital, Cantonment",
    "district": "Tiruchirappalli",
    "address": "Kauvery Hospital, Cantonment, Tiruchirappalli, Tamil Nadu",
    "consultationFee": 550,
    "availableDays": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "availableTimeSlots": [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM"
    ],
    "rating": 4.7,
    "experience": 18,
    "bio": "Certified Allergist & Immunologist specialist at Kauvery Hospital, Cantonment providing comprehensive clinical healthcare for patients in Tiruchirappalli and across Tamil Nadu."
  }
];

const seedDatabase = async (forceClean = false) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      if (process.env.MONGO_URI) {
        await mongoose.connect(process.env.MONGO_URI);
      }
    }

    console.log('🌱 [Seeder] Starting database sync for 22 specialties and 220 doctors across all 38 Tamil Nadu districts...');

    // 1. Seed Admin
    let admin = await User.findOne({ email: 'admin@hospital.com' });
    if (!admin) {
      admin = await User.create({
        name: 'System Admin',
        email: 'admin@hospital.com',
        mobile: '+91 9840000000',
        password: 'Password123!',
        role: 'admin'
      });
      console.log('✅ Admin user created');
    }

    // 2. Seed Patient (Ramesh Chandran)
    let patientUser = await User.findOne({ email: 'ramesh.chandran@gmail.com' });
    if (!patientUser) {
      patientUser = await User.create({
        name: 'Ramesh Chandran',
        email: 'ramesh.chandran@gmail.com',
        mobile: '+91 9876543210',
        password: 'Password123!',
        role: 'patient'
      });
      await Patient.create({
        user: patientUser._id,
        age: 38,
        gender: 'Male',
        address: '42 Anna Salai, T. Nagar, Chennai',
        district: 'Chennai',
        bloodGroup: 'B+',
        allergies: ['Penicillin'],
        chronicConditions: ['Hypertension']
      });
      console.log('✅ Patient Ramesh Chandran created');
    }

    // 3. Seed / Upsert all 220 Doctors with 38-district coverage
    let createdCount = 0;
    let updatedCount = 0;

    for (const docData of SEED_DOCTORS) {
      let docUser = await User.findOne({ email: docData.email });
      if (!docUser) {
        docUser = await User.create({
          name: docData.name,
          email: docData.email,
          mobile: docData.mobile,
          password: 'Password123!',
          role: 'doctor',
          isActive: true
        });
        createdCount++;
      } else {
        docUser.name = docData.name;
        docUser.mobile = docData.mobile;
        docUser.role = 'doctor';
        docUser.isActive = true;
        await docUser.save();
      }

      let doctorDoc = await Doctor.findOne({ user: docUser._id });
      if (!doctorDoc) {
        await Doctor.create({
          user: docUser._id,
          specialization: docData.specialization,
          qualification: docData.qualification,
          hospital: docData.hospital,
          district: docData.district,
          address: docData.address,
          consultationFee: docData.consultationFee,
          availableDays: docData.availableDays,
          availableTimeSlots: docData.availableTimeSlots,
          rating: docData.rating,
          experience: docData.experience || 10,
          bio: docData.bio,
          isVerified: true
        });
      } else {
        doctorDoc.specialization = docData.specialization;
        doctorDoc.qualification = docData.qualification;
        doctorDoc.hospital = docData.hospital;
        doctorDoc.district = docData.district;
        doctorDoc.address = docData.address;
        doctorDoc.consultationFee = docData.consultationFee;
        doctorDoc.availableDays = docData.availableDays;
        doctorDoc.availableTimeSlots = docData.availableTimeSlots;
        doctorDoc.rating = docData.rating;
        doctorDoc.bio = docData.bio;
        doctorDoc.isVerified = true;
        await doctorDoc.save();
        updatedCount++;
      }
    }

    const totalInDb = await Doctor.countDocuments();
    console.log(`✅ [Seeder] Finished: ${createdCount} created, ${updatedCount} updated. Total doctors in DB: ${totalInDb}`);

    return { success: true, count: totalInDb, created: createdCount, updated: updatedCount };
  } catch (error) {
    console.error('❌ [Seeder Error]:', error);
    throw error;
  }
};

if (require.main === module) {
  require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') });
  const connectDB = require('../config/db');
  connectDB().then(async () => {
    await seedDatabase(false);
    console.log('Seeding script completed successfully.');
    process.exit(0);
  }).catch(err => {
    console.error('Seeding script failed:', err);
    process.exit(1);
  });
}

module.exports = {
  SEED_DOCTORS,
  seedDatabase
};
