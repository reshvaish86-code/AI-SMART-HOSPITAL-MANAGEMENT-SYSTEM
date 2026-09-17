const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');
const MedicalRecord = require('../models/MedicalRecord');
const Prescription = require('../models/Prescription');
const Notification = require('../models/Notification');
const { APPOINTMENT_STATUS } = require('./constants');

dotenv.config();

const seedDatabase = async (autoDisconnect = false) => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ai_smart_hospital';
    if (mongoose.connection.readyState !== 1) {
      console.log(`⏳ Connecting to MongoDB at ${mongoUri}...`);
      await mongoose.connect(mongoUri);
      console.log('✅ Connected to database.');
    }

    console.log('🧹 Purging existing records...');
    await User.deleteMany({});
    await Patient.deleteMany({});
    await Doctor.deleteMany({});
    await Appointment.deleteMany({});
    await MedicalRecord.deleteMany({});
    await Prescription.deleteMany({});
    await Notification.deleteMany({});

    console.log('🌱 Seeding Admin User...');
    const adminUser = await User.create({
      name: 'System Administrator',
      email: 'admin@hospital.com',
      mobile: '+91 9876543210',
      password: 'Admin@123',
      role: 'admin'
    });

    console.log('🌱 Seeding Tamil Nadu Doctors across 14 specialties with full profile records...');
    const doctorsData = [
      {
        name: 'Dr. Diya Sharma',
        email: 'doctor.diya@hospital.com',
        mobile: '+91 9840100001',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Cardiology), DM (Interventional Cardiology)',
        specialization: 'Cardiologist',
        experience: 12,
        hospital: 'Apollo Hospitals, Greams Road',
        district: 'Chennai',
        address: '21 Greams Lane, Thousand Lights, Chennai',
        consultationFee: 800,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '03:00 PM', '04:00 PM'],
        rating: 4.9,
        bio: 'Senior Consultant Interventional Cardiologist specializing in coronary angioplasty, heart failure, and preventive cardiac wellness.'
      },
      {
        name: 'Dr. Katrina Fernandez',
        email: 'doctor.katrina@hospital.com',
        mobile: '+91 9840100002',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Dermatology, Venereology & Leprosy)',
        specialization: 'Dermatologist',
        experience: 10,
        hospital: 'Ganga Medical Centre',
        district: 'Coimbatore',
        address: '313 Mettupalayam Road, Coimbatore',
        consultationFee: 650,
        availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:30 AM', '02:30 PM', '04:30 PM'],
        rating: 4.8,
        bio: 'Specialist in clinical dermatology, laser skin rejuvenation, pediatric dermatology, and chronic eczema management.'
      },
      {
        name: 'Dr. Rayaan Kapoor',
        email: 'doctor.rayaan@hospital.com',
        mobile: '+91 9840100003',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Medicine), DM (Neurology)',
        specialization: 'Neurologist',
        experience: 15,
        hospital: 'Meenakshi Mission Hospital',
        district: 'Madurai',
        address: 'Melur Main Road, Lake Area, Madurai',
        consultationFee: 750,
        availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['09:30 AM', '11:00 AM', '03:00 PM', '05:00 PM'],
        rating: 4.9,
        bio: 'Expert in acute stroke interventions, Parkinson\'s management, neuromuscular disorders, and comprehensive epilepsy care.'
      },
      {
        name: 'Dr. Riyana Sen',
        email: 'doctor.riyana@hospital.com',
        mobile: '+91 9840100004',
        password: 'Doctor@123',
        qualification: 'MBBS, DCH, DNB (Pediatrics), FIAP',
        specialization: 'Pediatrician',
        experience: 9,
        hospital: 'Manipal Childrens Clinic',
        district: 'Salem',
        address: 'Saradha College Road, Salem',
        consultationFee: 500,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        availableTimeSlots: ['09:00 AM', '10:30 AM', '04:00 PM', '05:30 PM'],
        rating: 4.9,
        bio: 'Dedicated child healthcare specialist with extensive experience in neonatal intensive care, growth monitoring, and immunization.'
      },
      {
        name: 'Dr. Adhira Nair',
        email: 'doctor.adhira@hospital.com',
        mobile: '+91 9840100005',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (Orthopedics), M.Ch (Joint Replacement)',
        specialization: 'Orthopedic',
        experience: 11,
        hospital: 'Kauvery Hospital',
        district: 'Tiruchirappalli',
        address: 'C-72, 6th Cross, Thillai Nagar, Trichy',
        consultationFee: 700,
        availableDays: ['Monday', 'Wednesday', 'Friday'],
        availableTimeSlots: ['10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'],
        rating: 4.8,
        bio: 'Consultant Orthopedic Surgeon specializing in robotic knee arthroplasty, complex trauma, and sports medicine rehabilitation.'
      },
      {
        name: 'Dr. Ishita Patel',
        email: 'doctor.ishita@hospital.com',
        mobile: '+91 9840100006',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (Obstetrics & Gynecology), DGO, FICOG',
        specialization: 'Gynecologist',
        experience: 13,
        hospital: 'MIOT International',
        district: 'Chennai',
        address: '4/112 Mount Poonamallee Road, Manapakkam, Chennai',
        consultationFee: 750,
        availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['09:30 AM', '11:30 AM', '03:30 PM', '05:00 PM'],
        rating: 4.9,
        bio: 'High-risk obstetrics specialist, laparoscopic gynecological surgeon, and fertility preservation counselor.'
      },
      {
        name: 'Dr. Nethra Sundaram',
        email: 'doctor.nethra@hospital.com',
        mobile: '+91 9840100007',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (General Medicine)',
        specialization: 'General Physician',
        experience: 14,
        hospital: 'CMC Hospital Care',
        district: 'Vellore',
        address: 'Ida Scudder Road, Vellore',
        consultationFee: 450,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        availableTimeSlots: ['08:30 AM', '10:00 AM', '11:30 AM', '03:00 PM', '04:30 PM', '06:00 PM'],
        rating: 4.8,
        bio: 'Comprehensive internal medicine consultant specializing in chronic diabetes management, hypertension, and systemic infectious diseases.'
      },
      {
        name: 'Dr. Shaan Mukherjee',
        email: 'doctor.shaan@hospital.com',
        mobile: '+91 9840100008',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (ENT), DLO',
        specialization: 'ENT Specialist',
        experience: 8,
        hospital: 'Shifa Health City',
        district: 'Tirunelveli',
        address: 'High Ground, Tirunelveli',
        consultationFee: 500,
        availableDays: ['Tuesday', 'Thursday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:00 AM', '03:00 PM', '04:00 PM'],
        rating: 4.7,
        bio: 'Advanced micro-ear surgeon, endoscopic sinus surgery expert, and specialist in vertigo and pediatric ENT conditions.'
      },
      {
        name: 'Dr. Roshini Krishnan',
        email: 'doctor.roshini@hospital.com',
        mobile: '+91 9840100009',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Pulmonary Medicine), FCCP',
        specialization: 'Pulmonologist',
        experience: 10,
        hospital: 'SIMS Hospital',
        district: 'Chennai',
        address: '1 Jawaharlal Nehru Salai, Vadapalani, Chennai',
        consultationFee: 750,
        availableDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['10:00 AM', '11:30 AM', '02:30 PM', '04:00 PM'],
        rating: 4.8,
        bio: 'Consultant Pulmonologist with special interest in bronchial asthma, COPD, interstitial lung disease, and sleep apnea.'
      },
      {
        name: 'Dr. Lavanya Swaminathan',
        email: 'doctor.lavanya@hospital.com',
        mobile: '+91 9840100010',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (Ophthalmology), FICO',
        specialization: 'Ophthalmologist',
        experience: 11,
        hospital: 'Lotus Eye Care Hospital',
        district: 'Erode',
        address: 'Perundurai Road, Erode',
        consultationFee: 550,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        availableTimeSlots: ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM'],
        rating: 4.9,
        bio: 'Phacoemulsification cataract surgeon, corneal specialist, laser vision correction clinician, and glaucoma care expert.'
      },
      {
        name: 'Dr. Ishaan Roy',
        email: 'doctor.ishaan@hospital.com',
        mobile: '+91 9840100011',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Psychiatry), DPM',
        specialization: 'Psychiatrist',
        experience: 9,
        hospital: 'VHS Hospital Health Campus',
        district: 'Chennai',
        address: 'Rajiv Gandhi Salai, Taramani, Chennai',
        consultationFee: 800,
        availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        availableTimeSlots: ['11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'],
        rating: 4.9,
        bio: 'Compassionate mental health clinician specializing in mood stability, anxiety spectrum disorders, OCD, and psychotherapy.'
      },
      {
        name: 'Dr. Aarav Mehta',
        email: 'doctor.aarav@hospital.com',
        mobile: '+91 9840100012',
        password: 'Doctor@123',
        qualification: 'BDS, MDS (Oral & Maxillofacial Surgery & Implantology)',
        specialization: 'Dentist',
        experience: 8,
        hospital: 'Royal Dental & Maxillofacial Care',
        district: 'Coimbatore',
        address: 'Avinashi Road, Peelamedu, Coimbatore',
        consultationFee: 450,
        availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:00 AM', '03:00 PM', '05:00 PM'],
        rating: 4.8,
        bio: 'Specialist in painless single-sitting root canal treatment, aesthetic cosmetic smile design, and dental implantology.'
      },
      {
        name: 'Dr. Lishika Reddy',
        email: 'doctor.lishika@hospital.com',
        mobile: '+91 9840100013',
        password: 'Doctor@123',
        qualification: 'MBBS, MD, DM (Medical Gastroenterology)',
        specialization: 'Gastroenterologist',
        experience: 13,
        hospital: 'Apollo Speciality Hospital',
        district: 'Madurai',
        address: 'KK Nagar, Madurai',
        consultationFee: 750,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        availableTimeSlots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:30 PM'],
        rating: 4.9,
        bio: 'Therapeutic GI endoscopist, liver disease specialist, inflammatory bowel disease consultant, and digestive health expert.'
      },
      {
        name: 'Dr. Thanu Raghavan',
        email: 'doctor.thanu@hospital.com',
        mobile: '+91 9840100014',
        password: 'Doctor@123',
        qualification: 'MBBS, MS, M.Ch (Urology), DNB',
        specialization: 'Urologist',
        experience: 12,
        hospital: 'Sri Gokulam Hospital',
        district: 'Salem',
        address: 'Meyyanur 3rd Cross, Salem',
        consultationFee: 650,
        availableDays: ['Tuesday', 'Thursday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:30 AM', '03:00 PM', '04:30 PM'],
        rating: 4.8,
        bio: 'Endourology expert in laser kidney stone extraction (RIRS), holmium laser prostate surgery, and laparoscopic uro-oncology.'
      },
      {
        name: 'Dr. Karthik Raman',
        email: 'doctor.karthik@hospital.com',
        mobile: '+91 9840100015',
        password: 'Doctor@123',
        qualification: 'MBBS, M.Ch (Neurosurgery)',
        specialization: 'Neurologist',
        experience: 16,
        hospital: 'Meenakshi Mission Hospital',
        district: 'Madurai',
        address: 'Melur Main Road, Lake Area, Madurai',
        consultationFee: 750,
        availableDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['09:30 AM', '11:00 AM', '03:00 PM', '05:00 PM'],
        rating: 4.9,
        bio: 'Expert in cerebrovascular disorders, stroke rehabilitation, epilepsy management, and neuromuscular diseases.'
      },
      {
        name: 'Dr. Rajesh Kumar',
        email: 'doctor.rajesh@hospital.com',
        mobile: '+91 9840100016',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Cardiology), DM',
        specialization: 'Cardiologist',
        experience: 14,
        hospital: 'Apollo Hospitals, Greams Road',
        district: 'Chennai',
        address: '21 Greams Lane, Thousand Lights, Chennai',
        consultationFee: 800,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['09:00 AM', '10:00 AM', '11:00 AM', '03:00 PM', '04:00 PM'],
        rating: 4.9,
        bio: 'Senior Consultant Interventional Cardiologist specializing in coronary angioplasty and cardiac preventive wellness.'
      },
      {
        name: 'Dr. Ananya Sundaram',
        email: 'doctor.ananya@hospital.com',
        mobile: '+91 9840100017',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Dermatology & Venereology)',
        specialization: 'Dermatologist',
        experience: 9,
        hospital: 'Ganga Medical Centre',
        district: 'Coimbatore',
        address: '313 Mettupalayam Road, Coimbatore',
        consultationFee: 600,
        availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:30 AM', '02:30 PM', '04:30 PM'],
        rating: 4.8,
        bio: 'Specialist in clinical dermatology, laser skin therapies, psoriasis management, and pediatric skin conditions.'
      },
      {
        name: 'Dr. Priya Venkatesh',
        email: 'doctor.priya@hospital.com',
        mobile: '+91 9840100018',
        password: 'Doctor@123',
        qualification: 'MBBS, DCH, DNB (Pediatrics)',
        specialization: 'Pediatrician',
        experience: 11,
        hospital: 'Manipal Childrens Clinic',
        district: 'Salem',
        address: 'Saradha College Road, Salem',
        consultationFee: 500,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        availableTimeSlots: ['09:00 AM', '10:30 AM', '04:00 PM', '05:30 PM'],
        rating: 4.9,
        bio: 'Dedicated child healthcare specialist with extensive experience in neonatal care, growth monitoring, and immunization.'
      },
      {
        name: 'Dr. Vijay Raghavan',
        email: 'doctor.vijay@hospital.com',
        mobile: '+91 9840100019',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (Orthopedics)',
        specialization: 'Orthopedic',
        experience: 15,
        hospital: 'Kauvery Hospital',
        district: 'Tiruchirappalli',
        address: 'C-72, 6th Cross, Thillai Nagar, Trichy',
        consultationFee: 650,
        availableDays: ['Monday', 'Wednesday', 'Friday'],
        availableTimeSlots: ['10:00 AM', '11:00 AM', '02:00 PM', '04:00 PM'],
        rating: 4.8,
        bio: 'Specialist in joint replacement surgery, arthroscopic knee reconstruction, and spinal rehabilitation.'
      },
      {
        name: 'Dr. Meena Krishnan',
        email: 'doctor.meena@hospital.com',
        mobile: '+91 9840100020',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (ENT), DLO',
        specialization: 'ENT Specialist',
        experience: 12,
        hospital: 'Shifa Health City',
        district: 'Tirunelveli',
        address: 'High Ground, Tirunelveli',
        consultationFee: 500,
        availableDays: ['Tuesday', 'Thursday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:00 AM', '03:00 PM', '04:00 PM'],
        rating: 4.7,
        bio: 'Advanced micro-ear surgery specialist, endoscopic sinus surgeon, and vertigo diagnosis expert.'
      },
      {
        name: 'Dr. Suresh Kumar',
        email: 'doctor.suresh@hospital.com',
        mobile: '+91 9840100021',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (General Medicine)',
        specialization: 'General Physician',
        experience: 16,
        hospital: 'CMC Hospital Care',
        district: 'Vellore',
        address: 'Ida Scudder Road, Vellore',
        consultationFee: 400,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        availableTimeSlots: ['08:30 AM', '10:00 AM', '11:30 AM', '03:00 PM', '04:30 PM', '06:00 PM'],
        rating: 4.8,
        bio: 'Comprehensive internal medicine consultant specializing in chronic diabetes management, hypertension, and fever triage.'
      },
      {
        name: 'Dr. Sneha Parthasarathy',
        email: 'doctor.sneha@hospital.com',
        mobile: '+91 9840100022',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (OBG), FICOG',
        specialization: 'Gynecologist',
        experience: 14,
        hospital: 'MIOT International',
        district: 'Chennai',
        address: '4/112 Mount Poonamallee Road, Manapakkam, Chennai',
        consultationFee: 700,
        availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['09:30 AM', '11:30 AM', '03:30 PM', '05:00 PM'],
        rating: 4.9,
        bio: 'High-risk obstetrics specialist, laparoscopic gynecological surgeon, and fertility preservation counselor.'
      },
      {
        name: 'Dr. Anand Chandrasekar',
        email: 'doctor.anand@hospital.com',
        mobile: '+91 9840100023',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Pulmonary Medicine), FCCP',
        specialization: 'Pulmonologist',
        experience: 13,
        hospital: 'SIMS Hospital',
        district: 'Chennai',
        address: '1 Jawaharlal Nehru Salai, Vadapalani, Chennai',
        consultationFee: 750,
        availableDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
        availableTimeSlots: ['10:00 AM', '11:30 AM', '02:30 PM', '04:00 PM'],
        rating: 4.8,
        bio: 'Consultant Pulmonologist with special interest in asthma, COPD, sleep apnea, and post-viral pulmonary rehabilitation.'
      },
      {
        name: 'Dr. Divya Balaji',
        email: 'doctor.divya@hospital.com',
        mobile: '+91 9840100024',
        password: 'Doctor@123',
        qualification: 'MBBS, MS (Ophthalmology)',
        specialization: 'Ophthalmologist',
        experience: 10,
        hospital: 'Lotus Eye Care Hospital',
        district: 'Erode',
        address: 'Perundurai Road, Erode',
        consultationFee: 550,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        availableTimeSlots: ['09:00 AM', '10:30 AM', '02:00 PM', '03:30 PM'],
        rating: 4.9,
        bio: 'Phacoemulsification cataract surgeon, corneal specialist, and laser vision correction clinician.'
      },
      {
        name: 'Dr. Sanjay Mohan',
        email: 'doctor.sanjay@hospital.com',
        mobile: '+91 9840100025',
        password: 'Doctor@123',
        qualification: 'MBBS, MD (Psychiatry)',
        specialization: 'Psychiatrist',
        experience: 12,
        hospital: 'VHS Hospital Health Campus',
        district: 'Chennai',
        address: 'Rajiv Gandhi Salai, Taramani, Chennai',
        consultationFee: 800,
        availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
        availableTimeSlots: ['11:00 AM', '02:00 PM', '04:00 PM', '06:00 PM'],
        rating: 4.9,
        bio: 'Compassionate mental health clinician specializing in mood stability, anxiety spectrum disorders, and psychotherapy.'
      },
      {
        name: 'Dr. Kavitha Rajan',
        email: 'doctor.kavitha@hospital.com',
        mobile: '+91 9840100026',
        password: 'Doctor@123',
        qualification: 'BDS, MDS (Conservative Dentistry & Endodontics)',
        specialization: 'Dentist',
        experience: 9,
        hospital: 'Royal Dental & Maxillofacial Care',
        district: 'Coimbatore',
        address: 'Avinashi Road, Peelamedu, Coimbatore',
        consultationFee: 400,
        availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:00 AM', '03:00 PM', '05:00 PM'],
        rating: 4.8,
        bio: 'Painless single-sitting root canal specialist, aesthetic cosmetic dentistry, and dental implantology.'
      },
      {
        name: 'Dr. Ramesh Babu',
        email: 'doctor.ramesh@hospital.com',
        mobile: '+91 9840100027',
        password: 'Doctor@123',
        qualification: 'MBBS, MD, DM (Gastroenterology)',
        specialization: 'Gastroenterologist',
        experience: 17,
        hospital: 'Apollo Speciality Hospital',
        district: 'Madurai',
        address: 'KK Nagar, Madurai',
        consultationFee: 700,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
        availableTimeSlots: ['09:30 AM', '11:00 AM', '02:30 PM', '04:30 PM'],
        rating: 4.9,
        bio: 'Therapeutic GI endoscopist, liver disease specialist, and inflammatory bowel disease consultant.'
      },
      {
        name: 'Dr. Swetha Subramanian',
        email: 'doctor.swetha@hospital.com',
        mobile: '+91 9840100028',
        password: 'Doctor@123',
        qualification: 'MBBS, MS, M.Ch (Urology)',
        specialization: 'Urologist',
        experience: 11,
        hospital: 'Sri Gokulam Hospital',
        district: 'Salem',
        address: 'Meyyanur 3rd Cross, Salem',
        consultationFee: 650,
        availableDays: ['Tuesday', 'Thursday', 'Saturday'],
        availableTimeSlots: ['10:00 AM', '11:30 AM', '03:00 PM', '04:30 PM'],
        rating: 4.8,
        bio: 'Endourology expert in laser kidney stone extraction, prostate management, and laparoscopic urology.'
      }
    ];

    const createdDoctorProfiles = [];

    for (const doc of doctorsData) {
      const u = await User.create({
        name: doc.name,
        email: doc.email,
        mobile: doc.mobile,
        password: doc.password,
        role: 'doctor'
      });

      const d = await Doctor.create({
        user: u._id,
        qualification: doc.qualification,
        specialization: doc.specialization,
        experience: doc.experience,
        hospital: doc.hospital,
        district: doc.district,
        address: doc.address,
        consultationFee: doc.consultationFee,
        availableDays: doc.availableDays,
        availableTimeSlots: doc.availableTimeSlots,
        rating: doc.rating,
        bio: doc.bio
      });

      createdDoctorProfiles.push({ user: u, doctor: d });
    }

    console.log('🌱 Seeding Demo Patient Accounts...');
    const p1User = await User.create({
      name: 'Manoj Kumar',
      email: 'patient.manoj@gmail.com',
      mobile: '+91 9123456780',
      password: 'Patient@123',
      role: 'patient'
    });

    const p1Profile = await Patient.create({
      user: p1User._id,
      age: 36,
      gender: 'Male',
      address: '14 Anna Nagar West, Chennai',
      district: 'Chennai',
      bloodGroup: 'B+',
      allergies: ['Penicillin', 'Dust Mites'],
      chronicConditions: ['Mild Hypertension'],
      emergencyContact: {
        name: 'Lakshmi Kumar',
        relationship: 'Spouse',
        phone: '+91 9123456781'
      },
      medicineReminders: [
        {
          patientName: 'Manoj Kumar',
          mobileNumber: '+91 9123456780',
          medicineName: 'Telmisartan 40mg',
          dosage: '1 Tablet',
          time: '08:00 AM',
          frequency: 'Once daily after breakfast',
          instructions: 'Take with full glass of water',
          isActive: true
        }
      ]
    });

    const p2User = await User.create({
      name: 'Kavya Senthil',
      email: 'patient.kavya@gmail.com',
      mobile: '+91 9123456790',
      password: 'Patient@123',
      role: 'patient'
    });

    const p2Profile = await Patient.create({
      user: p2User._id,
      age: 28,
      gender: 'Female',
      address: '42 RS Puram East, Coimbatore',
      district: 'Coimbatore',
      bloodGroup: 'O+',
      allergies: [],
      chronicConditions: [],
      emergencyContact: {
        name: 'Senthil Nathan',
        relationship: 'Father',
        phone: '+91 9123456791'
      }
    });

    console.log('🌱 Seeding Sample Appointments & Clinical Records...');
    const diyaDoc = createdDoctorProfiles[0];
    const katrinaDoc = createdDoctorProfiles[1];

    const todayStr = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    // Appointment 1: Confirmed today
    const appt1 = await Appointment.create({
      patient: p1Profile._id,
      patientUser: p1User._id,
      doctor: diyaDoc.doctor._id,
      doctorUser: diyaDoc.user._id,
      specialist: 'Cardiologist',
      appointmentDate: todayStr,
      timeSlot: '09:00 AM',
      location: 'Chennai',
      hospital: 'Apollo Hospitals, Greams Road',
      reasonForVisit: 'Routine cardiac health review and mild exertional fatigue',
      status: APPOINTMENT_STATUS.CONFIRMED,
      consultationFee: 800,
      paymentStatus: 'Paid'
    });

    // Appointment 2: Completed yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const appt2 = await Appointment.create({
      patient: p1Profile._id,
      patientUser: p1User._id,
      doctor: diyaDoc.doctor._id,
      doctorUser: diyaDoc.user._id,
      specialist: 'Cardiologist',
      appointmentDate: yesterdayStr,
      timeSlot: '10:00 AM',
      location: 'Chennai',
      hospital: 'Apollo Hospitals, Greams Road',
      reasonForVisit: 'Initial hypertension consultation',
      status: APPOINTMENT_STATUS.COMPLETED,
      consultationFee: 800,
      paymentStatus: 'Paid'
    });

    // Medical Record for Appt 2
    const medRecord = await MedicalRecord.create({
      patient: p1Profile._id,
      doctor: diyaDoc.doctor._id,
      appointment: appt2._id,
      diagnosis: 'Stage-1 Essential Hypertension with sinus rhythm',
      symptoms: 'Occasional morning occipital headache, mild dizziness on standing',
      vitals: {
        bloodPressure: '138/88 mmHg',
        heartRate: '76 bpm',
        temperature: '98.4 °F',
        weight: '74 kg',
        height: '174 cm',
        oxygenSaturation: '99%'
      },
      clinicalFindings: 'Normal S1/S2 heart sounds, no murmurs, clear bilateral chest sounds.',
      doctorNotes: 'Advised lifestyle modification: low sodium diet (<2g/day), 30 mins brisk walking.',
      recommendedTests: ['Lipid Profile', 'Serum Creatinine', 'ECG 12-Lead'],
      followUpDate: tomorrowStr
    });

    // Prescription for Appt 2
    const pres1 = await Prescription.create({
      patient: p1Profile._id,
      doctor: diyaDoc.doctor._id,
      appointment: appt2._id,
      diagnosis: 'Essential Hypertension (Stage-1)',
      medicines: [
        {
          medicineName: 'Tab. Telmisartan',
          dosage: '40 mg',
          frequency: '1-0-0 (Morning)',
          duration: '30 Days',
          instructions: 'Take after breakfast with water'
        },
        {
          medicineName: 'Tab. Rosuvastatin',
          dosage: '10 mg',
          frequency: '0-0-1 (Night)',
          duration: '30 Days',
          instructions: 'Take after dinner'
        }
      ],
      generalAdvice: 'Limit salt intake, practice daily brisk walking, and avoid late night heavy meals.',
      dietaryRestrictions: 'Strictly avoid salted snacks, pickles, and processed foods.',
      isDigitallySigned: true
    });

    // Appointment 3: Pending with Dr. Katrina
    await Appointment.create({
      patient: p2Profile._id,
      patientUser: p2User._id,
      doctor: katrinaDoc.doctor._id,
      doctorUser: katrinaDoc.user._id,
      specialist: 'Dermatologist',
      appointmentDate: tomorrowStr,
      timeSlot: '10:00 AM',
      location: 'Coimbatore',
      hospital: 'Ganga Medical Centre',
      reasonForVisit: 'Facial acne breakout and sensitive skin consultation',
      status: APPOINTMENT_STATUS.PENDING,
      consultationFee: 650,
      paymentStatus: 'Unpaid'
    });

    console.log('🌱 Seeding Initial In-App Notifications...');
    await Notification.create([
      {
        recipient: p1User._id,
        title: 'Appointment Confirmed',
        message: `Your appointment with Dr. Diya Sharma is confirmed for today (${todayStr}) at 09:00 AM.`,
        type: 'appointment',
        relatedId: appt1._id.toString()
      },
      {
        recipient: p1User._id,
        title: 'Prescription Ready',
        message: `Dr. Diya Sharma has uploaded your digital prescription for Essential Hypertension.`,
        type: 'prescription',
        relatedId: pres1._id.toString()
      },
      {
        recipient: diyaDoc.user._id,
        title: 'Upcoming Appointment Today',
        message: `You have an appointment with Manoj Kumar scheduled for today at 09:00 AM.`,
        type: 'appointment',
        relatedId: appt1._id.toString()
      }
    ]);

    console.log('========================================================');
    console.log('🎉 SEEDING COMPLETE! DEMO DOCTORS & ACCOUNTS CREATED:');
    console.log('--------------------------------------------------------');
    console.log('👑 Admin:      email: admin@hospital.com           | pass: Admin@123');
    console.log('🩺 Dr. Diya:    email: doctor.diya@hospital.com     | pass: Doctor@123 (Cardiologist, Chennai)');
    console.log('🩺 Dr. Katrina: email: doctor.katrina@hospital.com  | pass: Doctor@123 (Dermatologist, Coimbatore)');
    console.log('🩺 Dr. Rayaan:  email: doctor.rayaan@hospital.com   | pass: Doctor@123 (Neurologist, Madurai)');
    console.log('🩺 Dr. Riyana:  email: doctor.riyana@hospital.com   | pass: Doctor@123 (Pediatrician, Salem)');
    console.log('🩺 Dr. Adhira:  email: doctor.adhira@hospital.com   | pass: Doctor@123 (Orthopedic, Trichy)');
    console.log('🩺 Dr. Ishita:  email: doctor.ishita@hospital.com   | pass: Doctor@123 (Gynecologist, Chennai)');
    console.log('🩺 Dr. Nethra:  email: doctor.nethra@hospital.com   | pass: Doctor@123 (General Physician, Vellore)');
    console.log('🩺 Dr. Shaan:   email: doctor.shaan@hospital.com    | pass: Doctor@123 (ENT Specialist, Tirunelveli)');
    console.log('🩺 Dr. Roshini: email: doctor.roshini@hospital.com  | pass: Doctor@123 (Pulmonologist, Chennai)');
    console.log('🩺 Dr. Lavanya: email: doctor.lavanya@hospital.com  | pass: Doctor@123 (Ophthalmologist, Erode)');
    console.log('🩺 Dr. Ishaan:  email: doctor.ishaan@hospital.com   | pass: Doctor@123 (Psychiatrist, Chennai)');
    console.log('🩺 Dr. Aarav:   email: doctor.aarav@hospital.com    | pass: Doctor@123 (Dentist, Coimbatore)');
    console.log('🩺 Dr. Lishika: email: doctor.lishika@hospital.com  | pass: Doctor@123 (Gastroenterologist, Madurai)');
    console.log('🩺 Dr. Thanu:   email: doctor.thanu@hospital.com    | pass: Doctor@123 (Urologist, Salem)');
    console.log('🩺 Dr. Karthik: email: doctor.karthik@hospital.com  | pass: Doctor@123 (Neurologist, Madurai)');
    console.log('👤 Patient:    email: patient.manoj@gmail.com      | pass: Patient@123 (Chennai)');
    console.log('👤 Patient:    email: patient.kavya@gmail.com      | pass: Patient@123 (Coimbatore)');
    console.log('========================================================');

    if (autoDisconnect) {
      await mongoose.disconnect();
      console.log('🔌 Database disconnected successfully.');
    }
    return { success: true, count: doctorsData.length };
  } catch (error) {
    console.error('❌ Seeding Error:', error);
    if (autoDisconnect) process.exit(1);
    throw error;
  }
};

if (require.main === module) {
  seedDatabase(true);
}

module.exports = { seedDatabase, doctorsData };

