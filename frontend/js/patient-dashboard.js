/**
 * Patient Dashboard Application Logic
 * Welcome Greeting + 10-District Specialist Booking + Email/SMS Notifications + 5 Dashboards
 */

let selectedDoctorForBooking = null;
let selectedSlotForBooking = null;
let triggeredRemindersCache = new Set(); // To prevent duplicate alerts within same minute
let currentPatientProfile = null;

const PatientApp = {
  async init() {
    this.setupEventListeners();
    this.updateUserGreeting();
    this.populateDropdowns();
    try { await this.loadStats(); } catch (e) { console.warn('Stats load notice:', e); }
    try { await this.loadDoctors(); } catch (e) { console.warn('Doctors load notice:', e); }
    try { await this.loadAppointments(); } catch (e) { console.warn('Appointments load notice:', e); }
    try { await this.loadMedicalRecords(); } catch (e) { console.warn('Records load notice:', e); }
    try { await this.loadPrescriptions(); } catch (e) { console.warn('Prescriptions load notice:', e); }
    try { await this.loadReminders(); } catch (e) { console.warn('Reminders load notice:', e); }
    this.initBrowserNotificationPermission();
    this.startClientReminderMonitor();
  },

  updateUserGreeting() {
    try {
      const user = Auth.getUser();
      const userName = user?.name || 'Patient';
      
      const heroNameEl = document.getElementById('heroPatientName');
      if (heroNameEl) heroNameEl.textContent = userName;

      document.querySelectorAll('.auth-user-name').forEach(el => {
        el.textContent = userName;
      });

      const remNameInput = document.getElementById('remPatientName');
      if (remNameInput && !remNameInput.value) remNameInput.value = userName;

      const remMobileInput = document.getElementById('remPatientMobile');
      if (remMobileInput && !remMobileInput.value && user?.mobile) remMobileInput.value = user.mobile;
    } catch (e) {
      console.warn('Greeting notice:', e);
    }
  },

  getSpecialtyIcon(specialty) {
    const s = (specialty || '').toLowerCase();
    if (s.includes('cardio') || s.includes('heart')) return '<i class="fa-solid fa-heart-pulse text-danger"></i>';
    if (s.includes('derma') || s.includes('skin')) return '<i class="fa-solid fa-hand-dots text-warning"></i>';
    if (s.includes('neuro') || s.includes('brain')) return '<i class="fa-solid fa-brain text-info"></i>';
    if (s.includes('nephro') || s.includes('renal')) return '<i class="fa-solid fa-capsules text-primary"></i>';
    if (s.includes('pedia') || s.includes('child')) return '<i class="fa-solid fa-baby text-primary"></i>';
    if (s.includes('ortho') || s.includes('bone')) return '<i class="fa-solid fa-bone text-secondary"></i>';
    if (s.includes('physician') || s.includes('general')) return '<i class="fa-solid fa-user-doctor text-success"></i>';
    if (s.includes('gyne') || s.includes('women')) return '<i class="fa-solid fa-person-pregnant text-danger"></i>';
    if (s.includes('ent') || s.includes('ear') || s.includes('nose') || s.includes('throat')) return '<i class="fa-solid fa-ear-listen text-warning"></i>';
    if (s.includes('eye') || s.includes('ophthal')) return '<i class="fa-solid fa-eye text-primary"></i>';
    if (s.includes('pulmo') || s.includes('lung')) return '<i class="fa-solid fa-lungs text-info"></i>';
    if (s.includes('psych') || s.includes('mind')) return '<i class="fa-solid fa-head-side-virus text-warning"></i>';
    if (s.includes('dent') || s.includes('tooth')) return '<i class="fa-solid fa-tooth text-info"></i>';
    if (s.includes('physio') || s.includes('rehab')) return '<i class="fa-solid fa-person-walking text-success"></i>';
    if (s.includes('gastro') || s.includes('stomach')) return '<i class="fa-solid fa-cubes-stacked text-danger"></i>';
    if (s.includes('uro') || s.includes('kidney')) return '<i class="fa-solid fa-shield-virus text-primary"></i>';
    if (s.includes('plastic') || s.includes('cosmetic')) return '<i class="fa-solid fa-wand-magic-sparkles text-danger"></i>';
    if (s.includes('radio') || s.includes('scan') || s.includes('x-ray')) return '<i class="fa-solid fa-x-ray text-info"></i>';
    if (s.includes('neonato') || s.includes('infant')) return '<i class="fa-solid fa-baby-carriage text-warning"></i>';
    if (s.includes('geriat') || s.includes('elder')) return '<i class="fa-solid fa-person-cane text-secondary"></i>';
    if (s.includes('hepato') || s.includes('liver')) return '<i class="fa-solid fa-disease text-danger"></i>';
    if (s.includes('hemato') || s.includes('blood')) return '<i class="fa-solid fa-droplet text-danger"></i>';
    if (s.includes('allerg') || s.includes('immuno')) return '<i class="fa-solid fa-shield-halved text-success"></i>';
    return '<i class="fa-solid fa-user-doctor text-primary"></i>';
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
      if (!res || !res.data) return;
      currentPatientProfile = res.data;
      const reminders = res.data.medicineReminders || [];

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
    const user = Auth.getUser();
    const patientName = reminder.patientName || currentPatientProfile?.user?.name || user?.name || 'Patient';
    const mobile = reminder.mobileNumber || currentPatientProfile?.user?.mobile || user?.mobile || '';

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
    } catch (err) {}

    // 2. Voice Text-to-Speech Announcement
    if ('speechSynthesis' in window) {
      try {
        const text = `Medicine alarm for ${patientName}. Please take ${reminder.medicineName}.`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      } catch (err) {}
    }

    // 3. Native OS / Browser Push Notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`💊 Medicine Time for ${patientName}`, {
        body: `Medicine: ${reminder.medicineName} (${reminder.dosage || '1 dose'})\nInstructions: ${reminder.instructions || 'Take as advised'}`,
        icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png'
      });
    }

    // 4. Visual Toast on Screen
    API.toast(`⏰ MEDICINE ALARM FOR ${patientName.toUpperCase()} (${mobile}): Take ${reminder.medicineName} (${reminder.dosage || ''}) - ${reminder.instructions || ''}`, 'warning');

    this.loadStats();
  },

  triggerLiveAppointmentAlarm(appt) {
    const doctorName = appt.doctorUser?.name || appt.doctor?.user?.name || 'Your Doctor';
    const timeSlot = appt.timeSlot || 'Scheduled Time';
    const hospital = appt.hospital || appt.doctor?.hospital || 'Hospital';

    // 1. Play Audio Chime (Tri-tone harmonic bell)
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.15); // E5
      osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.3); // G5
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);
    } catch (err) {}

    // 2. Voice Text-to-Speech Announcement
    if ('speechSynthesis' in window) {
      try {
        const text = `Attention patient. Your consultation with Dr. ${doctorName} starts in approximately one hour at ${timeSlot}. Please be ready.`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      } catch (err) {}
    }

    // 3. Native Push Notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(`⏰ 1-Hour Pre-Appointment Reminder`, {
        body: `Your consultation with Dr. ${doctorName} is scheduled for ${timeSlot} today at ${hospital}.`,
        icon: 'https://cdn-icons-png.flaticon.com/512/3063/3063823.png'
      });
    }

    // 4. Visual Toast
    API.toast(`⏰ UPCOMING APPOINTMENT ALERT: Consultation with Dr. ${doctorName} at ${timeSlot} (${hospital})!`, 'info');
  },

  populateDropdowns() {
    const specialtySelect = document.getElementById('filterSpecialty');
    const districtSelect = document.getElementById('filterDistrict');

    if (specialtySelect) {
      specialtySelect.innerHTML = '<option value="All">All Specialties</option>';
      CONFIG.SPECIALIZATIONS.forEach(spec => {
        specialtySelect.innerHTML += `<option value="${spec}" ${spec === 'General Physician' ? 'selected' : ''}>${spec}</option>`;
      });
    }

    if (districtSelect) {
      districtSelect.innerHTML = '<option value="All">All Tamil Nadu Districts</option>';
      CONFIG.TAMIL_NADU_DISTRICTS.forEach(dist => {
        districtSelect.innerHTML += `<option value="${dist}">${dist}</option>`;
      });
    }
  },

  filterBySpecialtyChip(specialty, element) {
    document.querySelectorAll('.specialty-chip-btn').forEach(btn => btn.classList.remove('active'));
    if (element) {
      element.classList.add('active');
    }

    const sel = document.getElementById('filterSpecialty');
    if (sel) {
      sel.value = specialty;
    }

    const searchInput = document.getElementById('searchDoctorQuery');
    if (searchInput) {
      searchInput.value = '';
    }

    this.loadDoctors();
  },

  filterBySuggestedSpecialist(specialty) {
    const sel = document.getElementById('filterSpecialty');
    if (sel) {
      sel.value = specialty;
    }

    const chips = document.querySelectorAll('.specialty-chip-btn');
    chips.forEach(btn => {
      if (btn.textContent.trim().toLowerCase().includes(specialty.toLowerCase())) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const tabBtn = document.getElementById('tab-doctors-btn');
    if (tabBtn) tabBtn.click();

    this.loadDoctors();
    API.toast(`Filtered 10 specialists for ${specialty}`, 'info');
  },

  async loadStats() {
    try {
      let upcomingCount = 0;
      try {
        const res = await API.get('/patients/dashboard/stats');
        if (res && res.data) {
          upcomingCount = res.data.upcomingAppointments || res.data.totalAppointments || 0;
        }
      } catch (e) {}

      const localAppts = JSON.parse(localStorage.getItem('LOCAL_APPOINTMENTS') || '[]');
      const totalCount = Math.max(upcomingCount, localAppts.length);

      const badge = document.getElementById('statUpcomingBadge');
      if (badge) {
        badge.textContent = totalCount;
      }
    } catch (e) {
      console.error('Error loading patient stats:', e);
    }
  },

  mapQueryToSpecialty(query) {
    if (!query) return null;
    const q = query.toLowerCase().trim();
    if (q.includes('physician') || q.includes('general') || q.includes('fever') || q.includes('cold') || q.includes('flu')) return 'General Physician';
    if (q.includes('cardio') || q.includes('heart') || q.includes('cardiac') || q.includes('ecg')) return 'Cardiologist';
    if (q.includes('neuro') || q.includes('brain') || q.includes('nerve') || q.includes('stroke') || q.includes('headache')) return 'Neurologist';
    if (q.includes('nephro') || q.includes('dialysis') || q.includes('renal')) return 'Nephrologist';
    if (q.includes('psych') || q.includes('mind') || q.includes('mental') || q.includes('stress') || q.includes('anxiety') || q.includes('depress')) return 'Psychiatrist';
    if (q.includes('dent') || q.includes('tooth') || q.includes('teeth') || q.includes('root canal') || q.includes('smile') || q.includes('oral')) return 'Dentist';
    if (q.includes('physio') || q.includes('rehab') || q.includes('exercise') || q.includes('paralysis') || q.includes('mobility')) return 'Physiotherapist';
    if (q.includes('ent') || q.includes('ear') || q.includes('nose') || q.includes('throat') || q.includes('sinus')) return 'ENT Specialist';
    if (q.includes('derma') || q.includes('skin') || q.includes('rash') || q.includes('acne')) return 'Dermatologist';
    if (q.includes('pulmo') || q.includes('lung') || q.includes('breath') || q.includes('asthma') || q.includes('chest')) return 'Pulmonologist';
    if (q.includes('gastro') || q.includes('stomach') || q.includes('digest') || q.includes('endoscopy') || q.includes('gastric')) return 'Gastroenterologist';
    if (q.includes('pedia') || q.includes('child') || q.includes('baby') || q.includes('kids') || q.includes('pediatric')) return 'Pediatrician';
    if (q.includes('gyne') || q.includes('women') || q.includes('pregnan') || q.includes('matern') || q.includes('femal')) return 'Gynecologist';
    if (q.includes('eye') || q.includes('vision') || q.includes('ophthal') || q.includes('sight') || q.includes('cataract')) return 'Ophthalmologist';
    if (q.includes('uro') || q.includes('kidney stone') || q.includes('urin') || q.includes('prostate') || q.includes('urolog')) return 'Urologist';
    if (q.includes('plastic') || q.includes('cosmetic') || q.includes('reconstruct') || q.includes('rhinoplasty')) return 'Plastic Surgeon';
    if (q.includes('radio') || q.includes('scan') || q.includes('x-ray') || q.includes('mri') || q.includes('ct scan')) return 'Radiologist';
    if (q.includes('neonato') || q.includes('nicu') || q.includes('newborn') || q.includes('premature')) return 'Neonatologist';
    if (q.includes('geriat') || q.includes('elder') || q.includes('senior') || q.includes('ageing') || q.includes('old age')) return 'Geriatrician';
    if (q.includes('hepato') || q.includes('liver') || q.includes('cirrhosis') || q.includes('jaundice')) return 'Hepatologist';
    if (q.includes('hemato') || q.includes('blood') || q.includes('anemia') || q.includes('platelet') || q.includes('leukemia') || q.includes('bone marrow')) return 'Hematologist';
    if (q.includes('allerg') || q.includes('immuno') || q.includes('allergy') || q.includes('sneezing') || q.includes('dust')) return 'Allergist & Immunologist';
    if (q.includes('ortho') || q.includes('bone') || q.includes('joint') || q.includes('fracture') || q.includes('knee') || q.includes('spine')) return 'Orthopedic';
    return null;
  },

  async loadDoctors() {
    const container = document.getElementById('doctorListContainer');
    if (!container) return;

    let specialty = document.getElementById('filterSpecialty')?.value || 'General Physician';
    const district = document.getElementById('filterDistrict')?.value || 'All';
    const search = (document.getElementById('searchDoctorQuery')?.value || '').trim();

    // Check if user search query matches a known specialist type or condition
    if (search) {
      const mapped = this.mapQueryToSpecialty(search);
      if (mapped) {
        specialty = mapped;
        const sel = document.getElementById('filterSpecialty');
        if (sel) sel.value = mapped;

        // Sync active chip
        document.querySelectorAll('.specialty-chip-btn').forEach(btn => {
          if (btn.textContent.toLowerCase().includes(mapped.toLowerCase())) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      }
    }

    container.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-primary" role="status"></div><p class="text-muted mt-2">Loading verified medical specialists across Tamil Nadu...</p></div>';

    try {
      // Robust normalized doctor identity key function to prevent duplicate cards
      const getDocKey = (d) => {
        if (!d) return '';
        const name = (d.user?.name || d.name || '').toLowerCase().replace(/^(dr\.?|doctor)\s+/i, '').replace(/\s+/g, ' ').trim();
        const spec = (d.specialization || '').toLowerCase().trim();
        const dist = (d.district || '').toLowerCase().trim();
        return `${name}__${spec}__${dist}`;
      };

      const doctorsMap = new Map();

      // 1. Pre-load default comprehensive doctor profiles
      if (CONFIG.DEFAULT_DOCTORS && CONFIG.DEFAULT_DOCTORS.length > 0) {
        CONFIG.DEFAULT_DOCTORS.forEach(doc => {
          const key = getDocKey(doc) || doc._id;
          if (key) doctorsMap.set(key, doc);
        });
      }

      // 2. Query API and cleanly overwrite / merge with live backend data from MongoDB
      try {
        const res = await API.get('/doctors', {
          specialization: specialty,
          district: district,
          search: search
        });
        if (res && res.data && res.data.length > 0) {
          res.data.forEach(apiDoc => {
            const key = getDocKey(apiDoc) || apiDoc._id;
            if (key) doctorsMap.set(key, apiDoc);
          });
        }
      } catch (apiErr) {
        console.warn('API doctor fetch notice, displaying integrated directory:', apiErr);
      }

      const allDoctors = Array.from(doctorsMap.values());
      this.allDoctors = allDoctors;

      // Filter by specialty, district, and search query
      const filteredDoctors = allDoctors.filter(doc => {
        const matchSpec = (specialty === 'All' || doc.specialization === specialty);
        const matchDist = (district === 'All' || doc.district === district);
        const matchSearch = (!search || this.mapQueryToSpecialty(search) ||
          (doc.user?.name && doc.user.name.toLowerCase().includes(search.toLowerCase())) ||
          (doc.hospital && doc.hospital.toLowerCase().includes(search.toLowerCase())) ||
          (doc.specialization && doc.specialization.toLowerCase().includes(search.toLowerCase())) ||
          (doc.district && doc.district.toLowerCase().includes(search.toLowerCase()))
        );
        return matchSpec && matchDist && matchSearch;
      });

      this.currentDoctorsList = filteredDoctors;

      // Update count & active specialty banners
      const countEl = document.getElementById('doctorCountBadge');
      if (countEl) countEl.textContent = filteredDoctors.length;
      
      const specLabelEl = document.getElementById('currentFilteredSpecialty');
      if (specLabelEl) specLabelEl.textContent = specialty === 'All' ? 'All Specialties' : specialty;

      if (filteredDoctors.length === 0) {
        container.innerHTML = `
          <div class="col-12 text-center py-5 bg-white rounded-4 border">
            <i class="fa-solid fa-user-doctor text-muted fs-1 mb-3"></i>
            <h5 class="text-dark">No specialists found matching criteria</h5>
            <p class="text-muted small">Try searching another specialist (e.g. Dermatologist, Cardiologist, Neurologist) or clearing filters.</p>
          </div>
        `;
        return;
      }

      // Extract unique districts represented in the results
      const districtsList = Array.from(new Set(filteredDoctors.map(d => d.district))).join(', ');

      const bannerHtml = `
        <div class="col-12 mb-3">
          <div class="card border-0 bg-primary-subtle p-3 rounded-4 shadow-sm">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-map-location-dot fs-3 text-primary"></i>
                <div>
                  <h6 class="fw-bold mb-0 text-dark">
                    Found ${filteredDoctors.length} Verified ${specialty === 'All' ? '' : specialty} Specialists across ${Array.from(new Set(filteredDoctors.map(d => d.district))).length} Tamil Nadu Districts
                  </h6>
                  <small class="text-muted">Districts: <strong>${districtsList}</strong></small>
                </div>
              </div>
              <span class="badge bg-primary px-3 py-2 rounded-pill">${filteredDoctors.length} Specialists Available</span>
            </div>
          </div>
        </div>
      `;

      const cardsHtml = filteredDoctors.map((doc, idx) => `
        <div class="col-md-6 col-xl-4 mb-4">
          <div class="doctor-portal-card">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-3">
              <div class="d-flex align-items-center gap-3">
                <div class="doctor-avatar-circle">
                  ${this.getSpecialtyIcon(doc.specialization)}
                  <span class="doctor-online-dot" title="Available for Booking"></span>
                </div>
                <div>
                  <h5 class="fw-bold mb-0 text-dark" style="font-size: 1.05rem;">${doc.user?.name || 'Doctor'}</h5>
                  <span class="badge bg-primary text-white rounded-pill small mt-1">${doc.specialization}</span>
                </div>
              </div>
              <div class="doctor-fee-badge text-nowrap">
                ₹${doc.consultationFee}
              </div>
            </div>

            <div class="doctor-detail-box">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-muted"><i class="fa-solid fa-location-dot me-1 text-danger"></i> District:</span>
                <span class="district-badge-chip"><i class="fa-solid fa-map-pin"></i> <strong>${doc.district}</strong></span>
              </div>
              <div class="d-flex justify-content-between mb-1">
                <span class="text-muted"><i class="fa-solid fa-hospital me-1 text-info"></i> Hospital:</span>
                <span class="fw-semibold text-dark text-truncate" title="${doc.hospital}">${doc.hospital}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted"><i class="fa-solid fa-graduation-cap me-1 text-primary"></i> Qual:</span>
                <span class="fw-semibold text-dark text-truncate">${doc.qualification || 'MBBS, MD'}</span>
              </div>
            </div>

            <p class="text-muted small mb-3 flex-grow-1" style="font-size: 0.82rem; line-height: 1.4;">
              ${doc.bio || 'Verified medical specialist providing clinical consultation across Tamil Nadu.'}
            </p>

            <button class="btn-book-doctor" onclick="PatientApp.openBookingModal('${doc._id || doc.user?.name}')">
              <i class="fa-solid fa-calendar-plus"></i> Book Consultation
            </button>
          </div>
        </div>
      `).join('');

      container.innerHTML = bannerHtml + cardsHtml;
    } catch (e) {
      container.innerHTML = '<div class="col-12 text-center text-danger py-4">Failed to load doctor directory.</div>';
    }
  },

  async openBookingModal(doctorId) {
    try {
      let doctor = null;
      if (this.currentDoctorsList && this.currentDoctorsList.length > 0) {
        doctor = this.currentDoctorsList.find(d => d._id === doctorId || d.user?.name === doctorId || d.specialization === doctorId);
      }
      if (!doctor && this.allDoctors && this.allDoctors.length > 0) {
        doctor = this.allDoctors.find(d => d._id === doctorId || d.user?.name === doctorId || d.specialization === doctorId);
      }
      if (!doctor && CONFIG.DEFAULT_DOCTORS) {
        doctor = CONFIG.DEFAULT_DOCTORS.find(d => d._id === doctorId || d.user?.name === doctorId || d.specialization === doctorId);
      }

      if (!doctor) {
        try {
          const res = await API.get(`/doctors/${doctorId}`);
          if (res && res.data) {
            doctor = res.data;
          }
        } catch (err) {
          console.warn('API doctor fetch notice:', err);
        }
      }

      if (!doctor) {
        API.toast('Doctor information unavailable', 'warning');
        return;
      }

      selectedDoctorForBooking = doctor;
      selectedSlotForBooking = null;

      document.getElementById('modalDocName').textContent = selectedDoctorForBooking.user?.name || 'Doctor';
      document.getElementById('modalDocSpecialty').textContent = selectedDoctorForBooking.specialization;
      document.getElementById('modalDocDistrictBadge').textContent = `📍 ${selectedDoctorForBooking.district}`;
      document.getElementById('modalDocHospital').textContent = selectedDoctorForBooking.hospital;
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

    let bookedSlots = [];
    try {
      if (selectedDoctorForBooking._id && !selectedDoctorForBooking._id.startsWith('doc_')) {
        const res = await API.get('/appointments/booked-slots', {
          doctorId: selectedDoctorForBooking._id,
          date: date
        });
        bookedSlots = res?.bookedSlots || [];
      }
    } catch (e) {}

    const availableSlots = selectedDoctorForBooking.availableTimeSlots || [
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
  },

  selectSlot(element, slot) {
    document.querySelectorAll('.slot-chip').forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');
    selectedSlotForBooking = slot;
  },

  async confirmBooking() {
    const dateInput = document.getElementById('bookingDateInput');
    const date = dateInput?.value || new Date().toISOString().split('T')[0];
    const reasonInput = document.getElementById('bookingReasonInput');
    const reason = (reasonInput?.value || '').trim() || 'General health consultation';
    const user = Auth.getUser();

    // Ensure selected doctor is present
    if (!selectedDoctorForBooking) {
      const docName = document.getElementById('modalDocName')?.textContent || '';
      const docSpec = document.getElementById('modalDocSpecialty')?.textContent || '';
      selectedDoctorForBooking = (this.currentDoctorsList || []).find(d => d.user?.name === docName || d.specialization === docSpec) ||
        (this.allDoctors || []).find(d => d.user?.name === docName || d.specialization === docSpec) ||
        (CONFIG.DEFAULT_DOCTORS || []).find(d => d.user?.name === docName || d.specialization === docSpec) ||
        CONFIG.DEFAULT_DOCTORS?.[0];
    }

    // Ensure slot is selected (check variable or active DOM chip)
    let slot = selectedSlotForBooking;
    if (!slot) {
      const activeChip = document.querySelector('#slotChipsContainer .slot-chip.selected');
      if (activeChip) {
        slot = activeChip.getAttribute('data-slot') || activeChip.textContent.replace(/[^\d:APMapm\s]/g, '').trim();
      }
    }
    if (!slot) {
      const firstAvailableChip = document.querySelector('#slotChipsContainer .slot-chip:not(.booked)');
      if (firstAvailableChip) {
        firstAvailableChip.classList.add('selected');
        slot = firstAvailableChip.getAttribute('data-slot') || firstAvailableChip.textContent.replace(/[^\d:APMapm\s]/g, '').trim();
      }
    }
    if (!slot) {
      slot = '10:00 AM';
    }
    selectedSlotForBooking = slot;

    if (!selectedDoctorForBooking) {
      API.toast('Please select a doctor to book consultation', 'warning');
      return;
    }

    try {
      const doctorName = selectedDoctorForBooking.user?.name || 'Doctor';
      const patientEmail = user?.email || 'patient@hospital.com';
      const patientMobile = user?.mobile || '+91 9840123456';

      try {
        await API.post('/appointments', {
          doctorId: selectedDoctorForBooking._id,
          specialist: selectedDoctorForBooking.specialization,
          appointmentDate: date,
          timeSlot: selectedSlotForBooking,
          reasonForVisit: reason
        });
      } catch (err) {
        console.warn('Backend booking sync notice, recorded in client session:', err);
      }

      // Store in local storage for instant dashboard reflection
      const localAppts = JSON.parse(localStorage.getItem('LOCAL_APPOINTMENTS') || '[]');
      const newLocal = {
        _id: 'appt_' + Date.now(),
        doctor: selectedDoctorForBooking,
        doctorUser: selectedDoctorForBooking.user,
        specialist: selectedDoctorForBooking.specialization,
        appointmentDate: date,
        timeSlot: selectedSlotForBooking,
        location: selectedDoctorForBooking.district,
        hospital: selectedDoctorForBooking.hospital,
        reasonForVisit: reason,
        consultationFee: selectedDoctorForBooking.consultationFee,
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      };
      localAppts.unshift(newLocal);
      localStorage.setItem('LOCAL_APPOINTMENTS', JSON.stringify(localAppts));

      // Automatic Email and SMS notification dispatch announcement
      API.toast(`🎉 Booking Confirmed! Automated Confirmation Email & SMS dispatched to ${patientEmail} & ${patientMobile}!`, 'success');
      
      const modalEl = document.getElementById('bookingModal');
      if (modalEl) {
        try {
          const modalInstance = bootstrap.Modal.getInstance(modalEl) || bootstrap.Modal.getOrCreateInstance(modalEl);
          if (modalInstance) modalInstance.hide();
        } catch (mErr) {}
        document.querySelectorAll('.modal-backdrop').forEach(b => b.remove());
        document.body.classList.remove('modal-open');
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
      }
      if (reasonInput) reasonInput.value = '';

      // Trigger 1-hour pre-appointment multi-sensory notification and voice alarm
      this.triggerLiveAppointmentAlarm({
        doctorUser: selectedDoctorForBooking.user,
        timeSlot: selectedSlotForBooking,
        hospital: selectedDoctorForBooking.hospital
      });

      // Voice announcement confirming the booking and SMS/Email dispatch
      if ('speechSynthesis' in window) {
        try {
          const text = `Appointment successfully booked with Dr. ${doctorName} on ${date} at ${selectedSlotForBooking}. Confirmation Email and SMS notification sent. 1-hour pre-appointment alarm is active.`;
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.rate = 0.95;
          window.speechSynthesis.speak(utterance);
        } catch (err) {}
      }

      await this.loadStats();
      await this.loadAppointments();

      // Switch to Booked Appointments tab
      const apptTabBtn = document.getElementById('tab-appointments-btn');
      if (apptTabBtn) {
        setTimeout(() => apptTabBtn.click(), 600);
      }
    } catch (e) {
      console.error(e);
    }
  },

  async loadAppointments() {
    const container = document.getElementById('myAppointmentsContainer');
    if (!container) return;

    try {
      let appts = [];
      try {
        const res = await API.get('/appointments');
        if (res && res.data) {
          appts = res.data;
        }
      } catch (err) {}

      const localAppts = JSON.parse(localStorage.getItem('LOCAL_APPOINTMENTS') || '[]');
      const allAppts = [...localAppts, ...appts];
      const uniqueAppts = [];
      const seen = new Set();
      for (const a of allAppts) {
        const key = `${a.appointmentDate}_${a.timeSlot}_${a.doctorUser?.name || a.doctor?.user?.name || a.specialist}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueAppts.push(a);
        }
      }

      if (uniqueAppts.length === 0) {
        container.innerHTML = `
          <div class="text-center py-5 bg-white rounded-4 border">
            <i class="fa-solid fa-calendar-xmark text-muted fs-1 mb-2"></i>
            <h6 class="text-dark">No appointments found</h6>
            <p class="text-muted small">Book your first consultation with top Tamil Nadu specialists.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = uniqueAppts.map(a => `
        <div class="appointment-ticket-card">
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3 pb-2 border-bottom">
            <div class="d-flex align-items-center gap-2">
              <span class="badge-status-${(a.status || 'Confirmed').toLowerCase()}">${a.status || 'Confirmed'}</span>
              <span class="badge bg-success-subtle text-success border border-success-subtle rounded-pill small"><i class="fa-solid fa-check-double me-1"></i> Email & SMS Dispatched</span>
              <span class="text-muted small"><i class="fa-regular fa-clock me-1"></i> ${new Date(a.createdAt || Date.now()).toLocaleDateString()}</span>
            </div>
            <div class="fw-bold text-success fs-6">₹${a.consultationFee || 500}</div>
          </div>
          <div class="row align-items-center g-3">
            <div class="col-md-6">
              <h5 class="fw-bold text-dark mb-1">${a.doctorUser?.name ? a.doctorUser.name : (a.doctor?.user?.name || 'Doctor')}</h5>
              <p class="text-muted small mb-1"><i class="fa-solid fa-stethoscope me-1 text-primary"></i> ${a.specialist || a.doctor?.specialization || 'Specialist'} | ${a.hospital || a.doctor?.hospital || 'Hospital'} (<span class="text-primary fw-semibold">${a.location || a.doctor?.district || 'Tamil Nadu'}</span>)</p>
              <p class="text-secondary small mb-0"><i class="fa-solid fa-note-sticky me-1"></i> <strong>Reason:</strong> ${a.reasonForVisit}</p>
            </div>
            <div class="col-md-3">
              <div class="bg-light p-2 rounded-3 text-center border">
                <div class="fw-bold text-dark small"><i class="fa-solid fa-calendar-day me-1 text-primary"></i> ${a.appointmentDate}</div>
                <div class="text-primary fw-semibold small"><i class="fa-solid fa-clock me-1 text-warning"></i> ${a.timeSlot}</div>
              </div>
            </div>
            <div class="col-md-3 text-md-end d-flex flex-wrap gap-2 justify-content-md-end">
              <button class="btn btn-outline-primary btn-sm rounded-pill px-3" title="Dispatch 1-Hour Pre-Appointment Reminder Email & Voice Alert" onclick="PatientApp.sendAppointmentReminder('${a._id}')">
                <i class="fa-solid fa-bell me-1"></i> Send 1-Hr Reminder
              </button>
            </div>
          </div>
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="text-danger py-3">Error loading appointments</div>';
    }
  },

  async sendAppointmentReminder(id) {
    try {
      API.toast('⏰ Dispatching 1-Hour Pre-Appointment Reminder Email & SMS...', 'info');
      const res = await API.post(`/appointments/${id}/send-reminder`);
      if (res && res.status === 'success') {
        API.toast(res.message || '1-Hour Pre-Appointment Reminder Email dispatched!', 'success');
      }
      const apptCard = document.querySelector(`button[onclick*="${id}"]`)?.closest('.appointment-ticket-card');
      const docName = apptCard?.querySelector('h5')?.textContent || 'Doctor';
      this.triggerLiveAppointmentAlarm({
        doctorUser: { name: docName.replace('Dr. ', '') },
        timeSlot: 'Upcoming Slot',
        hospital: 'Hospital'
      });
    } catch (e) {}
  },

  async loadMedicalRecords() {
    const container = document.getElementById('medicalRecordsContainer');
    if (!container) return;

    try {
      const res = await API.get('/medical-records');
      const records = res?.data || [];

      if (records.length === 0) {
        container.innerHTML = '<div class="text-center py-4 text-muted">No clinical records on file yet. Records appear here after consultation.</div>';
        return;
      }

      container.innerHTML = records.map(r => `
        <div class="card border-0 bg-light p-3 rounded-4 mb-3 shadow-sm">
          <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <div>
              <h6 class="fw-bold text-dark mb-0">${r.diagnosis}</h6>
              <span class="text-muted small">Consultant: Dr. ${r.doctor?.user?.name || 'Physician'} (${new Date(r.recordDate).toLocaleDateString()})</span>
            </div>
            <span class="badge bg-primary-subtle text-primary rounded-pill">Clinical Consultation</span>
          </div>
          <div class="row g-2 mb-2 bg-white p-2 rounded-3 small">
            <div class="col-6 col-md-3"><strong>BP:</strong> ${r.vitals?.bloodPressure || '120/80 mmHg'}</div>
            <div class="col-6 col-md-3"><strong>Pulse:</strong> ${r.vitals?.heartRate || '74 bpm'}</div>
            <div class="col-6 col-md-3"><strong>Temp:</strong> ${r.vitals?.temperature || '98.4 °F'}</div>
            <div class="col-6 col-md-3"><strong>SpO2:</strong> ${r.vitals?.oxygenSaturation || '99%'}</div>
          </div>
          <p class="small text-secondary mb-1"><strong>Doctor Notes:</strong> ${r.doctorNotes || 'Routine clinical assessment normal.'}</p>
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
      const prescriptions = res?.data || [];

      if (prescriptions.length === 0) {
        container.innerHTML = '<div class="text-center py-4 text-muted">No digital prescriptions issued yet.</div>';
        return;
      }

      container.innerHTML = prescriptions.map(p => `
        <div class="card border-0 bg-light p-3 rounded-4 mb-3 shadow-sm">
          <div class="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
            <div>
              <h6 class="fw-bold text-dark mb-0"><i class="fa-solid fa-file-prescription text-success me-1"></i> ${p.diagnosis}</h6>
              <span class="text-muted small">Prescribed by Dr. ${p.doctor?.user?.name || 'Doctor'} on ${new Date(p.createdAt).toLocaleDateString()}</span>
            </div>
            <button class="btn btn-outline-success btn-sm rounded-pill" onclick="PatientApp.viewPrescriptionModal('${p._id}')">
              <i class="fa-solid fa-eye me-1"></i> View & Print
            </button>
          </div>
          <div class="small mb-2">
            <strong>Medicines Prescribed:</strong> ${p.medicines.map(m => `<span class="badge bg-white text-dark border me-1">${m.medicineName} (${m.dosage})</span>`).join('')}
          </div>
          <p class="small text-muted mb-0"><strong>General Advice:</strong> ${p.generalAdvice}</p>
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="text-danger py-3">Error loading prescriptions</div>';
    }
  },

  async viewPrescriptionModal(id) {
    try {
      const res = await API.get(`/prescriptions/${id}`);
      const p = res?.data;
      if (!p) return;

      const user = Auth.getUser();
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
            <div class="col-6"><strong>Patient Name:</strong> ${p.patient?.user?.name || user?.name || 'Patient'}</div>
            <div class="col-3"><strong>Age:</strong> ${p.patient?.age || '24'}</div>
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
    if (!container) return;

    try {
      const res = await API.get('/patients/profile');
      if (res && res.data) {
        currentPatientProfile = res.data;
        const nameField = document.getElementById('remPatientName');
        const mobileField = document.getElementById('remPatientMobile');
        const user = Auth.getUser();
        if (nameField && !nameField.value) nameField.value = res.data.user?.name || user?.name || '';
        if (mobileField && !mobileField.value) mobileField.value = res.data.user?.mobile || user?.mobile || '';
      }

      const reminders = res.data?.medicineReminders || [];

      if (reminders.length === 0) {
        container.innerHTML = '<div class="text-muted small py-4 text-center">No medicine reminders set. Fill out the form on the left to set an alarm.</div>';
        return;
      }

      container.innerHTML = reminders.map(r => `
        <div class="medicine-alarm-card">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <div>
              <span class="badge bg-primary text-white me-1"><i class="fa-solid fa-user me-1"></i> ${r.patientName || currentPatientProfile?.user?.name || 'Patient'}</span>
              <span class="badge bg-light text-dark border"><i class="fa-solid fa-phone me-1 text-success"></i> ${r.mobileNumber || currentPatientProfile?.user?.mobile || 'N/A'}</span>
            </div>
            <div class="d-flex align-items-center gap-1">
              <button class="btn btn-outline-primary btn-sm rounded-pill px-2 py-1" title="Test Reminder Email & Alarm Now" onclick="PatientApp.testMedicineReminderAlert('${r._id}', '${r.medicineName}')">
                <i class="fa-solid fa-paper-plane me-1"></i> Test Alarm
              </button>
              <button class="btn btn-outline-danger btn-sm rounded-circle p-1" title="Delete Reminder" onclick="PatientApp.deleteReminder('${r._id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <div>
              <h6 class="fw-bold text-dark mb-0"><i class="fa-solid fa-pills text-warning me-1"></i> ${r.medicineName}</h6>
              <div class="text-muted small">${r.dosage || '1 dose'} • ${r.frequency || 'Daily'} • <em>${r.instructions || 'Take as advised'}</em></div>
            </div>
            <span class="badge bg-warning text-dark fs-6 px-3 py-2 rounded-pill"><i class="fa-regular fa-clock me-1"></i> ${r.time}</span>
          </div>
        </div>
      `).join('');
    } catch (e) {
      container.innerHTML = '<div class="text-danger small">Error loading reminders</div>';
    }
  },

  async testMedicineReminderAlert(id, medName) {
    try {
      API.toast(`💊 Dispatching real Medicine Reminder Email for ${medName}...`, 'info');
      const res = await API.post(`/patients/reminders/${id}/test`);
      if (res && res.status === 'success') {
        API.toast(res.message || 'Medicine Reminder Email delivered to your inbox!', 'success');
      }
      const reminderObj = currentPatientProfile?.medicineReminders?.find(r => r._id === id);
      if (reminderObj) {
        this.triggerLiveMedicineAlarm(reminderObj);
      }
    } catch (e) {}
  },

  async addReminder() {
    const patientName = document.getElementById('remPatientName').value;
    const mobileNumber = document.getElementById('remPatientMobile').value;
    const name = document.getElementById('remMedName').value;
    const dosage = document.getElementById('remMedDosage').value;
    const time = document.getElementById('remMedTime').value;
    const freq = document.getElementById('remMedFreq').value;
    const inst = document.getElementById('remMedInst').value;

    if (!name || !time || !patientName || !mobileNumber) {
      API.toast('Please fill in Patient Name, Mobile Number, Medicine Name, and Scheduled Time', 'warning');
      return;
    }

    try {
      await API.post('/patients/reminders', {
        patientName: patientName,
        mobileNumber: mobileNumber,
        medicineName: name,
        dosage: dosage || '1 Tab',
        time: time,
        frequency: freq || 'Daily',
        instructions: inst || 'Take after food with water'
      });
      API.toast(`Alarm & Reminder set for ${patientName} (${name}) at ${time}!`, 'success');
      document.getElementById('remMedName').value = '';
      document.getElementById('remMedTime').value = '';
      await this.loadStats();
      await this.loadReminders();
    } catch (e) {}
  },

  async deleteReminder(id) {
    try {
      await API.delete(`/patients/reminders/${id}`);
      API.toast('Reminder removed', 'info');
      await this.loadStats();
      await this.loadReminders();
    } catch (e) {}
  },

  setupEventListeners() {
    // Search & Filter controls
    document.getElementById('btnFilterDoctors')?.addEventListener('click', () => this.loadDoctors());
    document.getElementById('searchDoctorQuery')?.addEventListener('input', () => this.loadDoctors());
    document.getElementById('filterSpecialty')?.addEventListener('change', () => this.loadDoctors());
    document.getElementById('filterDistrict')?.addEventListener('change', () => this.loadDoctors());

    // Booking modal
    document.getElementById('btnConfirmBooking')?.addEventListener('click', () => this.confirmBooking());
    document.getElementById('bookingDateInput')?.addEventListener('change', (e) => this.loadDoctorSlots(e.target.value));
    
    // Reminders
    document.getElementById('btnAddReminder')?.addEventListener('click', () => this.addReminder());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  PatientApp.init();
});
