/**
 * AI Smart Hospital Management System - Frontend Configuration
 * Includes 22 Specialties with 10 Certified Specialists Across 10 Tamil Nadu Districts Each (220 Doctors Total)
 */

// Live Render Backend API URL
const BACKEND_RENDER_URL = 'https://ai-smart-hospital-backend-w26k.onrender.com/api';

const CONFIG = {
  // Automatically detects local environment vs live deployment (Vercel / Netlify / Render)
  API_BASE_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api'
    : (localStorage.getItem('CUSTOM_API_URL') || BACKEND_RENDER_URL),

  SPECIALIZATIONS: [
    "General Physician",
    "Cardiologist",
    "Neurologist",
    "Nephrologist",
    "Psychiatrist",
    "Dentist",
    "Physiotherapist",
    "ENT Specialist",
    "Dermatologist",
    "Pulmonologist",
    "Gastroenterologist",
    "Pediatrician",
    "Gynecologist",
    "Ophthalmologist",
    "Urologist",
    "Plastic Surgeon",
    "Radiologist",
    "Neonatologist",
    "Geriatrician",
    "Hepatologist",
    "Hematologist",
    "Allergist & Immunologist"
],

  TAMIL_NADU_DISTRICTS: [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli",
    "Tirunelveli",
    "Vellore",
    "Erode",
    "Thanjavur",
    "Dindigul",
    "Kanchipuram",
    "Chengalpattu",
    "Tiruppur",
    "Cuddalore",
    "Karur",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Pudukkottai",
    "Ramanathapuram",
    "Sivaganga",
    "Tenkasi",
    "Theni",
    "Thoothukudi",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Ranipet",
    "Tirupattur",
    "Viluppuram",
    "Virudhunagar",
    "Krishnagiri",
    "Dharmapuri",
    "Ariyalur",
    "Perambalur",
    "Kallakurichi",
    "Mayiladuthurai",
    "Kanniyakumari"
],

  CLINICAL_DISCLAIMER: '⚠️ IMPORTANT MEDICAL DISCLAIMER: This AI Health Assistant provides preliminary triage, educational guidance, and specialist recommendations only. It is NOT a certified medical practitioner, diagnostic device, or substitute for professional clinical judgment. If you are experiencing an emergency, call 108/112 or visit the nearest emergency department immediately.',

  DEFAULT_DOCTORS: [
    {
        "_id": "doc_dr__nethra_sundaram_1",
        "user": {
            "name": "Dr. Nethra Sundaram",
            "email": "_nethra_sundaram@hospital.com",
            "mobile": "+91 9840100001"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "CMC Hospital Care",
        "district": "Vellore",
        "address": "CMC Hospital Care, Vellore, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__aarav_mehta_2",
        "user": {
            "name": "Dr. Aarav Mehta",
            "email": "_aarav_mehta@hospital.com",
            "mobile": "+91 9840100002"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "MGM Healthcare Clinic",
        "district": "Chennai",
        "address": "MGM Healthcare Clinic, Chennai, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__krishnan_m_3",
        "user": {
            "name": "Dr. Krishnan M",
            "email": "_krishnan_m@hospital.com",
            "mobile": "+91 9840100003"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Sri Ramakrishna Hospital",
        "district": "Coimbatore",
        "address": "Sri Ramakrishna Hospital, Coimbatore, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vijayalakshmi_4",
        "user": {
            "name": "Dr. Vijayalakshmi",
            "email": "_vijayalakshmi@hospital.com",
            "mobile": "+91 9840100004"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Velammal Medical Center",
        "district": "Madurai",
        "address": "Velammal Medical Center, Madurai, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__manivel_p_5",
        "user": {
            "name": "Dr. Manivel P",
            "email": "_manivel_p@hospital.com",
            "mobile": "+91 9840100005"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Salem Polyclinic & Care",
        "district": "Salem",
        "address": "Salem Polyclinic & Care, Salem, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayaprakash_6",
        "user": {
            "name": "Dr. Jayaprakash",
            "email": "_jayaprakash@hospital.com",
            "mobile": "+91 9840100006"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Maruti Family Clinic",
        "district": "Tiruchirappalli",
        "address": "Maruti Family Clinic, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ponraj_t_7",
        "user": {
            "name": "Dr. Ponraj T",
            "email": "_ponraj_t@hospital.com",
            "mobile": "+91 9840100007"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Nellai City Health Clinic",
        "district": "Tirunelveli",
        "address": "Nellai City Health Clinic, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__govindaraj_8",
        "user": {
            "name": "Dr. Govindaraj",
            "email": "_govindaraj@hospital.com",
            "mobile": "+91 9840100008"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Surabhi Medical Care",
        "district": "Erode",
        "address": "Surabhi Medical Care, Erode, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sivakumar_9",
        "user": {
            "name": "Dr. Sivakumar",
            "email": "_sivakumar@hospital.com",
            "mobile": "+91 9840100009"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Sri Venkateshwara Clinic",
        "district": "Thanjavur",
        "address": "Sri Venkateshwara Clinic, Thanjavur, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__uthra_devi_10",
        "user": {
            "name": "Dr. Uthra Devi",
            "email": "_uthra_devi@hospital.com",
            "mobile": "+91 9840100010"
        },
        "specialization": "General Physician",
        "qualification": "MBBS, MD (General Medicine)",
        "hospital": "Kanchi Health Centre",
        "district": "Kanchipuram",
        "address": "Kanchi Health Centre, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__diya_sharma_11",
        "user": {
            "name": "Dr. Diya Sharma",
            "email": "_diya_sharma@hospital.com",
            "mobile": "+91 9840100011"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Apollo Hospitals, Greams Road",
        "district": "Chennai",
        "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__karthik_sundaram_12",
        "user": {
            "name": "Dr. Karthik Sundaram",
            "email": "_karthik_sundaram@hospital.com",
            "mobile": "+91 9840100012"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "PSG Hospitals Heart Center",
        "district": "Coimbatore",
        "address": "PSG Hospitals Heart Center, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__rajesh_kannan_13",
        "user": {
            "name": "Dr. Rajesh Kannan",
            "email": "_rajesh_kannan@hospital.com",
            "mobile": "+91 9840100013"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Apollo Speciality Cardiac Unit",
        "district": "Madurai",
        "address": "Apollo Speciality Cardiac Unit, Madurai, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__venkatesh_rao_14",
        "user": {
            "name": "Dr. Venkatesh Rao",
            "email": "_venkatesh_rao@hospital.com",
            "mobile": "+91 9840100014"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Gokulam Heart Institute",
        "district": "Salem",
        "address": "Gokulam Heart Institute, Salem, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__senthil_nathan_15",
        "user": {
            "name": "Dr. Senthil Nathan",
            "email": "_senthil_nathan@hospital.com",
            "mobile": "+91 9840100015"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Frontier Lifeline Cardiac Clinic",
        "district": "Tiruchirappalli",
        "address": "Frontier Lifeline Cardiac Clinic, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__anbarasan_v_16",
        "user": {
            "name": "Dr. Anbarasan V",
            "email": "_anbarasan_v@hospital.com",
            "mobile": "+91 9840100016"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Naruvi Heart Hospital",
        "district": "Vellore",
        "address": "Naruvi Heart Hospital, Vellore, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__murugesan_p_17",
        "user": {
            "name": "Dr. Murugesan P",
            "email": "_murugesan_p@hospital.com",
            "mobile": "+91 9840100017"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Galaxy Heart Institute",
        "district": "Tirunelveli",
        "address": "Galaxy Heart Institute, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__saravanan_k_18",
        "user": {
            "name": "Dr. Saravanan K",
            "email": "_saravanan_k@hospital.com",
            "mobile": "+91 9840100018"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Carewell Heart Clinic",
        "district": "Erode",
        "address": "Carewell Heart Clinic, Erode, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__balasubramanian_19",
        "user": {
            "name": "Dr. Balasubramanian",
            "email": "_balasubramanian@hospital.com",
            "mobile": "+91 9840100019"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Kingsway Cardiac Centre",
        "district": "Thanjavur",
        "address": "Kingsway Cardiac Centre, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vijay_anand_20",
        "user": {
            "name": "Dr. Vijay Anand",
            "email": "_vijay_anand@hospital.com",
            "mobile": "+91 9840100020"
        },
        "specialization": "Cardiologist",
        "qualification": "MBBS, MD, DM (Cardiology)",
        "hospital": "Kanchi Cardiac Care Institute",
        "district": "Kanchipuram",
        "address": "Kanchi Cardiac Care Institute, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Cardiologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__rayaan_kapoor_21",
        "user": {
            "name": "Dr. Rayaan Kapoor",
            "email": "_rayaan_kapoor@hospital.com",
            "mobile": "+91 9840100021"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Meenakshi Mission Neuro Centre",
        "district": "Madurai",
        "address": "Meenakshi Mission Neuro Centre, Madurai, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ananya_swaminathan_22",
        "user": {
            "name": "Dr. Ananya Swaminathan",
            "email": "_ananya_swaminathan@hospital.com",
            "mobile": "+91 9840100022"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Fortis Malar Neuro Institute",
        "district": "Chennai",
        "address": "Fortis Malar Neuro Institute, Chennai, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__harish_chandra_23",
        "user": {
            "name": "Dr. Harish Chandra",
            "email": "_harish_chandra@hospital.com",
            "mobile": "+91 9840100023"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "KMCH Neuro Care Center",
        "district": "Coimbatore",
        "address": "KMCH Neuro Care Center, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__divya_bharathi_24",
        "user": {
            "name": "Dr. Divya Bharathi",
            "email": "_divya_bharathi@hospital.com",
            "mobile": "+91 9840100024"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "SKS Neuro Hospital",
        "district": "Salem",
        "address": "SKS Neuro Hospital, Salem, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ramakrishnan_s_25",
        "user": {
            "name": "Dr. Ramakrishnan S",
            "email": "_ramakrishnan_s@hospital.com",
            "mobile": "+91 9840100025"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Kauvery Neuro Centre",
        "district": "Tiruchirappalli",
        "address": "Kauvery Neuro Centre, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__priya_v_26",
        "user": {
            "name": "Dr. Priya V",
            "email": "_priya_v@hospital.com",
            "mobile": "+91 9840100026"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "CMC Neuro Sciences Unit",
        "district": "Vellore",
        "address": "CMC Neuro Sciences Unit, Vellore, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__manickam_g_27",
        "user": {
            "name": "Dr. Manickam G",
            "email": "_manickam_g@hospital.com",
            "mobile": "+91 9840100027"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Tirunelveli Neuro Care",
        "district": "Tirunelveli",
        "address": "Tirunelveli Neuro Care, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__gayathri_r_28",
        "user": {
            "name": "Dr. Gayathri R",
            "email": "_gayathri_r@hospital.com",
            "mobile": "+91 9840100028"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Royal Care Neuro Clinic",
        "district": "Erode",
        "address": "Royal Care Neuro Clinic, Erode, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__chandrasekar_29",
        "user": {
            "name": "Dr. Chandrasekar",
            "email": "_chandrasekar@hospital.com",
            "mobile": "+91 9840100029"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Thanjavur Brain & Spine Centre",
        "district": "Thanjavur",
        "address": "Thanjavur Brain & Spine Centre, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayanthi_s_30",
        "user": {
            "name": "Dr. Jayanthi S",
            "email": "_jayanthi_s@hospital.com",
            "mobile": "+91 9840100030"
        },
        "specialization": "Neurologist",
        "qualification": "MBBS, MD, DM (Neurology)",
        "hospital": "Kanchi Neuro Clinic",
        "district": "Kanchipuram",
        "address": "Kanchi Neuro Clinic, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Neurologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__madhavan_v_31",
        "user": {
            "name": "Dr. Madhavan V",
            "email": "_madhavan_v@hospital.com",
            "mobile": "+91 9840100031"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Apollo Kidney & Renal Institute",
        "district": "Chennai",
        "address": "Apollo Kidney & Renal Institute, Chennai, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__senthilkumar_k_32",
        "user": {
            "name": "Dr. Senthilkumar K",
            "email": "_senthilkumar_k@hospital.com",
            "mobile": "+91 9840100032"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "KG Hospital Nephrology Unit",
        "district": "Coimbatore",
        "address": "KG Hospital Nephrology Unit, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__balakrishnan_33",
        "user": {
            "name": "Dr. Balakrishnan",
            "email": "_balakrishnan@hospital.com",
            "mobile": "+91 9840100033"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Meenakshi Mission Renal Care",
        "district": "Madurai",
        "address": "Meenakshi Mission Renal Care, Madurai, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__geetha_mohan_34",
        "user": {
            "name": "Dr. Geetha Mohan",
            "email": "_geetha_mohan@hospital.com",
            "mobile": "+91 9840100034"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Manipal Kidney Center",
        "district": "Salem",
        "address": "Manipal Kidney Center, Salem, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayaraj_p_35",
        "user": {
            "name": "Dr. Jayaraj P",
            "email": "_jayaraj_p@hospital.com",
            "mobile": "+91 9840100035"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Kauvery Nephrology Centre",
        "district": "Tiruchirappalli",
        "address": "Kauvery Nephrology Centre, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__chakravarti_r_36",
        "user": {
            "name": "Dr. Chakravarti R",
            "email": "_chakravarti_r@hospital.com",
            "mobile": "+91 9840100036"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "CMC Renal & Dialysis Clinic",
        "district": "Vellore",
        "address": "CMC Renal & Dialysis Clinic, Vellore, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__paramasivam_37",
        "user": {
            "name": "Dr. Paramasivam",
            "email": "_paramasivam@hospital.com",
            "mobile": "+91 9840100037"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Nellai Kidney Institute",
        "district": "Tirunelveli",
        "address": "Nellai Kidney Institute, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__narendran_s_38",
        "user": {
            "name": "Dr. Narendran S",
            "email": "_narendran_s@hospital.com",
            "mobile": "+91 9840100038"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Lotus Renal Care Center",
        "district": "Erode",
        "address": "Lotus Renal Care Center, Erode, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__srinivasa_rao_39",
        "user": {
            "name": "Dr. Srinivasa Rao",
            "email": "_srinivasa_rao@hospital.com",
            "mobile": "+91 9840100039"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Thanjavur Kidney Care",
        "district": "Thanjavur",
        "address": "Thanjavur Kidney Care, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kousalya_r_40",
        "user": {
            "name": "Dr. Kousalya R",
            "email": "_kousalya_r@hospital.com",
            "mobile": "+91 9840100040"
        },
        "specialization": "Nephrologist",
        "qualification": "MBBS, MD, DM (Nephrology & Renal Care)",
        "hospital": "Kanchi Dialysis & Renal Unit",
        "district": "Kanchipuram",
        "address": "Kanchi Dialysis & Renal Unit, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Nephrologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vikram_s_41",
        "user": {
            "name": "Dr. Vikram S",
            "email": "_vikram_s@hospital.com",
            "mobile": "+91 9840100041"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "SCARF India Mental Health",
        "district": "Chennai",
        "address": "SCARF India Mental Health, Chennai, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__senthilvel_42",
        "user": {
            "name": "Dr. Senthilvel",
            "email": "_senthilvel@hospital.com",
            "mobile": "+91 9840100042"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "VGM Mind Care Hospital",
        "district": "Coimbatore",
        "address": "VGM Mind Care Hospital, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__manonmani_43",
        "user": {
            "name": "Dr. Manonmani",
            "email": "_manonmani@hospital.com",
            "mobile": "+91 9840100043"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "M.S. Chellamuthu Trust",
        "district": "Madurai",
        "address": "M.S. Chellamuthu Trust, Madurai, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__balaji_k_44",
        "user": {
            "name": "Dr. Balaji K",
            "email": "_balaji_k@hospital.com",
            "mobile": "+91 9840100044"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Salem Mind Wellness Center",
        "district": "Salem",
        "address": "Salem Mind Wellness Center, Salem, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__arunkumar_45",
        "user": {
            "name": "Dr. Arunkumar",
            "email": "_arunkumar@hospital.com",
            "mobile": "+91 9840100045"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Athma Mind Care Clinic",
        "district": "Tiruchirappalli",
        "address": "Athma Mind Care Clinic, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__poongodi_46",
        "user": {
            "name": "Dr. Poongodi",
            "email": "_poongodi@hospital.com",
            "mobile": "+91 9840100046"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Vellore Mental Wellness",
        "district": "Vellore",
        "address": "Vellore Mental Wellness, Vellore, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__nagarajan_47",
        "user": {
            "name": "Dr. Nagarajan",
            "email": "_nagarajan@hospital.com",
            "mobile": "+91 9840100047"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Nellai Psychiatry Centre",
        "district": "Tirunelveli",
        "address": "Nellai Psychiatry Centre, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__deepalakshmi_48",
        "user": {
            "name": "Dr. Deepalakshmi",
            "email": "_deepalakshmi@hospital.com",
            "mobile": "+91 9840100048"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Lotus Mind Clinic",
        "district": "Erode",
        "address": "Lotus Mind Clinic, Erode, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sundararajan_49",
        "user": {
            "name": "Dr. Sundararajan",
            "email": "_sundararajan@hospital.com",
            "mobile": "+91 9840100049"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Delta Mind Care Hospital",
        "district": "Thanjavur",
        "address": "Delta Mind Care Hospital, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__preetha_r_50",
        "user": {
            "name": "Dr. Preetha R",
            "email": "_preetha_r@hospital.com",
            "mobile": "+91 9840100050"
        },
        "specialization": "Psychiatrist",
        "qualification": "MBBS, MD, DPM (Psychiatry)",
        "hospital": "Kanchi Mind Wellness Center",
        "district": "Kanchipuram",
        "address": "Kanchi Mind Wellness Center, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sanjay_ram_51",
        "user": {
            "name": "Dr. Sanjay Ram",
            "email": "_sanjay_ram@hospital.com",
            "mobile": "+91 9840100051"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Smile Care Dental Hospital",
        "district": "Chennai",
        "address": "Smile Care Dental Hospital, Chennai, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__priya_mohan_52",
        "user": {
            "name": "Dr. Priya Mohan",
            "email": "_priya_mohan@hospital.com",
            "mobile": "+91 9840100052"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Dr. Mohan's Dental Studio",
        "district": "Coimbatore",
        "address": "Dr. Mohan's Dental Studio, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vignesh_r_53",
        "user": {
            "name": "Dr. Vignesh R",
            "email": "_vignesh_r@hospital.com",
            "mobile": "+91 9840100053"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Madurai Smile Centre",
        "district": "Madurai",
        "address": "Madurai Smile Centre, Madurai, Tamil Nadu",
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
        "rating": 4.8,
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__divya_sri_54",
        "user": {
            "name": "Dr. Divya Sri",
            "email": "_divya_sri@hospital.com",
            "mobile": "+91 9840100054"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Salem Dental Polyclinic",
        "district": "Salem",
        "address": "Salem Dental Polyclinic, Salem, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__hariprasad_55",
        "user": {
            "name": "Dr. Hariprasad",
            "email": "_hariprasad@hospital.com",
            "mobile": "+91 9840100055"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Trichy Dental Studio",
        "district": "Tiruchirappalli",
        "address": "Trichy Dental Studio, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sandhiya_56",
        "user": {
            "name": "Dr. Sandhiya",
            "email": "_sandhiya@hospital.com",
            "mobile": "+91 9840100056"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Vellore Dental Care",
        "district": "Vellore",
        "address": "Vellore Dental Care, Vellore, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__guruprasad_57",
        "user": {
            "name": "Dr. Guruprasad",
            "email": "_guruprasad@hospital.com",
            "mobile": "+91 9840100057"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Nellai Dental Hub",
        "district": "Tirunelveli",
        "address": "Nellai Dental Hub, Tirunelveli, Tamil Nadu",
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
        "rating": 4.8,
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sharmila_58",
        "user": {
            "name": "Dr. Sharmila",
            "email": "_sharmila@hospital.com",
            "mobile": "+91 9840100058"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Erode Dental Studio",
        "district": "Erode",
        "address": "Erode Dental Studio, Erode, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__manikandan_59",
        "user": {
            "name": "Dr. Manikandan",
            "email": "_manikandan@hospital.com",
            "mobile": "+91 9840100059"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Thanjavur Dental Clinic",
        "district": "Thanjavur",
        "address": "Thanjavur Dental Clinic, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__swetha_n_60",
        "user": {
            "name": "Dr. Swetha N",
            "email": "_swetha_n@hospital.com",
            "mobile": "+91 9840100060"
        },
        "specialization": "Dentist",
        "qualification": "BDS, MDS (Oral & Maxillofacial / Endodontics)",
        "hospital": "Kanchi Dental Care",
        "district": "Kanchipuram",
        "address": "Kanchi Dental Care, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__dinesh_kumar__pt__61",
        "user": {
            "name": "Dr. Dinesh Kumar (PT)",
            "email": "_dinesh_kumar__pt_@hospital.com",
            "mobile": "+91 9840100061"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Apollo Sports & Rehab Clinic",
        "district": "Chennai",
        "address": "Apollo Sports & Rehab Clinic, Chennai, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__shanthi_mohan__pt__62",
        "user": {
            "name": "Dr. Shanthi Mohan (PT)",
            "email": "_shanthi_mohan__pt_@hospital.com",
            "mobile": "+91 9840100062"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Ganga Physio & Spine Rehab",
        "district": "Coimbatore",
        "address": "Ganga Physio & Spine Rehab, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__rajeshwari_k__pt__63",
        "user": {
            "name": "Dr. Rajeshwari K (PT)",
            "email": "_rajeshwari_k__pt_@hospital.com",
            "mobile": "+91 9840100063"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Meenakshi Physio Care",
        "district": "Madurai",
        "address": "Meenakshi Physio Care, Madurai, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__anand_babu__pt__64",
        "user": {
            "name": "Dr. Anand Babu (PT)",
            "email": "_anand_babu__pt_@hospital.com",
            "mobile": "+91 9840100064"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Salem Active Rehab Center",
        "district": "Salem",
        "address": "Salem Active Rehab Center, Salem, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__pradeep_r__pt__65",
        "user": {
            "name": "Dr. Pradeep R (PT)",
            "email": "_pradeep_r__pt_@hospital.com",
            "mobile": "+91 9840100065"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Kauvery Mobility Care",
        "district": "Tiruchirappalli",
        "address": "Kauvery Mobility Care, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__mary_varghese__pt__66",
        "user": {
            "name": "Dr. Mary Varghese (PT)",
            "email": "_mary_varghese__pt_@hospital.com",
            "mobile": "+91 9840100066"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "CMC Physical Medicine Unit",
        "district": "Vellore",
        "address": "CMC Physical Medicine Unit, Vellore, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sundaresan__pt__67",
        "user": {
            "name": "Dr. Sundaresan (PT)",
            "email": "_sundaresan__pt_@hospital.com",
            "mobile": "+91 9840100067"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Nellai Physio Spine Hub",
        "district": "Tirunelveli",
        "address": "Nellai Physio Spine Hub, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__deepanraj__pt__68",
        "user": {
            "name": "Dr. Deepanraj (PT)",
            "email": "_deepanraj__pt_@hospital.com",
            "mobile": "+91 9840100068"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Lotus Sports Therapy Center",
        "district": "Erode",
        "address": "Lotus Sports Therapy Center, Erode, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vasanthan__pt__69",
        "user": {
            "name": "Dr. Vasanthan (PT)",
            "email": "_vasanthan__pt_@hospital.com",
            "mobile": "+91 9840100069"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Thanjavur Joint Rehab",
        "district": "Thanjavur",
        "address": "Thanjavur Joint Rehab, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kirubakaran__pt__70",
        "user": {
            "name": "Dr. Kirubakaran (PT)",
            "email": "_kirubakaran__pt_@hospital.com",
            "mobile": "+91 9840100070"
        },
        "specialization": "Physiotherapist",
        "qualification": "BPT, MPT (Orthopedics, Neuro & Sports Rehab)",
        "hospital": "Kanchi Physiotherapy Clinic",
        "district": "Kanchipuram",
        "address": "Kanchi Physiotherapy Clinic, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Physiotherapist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__shaan_mukherjee_71",
        "user": {
            "name": "Dr. Shaan Mukherjee",
            "email": "_shaan_mukherjee@hospital.com",
            "mobile": "+91 9840100071"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Shifa Health City ENT",
        "district": "Tirunelveli",
        "address": "Shifa Health City ENT, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thanu_pillai_72",
        "user": {
            "name": "Dr. Thanu Pillai",
            "email": "_thanu_pillai@hospital.com",
            "mobile": "+91 9840100072"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Dr. Mohan's ENT Institute",
        "district": "Chennai",
        "address": "Dr. Mohan's ENT Institute, Chennai, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sundaramurthy_73",
        "user": {
            "name": "Dr. Sundaramurthy",
            "email": "_sundaramurthy@hospital.com",
            "mobile": "+91 9840100073"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "KMCH ENT Clinic",
        "district": "Coimbatore",
        "address": "KMCH ENT Clinic, Coimbatore, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayaram_k_74",
        "user": {
            "name": "Dr. Jayaram K",
            "email": "_jayaram_k@hospital.com",
            "mobile": "+91 9840100074"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Bose ENT Hospital",
        "district": "Madurai",
        "address": "Bose ENT Hospital, Madurai, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vimalraj_p_75",
        "user": {
            "name": "Dr. Vimalraj P",
            "email": "_vimalraj_p@hospital.com",
            "mobile": "+91 9840100075"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Salem ENT Care Center",
        "district": "Salem",
        "address": "Salem ENT Care Center, Salem, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sathish_kumar_76",
        "user": {
            "name": "Dr. Sathish Kumar",
            "email": "_sathish_kumar@hospital.com",
            "mobile": "+91 9840100076"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Apollo Speciality ENT",
        "district": "Tiruchirappalli",
        "address": "Apollo Speciality ENT, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__naveen_raj_77",
        "user": {
            "name": "Dr. Naveen Raj",
            "email": "_naveen_raj@hospital.com",
            "mobile": "+91 9840100077"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Vellore ENT Foundation",
        "district": "Vellore",
        "address": "Vellore ENT Foundation, Vellore, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__meenakshi_s_78",
        "user": {
            "name": "Dr. Meenakshi S",
            "email": "_meenakshi_s@hospital.com",
            "mobile": "+91 9840100078"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Senthil ENT Clinic",
        "district": "Erode",
        "address": "Senthil ENT Clinic, Erode, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ilango_m_79",
        "user": {
            "name": "Dr. Ilango M",
            "email": "_ilango_m@hospital.com",
            "mobile": "+91 9840100079"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Thanjavur ENT Centre",
        "district": "Thanjavur",
        "address": "Thanjavur ENT Centre, Thanjavur, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kiruthika_80",
        "user": {
            "name": "Dr. Kiruthika",
            "email": "_kiruthika@hospital.com",
            "mobile": "+91 9840100080"
        },
        "specialization": "ENT Specialist",
        "qualification": "MBBS, MS (ENT), DLO",
        "hospital": "Kanchi ENT Polyclinic",
        "district": "Kanchipuram",
        "address": "Kanchi ENT Polyclinic, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified ENT Specialist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__katrina_fernandez_81",
        "user": {
            "name": "Dr. Katrina Fernandez",
            "email": "_katrina_fernandez@hospital.com",
            "mobile": "+91 9840100081"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Ganga Medical Centre & Hospital",
        "district": "Coimbatore",
        "address": "Ganga Medical Centre & Hospital, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__meera_nambiar_82",
        "user": {
            "name": "Dr. Meera Nambiar",
            "email": "_meera_nambiar@hospital.com",
            "mobile": "+91 9840100082"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Apollo Hospitals, Greams Road",
        "district": "Chennai",
        "address": "Apollo Hospitals, Greams Road, Chennai, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__suresh_k_83",
        "user": {
            "name": "Dr. Suresh K",
            "email": "_suresh_k@hospital.com",
            "mobile": "+91 9840100083"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Meenakshi Mission Hospital",
        "district": "Madurai",
        "address": "Meenakshi Mission Hospital, Madurai, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__radhika_balaji_84",
        "user": {
            "name": "Dr. Radhika Balaji",
            "email": "_radhika_balaji@hospital.com",
            "mobile": "+91 9840100084"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Manipal Hospital Care",
        "district": "Salem",
        "address": "Manipal Hospital Care, Salem, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ashwin_kumar_85",
        "user": {
            "name": "Dr. Ashwin Kumar",
            "email": "_ashwin_kumar@hospital.com",
            "mobile": "+91 9840100085"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Kauvery Multi-Speciality Hospital",
        "district": "Tiruchirappalli",
        "address": "Kauvery Multi-Speciality Hospital, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__nithya_raman_86",
        "user": {
            "name": "Dr. Nithya Raman",
            "email": "_nithya_raman@hospital.com",
            "mobile": "+91 9840100086"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "CMC Health Center",
        "district": "Vellore",
        "address": "CMC Health Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vigneshwaran_t_87",
        "user": {
            "name": "Dr. Vigneshwaran T",
            "email": "_vigneshwaran_t@hospital.com",
            "mobile": "+91 9840100087"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Shifa Health City",
        "district": "Tirunelveli",
        "address": "Shifa Health City, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__deepa_sundar_88",
        "user": {
            "name": "Dr. Deepa Sundar",
            "email": "_deepa_sundar@hospital.com",
            "mobile": "+91 9840100088"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Lotus Medical Care Centre",
        "district": "Erode",
        "address": "Lotus Medical Care Centre, Erode, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__prakash_raj_89",
        "user": {
            "name": "Dr. Prakash Raj",
            "email": "_prakash_raj@hospital.com",
            "mobile": "+91 9840100089"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Meenakshi Multi-Speciality",
        "district": "Thanjavur",
        "address": "Meenakshi Multi-Speciality, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sangeetha_mani_90",
        "user": {
            "name": "Dr. Sangeetha Mani",
            "email": "_sangeetha_mani@hospital.com",
            "mobile": "+91 9840100090"
        },
        "specialization": "Dermatologist",
        "qualification": "MBBS, MD (DVL)",
        "hospital": "Annai Multi-Speciality Healthcare",
        "district": "Kanchipuram",
        "address": "Annai Multi-Speciality Healthcare, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Dermatologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__roshini_krishnan_91",
        "user": {
            "name": "Dr. Roshini Krishnan",
            "email": "_roshini_krishnan@hospital.com",
            "mobile": "+91 9840100091"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "SIMS Hospital Pulmo Wing",
        "district": "Chennai",
        "address": "SIMS Hospital Pulmo Wing, Chennai, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__baskaran_s_92",
        "user": {
            "name": "Dr. Baskaran S",
            "email": "_baskaran_s@hospital.com",
            "mobile": "+91 9840100092"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "PSG Pulmonology Center",
        "district": "Coimbatore",
        "address": "PSG Pulmonology Center, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__chellappa_93",
        "user": {
            "name": "Dr. Chellappa",
            "email": "_chellappa@hospital.com",
            "mobile": "+91 9840100093"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Meenakshi Chest Hospital",
        "district": "Madurai",
        "address": "Meenakshi Chest Hospital, Madurai, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__gokulnath_94",
        "user": {
            "name": "Dr. Gokulnath",
            "email": "_gokulnath@hospital.com",
            "mobile": "+91 9840100094"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Gokul Chest & Allergy Clinic",
        "district": "Salem",
        "address": "Gokul Chest & Allergy Clinic, Salem, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__dharmalingam_95",
        "user": {
            "name": "Dr. Dharmalingam",
            "email": "_dharmalingam@hospital.com",
            "mobile": "+91 9840100095"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Trichy Lung Care Center",
        "district": "Tiruchirappalli",
        "address": "Trichy Lung Care Center, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jaganathan_96",
        "user": {
            "name": "Dr. Jaganathan",
            "email": "_jaganathan@hospital.com",
            "mobile": "+91 9840100096"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Naruvi Chest Center",
        "district": "Vellore",
        "address": "Naruvi Chest Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kanagaraj_97",
        "user": {
            "name": "Dr. Kanagaraj",
            "email": "_kanagaraj@hospital.com",
            "mobile": "+91 9840100097"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Nellai Pulmo Care",
        "district": "Tirunelveli",
        "address": "Nellai Pulmo Care, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sivaram_98",
        "user": {
            "name": "Dr. Sivaram",
            "email": "_sivaram@hospital.com",
            "mobile": "+91 9840100098"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Erode Lung Institute",
        "district": "Erode",
        "address": "Erode Lung Institute, Erode, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thirunavukkarasu_99",
        "user": {
            "name": "Dr. Thirunavukkarasu",
            "email": "_thirunavukkarasu@hospital.com",
            "mobile": "+91 9840100099"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Delta Chest Clinic",
        "district": "Thanjavur",
        "address": "Delta Chest Clinic, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__anandhi_p_100",
        "user": {
            "name": "Dr. Anandhi P",
            "email": "_anandhi_p@hospital.com",
            "mobile": "+91 9840100100"
        },
        "specialization": "Pulmonologist",
        "qualification": "MBBS, MD (Pulmonary Medicine), DTCD",
        "hospital": "Kanchi Respiratory Care",
        "district": "Kanchipuram",
        "address": "Kanchi Respiratory Care, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Pulmonologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ramesh_chandran_101",
        "user": {
            "name": "Dr. Ramesh Chandran",
            "email": "_ramesh_chandran@hospital.com",
            "mobile": "+91 9840100101"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Meenakshi Mission Gastro Care",
        "district": "Madurai",
        "address": "Meenakshi Mission Gastro Care, Madurai, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__karthi_g_102",
        "user": {
            "name": "Dr. Karthi G",
            "email": "_karthi_g@hospital.com",
            "mobile": "+91 9840100102"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Apollo Gastro Institute",
        "district": "Chennai",
        "address": "Apollo Gastro Institute, Chennai, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__prabhakaran_103",
        "user": {
            "name": "Dr. Prabhakaran",
            "email": "_prabhakaran@hospital.com",
            "mobile": "+91 9840100103"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "GEM Hospital & Research",
        "district": "Coimbatore",
        "address": "GEM Hospital & Research, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__srinivasan_104",
        "user": {
            "name": "Dr. Srinivasan",
            "email": "_srinivasan@hospital.com",
            "mobile": "+91 9840100104"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "SKS Gastro Centre",
        "district": "Salem",
        "address": "SKS Gastro Centre, Salem, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__mohanraj_105",
        "user": {
            "name": "Dr. Mohanraj",
            "email": "_mohanraj@hospital.com",
            "mobile": "+91 9840100105"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Harshamitra Gastro Clinic",
        "district": "Tiruchirappalli",
        "address": "Harshamitra Gastro Clinic, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__selvaraj_106",
        "user": {
            "name": "Dr. Selvaraj",
            "email": "_selvaraj@hospital.com",
            "mobile": "+91 9840100106"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "CMC Gastro Sciences Unit",
        "district": "Vellore",
        "address": "CMC Gastro Sciences Unit, Vellore, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thirupathi_107",
        "user": {
            "name": "Dr. Thirupathi",
            "email": "_thirupathi@hospital.com",
            "mobile": "+91 9840100107"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Nellai Gastro Care Center",
        "district": "Tirunelveli",
        "address": "Nellai Gastro Care Center, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vijayakumar_108",
        "user": {
            "name": "Dr. Vijayakumar",
            "email": "_vijayakumar@hospital.com",
            "mobile": "+91 9840100108"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Erode Digestive Care Center",
        "district": "Erode",
        "address": "Erode Digestive Care Center, Erode, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__marimuthu_109",
        "user": {
            "name": "Dr. Marimuthu",
            "email": "_marimuthu@hospital.com",
            "mobile": "+91 9840100109"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Thanjavur Gastro Clinic",
        "district": "Thanjavur",
        "address": "Thanjavur Gastro Clinic, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__hemalatha_110",
        "user": {
            "name": "Dr. Hemalatha",
            "email": "_hemalatha@hospital.com",
            "mobile": "+91 9840100110"
        },
        "specialization": "Gastroenterologist",
        "qualification": "MBBS, MD, DM (Gastroenterology)",
        "hospital": "Kanchi Digestive Health",
        "district": "Kanchipuram",
        "address": "Kanchi Digestive Health, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Gastroenterologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__riyana_sen_111",
        "user": {
            "name": "Dr. Riyana Sen",
            "email": "_riyana_sen@hospital.com",
            "mobile": "+91 9840100111"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Manipal Children's Clinic",
        "district": "Salem",
        "address": "Manipal Children's Clinic, Salem, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__priya_darshini_112",
        "user": {
            "name": "Dr. Priya Darshini",
            "email": "_priya_darshini@hospital.com",
            "mobile": "+91 9840100112"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Rainbow Children's Hospital",
        "district": "Chennai",
        "address": "Rainbow Children's Hospital, Chennai, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sudha_mohan_113",
        "user": {
            "name": "Dr. Sudha Mohan",
            "email": "_sudha_mohan@hospital.com",
            "mobile": "+91 9840100113"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "GKNM Children's Center",
        "district": "Coimbatore",
        "address": "GKNM Children's Center, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__aravind_swamy_114",
        "user": {
            "name": "Dr. Aravind Swamy",
            "email": "_aravind_swamy@hospital.com",
            "mobile": "+91 9840100114"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Grace Children Hospital",
        "district": "Madurai",
        "address": "Grace Children Hospital, Madurai, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kavitha_rajan_115",
        "user": {
            "name": "Dr. Kavitha Rajan",
            "email": "_kavitha_rajan@hospital.com",
            "mobile": "+91 9840100115"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Kauvery Child Care Clinic",
        "district": "Tiruchirappalli",
        "address": "Kauvery Child Care Clinic, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__mohan_kumar_116",
        "user": {
            "name": "Dr. Mohan Kumar",
            "email": "_mohan_kumar@hospital.com",
            "mobile": "+91 9840100116"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "CMC Child Health Center",
        "district": "Vellore",
        "address": "CMC Child Health Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__selva_kumar_117",
        "user": {
            "name": "Dr. Selva Kumar",
            "email": "_selva_kumar@hospital.com",
            "mobile": "+91 9840100117"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Annai Child Clinic",
        "district": "Tirunelveli",
        "address": "Annai Child Clinic, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__revathi_s_118",
        "user": {
            "name": "Dr. Revathi S",
            "email": "_revathi_s@hospital.com",
            "mobile": "+91 9840100118"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Maruthi Children Hospital",
        "district": "Erode",
        "address": "Maruthi Children Hospital, Erode, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kumaran_m_119",
        "user": {
            "name": "Dr. Kumaran M",
            "email": "_kumaran_m@hospital.com",
            "mobile": "+91 9840100119"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Vinodhagan Pediatric Center",
        "district": "Thanjavur",
        "address": "Vinodhagan Pediatric Center, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__malini_v_120",
        "user": {
            "name": "Dr. Malini V",
            "email": "_malini_v@hospital.com",
            "mobile": "+91 9840100120"
        },
        "specialization": "Pediatrician",
        "qualification": "MBBS, MD (Pediatrics), DCH",
        "hospital": "Little Stars Pediatric Care",
        "district": "Kanchipuram",
        "address": "Little Stars Pediatric Care, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Pediatrician specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ishita_patel_121",
        "user": {
            "name": "Dr. Ishita Patel",
            "email": "_ishita_patel@hospital.com",
            "mobile": "+91 9840100121"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "MIOT International Women's Care",
        "district": "Chennai",
        "address": "MIOT International Women's Care, Chennai, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__lishika_reddy_122",
        "user": {
            "name": "Dr. Lishika Reddy",
            "email": "_lishika_reddy@hospital.com",
            "mobile": "+91 9840100122"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Women's Center by Motherhood",
        "district": "Coimbatore",
        "address": "Women's Center by Motherhood, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vasanthi_r_123",
        "user": {
            "name": "Dr. Vasanthi R",
            "email": "_vasanthi_r@hospital.com",
            "mobile": "+91 9840100123"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Hannah Joseph Maternity Center",
        "district": "Madurai",
        "address": "Hannah Joseph Maternity Center, Madurai, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__subhashini_k_124",
        "user": {
            "name": "Dr. Subhashini K",
            "email": "_subhashini_k@hospital.com",
            "mobile": "+91 9840100124"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Dharani Women's Hospital",
        "district": "Salem",
        "address": "Dharani Women's Hospital, Salem, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__uma_maheshwari_125",
        "user": {
            "name": "Dr. Uma Maheshwari",
            "email": "_uma_maheshwari@hospital.com",
            "mobile": "+91 9840100125"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Deepam Women's Health",
        "district": "Tiruchirappalli",
        "address": "Deepam Women's Health, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__mythili_s_126",
        "user": {
            "name": "Dr. Mythili S",
            "email": "_mythili_s@hospital.com",
            "mobile": "+91 9840100126"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Naruvi Women's Center",
        "district": "Vellore",
        "address": "Naruvi Women's Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__gomathi_n_127",
        "user": {
            "name": "Dr. Gomathi N",
            "email": "_gomathi_n@hospital.com",
            "mobile": "+91 9840100127"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Gomathi Maternity Care",
        "district": "Tirunelveli",
        "address": "Gomathi Maternity Care, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__soundarya_p_128",
        "user": {
            "name": "Dr. Soundarya P",
            "email": "_soundarya_p@hospital.com",
            "mobile": "+91 9840100128"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Mother & Child Care Clinic",
        "district": "Erode",
        "address": "Mother & Child Care Clinic, Erode, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__indumathi_129",
        "user": {
            "name": "Dr. Indumathi",
            "email": "_indumathi@hospital.com",
            "mobile": "+91 9840100129"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Raja Mirasudar Maternity Wing",
        "district": "Thanjavur",
        "address": "Raja Mirasudar Maternity Wing, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__geetha_priya_130",
        "user": {
            "name": "Dr. Geetha Priya",
            "email": "_geetha_priya@hospital.com",
            "mobile": "+91 9840100130"
        },
        "specialization": "Gynecologist",
        "qualification": "MBBS, MD, DGO (Obstetrics & Gynecology)",
        "hospital": "Kanchi Maternity & Fertility",
        "district": "Kanchipuram",
        "address": "Kanchi Maternity & Fertility, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Gynecologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__lavanya_swaminathan_131",
        "user": {
            "name": "Dr. Lavanya Swaminathan",
            "email": "_lavanya_swaminathan@hospital.com",
            "mobile": "+91 9840100131"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Lotus Eye Care Hospital",
        "district": "Erode",
        "address": "Lotus Eye Care Hospital, Erode, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__aravind_s_132",
        "user": {
            "name": "Dr. Aravind S",
            "email": "_aravind_s@hospital.com",
            "mobile": "+91 9840100132"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Sankara Nethralaya Eye Care",
        "district": "Chennai",
        "address": "Sankara Nethralaya Eye Care, Chennai, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thendral_k_133",
        "user": {
            "name": "Dr. Thendral K",
            "email": "_thendral_k@hospital.com",
            "mobile": "+91 9840100133"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Aravind Eye Hospital Coimbatore",
        "district": "Coimbatore",
        "address": "Aravind Eye Hospital Coimbatore, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ganesan_p_134",
        "user": {
            "name": "Dr. Ganesan P",
            "email": "_ganesan_p@hospital.com",
            "mobile": "+91 9840100134"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Aravind Eye Hospital Madurai",
        "district": "Madurai",
        "address": "Aravind Eye Hospital Madurai, Madurai, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__saranya_r_135",
        "user": {
            "name": "Dr. Saranya R",
            "email": "_saranya_r@hospital.com",
            "mobile": "+91 9840100135"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Vasan Eye Care Salem",
        "district": "Salem",
        "address": "Vasan Eye Care Salem, Salem, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__muthukumar_136",
        "user": {
            "name": "Dr. Muthukumar",
            "email": "_muthukumar@hospital.com",
            "mobile": "+91 9840100136"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Joseph Eye Hospital",
        "district": "Tiruchirappalli",
        "address": "Joseph Eye Hospital, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__chitra_devi_137",
        "user": {
            "name": "Dr. Chitra Devi",
            "email": "_chitra_devi@hospital.com",
            "mobile": "+91 9840100137"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "CMC Eye Clinic",
        "district": "Vellore",
        "address": "CMC Eye Clinic, Vellore, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__velmurugan_138",
        "user": {
            "name": "Dr. Velmurugan",
            "email": "_velmurugan@hospital.com",
            "mobile": "+91 9840100138"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Agarwal Eye Hospital",
        "district": "Tirunelveli",
        "address": "Agarwal Eye Hospital, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__rajendran_139",
        "user": {
            "name": "Dr. Rajendran",
            "email": "_rajendran@hospital.com",
            "mobile": "+91 9840100139"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Eye Foundation Thanjavur",
        "district": "Thanjavur",
        "address": "Eye Foundation Thanjavur, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sowmya_k_140",
        "user": {
            "name": "Dr. Sowmya K",
            "email": "_sowmya_k@hospital.com",
            "mobile": "+91 9840100140"
        },
        "specialization": "Ophthalmologist",
        "qualification": "MBBS, MS (Ophthalmology), DO",
        "hospital": "Kanchi Eye Foundation",
        "district": "Kanchipuram",
        "address": "Kanchi Eye Foundation, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sudhakar_v_141",
        "user": {
            "name": "Dr. Sudhakar V",
            "email": "_sudhakar_v@hospital.com",
            "mobile": "+91 9840100141"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Apollo Urology Institute",
        "district": "Chennai",
        "address": "Apollo Urology Institute, Chennai, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thilagaraj_142",
        "user": {
            "name": "Dr. Thilagaraj",
            "email": "_thilagaraj@hospital.com",
            "mobile": "+91 9840100142"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "KMCH Kidney & Urology",
        "district": "Coimbatore",
        "address": "KMCH Kidney & Urology, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__subramaniam_143",
        "user": {
            "name": "Dr. Subramaniam",
            "email": "_subramaniam@hospital.com",
            "mobile": "+91 9840100143"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Preethi Urology Hospital",
        "district": "Madurai",
        "address": "Preethi Urology Hospital, Madurai, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ravichandran_144",
        "user": {
            "name": "Dr. Ravichandran",
            "email": "_ravichandran@hospital.com",
            "mobile": "+91 9840100144"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Salem Kidney Care Center",
        "district": "Salem",
        "address": "Salem Kidney Care Center, Salem, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__natarajan_145",
        "user": {
            "name": "Dr. Natarajan",
            "email": "_natarajan@hospital.com",
            "mobile": "+91 9840100145"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Trichy Urology Centre",
        "district": "Tiruchirappalli",
        "address": "Trichy Urology Centre, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__venkatachalam_146",
        "user": {
            "name": "Dr. Venkatachalam",
            "email": "_venkatachalam@hospital.com",
            "mobile": "+91 9840100146"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Naruvi Kidney & Uro Center",
        "district": "Vellore",
        "address": "Naruvi Kidney & Uro Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__alagappan_147",
        "user": {
            "name": "Dr. Alagappan",
            "email": "_alagappan@hospital.com",
            "mobile": "+91 9840100147"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Nellai Kidney Centre",
        "district": "Tirunelveli",
        "address": "Nellai Kidney Centre, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sadasivam_148",
        "user": {
            "name": "Dr. Sadasivam",
            "email": "_sadasivam@hospital.com",
            "mobile": "+91 9840100148"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Erode Uro Care Hospital",
        "district": "Erode",
        "address": "Erode Uro Care Hospital, Erode, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__rengasamy_149",
        "user": {
            "name": "Dr. Rengasamy",
            "email": "_rengasamy@hospital.com",
            "mobile": "+91 9840100149"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Thanjavur Urology Hospital",
        "district": "Thanjavur",
        "address": "Thanjavur Urology Hospital, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kasinathan_150",
        "user": {
            "name": "Dr. Kasinathan",
            "email": "_kasinathan@hospital.com",
            "mobile": "+91 9840100150"
        },
        "specialization": "Urologist",
        "qualification": "MBBS, MS, M.Ch (Urology)",
        "hospital": "Kanchi Kidney & Uro Care",
        "district": "Kanchipuram",
        "address": "Kanchi Kidney & Uro Care, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__raja_sabapathy_151",
        "user": {
            "name": "Dr. Raja Sabapathy",
            "email": "_raja_sabapathy@hospital.com",
            "mobile": "+91 9840100151"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Ganga Plastic & Microsurgery",
        "district": "Coimbatore",
        "address": "Ganga Plastic & Microsurgery, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__anantharaman_152",
        "user": {
            "name": "Dr. Anantharaman",
            "email": "_anantharaman@hospital.com",
            "mobile": "+91 9840100152"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Apollo Cosmetic & Plastic Center",
        "district": "Chennai",
        "address": "Apollo Cosmetic & Plastic Center, Chennai, Tamil Nadu",
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
        "rating": 4.7,
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__muthumanickam_153",
        "user": {
            "name": "Dr. Muthumanickam",
            "email": "_muthumanickam@hospital.com",
            "mobile": "+91 9840100153"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Meenakshi Aesthetic Institute",
        "district": "Madurai",
        "address": "Meenakshi Aesthetic Institute, Madurai, Tamil Nadu",
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
        "rating": 4.8,
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__bhuvaneswari_154",
        "user": {
            "name": "Dr. Bhuvaneswari",
            "email": "_bhuvaneswari@hospital.com",
            "mobile": "+91 9840100154"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Salem Reconstructive Care",
        "district": "Salem",
        "address": "Salem Reconstructive Care, Salem, Tamil Nadu",
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
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__saravanan_b_155",
        "user": {
            "name": "Dr. Saravanan B",
            "email": "_saravanan_b@hospital.com",
            "mobile": "+91 9840100155"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Kauvery Cosmetic Care",
        "district": "Tiruchirappalli",
        "address": "Kauvery Cosmetic Care, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sukumar_r_156",
        "user": {
            "name": "Dr. Sukumar R",
            "email": "_sukumar_r@hospital.com",
            "mobile": "+91 9840100156"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "CMC Plastic Surgery Wing",
        "district": "Vellore",
        "address": "CMC Plastic Surgery Wing, Vellore, Tamil Nadu",
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
        "rating": 4.7,
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__chendur_pandian_157",
        "user": {
            "name": "Dr. Chendur Pandian",
            "email": "_chendur_pandian@hospital.com",
            "mobile": "+91 9840100157"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Nellai Plastic Surgery Hub",
        "district": "Tirunelveli",
        "address": "Nellai Plastic Surgery Hub, Tirunelveli, Tamil Nadu",
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
        "rating": 4.8,
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ezhilarasi_158",
        "user": {
            "name": "Dr. Ezhilarasi",
            "email": "_ezhilarasi@hospital.com",
            "mobile": "+91 9840100158"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Lotus Cosmetic Surgery Centre",
        "district": "Erode",
        "address": "Lotus Cosmetic Surgery Centre, Erode, Tamil Nadu",
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
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thangaraj_159",
        "user": {
            "name": "Dr. Thangaraj",
            "email": "_thangaraj@hospital.com",
            "mobile": "+91 9840100159"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Thanjavur Aesthetic Clinic",
        "district": "Thanjavur",
        "address": "Thanjavur Aesthetic Clinic, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__menaka_s_160",
        "user": {
            "name": "Dr. Menaka S",
            "email": "_menaka_s@hospital.com",
            "mobile": "+91 9840100160"
        },
        "specialization": "Plastic Surgeon",
        "qualification": "MBBS, MS, M.Ch (Plastic & Reconstructive Surgery)",
        "hospital": "Kanchi Plastic Care Center",
        "district": "Kanchipuram",
        "address": "Kanchi Plastic Care Center, Kanchipuram, Tamil Nadu",
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
        "rating": 4.7,
        "bio": "Certified Plastic Surgeon specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__karthikeyan_s_161",
        "user": {
            "name": "Dr. Karthikeyan S",
            "email": "_karthikeyan_s@hospital.com",
            "mobile": "+91 9840100161"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Aarthi Scans & Apollo Diagnostics",
        "district": "Chennai",
        "address": "Aarthi Scans & Apollo Diagnostics, Chennai, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__padmavathi_r_162",
        "user": {
            "name": "Dr. Padmavathi R",
            "email": "_padmavathi_r@hospital.com",
            "mobile": "+91 9840100162"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "KMCH Imaging & Diagnostics",
        "district": "Coimbatore",
        "address": "KMCH Imaging & Diagnostics, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__senthil_nathan_r_163",
        "user": {
            "name": "Dr. Senthil Nathan R",
            "email": "_senthil_nathan_r@hospital.com",
            "mobile": "+91 9840100163"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Meenakshi Advanced Imaging",
        "district": "Madurai",
        "address": "Meenakshi Advanced Imaging, Madurai, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__haripriya_164",
        "user": {
            "name": "Dr. Haripriya",
            "email": "_haripriya@hospital.com",
            "mobile": "+91 9840100164"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "SKS Diagnostic & MRI Wing",
        "district": "Salem",
        "address": "SKS Diagnostic & MRI Wing, Salem, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__mohanraj_c_165",
        "user": {
            "name": "Dr. Mohanraj C",
            "email": "_mohanraj_c@hospital.com",
            "mobile": "+91 9840100165"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Trichy Scans & Diagnostics",
        "district": "Tiruchirappalli",
        "address": "Trichy Scans & Diagnostics, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayachandran_166",
        "user": {
            "name": "Dr. Jayachandran",
            "email": "_jayachandran@hospital.com",
            "mobile": "+91 9840100166"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "CMC Radio-Diagnosis Unit",
        "district": "Vellore",
        "address": "CMC Radio-Diagnosis Unit, Vellore, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sudha_raman_167",
        "user": {
            "name": "Dr. Sudha Raman",
            "email": "_sudha_raman@hospital.com",
            "mobile": "+91 9840100167"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Nellai Digital Imaging Centre",
        "district": "Tirunelveli",
        "address": "Nellai Digital Imaging Centre, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__boopathi_168",
        "user": {
            "name": "Dr. Boopathi",
            "email": "_boopathi@hospital.com",
            "mobile": "+91 9840100168"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Erode Scans Diagnostic Hub",
        "district": "Erode",
        "address": "Erode Scans Diagnostic Hub, Erode, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sivasankari_169",
        "user": {
            "name": "Dr. Sivasankari",
            "email": "_sivasankari@hospital.com",
            "mobile": "+91 9840100169"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Delta Diagnostic Imaging",
        "district": "Thanjavur",
        "address": "Delta Diagnostic Imaging, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayabalan_170",
        "user": {
            "name": "Dr. Jayabalan",
            "email": "_jayabalan@hospital.com",
            "mobile": "+91 9840100170"
        },
        "specialization": "Radiologist",
        "qualification": "MBBS, MD (Radio-Diagnosis), DMRD",
        "hospital": "Kanchi Scans & Radio Center",
        "district": "Kanchipuram",
        "address": "Kanchi Scans & Radio Center, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Radiologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__deepthi_rao_171",
        "user": {
            "name": "Dr. Deepthi Rao",
            "email": "_deepthi_rao@hospital.com",
            "mobile": "+91 9840100171"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Rainbow Neonatal Care Center",
        "district": "Chennai",
        "address": "Rainbow Neonatal Care Center, Chennai, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__nirmal_kumar_172",
        "user": {
            "name": "Dr. Nirmal Kumar",
            "email": "_nirmal_kumar@hospital.com",
            "mobile": "+91 9840100172"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "GKNM NICU Specialty Wing",
        "district": "Coimbatore",
        "address": "GKNM NICU Specialty Wing, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__meenambigai_173",
        "user": {
            "name": "Dr. Meenambigai",
            "email": "_meenambigai@hospital.com",
            "mobile": "+91 9840100173"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Meenakshi NICU Care Unit",
        "district": "Madurai",
        "address": "Meenakshi NICU Care Unit, Madurai, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thamarai_selvi_174",
        "user": {
            "name": "Dr. Thamarai Selvi",
            "email": "_thamarai_selvi@hospital.com",
            "mobile": "+91 9840100174"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Manipal Neonatal ICU",
        "district": "Salem",
        "address": "Manipal Neonatal ICU, Salem, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__pradeep_chandar_175",
        "user": {
            "name": "Dr. Pradeep Chandar",
            "email": "_pradeep_chandar@hospital.com",
            "mobile": "+91 9840100175"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Kauvery Neonatal Institute",
        "district": "Tiruchirappalli",
        "address": "Kauvery Neonatal Institute, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__santhanam_176",
        "user": {
            "name": "Dr. Santhanam",
            "email": "_santhanam@hospital.com",
            "mobile": "+91 9840100176"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "CMC Newborn Specialty Center",
        "district": "Vellore",
        "address": "CMC Newborn Specialty Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__arunkumar_p_177",
        "user": {
            "name": "Dr. Arunkumar P",
            "email": "_arunkumar_p@hospital.com",
            "mobile": "+91 9840100177"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Nellai Infant Health Hub",
        "district": "Tirunelveli",
        "address": "Nellai Infant Health Hub, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__gayathri_v_178",
        "user": {
            "name": "Dr. Gayathri V",
            "email": "_gayathri_v@hospital.com",
            "mobile": "+91 9840100178"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Lotus Newborn Care Center",
        "district": "Erode",
        "address": "Lotus Newborn Care Center, Erode, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__balasundaram_179",
        "user": {
            "name": "Dr. Balasundaram",
            "email": "_balasundaram@hospital.com",
            "mobile": "+91 9840100179"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Thanjavur Infant Care Wing",
        "district": "Thanjavur",
        "address": "Thanjavur Infant Care Wing, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__hemavathi_180",
        "user": {
            "name": "Dr. Hemavathi",
            "email": "_hemavathi@hospital.com",
            "mobile": "+91 9840100180"
        },
        "specialization": "Neonatologist",
        "qualification": "MBBS, MD (Pediatrics), DM (Neonatology)",
        "hospital": "Kanchi Neonatal Clinic",
        "district": "Kanchipuram",
        "address": "Kanchi Neonatal Clinic, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Neonatologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__v__s__natarajan_care_team_181",
        "user": {
            "name": "Dr. V. S. Natarajan Care Team",
            "email": "_v__s__natarajan_care_team@hospital.com",
            "mobile": "+91 9840100181"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Apollo Senior Citizens Care",
        "district": "Chennai",
        "address": "Apollo Senior Citizens Care, Chennai, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kalyanasundaram_182",
        "user": {
            "name": "Dr. Kalyanasundaram",
            "email": "_kalyanasundaram@hospital.com",
            "mobile": "+91 9840100182"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "PSG Elder Healthcare Center",
        "district": "Coimbatore",
        "address": "PSG Elder Healthcare Center, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__soundararajan_183",
        "user": {
            "name": "Dr. Soundararajan",
            "email": "_soundararajan@hospital.com",
            "mobile": "+91 9840100183"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Meenakshi Senior Care Wing",
        "district": "Madurai",
        "address": "Meenakshi Senior Care Wing, Madurai, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__devaki_r_184",
        "user": {
            "name": "Dr. Devaki R",
            "email": "_devaki_r@hospital.com",
            "mobile": "+91 9840100184"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Gokulam Active Ageing Care",
        "district": "Salem",
        "address": "Gokulam Active Ageing Care, Salem, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ramasamy_m_185",
        "user": {
            "name": "Dr. Ramasamy M",
            "email": "_ramasamy_m@hospital.com",
            "mobile": "+91 9840100185"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Kauvery Senior Citizen Clinic",
        "district": "Tiruchirappalli",
        "address": "Kauvery Senior Citizen Clinic, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__surendran_t_186",
        "user": {
            "name": "Dr. Surendran T",
            "email": "_surendran_t@hospital.com",
            "mobile": "+91 9840100186"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "CMC Geriatric Medicine Unit",
        "district": "Vellore",
        "address": "CMC Geriatric Medicine Unit, Vellore, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__subbiah_187",
        "user": {
            "name": "Dr. Subbiah",
            "email": "_subbiah@hospital.com",
            "mobile": "+91 9840100187"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Nellai Elder Wellness Center",
        "district": "Tirunelveli",
        "address": "Nellai Elder Wellness Center, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__baghyalakshmi_188",
        "user": {
            "name": "Dr. Baghyalakshmi",
            "email": "_baghyalakshmi@hospital.com",
            "mobile": "+91 9840100188"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Lotus Senior Healthcare",
        "district": "Erode",
        "address": "Lotus Senior Healthcare, Erode, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__veeramani_189",
        "user": {
            "name": "Dr. Veeramani",
            "email": "_veeramani@hospital.com",
            "mobile": "+91 9840100189"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Thanjavur Geriatric Hub",
        "district": "Thanjavur",
        "address": "Thanjavur Geriatric Hub, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__srividya_190",
        "user": {
            "name": "Dr. Srividya",
            "email": "_srividya@hospital.com",
            "mobile": "+91 9840100190"
        },
        "specialization": "Geriatrician",
        "qualification": "MBBS, MD (Geriatric Medicine & Elder Care)",
        "hospital": "Kanchi Elder Care Centre",
        "district": "Kanchipuram",
        "address": "Kanchi Elder Care Centre, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Geriatrician specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__mohamed_rela_care_team_191",
        "user": {
            "name": "Dr. Mohamed Rela Care Team",
            "email": "_mohamed_rela_care_team@hospital.com",
            "mobile": "+91 9840100191"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Rela Institute & Medical Centre",
        "district": "Chennai",
        "address": "Rela Institute & Medical Centre, Chennai, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__palanivelu_care_team_192",
        "user": {
            "name": "Dr. Palanivelu Care Team",
            "email": "_palanivelu_care_team@hospital.com",
            "mobile": "+91 9840100192"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "GEM Liver & Digestive Institute",
        "district": "Coimbatore",
        "address": "GEM Liver & Digestive Institute, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__dharmarajan_193",
        "user": {
            "name": "Dr. Dharmarajan",
            "email": "_dharmarajan@hospital.com",
            "mobile": "+91 9840100193"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Meenakshi Liver Care Center",
        "district": "Madurai",
        "address": "Meenakshi Liver Care Center, Madurai, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayakodi_194",
        "user": {
            "name": "Dr. Jayakodi",
            "email": "_jayakodi@hospital.com",
            "mobile": "+91 9840100194"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "SKS Liver & Gastro Wing",
        "district": "Salem",
        "address": "SKS Liver & Gastro Wing, Salem, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__senthamil_selvan_195",
        "user": {
            "name": "Dr. Senthamil Selvan",
            "email": "_senthamil_selvan@hospital.com",
            "mobile": "+91 9840100195"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Kauvery Liver Specialty Center",
        "district": "Tiruchirappalli",
        "address": "Kauvery Liver Specialty Center, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__eapen_c__e__196",
        "user": {
            "name": "Dr. Eapen C. E.",
            "email": "_eapen_c__e_@hospital.com",
            "mobile": "+91 9840100196"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "CMC Hepatology Unit",
        "district": "Vellore",
        "address": "CMC Hepatology Unit, Vellore, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__paramasivan_r_197",
        "user": {
            "name": "Dr. Paramasivan R",
            "email": "_paramasivan_r@hospital.com",
            "mobile": "+91 9840100197"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Nellai Liver Care Clinic",
        "district": "Tirunelveli",
        "address": "Nellai Liver Care Clinic, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__gnanasekaran_198",
        "user": {
            "name": "Dr. Gnanasekaran",
            "email": "_gnanasekaran@hospital.com",
            "mobile": "+91 9840100198"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Lotus Liver Wellness Center",
        "district": "Erode",
        "address": "Lotus Liver Wellness Center, Erode, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__ilanchezhian_199",
        "user": {
            "name": "Dr. Ilanchezhian",
            "email": "_ilanchezhian@hospital.com",
            "mobile": "+91 9840100199"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Delta Liver Care Hospital",
        "district": "Thanjavur",
        "address": "Delta Liver Care Hospital, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kokilavani_200",
        "user": {
            "name": "Dr. Kokilavani",
            "email": "_kokilavani@hospital.com",
            "mobile": "+91 9840100200"
        },
        "specialization": "Hepatologist",
        "qualification": "MBBS, MD, DM (Hepatology & Liver Transplant)",
        "hospital": "Kanchi Liver Health Clinic",
        "district": "Kanchipuram",
        "address": "Kanchi Liver Health Clinic, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Hepatologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__revathi_raj_201",
        "user": {
            "name": "Dr. Revathi Raj",
            "email": "_revathi_raj@hospital.com",
            "mobile": "+91 9840100201"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Apollo Hematology & BMT Unit",
        "district": "Chennai",
        "address": "Apollo Hematology & BMT Unit, Chennai, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__suresh_kumar_202",
        "user": {
            "name": "Dr. Suresh Kumar",
            "email": "_suresh_kumar@hospital.com",
            "mobile": "+91 9840100202"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "KMCH Hematology Care",
        "district": "Coimbatore",
        "address": "KMCH Hematology Care, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__kannan_k_203",
        "user": {
            "name": "Dr. Kannan K",
            "email": "_kannan_k@hospital.com",
            "mobile": "+91 9840100203"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Meenakshi Blood Disorder Wing",
        "district": "Madurai",
        "address": "Meenakshi Blood Disorder Wing, Madurai, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__balamurali_204",
        "user": {
            "name": "Dr. Balamurali",
            "email": "_balamurali@hospital.com",
            "mobile": "+91 9840100204"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Salem Hematology Center",
        "district": "Salem",
        "address": "Salem Hematology Center, Salem, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__gopinathan_c_205",
        "user": {
            "name": "Dr. Gopinathan C",
            "email": "_gopinathan_c@hospital.com",
            "mobile": "+91 9840100205"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Kauvery Blood Care Unit",
        "district": "Tiruchirappalli",
        "address": "Kauvery Blood Care Unit, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__alok_srivastava_206",
        "user": {
            "name": "Dr. Alok Srivastava",
            "email": "_alok_srivastava@hospital.com",
            "mobile": "+91 9840100206"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "CMC Center for Stem Cell Research",
        "district": "Vellore",
        "address": "CMC Center for Stem Cell Research, Vellore, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__maruthupandian_207",
        "user": {
            "name": "Dr. Maruthupandian",
            "email": "_maruthupandian@hospital.com",
            "mobile": "+91 9840100207"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Nellai Blood Care Hub",
        "district": "Tirunelveli",
        "address": "Nellai Blood Care Hub, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__sangeetha_priya_208",
        "user": {
            "name": "Dr. Sangeetha Priya",
            "email": "_sangeetha_priya@hospital.com",
            "mobile": "+91 9840100208"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Lotus Hematology Clinic",
        "district": "Erode",
        "address": "Lotus Hematology Clinic, Erode, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__rajagopal_209",
        "user": {
            "name": "Dr. Rajagopal",
            "email": "_rajagopal@hospital.com",
            "mobile": "+91 9840100209"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Thanjavur Blood Health Wing",
        "district": "Thanjavur",
        "address": "Thanjavur Blood Health Wing, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__tamilselvan_210",
        "user": {
            "name": "Dr. Tamilselvan",
            "email": "_tamilselvan@hospital.com",
            "mobile": "+91 9840100210"
        },
        "specialization": "Hematologist",
        "qualification": "MBBS, MD, DM (Clinical Hematology & Bone Marrow)",
        "hospital": "Kanchi Hematology Center",
        "district": "Kanchipuram",
        "address": "Kanchi Hematology Center, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Hematologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__jayaprakash_k_211",
        "user": {
            "name": "Dr. Jayaprakash K",
            "email": "_jayaprakash_k@hospital.com",
            "mobile": "+91 9840100211"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Apollo Allergy & Asthma Center",
        "district": "Chennai",
        "address": "Apollo Allergy & Asthma Center, Chennai, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__manickavel_212",
        "user": {
            "name": "Dr. Manickavel",
            "email": "_manickavel@hospital.com",
            "mobile": "+91 9840100212"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Ganga Allergy & Immunology Hub",
        "district": "Coimbatore",
        "address": "Ganga Allergy & Immunology Hub, Coimbatore, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__senthamarai_213",
        "user": {
            "name": "Dr. Senthamarai",
            "email": "_senthamarai@hospital.com",
            "mobile": "+91 9840100213"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Meenakshi Allergy Care",
        "district": "Madurai",
        "address": "Meenakshi Allergy Care, Madurai, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__radhakrishnan_214",
        "user": {
            "name": "Dr. Radhakrishnan",
            "email": "_radhakrishnan@hospital.com",
            "mobile": "+91 9840100214"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Salem Allergy & Asthma Clinic",
        "district": "Salem",
        "address": "Salem Allergy & Asthma Clinic, Salem, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__vijayalakshmi_s_215",
        "user": {
            "name": "Dr. Vijayalakshmi S",
            "email": "_vijayalakshmi_s@hospital.com",
            "mobile": "+91 9840100215"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Kauvery Allergy Care",
        "district": "Tiruchirappalli",
        "address": "Kauvery Allergy Care, Tiruchirappalli, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__david_prakash_216",
        "user": {
            "name": "Dr. David Prakash",
            "email": "_david_prakash@hospital.com",
            "mobile": "+91 9840100216"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "CMC Immunology Health Center",
        "district": "Vellore",
        "address": "CMC Immunology Health Center, Vellore, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__subhashree_217",
        "user": {
            "name": "Dr. Subhashree",
            "email": "_subhashree@hospital.com",
            "mobile": "+91 9840100217"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Nellai Allergy Care Clinic",
        "district": "Tirunelveli",
        "address": "Nellai Allergy Care Clinic, Tirunelveli, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__shanmugavel_218",
        "user": {
            "name": "Dr. Shanmugavel",
            "email": "_shanmugavel@hospital.com",
            "mobile": "+91 9840100218"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Lotus Allergy Wellness Center",
        "district": "Erode",
        "address": "Lotus Allergy Wellness Center, Erode, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__thirumavalavan_219",
        "user": {
            "name": "Dr. Thirumavalavan",
            "email": "_thirumavalavan@hospital.com",
            "mobile": "+91 9840100219"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Delta Allergy Institute",
        "district": "Thanjavur",
        "address": "Delta Allergy Institute, Thanjavur, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
    },
    {
        "_id": "doc_dr__karpagam_220",
        "user": {
            "name": "Dr. Karpagam",
            "email": "_karpagam@hospital.com",
            "mobile": "+91 9840100220"
        },
        "specialization": "Allergist & Immunologist",
        "qualification": "MBBS, MD, DAA (Allergy, Asthma & Clinical Immunology)",
        "hospital": "Kanchi Allergy & Immunology",
        "district": "Kanchipuram",
        "address": "Kanchi Allergy & Immunology, Kanchipuram, Tamil Nadu",
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
        "bio": "Certified Allergist & Immunologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
    }
]
};
