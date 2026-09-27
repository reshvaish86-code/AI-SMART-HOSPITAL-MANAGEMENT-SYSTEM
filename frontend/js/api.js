/**
 * AI Smart Hospital Management System
 * Production-Grade Resilient API Request Engine & Notification Utility
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

  /**
   * Resilient HTTP Request Runner with Auto-Fallback & Cold-Start Retry
   */
  async request(endpoint, options = {}) {
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : '/' + endpoint;
    const isMutation = ['POST', 'PUT', 'PATCH', 'DELETE'].includes((options.method || 'GET').toUpperCase());
    const isSilent = options.silent === true || (!isMutation && options.silent !== false);

    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    };

    // Determine target URL list (primary candidate + cloud fallback candidate)
    const primaryBase = (CONFIG.API_BASE_URL || 'https://ai-smart-hospital-backend-w26k.onrender.com/api').replace(/\/+$/, '');
    const fallbackBase = (CONFIG.BACKEND_RENDER_URL || 'https://ai-smart-hospital-backend-w26k.onrender.com/api').replace(/\/+$/, '');
    
    const candidateUrls = [primaryBase + cleanEndpoint];
    if (primaryBase !== fallbackBase) {
      candidateUrls.push(fallbackBase + cleanEndpoint);
    }

    let lastError = null;

    for (let targetUrl of candidateUrls) {
      // Try up to 2 attempts for cold start recovery
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout

          const response = await fetch(targetUrl, {
            ...options,
            headers,
            signal: controller.signal
          });

          clearTimeout(timeoutId);

          let data = null;
          const contentType = response.headers.get('content-type') || '';
          if (contentType.includes('application/json')) {
            try {
              data = await response.json();
            } catch (jsonErr) {
              data = { message: 'Non-JSON server response' };
            }
          } else {
            const rawText = await response.text();
            data = { message: rawText };
          }

          if (!response.ok) {
            // Unauthenticated handling for protected doctor/admin areas
            if (response.status === 401 && !targetUrl.includes('/auth/login') && (window.location.pathname.includes('/doctor/') || window.location.pathname.includes('/admin/'))) {
              this.clearAuth();
              window.location.href = '/pages/login.html?expired=1';
              return null;
            }

            const errorMsg = data?.message || `Request failed with status ${response.status}`;
            const err = new Error(errorMsg);
            err.status = response.status;
            err.data = data;
            throw err;
          }

          return data;
        } catch (fetchError) {
          lastError = fetchError;
          // If aborted or network dropped during attempt 1, wait 1s before retrying
          if (attempt === 1 && fetchError.name !== 'AbortError' && !fetchError.status) {
            await new Promise(r => setTimeout(r, 1000));
          }
        }
      }
    }

    // Handle error presentation gracefully
    console.warn(`[API Notice] ${options.method || 'GET'} ${cleanEndpoint} notice:`, lastError?.message);

    // Only show visible toast alert if it is an explicit user action (e.g. Booking, Registration, Login, Form Save)
    if (!isSilent) {
      let userFriendlyMessage = lastError?.message || 'Unable to connect to server. Please try again.';
      if (userFriendlyMessage.includes('Failed to fetch') || userFriendlyMessage.includes('NetworkError') || userFriendlyMessage.includes('aborted')) {
        userFriendlyMessage = 'Connecting to hospital cloud server. Please wait a moment...';
      }
      this.toast(userFriendlyMessage, 'danger');
    }

    throw lastError || new Error('Network request failed');
  },

  get(endpoint, params = {}, options = {}) {
    const query = new URLSearchParams(params).toString();
    const url = query ? `${endpoint}?${query}` : endpoint;
    return this.request(url, { method: 'GET', ...options });
  },

  post(endpoint, body = {}, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      silent: false,
      ...options
    });
  },

  put(endpoint, body = {}, options = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      silent: false,
      ...options
    });
  },

  patch(endpoint, body = {}, options = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(body),
      silent: false,
      ...options
    });
  },

  delete(endpoint, options = {}) {
    return this.request(endpoint, {
      method: 'DELETE',
      silent: false,
      ...options
    });
  },

  toast(message, type = 'info', title = '') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      document.body.appendChild(container);
    }

    // Avoid stacking identical messages
    const existing = container.querySelectorAll('.custom-toast');
    for (let el of existing) {
      if (el.textContent.includes(message)) {
        return;
      }
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
      danger: 'Notice',
      warning: 'Alert',
      info: 'Information'
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
