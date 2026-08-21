/**
 * API Request Wrapper and UI Notification Utility
 */

const API = {
  getToken() {
    return localStorage.getItem('hospital_token') || '';
  },

  getUser() {
    const userStr = localStorage.getItem('hospital_user');
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },

  getProfile() {
    const profStr = localStorage.getItem('hospital_profile');
    try {
      return profStr ? JSON.parse(profStr) : null;
    } catch {
      return null;
    }
  },

  setAuth(token, user, profile) {
    localStorage.setItem('hospital_token', token);
    localStorage.setItem('hospital_user', JSON.stringify(user));
    if (profile) {
      localStorage.setItem('hospital_profile', JSON.stringify(profile));
    }
  },

  clearAuth() {
    localStorage.removeItem('hospital_token');
    localStorage.removeItem('hospital_user');
    localStorage.removeItem('hospital_profile');
  },

  async request(endpoint, options = {}) {
    const url = `${CONFIG.API_BASE_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
    const token = this.getToken();

    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        // Auto logout on 401 unauthenticated
        if (response.status === 401 && !url.includes('/auth/login')) {
          this.clearAuth();
          window.location.href = '/pages/login.html?expired=1';
          return null;
        }
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      this.toast(error.message || 'Network error occurred', 'danger');
      throw error;
    }
  },

  get(endpoint, params = {}) {
    const query = new URLSearchParams(params).toString();
    const url = query ? `${endpoint}?${query}` : endpoint;
    return this.request(url, { method: 'GET' });
  },

  post(endpoint, body = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });
  },

  put(endpoint, body = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  },

  patch(endpoint, body = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body)
    });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  },

  toast(message, type = 'info', title = '') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast border-${type}`;

    const iconMap = {
      success: 'fa-circle-check text-success',
      danger: 'fa-triangle-exclamation text-danger',
      warning: 'fa-circle-exclamation text-warning',
      info: 'fa-circle-info text-primary'
    };

    const icon = iconMap[type] || iconMap.info;
    const defaultTitles = {
      success: 'Success',
      danger: 'Error',
      warning: 'Alert',
      info: 'Notice'
    };

    toast.innerHTML = `
      <div class="d-flex align-items-start gap-2">
        <i class="fa-solid ${icon} fs-5 mt-1"></i>
        <div class="flex-grow-1">
          <h6 class="mb-1 fw-bold fs-6">${title || defaultTitles[type] || 'Notice'}</h6>
          <p class="mb-0 text-muted small">${message}</p>
        </div>
        <button type="button" class="btn-close btn-sm" onclick="this.parentElement.parentElement.remove()"></button>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 4500);
  }
};
