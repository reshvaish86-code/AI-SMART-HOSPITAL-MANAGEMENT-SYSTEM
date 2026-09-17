/**
 * Database Seed Data with 10 Specialists Across 10 Districts Per Specialty
 */

const SEED_DOCTORS = [
  {
    "name": "Dr. Katrina Fernandez",
    "email": "_katrina_fernandez@hospital.com",
    "mobile": "+91 9840100001",
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
    "name": "Dr. Meera Nambiar",
    "email": "_meera_nambiar@hospital.com",
    "mobile": "+91 9840100002",
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
    "name": "Dr. Suresh K",
    "email": "_suresh_k@hospital.com",
    "mobile": "+91 9840100003",
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
    "name": "Dr. Radhika Balaji",
    "email": "_radhika_balaji@hospital.com",
    "mobile": "+91 9840100004",
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
    "name": "Dr. Ashwin Kumar",
    "email": "_ashwin_kumar@hospital.com",
    "mobile": "+91 9840100005",
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
    "name": "Dr. Nithya Raman",
    "email": "_nithya_raman@hospital.com",
    "mobile": "+91 9840100006",
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
    "name": "Dr. Vigneshwaran T",
    "email": "_vigneshwaran_t@hospital.com",
    "mobile": "+91 9840100007",
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
    "name": "Dr. Deepa Sundar",
    "email": "_deepa_sundar@hospital.com",
    "mobile": "+91 9840100008",
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
    "name": "Dr. Prakash Raj",
    "email": "_prakash_raj@hospital.com",
    "mobile": "+91 9840100009",
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
    "name": "Dr. Sangeetha Mani",
    "email": "_sangeetha_mani@hospital.com",
    "mobile": "+91 9840100010",
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
    "name": "Dr. Diya Sharma",
    "email": "_diya_sharma@hospital.com",
    "mobile": "+91 9840100011",
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
    "name": "Dr. Karthik Sundaram",
    "email": "_karthik_sundaram@hospital.com",
    "mobile": "+91 9840100012",
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
    "name": "Dr. Rajesh Kannan",
    "email": "_rajesh_kannan@hospital.com",
    "mobile": "+91 9840100013",
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
    "name": "Dr. Venkatesh Rao",
    "email": "_venkatesh_rao@hospital.com",
    "mobile": "+91 9840100014",
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
    "name": "Dr. Senthil Nathan",
    "email": "_senthil_nathan@hospital.com",
    "mobile": "+91 9840100015",
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
    "name": "Dr. Anbarasan V",
    "email": "_anbarasan_v@hospital.com",
    "mobile": "+91 9840100016",
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
    "name": "Dr. Murugesan P",
    "email": "_murugesan_p@hospital.com",
    "mobile": "+91 9840100017",
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
    "name": "Dr. Saravanan K",
    "email": "_saravanan_k@hospital.com",
    "mobile": "+91 9840100018",
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
    "name": "Dr. Balasubramanian",
    "email": "_balasubramanian@hospital.com",
    "mobile": "+91 9840100019",
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
    "name": "Dr. Vijay Anand",
    "email": "_vijay_anand@hospital.com",
    "mobile": "+91 9840100020",
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
    "name": "Dr. Rayaan Kapoor",
    "email": "_rayaan_kapoor@hospital.com",
    "mobile": "+91 9840100021",
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
    "name": "Dr. Ananya Swaminathan",
    "email": "_ananya_swaminathan@hospital.com",
    "mobile": "+91 9840100022",
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
    "name": "Dr. Harish Chandra",
    "email": "_harish_chandra@hospital.com",
    "mobile": "+91 9840100023",
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
    "name": "Dr. Divya Bharathi",
    "email": "_divya_bharathi@hospital.com",
    "mobile": "+91 9840100024",
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
    "name": "Dr. Ramakrishnan S",
    "email": "_ramakrishnan_s@hospital.com",
    "mobile": "+91 9840100025",
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
    "name": "Dr. Priya V",
    "email": "_priya_v@hospital.com",
    "mobile": "+91 9840100026",
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
    "name": "Dr. Manickam G",
    "email": "_manickam_g@hospital.com",
    "mobile": "+91 9840100027",
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
    "name": "Dr. Gayathri R",
    "email": "_gayathri_r@hospital.com",
    "mobile": "+91 9840100028",
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
    "name": "Dr. Chandrasekar",
    "email": "_chandrasekar@hospital.com",
    "mobile": "+91 9840100029",
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
    "name": "Dr. Jayanthi S",
    "email": "_jayanthi_s@hospital.com",
    "mobile": "+91 9840100030",
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
    "name": "Dr. Riyana Sen",
    "email": "_riyana_sen@hospital.com",
    "mobile": "+91 9840100031",
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
    "name": "Dr. Priya Darshini",
    "email": "_priya_darshini@hospital.com",
    "mobile": "+91 9840100032",
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
    "name": "Dr. Sudha Mohan",
    "email": "_sudha_mohan@hospital.com",
    "mobile": "+91 9840100033",
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
    "name": "Dr. Aravind Swamy",
    "email": "_aravind_swamy@hospital.com",
    "mobile": "+91 9840100034",
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
    "name": "Dr. Kavitha Rajan",
    "email": "_kavitha_rajan@hospital.com",
    "mobile": "+91 9840100035",
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
    "name": "Dr. Mohan Kumar",
    "email": "_mohan_kumar@hospital.com",
    "mobile": "+91 9840100036",
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
    "name": "Dr. Selva Kumar",
    "email": "_selva_kumar@hospital.com",
    "mobile": "+91 9840100037",
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
    "name": "Dr. Revathi S",
    "email": "_revathi_s@hospital.com",
    "mobile": "+91 9840100038",
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
    "name": "Dr. Kumaran M",
    "email": "_kumaran_m@hospital.com",
    "mobile": "+91 9840100039",
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
    "name": "Dr. Malini V",
    "email": "_malini_v@hospital.com",
    "mobile": "+91 9840100040",
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
    "name": "Dr. Adhira Nair",
    "email": "_adhira_nair@hospital.com",
    "mobile": "+91 9840100041",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Kauvery Orthopedic Hospital",
    "district": "Tiruchirappalli",
    "address": "Kauvery Orthopedic Hospital, Tiruchirappalli, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Ishaan Verma",
    "email": "_ishaan_verma@hospital.com",
    "mobile": "+91 9840100042",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Gleneagles Global Health City",
    "district": "Chennai",
    "address": "Gleneagles Global Health City, Chennai, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Gopinath R",
    "email": "_gopinath_r@hospital.com",
    "mobile": "+91 9840100043",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Ganga Hospital Joint & Spine",
    "district": "Coimbatore",
    "address": "Ganga Hospital Joint & Spine, Coimbatore, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Shanmugam K",
    "email": "_shanmugam_k@hospital.com",
    "mobile": "+91 9840100044",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Devadoss Multispeciality Ortho",
    "district": "Madurai",
    "address": "Devadoss Multispeciality Ortho, Madurai, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Elango T",
    "email": "_elango_t@hospital.com",
    "mobile": "+91 9840100045",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Dhanvantri Critical Ortho Care",
    "district": "Salem",
    "address": "Dhanvantri Critical Ortho Care, Salem, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
  },
  {
    "name": "Dr. Prem Kumar",
    "email": "_prem_kumar@hospital.com",
    "mobile": "+91 9840100046",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Scudder Memorial Ortho Unit",
    "district": "Vellore",
    "address": "Scudder Memorial Ortho Unit, Vellore, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Arulmozhi V",
    "email": "_arulmozhi_v@hospital.com",
    "mobile": "+91 9840100047",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Royal Ortho Care Institute",
    "district": "Tirunelveli",
    "address": "Royal Ortho Care Institute, Tirunelveli, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Balamurugan",
    "email": "_balamurugan@hospital.com",
    "mobile": "+91 9840100048",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Erode Ortho Joint Clinic",
    "district": "Erode",
    "address": "Erode Ortho Joint Clinic, Erode, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sridhar S",
    "email": "_sridhar_s@hospital.com",
    "mobile": "+91 9840100049",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Meenakshi Bone & Joint Care",
    "district": "Thanjavur",
    "address": "Meenakshi Bone & Joint Care, Thanjavur, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
  },
  {
    "name": "Dr. Thirumalai",
    "email": "_thirumalai@hospital.com",
    "mobile": "+91 9840100050",
    "specialization": "Orthopedic",
    "qualification": "MBBS, MS (Orthopedics), M.Ch",
    "hospital": "Kanchi Orthopedic Institute",
    "district": "Kanchipuram",
    "address": "Kanchi Orthopedic Institute, Kanchipuram, Tamil Nadu",
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
    "bio": "Certified Orthopedic specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
  },
  {
    "name": "Dr. Nethra Sundaram",
    "email": "_nethra_sundaram@hospital.com",
    "mobile": "+91 9840100051",
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
    "rating": 5,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Aarav Mehta",
    "email": "_aarav_mehta@hospital.com",
    "mobile": "+91 9840100052",
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
    "rating": 4.7,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Krishnan M",
    "email": "_krishnan_m@hospital.com",
    "mobile": "+91 9840100053",
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
    "rating": 4.8,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Vijayalakshmi",
    "email": "_vijayalakshmi@hospital.com",
    "mobile": "+91 9840100054",
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
    "rating": 4.9,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Manivel P",
    "email": "_manivel_p@hospital.com",
    "mobile": "+91 9840100055",
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
    "rating": 5,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
  },
  {
    "name": "Dr. Jayaprakash",
    "email": "_jayaprakash@hospital.com",
    "mobile": "+91 9840100056",
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
    "rating": 4.7,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Ponraj T",
    "email": "_ponraj_t@hospital.com",
    "mobile": "+91 9840100057",
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
    "rating": 4.8,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Govindaraj",
    "email": "_govindaraj@hospital.com",
    "mobile": "+91 9840100058",
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
    "rating": 4.9,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sivakumar",
    "email": "_sivakumar@hospital.com",
    "mobile": "+91 9840100059",
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
    "rating": 5,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
  },
  {
    "name": "Dr. Uthra Devi",
    "email": "_uthra_devi@hospital.com",
    "mobile": "+91 9840100060",
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
    "rating": 4.7,
    "bio": "Certified General Physician specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
  },
  {
    "name": "Dr. Ishita Patel",
    "email": "_ishita_patel@hospital.com",
    "mobile": "+91 9840100061",
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
    "name": "Dr. Lishika Reddy",
    "email": "_lishika_reddy@hospital.com",
    "mobile": "+91 9840100062",
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
    "name": "Dr. Vasanthi R",
    "email": "_vasanthi_r@hospital.com",
    "mobile": "+91 9840100063",
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
    "name": "Dr. Subhashini K",
    "email": "_subhashini_k@hospital.com",
    "mobile": "+91 9840100064",
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
    "name": "Dr. Uma Maheshwari",
    "email": "_uma_maheshwari@hospital.com",
    "mobile": "+91 9840100065",
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
    "name": "Dr. Mythili S",
    "email": "_mythili_s@hospital.com",
    "mobile": "+91 9840100066",
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
    "name": "Dr. Gomathi N",
    "email": "_gomathi_n@hospital.com",
    "mobile": "+91 9840100067",
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
    "name": "Dr. Soundarya P",
    "email": "_soundarya_p@hospital.com",
    "mobile": "+91 9840100068",
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
    "name": "Dr. Indumathi",
    "email": "_indumathi@hospital.com",
    "mobile": "+91 9840100069",
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
    "name": "Dr. Geetha Priya",
    "email": "_geetha_priya@hospital.com",
    "mobile": "+91 9840100070",
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
    "name": "Dr. Shaan Mukherjee",
    "email": "_shaan_mukherjee@hospital.com",
    "mobile": "+91 9840100071",
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
    "name": "Dr. Thanu Pillai",
    "email": "_thanu_pillai@hospital.com",
    "mobile": "+91 9840100072",
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
    "name": "Dr. Sundaramurthy",
    "email": "_sundaramurthy@hospital.com",
    "mobile": "+91 9840100073",
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
    "name": "Dr. Jayaram K",
    "email": "_jayaram_k@hospital.com",
    "mobile": "+91 9840100074",
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
    "name": "Dr. Vimalraj P",
    "email": "_vimalraj_p@hospital.com",
    "mobile": "+91 9840100075",
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
    "name": "Dr. Sathish Kumar",
    "email": "_sathish_kumar@hospital.com",
    "mobile": "+91 9840100076",
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
    "name": "Dr. Naveen Raj",
    "email": "_naveen_raj@hospital.com",
    "mobile": "+91 9840100077",
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
    "name": "Dr. Meenakshi S",
    "email": "_meenakshi_s@hospital.com",
    "mobile": "+91 9840100078",
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
    "name": "Dr. Ilango M",
    "email": "_ilango_m@hospital.com",
    "mobile": "+91 9840100079",
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
    "name": "Dr. Kiruthika",
    "email": "_kiruthika@hospital.com",
    "mobile": "+91 9840100080",
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
    "name": "Dr. Lavanya Swaminathan",
    "email": "_lavanya_swaminathan@hospital.com",
    "mobile": "+91 9840100081",
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
    "rating": 4.8,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
  },
  {
    "name": "Dr. Aravind S",
    "email": "_aravind_s@hospital.com",
    "mobile": "+91 9840100082",
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
    "rating": 4.9,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Thendral K",
    "email": "_thendral_k@hospital.com",
    "mobile": "+91 9840100083",
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
    "rating": 5,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Ganesan P",
    "email": "_ganesan_p@hospital.com",
    "mobile": "+91 9840100084",
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
    "rating": 4.7,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Saranya R",
    "email": "_saranya_r@hospital.com",
    "mobile": "+91 9840100085",
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
    "rating": 4.8,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
  },
  {
    "name": "Dr. Muthukumar",
    "email": "_muthukumar@hospital.com",
    "mobile": "+91 9840100086",
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
    "rating": 4.9,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Chitra Devi",
    "email": "_chitra_devi@hospital.com",
    "mobile": "+91 9840100087",
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
    "rating": 5,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Velmurugan",
    "email": "_velmurugan@hospital.com",
    "mobile": "+91 9840100088",
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
    "rating": 4.7,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Rajendran",
    "email": "_rajendran@hospital.com",
    "mobile": "+91 9840100089",
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
    "rating": 4.8,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sowmya K",
    "email": "_sowmya_k@hospital.com",
    "mobile": "+91 9840100090",
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
    "rating": 4.9,
    "bio": "Certified Ophthalmologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
  },
  {
    "name": "Dr. Roshini Krishnan",
    "email": "_roshini_krishnan@hospital.com",
    "mobile": "+91 9840100091",
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
    "name": "Dr. Baskaran S",
    "email": "_baskaran_s@hospital.com",
    "mobile": "+91 9840100092",
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
    "name": "Dr. Chellappa",
    "email": "_chellappa@hospital.com",
    "mobile": "+91 9840100093",
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
    "name": "Dr. Gokulnath",
    "email": "_gokulnath@hospital.com",
    "mobile": "+91 9840100094",
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
    "name": "Dr. Dharmalingam",
    "email": "_dharmalingam@hospital.com",
    "mobile": "+91 9840100095",
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
    "name": "Dr. Jaganathan",
    "email": "_jaganathan@hospital.com",
    "mobile": "+91 9840100096",
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
    "name": "Dr. Kanagaraj",
    "email": "_kanagaraj@hospital.com",
    "mobile": "+91 9840100097",
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
    "name": "Dr. Sivaram",
    "email": "_sivaram@hospital.com",
    "mobile": "+91 9840100098",
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
    "name": "Dr. Thirunavukkarasu",
    "email": "_thirunavukkarasu@hospital.com",
    "mobile": "+91 9840100099",
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
    "name": "Dr. Anandhi P",
    "email": "_anandhi_p@hospital.com",
    "mobile": "+91 9840100100",
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
    "name": "Dr. Ramesh Chandran",
    "email": "_ramesh_chandran@hospital.com",
    "mobile": "+91 9840100101",
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
    "name": "Dr. Karthi G",
    "email": "_karthi_g@hospital.com",
    "mobile": "+91 9840100102",
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
    "name": "Dr. Prabhakaran",
    "email": "_prabhakaran@hospital.com",
    "mobile": "+91 9840100103",
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
    "name": "Dr. Srinivasan",
    "email": "_srinivasan@hospital.com",
    "mobile": "+91 9840100104",
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
    "name": "Dr. Mohanraj",
    "email": "_mohanraj@hospital.com",
    "mobile": "+91 9840100105",
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
    "name": "Dr. Selvaraj",
    "email": "_selvaraj@hospital.com",
    "mobile": "+91 9840100106",
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
    "name": "Dr. Thirupathi",
    "email": "_thirupathi@hospital.com",
    "mobile": "+91 9840100107",
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
    "name": "Dr. Vijayakumar",
    "email": "_vijayakumar@hospital.com",
    "mobile": "+91 9840100108",
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
    "name": "Dr. Marimuthu",
    "email": "_marimuthu@hospital.com",
    "mobile": "+91 9840100109",
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
    "name": "Dr. Hemalatha",
    "email": "_hemalatha@hospital.com",
    "mobile": "+91 9840100110",
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
    "name": "Dr. Vikram S",
    "email": "_vikram_s@hospital.com",
    "mobile": "+91 9840100111",
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
    "rating": 5,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Senthilvel",
    "email": "_senthilvel@hospital.com",
    "mobile": "+91 9840100112",
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
    "rating": 4.7,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Manonmani",
    "email": "_manonmani@hospital.com",
    "mobile": "+91 9840100113",
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
    "rating": 4.8,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Balaji K",
    "email": "_balaji_k@hospital.com",
    "mobile": "+91 9840100114",
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
    "rating": 4.9,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
  },
  {
    "name": "Dr. Arunkumar",
    "email": "_arunkumar@hospital.com",
    "mobile": "+91 9840100115",
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
    "rating": 5,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Poongodi",
    "email": "_poongodi@hospital.com",
    "mobile": "+91 9840100116",
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
    "rating": 4.7,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Nagarajan",
    "email": "_nagarajan@hospital.com",
    "mobile": "+91 9840100117",
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
    "rating": 4.8,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Deepalakshmi",
    "email": "_deepalakshmi@hospital.com",
    "mobile": "+91 9840100118",
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
    "rating": 4.9,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sundararajan",
    "email": "_sundararajan@hospital.com",
    "mobile": "+91 9840100119",
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
    "rating": 5,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
  },
  {
    "name": "Dr. Preetha R",
    "email": "_preetha_r@hospital.com",
    "mobile": "+91 9840100120",
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
    "rating": 4.7,
    "bio": "Certified Psychiatrist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sanjay Ram",
    "email": "_sanjay_ram@hospital.com",
    "mobile": "+91 9840100121",
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
    "rating": 4.8,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Priya Mohan",
    "email": "_priya_mohan@hospital.com",
    "mobile": "+91 9840100122",
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
    "rating": 4.9,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Vignesh R",
    "email": "_vignesh_r@hospital.com",
    "mobile": "+91 9840100123",
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
    "rating": 5,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Divya Sri",
    "email": "_divya_sri@hospital.com",
    "mobile": "+91 9840100124",
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
    "rating": 4.7,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
  },
  {
    "name": "Dr. Hariprasad",
    "email": "_hariprasad@hospital.com",
    "mobile": "+91 9840100125",
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
    "rating": 4.8,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sandhiya",
    "email": "_sandhiya@hospital.com",
    "mobile": "+91 9840100126",
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
    "rating": 4.9,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Guruprasad",
    "email": "_guruprasad@hospital.com",
    "mobile": "+91 9840100127",
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
    "rating": 5,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sharmila",
    "email": "_sharmila@hospital.com",
    "mobile": "+91 9840100128",
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
    "rating": 4.7,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
  },
  {
    "name": "Dr. Manikandan",
    "email": "_manikandan@hospital.com",
    "mobile": "+91 9840100129",
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
    "rating": 4.8,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
  },
  {
    "name": "Dr. Swetha N",
    "email": "_swetha_n@hospital.com",
    "mobile": "+91 9840100130",
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
    "rating": 4.9,
    "bio": "Certified Dentist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sudhakar V",
    "email": "_sudhakar_v@hospital.com",
    "mobile": "+91 9840100131",
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
    "rating": 5,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Chennai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Thilagaraj",
    "email": "_thilagaraj@hospital.com",
    "mobile": "+91 9840100132",
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
    "rating": 4.7,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Coimbatore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Subramaniam",
    "email": "_subramaniam@hospital.com",
    "mobile": "+91 9840100133",
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
    "rating": 4.8,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Madurai district and across Tamil Nadu."
  },
  {
    "name": "Dr. Ravichandran",
    "email": "_ravichandran@hospital.com",
    "mobile": "+91 9840100134",
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
    "rating": 4.9,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Salem district and across Tamil Nadu."
  },
  {
    "name": "Dr. Natarajan",
    "email": "_natarajan@hospital.com",
    "mobile": "+91 9840100135",
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
    "rating": 5,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Tiruchirappalli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Venkatachalam",
    "email": "_venkatachalam@hospital.com",
    "mobile": "+91 9840100136",
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
    "rating": 4.7,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Vellore district and across Tamil Nadu."
  },
  {
    "name": "Dr. Alagappan",
    "email": "_alagappan@hospital.com",
    "mobile": "+91 9840100137",
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
    "rating": 4.8,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Tirunelveli district and across Tamil Nadu."
  },
  {
    "name": "Dr. Sadasivam",
    "email": "_sadasivam@hospital.com",
    "mobile": "+91 9840100138",
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
    "rating": 4.9,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Erode district and across Tamil Nadu."
  },
  {
    "name": "Dr. Rengasamy",
    "email": "_rengasamy@hospital.com",
    "mobile": "+91 9840100139",
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
    "rating": 5,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Thanjavur district and across Tamil Nadu."
  },
  {
    "name": "Dr. Kasinathan",
    "email": "_kasinathan@hospital.com",
    "mobile": "+91 9840100140",
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
    "rating": 4.7,
    "bio": "Certified Urologist specialist with extensive clinical experience serving patients in Kanchipuram district and across Tamil Nadu."
  }
];

module.exports = {
  SEED_DOCTORS
};
