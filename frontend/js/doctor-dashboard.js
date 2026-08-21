/**
 * Doctor Dashboard Application Logic
 */

let activeAppointmentForConsultation = null;

const DoctorApp = {
  async init() {
    await this.loadStats();
    await this.loadAppointments();
    await this.loadDoctorProfile();
    await this.loadNotifications();
    this.setupEventListeners();
  },

  async loadStats() {
    try {
      const res = await API.get('/doctors/dashboard/stats');
      if (res && res.data) {
        document.getElementById('statTodayAppts').textContent = res.data.todayAppointments || 0;
        document.getElementById('statPendingRequests').textContent = res.data.pendingRequests || 0;
        document.getElementById('statTotalTreated').textContent = res.data.totalPatientsTreated || 0;
        document.getElementById('statEarnings').textContent = `₹${res.data.estimatedEarnings || 0}`;
      }
    } catch (e) {
      console.error('Error loading doctor stats:', e);
    }
  },

  async loadAppointments() {
    const queueContainer = document.getElementById('todayQueueContainer');
    const allApptsContainer = document.getElementById('allAppointmentsTableBody');
    if (!queueContainer && !allApptsContainer) return;

    try {
      const res = await API.get('/appointments');
      const appts = res.data || [];
      const todayStr = new Date().toISOString().split('T')[0];

      const todayAppts = appts.filter(a => a.appointmentDate === todayStr);

      // Render Today's Queue
      if (queueContainer) {
        if (todayAppts.length === 0) {
          queueContainer.innerHTML = '<div class="text-center py-4 text-muted">No appointments scheduled for today.</div>';
        } else {
          queueContainer.innerHTML = todayAppts.map(a => `
            <div class="card border-0 shadow-sm rounded-4 mb-3 p-3 ${a.status === 'Confirmed' ? 'border-start border-4 border-primary' : ''}">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="d-flex align-items-center gap-2">
                  <span class="badge bg-primary text-white rounded-pill px-3"><i class="fa-solid fa-clock me-1"></i> ${a.timeSlot}</span>
                  <span class="badge-status-${a.status.toLowerCase()}">${a.status}</span>
                </div>
                <div class="fw-bold text-dark">₹${a.consultationFee}</div>
              </div>
              <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                  <h6 class="fw-bold text-dark mb-1">${a.patient?.user?.name || 'Patient'} <span class="text-muted small">(${a.patient?.age || 'N/A'} yrs, ${a.patient?.gender || 'N/A'})</span></h6>
                  <p class="text-secondary small mb-1"><i class="fa-solid fa-phone me-1"></i> ${a.patient?.user?.mobile || 'N/A'} | <i class="fa-solid fa-droplet text-danger me-1"></i> Blood: ${a.patient?.bloodGroup || 'Unknown'}</p>
                  <p class="text-muted small mb-0"><i class="fa-solid fa-note-sticky me-1"></i> <strong>Reason:</strong> ${a.reasonForVisit}</p>
                </div>
                <div class="d-flex gap-2 flex-wrap">
                  ${a.status === 'Pending' ? `
                    <button class="btn btn-success btn-sm rounded-pill px-3" onclick="DoctorApp.updateStatus('${a._id}', 'Confirmed')">
                      <i class="fa-solid fa-check me-1"></i> Accept
                    </button>
                    <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="DoctorApp.updateStatus('${a._id}', 'Rejected')">
                      <i class="fa-solid fa-xmark me-1"></i> Reject
                    </button>
                  ` : ''}
                  ${a.status === 'Confirmed' ? `
                    <button class="btn btn-primary btn-sm rounded-pill px-3" onclick="DoctorApp.openConsultationModal('${a._id}')">
                      <i class="fa-solid fa-stethoscope me-1"></i> Consult & Prescribe
                    </button>
                  ` : ''}
                  ${a.status === 'Completed' ? `
                    <span class="badge bg-success-subtle text-success p-2 rounded-pill"><i class="fa-solid fa-circle-check me-1"></i> Consultation Completed</span>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('');
        }
      }

      // Render Master Appointments Table
      if (allApptsContainer) {
        if (appts.length === 0) {
          allApptsContainer.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">No appointments found</td></tr>';
        } else {
          allApptsContainer.innerHTML = appts.map((a, idx) => `
            <tr>
              <td>${idx + 1}</td>
              <td class="fw-semibold text-dark">${a.patient?.user?.name || 'Patient'}</td>
              <td>${a.appointmentDate}</td>
              <td>${a.timeSlot}</td>
              <td class="small max-w-200 text-truncate">${a.reasonForVisit}</td>
              <td><span class="badge-status-${a.status.toLowerCase()}">${a.status}</span></td>
              <td>
                <div class="dropdown">
                  <button class="btn btn-light btn-sm rounded-pill px-2" data-bs-toggle="dropdown">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end shadow-sm">
                    ${a.status === 'Pending' ? `
                      <li><a class="dropdown-item text-success" href="#" onclick="DoctorApp.updateStatus('${a._id}', 'Confirmed')"><i class="fa-solid fa-check me-2"></i> Accept</a></li>
                      <li><a class="dropdown-item text-danger" href="#" onclick="DoctorApp.updateStatus('${a._id}', 'Rejected')"><i class="fa-solid fa-xmark me-2"></i> Reject</a></li>
                    ` : ''}
                    ${a.status === 'Confirmed' ? `
                      <li><a class="dropdown-item text-primary" href="#" onclick="DoctorApp.openConsultationModal('${a._id}')"><i class="fa-solid fa-file-prescription me-2"></i> Consult & Prescribe</a></li>
                    ` : ''}
                    <li><a class="dropdown-item text-secondary" href="#" onclick="DoctorApp.openRescheduleModal('${a._id}', '${a.appointmentDate}', '${a.timeSlot}')"><i class="fa-solid fa-calendar-days me-2"></i> Reschedule</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          `).join('');
        }
      }
    } catch (e) {
      console.error('Error loading appointments:', e);
    }
  },

  async updateStatus(id, status) {
    try {
      await API.patch(`/appointments/${id}/status`, { status });
      API.toast(`Appointment marked as ${status}`, 'success');
      await this.loadStats();
      await this.loadAppointments();
    } catch (e) {
      // Handled
    }
  },

  async openRescheduleModal(id, currentDate, currentSlot) {
    const newDate = prompt(`Enter new date (YYYY-MM-DD) for rescheduling:`, currentDate);
    if (!newDate) return;
    const newSlot = prompt(`Enter new time slot (e.g., 11:00 AM):`, currentSlot);
    if (!newSlot) return;

    try {
      await API.patch(`/appointments/${id}/status`, {
        status: 'Rescheduled',
        newDate,
        newTimeSlot: newSlot
      });
      API.toast('Appointment rescheduled successfully', 'success');
      await this.loadStats();
      await this.loadAppointments();
    } catch (e) {
      // Handled
    }
  },

  async openConsultationModal(appointmentId) {
    try {
      const res = await API.get('/appointments');
      const appt = (res.data || []).find(a => a._id === appointmentId);
      if (!appt) return;

      activeAppointmentForConsultation = appt;

      document.getElementById('rxPatientName').textContent = appt.patient?.user?.name;
      document.getElementById('rxPatientAgeGender').textContent = `${appt.patient?.age || 'N/A'} yrs / ${appt.patient?.gender || 'N/A'}`;
      document.getElementById('rxPatientBlood').textContent = appt.patient?.bloodGroup || 'Unknown';
      document.getElementById('rxPatientReason').textContent = appt.reasonForVisit;

      // Reset consultation form fields
      document.getElementById('rxDiagnosis').value = '';
      document.getElementById('rxVitalsBp').value = '120/80 mmHg';
      document.getElementById('rxVitalsPulse').value = '72 bpm';
      document.getElementById('rxVitalsTemp').value = '98.6 °F';
      document.getElementById('rxVitalsSpo2').value = '99%';
      document.getElementById('rxDoctorNotes').value = '';
      document.getElementById('rxGeneralAdvice').value = 'Drink plenty of water and rest well.';
      document.getElementById('rxFollowUpDate').value = '';

      // Initialize medicine rows with 1 default row
      const medBody = document.getElementById('rxMedicineRows');
      medBody.innerHTML = '';
      this.addMedicineRow();

      const modal = new bootstrap.Modal(document.getElementById('consultationModal'));
      modal.show();
    } catch (e) {
      console.error(e);
    }
  },

  addMedicineRow() {
    const medBody = document.getElementById('rxMedicineRows');
    if (!medBody) return;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="text" class="form-control form-control-sm med-name" placeholder="e.g. Paracetamol" required></td>
      <td><input type="text" class="form-control form-control-sm med-dosage" placeholder="650mg" required></td>
      <td>
        <select class="form-select form-select-sm med-freq">
          <option value="1-0-1 (Twice Daily)">1-0-1 (Twice Daily)</option>
          <option value="1-0-0 (Morning)">1-0-0 (Morning)</option>
          <option value="0-0-1 (Night)">0-0-1 (Night)</option>
          <option value="1-1-1 (Thrice Daily)">1-1-1 (Thrice Daily)</option>
          <option value="As Needed (SOS)">As Needed (SOS)</option>
        </select>
      </td>
      <td><input type="text" class="form-control form-control-sm med-duration" placeholder="5 Days" value="5 Days"></td>
      <td><input type="text" class="form-control form-control-sm med-instructions" placeholder="After food" value="After food"></td>
      <td class="text-center">
        <button type="button" class="btn btn-outline-danger btn-sm p-1 px-2" onclick="this.closest('tr').remove()">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    medBody.appendChild(row);
  },

  async submitPrescriptionAndRecord() {
    if (!activeAppointmentForConsultation) return;

    const diagnosis = document.getElementById('rxDiagnosis').value;
    if (!diagnosis.trim()) {
      API.toast('Please specify clinical diagnosis', 'warning');
      return;
    }

    const rows = document.querySelectorAll('#rxMedicineRows tr');
    const medicines = [];

    rows.forEach(r => {
      const name = r.querySelector('.med-name')?.value;
      const dosage = r.querySelector('.med-dosage')?.value;
      const freq = r.querySelector('.med-freq')?.value;
      const duration = r.querySelector('.med-duration')?.value;
      const inst = r.querySelector('.med-instructions')?.value;

      if (name && dosage) {
        medicines.push({
          medicineName: name,
          dosage,
          frequency: freq,
          duration,
          instructions: inst
        });
      }
    });

    if (medicines.length === 0) {
      API.toast('Please add at least one medication', 'warning');
      return;
    }

    const vitals = {
      bloodPressure: document.getElementById('rxVitalsBp').value,
      heartRate: document.getElementById('rxVitalsPulse').value,
      temperature: document.getElementById('rxVitalsTemp').value,
      oxygenSaturation: document.getElementById('rxVitalsSpo2').value
    };

    const notes = document.getElementById('rxDoctorNotes').value;
    const advice = document.getElementById('rxGeneralAdvice').value;
    const followUp = document.getElementById('rxFollowUpDate').value;

    try {
      // 1. Create Medical Record
      await API.post('/medical-records', {
        patientId: activeAppointmentForConsultation.patient._id,
        appointmentId: activeAppointmentForConsultation._id,
        diagnosis,
        symptoms: activeAppointmentForConsultation.reasonForVisit,
        vitals,
        doctorNotes: notes,
        followUpDate: followUp
      });

      // 2. Create Digital Prescription (which also completes appointment)
      await API.post('/prescriptions', {
        patientId: activeAppointmentForConsultation.patient._id,
        appointmentId: activeAppointmentForConsultation._id,
        diagnosis,
        medicines,
        generalAdvice: advice
      });

      API.toast('Consultation record and prescription generated successfully!', 'success');
      bootstrap.Modal.getInstance(document.getElementById('consultationModal')).hide();
      await this.loadStats();
      await this.loadAppointments();
    } catch (e) {
      // Handled
    }
  },

  async loadDoctorProfile() {
    try {
      const res = await API.get('/auth/me');
      const doc = res.profile;
      if (doc) {
        const feeInput = document.getElementById('profileFee');
        const bioInput = document.getElementById('profileBio');
        const hospitalInput = document.getElementById('profileHospital');
        const districtInput = document.getElementById('profileDistrict');

        if (feeInput) feeInput.value = doc.consultationFee || 500;
        if (bioInput) bioInput.value = doc.bio || '';
        if (hospitalInput) hospitalInput.value = doc.hospital || '';
        if (districtInput) districtInput.value = doc.district || 'Chennai';
      }
    } catch (e) {
      console.error(e);
    }
  },

  async updateScheduleSettings() {
    const fee = document.getElementById('profileFee').value;
    const bio = document.getElementById('profileBio').value;
    const hospital = document.getElementById('profileHospital').value;
    const district = document.getElementById('profileDistrict').value;

    try {
      await API.put('/doctors/profile', {
        consultationFee: Number(fee),
        bio,
        hospital,
        district
      });
      API.toast('Doctor profile and fees updated successfully!', 'success');
      await this.loadStats();
    } catch (e) {
      // Handled
    }
  },

  async loadNotifications() {
    const list = document.getElementById('notificationsDropdownList');
    if (!list) return;

    try {
      const res = await API.get('/notifications');
      const notifs = res.data || [];

      if (notifs.length === 0) {
        list.innerHTML = '<li class="dropdown-item text-muted small text-center py-2">No notifications</li>';
        return;
      }

      list.innerHTML = notifs.slice(0, 5).map(n => `
        <li class="dropdown-item py-2 border-bottom ${!n.isRead ? 'bg-light' : ''}">
          <div class="d-flex justify-content-between align-items-center">
            <strong class="small text-dark">${n.title}</strong>
            <span class="text-muted" style="font-size: 0.7rem;">${new Date(n.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <p class="mb-0 text-muted small" style="white-space: normal;">${n.message}</p>
        </li>
      `).join('') + `
        <li class="p-2 text-center">
          <button class="btn btn-link btn-sm p-0 text-decoration-none" onclick="DoctorApp.markAllNotifsRead()">Mark all as read</button>
        </li>
      `;
    } catch (e) {
      console.error(e);
    }
  },

  async markAllNotifsRead() {
    try {
      await API.patch('/notifications/read-all');
      await this.loadNotifications();
    } catch (e) {
      // Handled
    }
  },

  setupEventListeners() {
    document.getElementById('btnAddMedRow')?.addEventListener('click', () => this.addMedicineRow());
    document.getElementById('btnSubmitPrescription')?.addEventListener('click', () => this.submitPrescriptionAndRecord());
    document.getElementById('btnSaveSchedule')?.addEventListener('click', () => this.updateScheduleSettings());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DoctorApp.init();
});
