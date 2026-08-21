# AI SMART HOSPITAL MANAGEMENT SYSTEM

A full-stack, enterprise-grade Hospital Management System built with **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, **Bootstrap 5.3**, **Font Awesome**, and **Vanilla JavaScript**.

---

## 🌟 Key Features

- **Multi-Role Access Control**: Distinct portals and permissions for **Patients**, **Doctors**, and **Administrators**.
- **Specialist & Location Lookup**: District-level search across Tamil Nadu (Chennai, Coimbatore, Madurai, Salem, etc.) covering 14 medical specialties.
- **Smart Appointment Engine**: Collision-prevention slot booking, past-date protections, and dynamic status lifecycle (`Pending`, `Confirmed`, `Rejected`, `Rescheduled`, `Completed`, `Cancelled`).
- **Digital Prescriptions & Records**: Consultation notes, structured medication management (dosage, frequency, duration, instructions), and history tracking.
- **AI Health Assistant**: Intelligent clinical triage assistant with modular AI provider support (Gemini/OpenAI) and deterministic fallback engine.
- **In-App Notifications**: Alerts, medicine reminders, and appointment status notifications.

---

## 📁 Project Directory Structure

```
AI-SMART-HOSPITAL-MANAGEMENT-SYSTEM/
├── .gitignore
├── README.md
├── backend/
│   ├── .env.example
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       └── utils/
└── frontend/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    ├── pages/
    │   ├── patient/
    │   ├── doctor/
    │   └── admin/
    └── assets/
```

---

## 🚀 Stage 1 Quick Start & Verification

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (`node -v`)
- **MongoDB**: Local MongoDB community server or MongoDB Atlas connection string

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment Variables
Verify or update `backend/.env` with your MongoDB Atlas credentials:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ai_smart_hospital?retryWrites=true&w=majority
JWT_SECRET=dev_jwt_secret_hospital_management_system_secure_key_2026
JWT_EXPIRE=7d
AI_API_KEY=your_gemini_api_key_here
AI_PROVIDER=gemini
CORS_ORIGIN=*
```

### 4. Start Development Server
```bash
npm run dev
# or
npm start
```

### 5. Verify Health Endpoint
Visit [http://localhost:5000/api/health](http://localhost:5000/api/health) in your browser or run:
```bash
curl http://localhost:5000/api/health
```
Expected response:
```json
{
  "status": "success",
  "service": "AI Smart Hospital Management System Backend API",
  "stage": "Stage 1: Architecture & Initial Environment Setup"
}
```
