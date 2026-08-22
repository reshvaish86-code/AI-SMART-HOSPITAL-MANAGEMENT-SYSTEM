/**
 * Patient Dashboard Application Logic
 * Enhanced with Live Client Alarm Monitor & Browser Notifications
 */

let selectedDoctorForBooking = null;
let selectedSlotForBooking = null;
let triggeredRemindersCache = new Set(); // To prevent duplicate alerts within same minute

const PatientApp = {
  async init() {
    this.populateDropdowns();
    await this.loadStats();
    await this.loadDoctors();
    await this.loadAppointments();
    await this.loadMedicalRecords();
    await this.loadPrescriptions();
    await this.loadReminders();
    await this.loadNotifications();
    this.setupEventListeners();
    this.initBrowserNotificationPermission();
    this.startClientReminderMonitor();
  },

  initBrowserNotificationPermission() {
    if ('Notification' in window && Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          console.log('✅ [Browser Notification] Permission granted for medicine & appointment reminders.');
        }
      });
    }
  },

  startClientReminderMonitor() {
    // Check every 10 seconds if any medicine reminder or appointment is due
    setInterval(() => {
      this.checkDueRemindersLocally();
    }, 10000);
  },

  async checkDueRemindersLocally() {
    try {
      const now = new Date();
      const currentHour24 = String(now.getHours()).padStart(2, '0');
      const currentMin = String(now.getMinutes()).padStart(2, '0');
      const currentMinuteKey = `${currentHour24}:${currentMin}`;

      if (triggeredRemindersCache.has(currentMinuteKey)) return;

      const res = await API.get('/patients/profile');
      const reminders = res.data?.medicineReminders || [];

      for (const r of reminders) {
        if (!r.isActive || !r.time) continue;

        const targetNorm = this.normalizeTimeStr(r.time);
        if (targetNorm === currentMinuteKey) {
          triggeredRemindersCache.add(currentMinuteKey);
          this.triggerLiveMedicineAlarm(r);
          break;
        }
      }
    } catch (e) {
      // Ignore background check errors
    }
  },

  normalizeTimeStr(tStr) {
    if (!tStr) return '';
    const cleaned = tStr.trim().replace('.', ':');
    const match12 = cleaned.match(/(\d+):?(\d*)\s*(AM|PM)/i);
    if (match12) {
      let h = parseInt(match12[1], 10);
      const m = match12[2] ? parseInt(match12[2], 10) : 0;
      const p = match12[3].toUpperCase();
      if (p === 'PM' && h < 12) h += 12;
      if (p === 'AM' && h === 12) h = 0;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }
    const match24 = cleaned.match(/(\d+):(\d+)/);
    if (match24) {
      return `${String(match24[1]).padStart(2, '0')}:${String(match24[2]).padStart(2, '0')}`;
    }
    return '';
  },

  triggerLiveMedicineAlarm(reminder) {
    // 1. Play Audio Chime
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.6);
    } catch (err) {
      // Audio not permitted
    }

    // 2. Native OS / Browser Push Notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`💊 Medicine Time: ${reminder.medicineName}`, {
        body: `Dosage: ${reminder.dosage || '1 dose'} | Instructions: ${reminder.instructions || 'Take as advised'}`,
        icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png'
      });
    }

    // 3. Prominent Visual Modal/Toast on Screen
    API.toast(`⏰ MEDICINE ALERT: Time to take ${reminder.medicineName} (${reminder.dosage || ''}) - ${reminder.instructions || ''}`, 'warning');

    // Reload notifications
    this.loadStats();
    this.loadNotifications();
  },

  populateDropdowns() {
    const specialtySelect = document.getElementById('filterSpecialty');
    const districtSelect = document.getElementById('filterDistrict');

    if (specialtySelect) {
      specialtySelect.innerHTML = '<option value="All">All Specialties</option>';
      CONFIG.SPECIALIZATIONS.forEach(spec => {
        specialtySelect.innerHTML += `<option value="${spec}">${spec}</option>`;
      });
    }

    if (districtSelect) {
      districtSelect.innerHTML = '<option value="All">All Tamil Nadu Districts</option>';
      CONFIG.TAMIL_NADU_DISTRICTS.forEach(dist => {
        districtSelect.innerHTML += `<option value="${dist}">${dist}</option>`;
      });
    }
  },

  async loadStats() {
    try {
      const res = await API.get('/patients/dashboard/stats');
      if (res && res.data) {
        document.getElementById('statTotalAppts').textContent = res.data.totalAppointments || 0;
        document.getElementById('statUpcomingAppts').textContent = res.data.upcomingAppointments || 0;
        document.getElementById('statPrescriptions').textContent = res.data.totalPrescriptions || 0;
        document.getElementById('statReminders').textContent = res.data.medicineRemindersCount || 0;

        const badge = document.getElementById('notifCountBadge');
        if (badge) {
          badge.textContent = res.data.unreadNotifications || 0;
          badge.style.display = res.data.unreadNotifications > 0 ? 'inline-block' : 'none';
        }
      }
    } catch (e) {
      console.error('Error loading patient stats:', e);
    }
  },

  async loadDoctors() {
    const container = document.getElementById('doctorListContainer');
    if (!container) return;

    const specialty = document.getElementById('filterSpecialty')?.value || 'All';
    const district = document.getElementById('filterDistrict')?.value || 'All';
    const search = document.getElementById('searchDoctorQuery')?.value || '';

    container.innerHTML = '<div class="text-center py-5"><div class="spinner-border text-primary" role="status"></div><p class="text-muted mt-2">Finding doctors...</p></div>';

    try {
      const res = await API.get('/doctors', {
        specialization: specialty,
        district: district,
        search: search
      });

      if (!res.data || res.data.length === 0) {
        container.innerHTML = `
          <div class="col-12 text-center py-5">
            <i class="fa-solid fa-user-doctor text-muted fs-1 mb-3"></i>
            <h5 class="text-dark">No specialists found matching criteria</h5>
            <p class="text-muted small">Try broadening your specialty or Tamil Nadu district filter.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = res.data.map(doc => `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-3 hover-card">
            <div class="d-flex align-items-start gap-3 mb-3">
              <div class="bg-primary-subtle text-primary p-3 rounded-4 fs-3">
                <i class="fa-solid fa-user-doctor"></i>
              </div>
              <div class="flex-grow-1">
                <h5 class="fw-bold mb-1 text-dark">${doc.user?.name || 'Doctor'}</h5>
                <span class="badge bg-info-subtle text-info border border-info-subtle rounded-pill">${doc.specialization}</span>
                <p class="text-muted small mb-0 mt-1"><i class="fa-solid fa-graduation-cap me-1"></i> ${doc.qualification}</p>
              </div>
            </div>
            <div class="bg-light p-2 rounded-3 mb-3 small">
              <div class="d-flex justify-content-between mb-1">
                <span class="text-muted"><i class="fa-solid fa-hospital me-1"></i> Hospital:</span>
                <span class="fw-semibold text-dark text-truncate max-w-150">${doc.hospital}</span>
              </div>
              <div class="d-flex justify-content-between mb-1">
                <span class="text-muted"><i class="fa-solid fa-location-dot me-1 text-danger"></i> District:</span>
                <span class="fw-semibold text-dark">${doc.district}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted"><i class="fa-solid fa-indian-rupee-sign me-1 text-success"></i> Consultation Fee:</span>
                <span class="fw-bold text-success">₹${doc.consultationFee}</span>
              </div>
            </div>
            <p class="text-muted small mb-3 flex-grow-1">${doc.bio || 'Experienced clinical specialist.'}</p>
            <button class="btn btn-primary-custom w-100 rounded-3" onclick="PatientApp.openBookingModal('${doc._id}')">
              <i class="fa-solid fa-calendar-plus me-1"></i> Book Appointment
            </button>
          </div>
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="col-12 text-center text-danger py-4">Failed to load doctor directory.</div>';
    }
  },

  async openBookingModal(doctorId) {
    try {
      const res = await API.get(`/doctors/${doctorId}`);
      if (!res || !res.data) return;

      selectedDoctorForBooking = res.data;
      selectedSlotForBooking = null;

      document.getElementById('modalDocName').textContent = selectedDoctorForBooking.user?.name;
      document.getElementById('modalDocSpecialty').textContent = selectedDoctorForBooking.specialization;
      document.getElementById('modalDocHospital').textContent = `${selectedDoctorForBooking.hospital} (${selectedDoctorForBooking.district})`;
      document.getElementById('modalDocFee').textContent = `₹${selectedDoctorForBooking.consultationFee}`;

      const today = new Date().toISOString().split('T')[0];
      const dateInput = document.getElementById('bookingDateInput');
      dateInput.min = today;
      dateInput.value = today;

      await this.loadDoctorSlots(today);

      const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
      modal.show();
    } catch (e) {
      console.error(e);
    }
  },

  async loadDoctorSlots(date) {
    const slotContainer = document.getElementById('slotChipsContainer');
    if (!slotContainer || !selectedDoctorForBooking) return;

    slotContainer.innerHTML = '<div class="text-muted small py-2"><i class="fa-solid fa-spinner fa-spin me-1"></i> Checking slot availability...</div>';

    try {
      const res = await API.get('/appointments/booked-slots', {
        doctorId: selectedDoctorForBooking._id,
        date: date
      });

      const bookedSlots = res.bookedSlots || [];
      const availableSlots = selectedDoctorForBooking.availableTimeSlots || CONFIG.DEFAULT_TIME_SLOTS || [
        '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
      ];

      slotContainer.innerHTML = availableSlots.map(slot => {
        const isBooked = bookedSlots.includes(slot);
        return `
          <div class="slot-chip ${isBooked ? 'booked' : ''}" 
               data-slot="${slot}" 
               ${!isBooked ? `onclick="PatientApp.selectSlot(this, '${slot}')"` : 'title="Slot Already Booked"'}>
            ${slot} ${isBooked ? '<i class="fa-solid fa-ban ms-1 text-danger"></i>' : ''}
          </div>
        `;
      }).join('');
    } catch (e) {
      slotContainer.innerHTML = '<span class="text-danger small">Error checking slots</span>';
    }
  },

  selectSlot(element, slot) {
    document.querySelectorAll('.slot-chip').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
    selectedSlotForBooking = slot;
  },

  async confirmBooking() {
    const date = document.getElementById('bookingDateInput').value;
    const reason = document.getElementById('bookingReasonInput').value;

    if (!selectedDoctorForBooking || !date || !selectedSlotForBooking || !reason.trim()) {
      API.toast('Please select appointment date, time slot, and reason for consultation', 'warning');
      return;
    }

    try {
      const res = await API.post('/appointments', {
        doctorId: selectedDoctorForBooking._id,
        appointmentDate: date,
        timeSlot: selectedSlotForBooking,
        reasonForVisit: reason
      });

      if (res && res.status === 'success') {
        API.toast('Appointment request submitted successfully! Confirmation email dispatched.', 'success');
        bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
        document.getElementById('bookingReasonInput').value = '';
        await this.loadStats();
        await this.loadAppointments();
      }
    } catch (e) {
      // Handled
    }
  },

  async loadAppointments() {
    const container = document.getElementById('myAppointmentsContainer');
    if (!container) return;

    try {
      const res = await API.get('/appointments');
      const appts = res.data || [];

      if (appts.length === 0) {
        container.innerHTML = `
          <div class="text-center py-5 bg-white rounded-4 border">
            <i class="fa-solid fa-calendar-xmark text-muted fs-1 mb-2"></i>
            <h6 class="text-dark">No appointments found</h6>
            <p class="text-muted small">Book your first consultation with top Tamil Nadu specialists above.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = appts.map(a => `
        <div class="card border-0 shadow-sm rounded-4 mb-3 p-3">
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2 pb-2 border-bottom">
            <div>
              <span class="badge-status-${a.status.toLowerCase()}">${a.status}</span>
              <span class="text-muted small ms-2"><i class="fa-regular fa-clock me-1"></i> Booked on ${new Date(a.createdAt).toLocaleDateString()}</span>
            </div>
            <div class="fw-bold text-primary">₹${a.consultationFee}</div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6">
              <h6 class="fw-bold text-dark mb-1">Dr. ${a.doctor?.user?.name || 'Doctor'}</h6>
              <p class="text-muted small mb-1"><i class="fa-solid fa-stethoscope me-1 text-primary"></i> ${a.specialist} | ${a.hospital}</p>
              <p class="text-secondary small mb-0"><i class="fa-solid fa-note-sticky me-1"></i> <strong>Reason:</strong> ${a.reasonForVisit}</p>
            </div>
            <div class="col-md-4 my-2 my-md-0">
              <div class="bg-light p-2 rounded-3 text-center">
                <div class="fw-bold text-dark"><i class="fa-solid fa-calendar-day me-1 text-primary"></i> ${a.appointmentDate}</div>
                <div class="text-muted small"><i class="fa-solid fa-clock me-1 text-warning"></i> ${a.timeSlot}</div>
              </div>
            </div>
            <div class="col-md-2 text-md-end">
              ${a.status === 'Pending' || a.status === 'Confirmed' ? `
                <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="PatientApp.cancelAppointment('${a._id}')">
                  <i class="fa-solid fa-xmark me-1"></i> Cancel
                </button>
              ` : `
                <span class="text-muted small">No actions</span>
              `}
            </div>
          </div>
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="text-danger py-3">Error loading appointments</div>';
    }
  },

  async cancelAppointment(id) {
    if (!confirm('Are you sure you want to cancel this appointment?')) return;
    try {
      await API.patch(`/appointments/${id}/status`, { status: 'Cancelled' });
      API.toast('Appointment cancelled', 'info');
      await this.loadStats();
      await this.loadAppointments();
    } catch (e) {
      // Handled
    }
  },

  async loadMedicalRecords() {
    const container = document.getElementById('medicalRecordsContainer');
    if (!container) return;

    try {
      const res = await API.get('/medical-records');
      const records = res.data || [];

      if (records.length === 0) {
        container.innerHTML = '<div class="text-center py-4 text-muted">No clinical records on file yet.</div>';
        return;
      }

      container.innerHTML = records.map(r => `
        <div class="card border-0 shadow-sm rounded-4 p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <div>
              <h6 class="fw-bold text-dark mb-0">${r.diagnosis}</h6>
              <span class="text-muted small">Consultant: Dr. ${r.doctor?.user?.name || 'Physician'} (${new Date(r.recordDate).toLocaleDateString()})</span>
            </div>
            <span class="badge bg-primary-subtle text-primary rounded-pill">Clinical Consultation</span>
          </div>
          <div class="row g-2 mb-2 bg-light p-2 rounded-3 small">
            <div class="col-6 col-md-3"><strong>BP:</strong> ${r.vitals?.bloodPressure || 'N/A'}</div>
            <div class="col-6 col-md-3"><strong>Pulse:</strong> ${r.vitals?.heartRate || 'N/A'}</div>
            <div class="col-6 col-md-3"><strong>Temp:</strong> ${r.vitals?.temperature || 'N/A'}</div>
            <div class="col-6 col-md-3"><strong>SpO2:</strong> ${r.vitals?.oxygenSaturation || 'N/A'}</div>
          </div>
          <p class="small text-secondary mb-1"><strong>Doctor Notes:</strong> ${r.doctorNotes || 'No specific clinical remarks.'}</p>
          ${r.followUpDate ? `<p class="small text-primary mb-0"><i class="fa-solid fa-calendar-check me-1"></i> Recommended Follow-up: ${r.followUpDate}</p>` : ''}
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="text-danger py-3">Error loading records</div>';
    }
  },

  async loadPrescriptions() {
    const container = document.getElementById('prescriptionsContainer');
    if (!container) return;

    try {
      const res = await API.get('/prescriptions');
      const prescriptions = res.data || [];

      if (prescriptions.length === 0) {
        container.innerHTML = '<div class="text-center py-4 text-muted">No digital prescriptions issued yet.</div>';
        return;
      }

      container.innerHTML = prescriptions.map(p => `
        <div class="card border-0 shadow-sm rounded-4 p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <div>
              <h6 class="fw-bold text-dark mb-0"><i class="fa-solid fa-file-prescription text-primary me-1"></i> Rx: ${p.diagnosis}</h6>
              <span class="text-muted small">Prescribed by Dr. ${p.doctor?.user?.name || 'Doctor'} on ${new Date(p.createdAt).toLocaleDateString()}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm rounded-pill" onclick="PatientApp.viewPrescriptionModal('${p._id}')">
              <i class="fa-solid fa-print me-1"></i> View / Print
            </button>
          </div>
          <div class="table-responsive small">
            <table class="table table-sm table-bordered mb-2">
              <thead class="table-light">
                <tr>
                  <th>Medicine</th>
                  <th>Dosage</th>
                  <th>Frequency</th>
                  <th>Duration</th>
                  <th>Instructions</th>
                </tr>
              </thead>
              <tbody>
                ${p.medicines.map(m => `
                  <tr>
                    <td class="fw-semibold text-dark">${m.medicineName}</td>
                    <td>${m.dosage}</td>
                    <td>${m.frequency}</td>
                    <td>${m.duration}</td>
                    <td>${m.instructions}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <p class="small text-muted mb-0"><strong>Advice:</strong> ${p.generalAdvice}</p>
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="text-danger py-3">Error loading prescriptions</div>';
    }
  },

  async viewPrescriptionModal(id) {
    try {
      const res = await API.get(`/prescriptions/${id}`);
      const p = res.data;
      if (!p) return;

      const modalBody = document.getElementById('prescriptionModalBody');
      modalBody.innerHTML = `
        <div class="prescription-doc">
          <div class="d-flex justify-content-between align-items-start border-bottom pb-3 mb-3">
            <div>
              <h4 class="fw-bold text-primary mb-1">AI SMART HOSPITAL</h4>
              <p class="text-muted small mb-0">Unified Healthcare & Clinical Excellence System</p>
            </div>
            <div class="text-end">
              <h6 class="fw-bold mb-0">Dr. ${p.doctor?.user?.name || 'Physician'}</h6>
              <p class="text-muted small mb-0">${p.doctor?.specialization || 'Specialist'}</p>
              <p class="text-muted small mb-0">${p.doctor?.hospital || 'Hospital'}, ${p.doctor?.district || 'Tamil Nadu'}</p>
            </div>
          </div>
          <div class="row bg-light p-2 rounded-3 small mb-3">
            <div class="col-6"><strong>Patient Name:</strong> ${p.patient?.user?.name || 'Patient'}</div>
            <div class="col-3"><strong>Age:</strong> ${p.patient?.age || 'N/A'}</div>
            <div class="col-3 text-end"><strong>Date:</strong> ${new Date(p.createdAt).toLocaleDateString()}</div>
          </div>
          <div class="mb-3">
            <strong>Clinical Diagnosis:</strong> <span class="text-dark fw-semibold">${p.diagnosis}</span>
          </div>
          <div class="rx-symbol mb-2">℞</div>
          <table class="table table-bordered small mb-3">
            <thead class="table-light">
              <tr>
                <th>#</th>
                <th>Medicine Name</th>
                <th>Dosage</th>
                <th>Timing & Frequency</th>
                <th>Duration</th>
                <th>Instructions</th>
              </tr>
            </thead>
            <tbody>
              ${p.medicines.map((m, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td class="fw-bold">${m.medicineName}</td>
                  <td>${m.dosage}</td>
                  <td>${m.frequency}</td>
                  <td>${m.duration}</td>
                  <td>${m.instructions}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="small mb-3">
            <p class="mb-1"><strong>General Advice:</strong> ${p.generalAdvice}</p>
            ${p.dietaryRestrictions ? `<p class="mb-1"><strong>Dietary Restrictions:</strong> ${p.dietaryRestrictions}</p>` : ''}
          </div>
          <div class="d-flex justify-content-between align-items-center pt-3 border-top small text-muted">
            <div><i class="fa-solid fa-shield-halved text-success me-1"></i> Digitally Signed Electronic Prescription</div>
            <div class="text-end fw-bold text-dark">Authorized Medical Practitioner</div>
          </div>
        </div>
      `;

      const modal = new bootstrap.Modal(document.getElementById('prescriptionDetailModal'));
      modal.show();
    } catch (e) {
      console.error(e);
    }
  },

  async loadReminders() {
    const container = document.getElementById('medicineRemindersContainer');
    const overviewContainer = document.getElementById('medicineRemindersOverview');
    if (!container) return;

    try {
      const res = await API.get('/patients/profile');
      const reminders = res.data?.medicineReminders || [];

      if (reminders.length === 0) {
        container.innerHTML = '<div class="text-muted small py-3 text-center">No medicine reminders set.</div>';
        if (overviewContainer) overviewContainer.innerHTML = '<p class="text-muted small mb-0">No active medicine reminders.</p>';
        return;
      }

      container.innerHTML = reminders.map(r => `
        <div class="d-flex justify-content-between align-items-center bg-light p-3 rounded-4 mb-2 shadow-sm">
          <div>
            <span class="fw-bold text-dark fs-6"><i class="fa-solid fa-pills text-warning me-2"></i> ${r.medicineName}</span>
            <span class="badge bg-primary-subtle text-primary ms-2"><i class="fa-solid fa-clock me-1"></i> ${r.time}</span>
            <div class="text-secondary small mt-1"><strong>Dosage:</strong> ${r.dosage || '1 dose'} • ${r.frequency || 'Daily'} • <em>${r.instructions || 'Take as advised'}</em></div>
          </div>
          <button class="btn btn-outline-danger btn-sm rounded-circle p-2" title="Delete Reminder" onclick="PatientApp.deleteReminder('${r._id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `).join('');

      if (overviewContainer) {
        overviewContainer.innerHTML = reminders.slice(0, 3).map(r => `
          <div class="d-flex justify-content-between align-items-center border-bottom py-2 small">
            <div>
              <strong class="text-dark">${r.medicineName}</strong>
              <div class="text-muted" style="font-size: 0.75rem;">${r.dosage} • ${r.instructions}</div>
            </div>
            <span class="badge bg-warning text-dark"><i class="fa-regular fa-clock me-1"></i> ${r.time}</span>
          </div>
        `).join('');
      }
    } catch (e) {
      container.innerHTML = '<div class="text-danger small">Error loading reminders</div>';
    }
  },

  async addReminder() {
    const name = document.getElementById('remMedName').value;
    const dosage = document.getElementById('remMedDosage').value;
    const time = document.getElementById('remMedTime').value;
    const freq = document.getElementById('remMedFreq').value;
    const inst = document.getElementById('remMedInst').value;

    if (!name || !time) {
      API.toast('Please enter medicine name and time', 'warning');
      return;
    }

    try {
      await API.post('/patients/reminders', {
        medicineName: name,
        dosage: dosage || '1 Tab',
        time: time,
        frequency: freq || 'Daily',
        instructions: inst || 'After food'
      });
      API.toast(`Medicine reminder set for ${time}! You will receive live alerts.`, 'success');
      document.getElementById('remMedName').value = '';
      document.getElementById('remMedTime').value = '';
      await this.loadStats();
      await this.loadReminders();
    } catch (e) {
      // Handled
    }
  },

  async deleteReminder(id) {
    try {
      await API.delete(`/patients/reminders/${id}`);
      API.toast('Reminder removed', 'info');
      await this.loadStats();
      await this.loadReminders();
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

      list.innerHTML = notifs.slice(0, 8).map(n => `
        <li class="dropdown-item py-2 border-bottom ${!n.isRead ? 'bg-light fw-semibold' : ''}">
          <div class="d-flex justify-content-between align-items-center">
            <strong class="small text-dark">${n.title}</strong>
            <span class="text-muted" style="font-size: 0.7rem;">${new Date(n.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
          <p class="mb-0 text-muted small" style="white-space: normal;">${n.message}</p>
        </li>
      `).join('') + `
        <li class="p-2 text-center">
          <button class="btn btn-link btn-sm p-0 text-decoration-none" onclick="PatientApp.markAllNotifsRead()">Mark all as read</button>
        </li>
      `;
    } catch (e) {
      console.error('Notif error:', e);
    }
  },

  async markAllNotifsRead() {
    try {
      await API.patch('/notifications/read-all');
      await this.loadStats();
      await this.loadNotifications();
    } catch (e) {
      // Handled
    }
  },

  setupEventListeners() {
    document.getElementById('btnFilterDoctors')?.addEventListener('click', () => this.loadDoctors());
    document.getElementById('btnConfirmBooking')?.addEventListener('click', () => this.confirmBooking());
    document.getElementById('bookingDateInput')?.addEventListener('change', (e) => this.loadDoctorSlots(e.target.value));
    document.getElementById('btnAddReminder')?.addEventListener('click', () => this.addReminder());

    document.getElementById('btnRunAITriage')?.addEventListener('click', async () => {
      const symptoms = document.getElementById('aiTriageInput').value;
      const resultBox = document.getElementById('aiTriageResultBox');
      if (!symptoms.trim()) {
        API.toast('Please describe symptoms first', 'warning');
        return;
      }
      resultBox.innerHTML = '<div class="text-primary small py-3"><i class="fa-solid fa-spinner fa-spin me-1"></i> Analyzing clinical symptoms & finding appropriate specialist...</div>';
      resultBox.classList.remove('d-none');
      const data = await AIAssistant.triageSymptoms(symptoms);
      if (data) {
        resultBox.innerHTML = `
          <div class="alert alert-info rounded-3 p-3 mb-2">
            <h6 class="fw-bold mb-1"><i class="fa-solid fa-user-doctor me-1"></i> Recommended Specialist: <span class="text-primary">${data.recommendedSpecialist}</span></h6>
            <div class="badge bg-${data.urgencyLevel === 'Emergency' ? 'danger' : (data.urgencyLevel === 'High' ? 'warning' : 'success')} mb-2">Urgency: ${data.urgencyLevel}</div>
            <p class="small mb-2">${data.clinicalSummary}</p>
            <strong class="small d-block mb-1">Recommended Home Guidance:</strong>
            <ul class="small mb-2 ps-3">
              ${data.homeCareAdvice.map(a => `<li>${a}</li>`).join('')}
            </ul>
            <div class="disclaimer-card p-2 small mt-2">
              <i class="fa-solid fa-triangle-exclamation me-1"></i> ${data.disclaimer}
            </div>
          </div>
          <button class="btn btn-primary-custom btn-sm rounded-pill" onclick="PatientApp.filterBySuggestedSpecialist('${data.recommendedSpecialist}')">
            <i class="fa-solid fa-magnifying-glass me-1"></i> Find ${data.recommendedSpecialist} Doctors in Tamil Nadu
          </button>
        `;
      }
    });
  },

  filterBySuggestedSpecialist(specialty) {
    const sel = document.getElementById('filterSpecialty');
    if (sel) {
      sel.value = specialty;
      this.loadDoctors();
      document.getElementById('specialists-tab')?.click();
      API.toast(`Filtered doctors for ${specialty}`, 'info');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  PatientApp.init();
});
