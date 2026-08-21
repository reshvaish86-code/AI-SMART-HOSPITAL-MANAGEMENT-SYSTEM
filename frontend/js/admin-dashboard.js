/**
 * Admin Dashboard Application Logic
 */

const AdminApp = {
  async init() {
    await this.loadOverview();
    await this.loadUsers();
    await this.loadAppointments();
    this.setupEventListeners();
  },

  async loadOverview() {
    try {
      const res = await API.get('/admin/overview');
      if (res && res.data) {
        const m = res.data.metrics;
        document.getElementById('adminStatPatients').textContent = m.totalPatients || 0;
        document.getElementById('adminStatDoctors').textContent = m.totalDoctors || 0;
        document.getElementById('adminStatAppts').textContent = m.totalAppointments || 0;
        document.getElementById('adminStatCompleted').textContent = m.completedAppointments || 0;
        document.getElementById('adminStatPending').textContent = m.pendingAppointments || 0;
        document.getElementById('adminStatPrescriptions').textContent = m.totalPrescriptions || 0;
      }
    } catch (e) {
      console.error('Error loading admin overview:', e);
    }
  },

  async loadUsers() {
    const tableBody = document.getElementById('adminUsersTableBody');
    if (!tableBody) return;

    const role = document.getElementById('adminFilterRole')?.value || 'All';
    const search = document.getElementById('adminSearchUsers')?.value || '';

    try {
      const res = await API.get('/admin/users', { role, search });
      const users = res.data || [];

      if (users.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-muted">No users found</td></tr>';
        return;
      }

      tableBody.innerHTML = users.map((u, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td>
            <div class="d-flex align-items-center gap-2">
              <div class="bg-light p-2 rounded-circle text-primary">
                <i class="fa-solid ${u.role === 'doctor' ? 'fa-user-doctor' : (u.role === 'admin' ? 'fa-user-shield' : 'fa-user')}"></i>
              </div>
              <div>
                <span class="fw-bold text-dark d-block">${u.name}</span>
                <span class="text-muted small">${u.email}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="badge ${u.role === 'admin' ? 'bg-danger' : (u.role === 'doctor' ? 'bg-primary' : 'bg-success')} rounded-pill px-3">
              ${u.role.toUpperCase()}
            </span>
          </td>
          <td>${u.mobile || 'N/A'}</td>
          <td>
            <span class="badge ${u.isActive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} rounded-pill px-2">
              ${u.isActive ? 'Active' : 'Deactivated'}
            </span>
          </td>
          <td>
            ${u.role !== 'admin' ? `
              <button class="btn btn-sm ${u.isActive ? 'btn-outline-danger' : 'btn-outline-success'} rounded-pill px-3" onclick="AdminApp.toggleUser('${u._id}')">
                <i class="fa-solid ${u.isActive ? 'fa-user-slash' : 'fa-user-check'} me-1"></i> ${u.isActive ? 'Deactivate' : 'Activate'}
              </button>
            ` : '<span class="text-muted small">Admin Protected</span>'}
          </td>
        </tr>
      `).join('');
    } catch (e) {
      console.error(e);
    }
  },

  async toggleUser(id) {
    try {
      const res = await API.patch(`/admin/users/${id}/toggle-status`);
      API.toast(res.message || 'User status updated', 'success');
      await this.loadOverview();
      await this.loadUsers();
    } catch (e) {
      // Handled
    }
  },

  async loadAppointments() {
    const tableBody = document.getElementById('adminApptsTableBody');
    if (!tableBody) return;

    try {
      const res = await API.get('/appointments');
      const appts = res.data || [];

      if (appts.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">No appointments found</td></tr>';
        return;
      }

      tableBody.innerHTML = appts.map((a, idx) => `
        <tr>
          <td>${idx + 1}</td>
          <td><strong>${a.patient?.user?.name || 'Patient'}</strong></td>
          <td>Dr. ${a.doctor?.user?.name || 'Doctor'} <br><small class="text-muted">${a.specialist}</small></td>
          <td>${a.appointmentDate} (${a.timeSlot})</td>
          <td>${a.hospital} (${a.location})</td>
          <td><span class="badge-status-${a.status.toLowerCase()}">${a.status}</span></td>
          <td class="fw-bold text-success">₹${a.consultationFee}</td>
        </tr>
      `).join('');
    } catch (e) {
      console.error(e);
    }
  },

  async broadcastNotification() {
    const targetRole = document.getElementById('broadcastTarget').value;
    const title = document.getElementById('broadcastTitle').value;
    const message = document.getElementById('broadcastMessage').value;

    if (!title.trim() || !message.trim()) {
      API.toast('Please provide notification title and message', 'warning');
      return;
    }

    try {
      const res = await API.post('/admin/broadcast', { targetRole, title, message });
      API.toast(res.message || 'Broadcast message sent!', 'success');
      bootstrap.Modal.getInstance(document.getElementById('broadcastModal')).hide();
      document.getElementById('broadcastTitle').value = '';
      document.getElementById('broadcastMessage').value = '';
    } catch (e) {
      // Handled
    }
  },

  setupEventListeners() {
    document.getElementById('adminFilterRole')?.addEventListener('change', () => this.loadUsers());
    document.getElementById('adminSearchUsers')?.addEventListener('input', () => this.loadUsers());
    document.getElementById('btnSendBroadcast')?.addEventListener('click', () => this.broadcastNotification());
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AdminApp.init();
});
