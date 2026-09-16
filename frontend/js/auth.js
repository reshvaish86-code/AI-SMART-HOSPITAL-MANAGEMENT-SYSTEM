/**
 * Authentication Module & Role Guard
 */

const Auth = {
  init() {
    this.checkSession();
  },

  checkSession() {
    const user = API.getUser();
    const token = API.getToken();
    const path = window.location.pathname;

    // Guard dashboard paths
    if (path.includes('/patient/') && (!user || user.role !== 'patient')) {
      window.location.href = '/pages/login.html';
      return;
    }
    if (path.includes('/doctor/') && (!user || user.role !== 'doctor')) {
      window.location.href = '/pages/login.html';
      return;
    }
    if (path.includes('/admin/') && (!user || user.role !== 'admin')) {
      window.location.href = '/pages/login.html';
      return;
    }

    // Update user name in top nav if present
    const userNameElements = document.querySelectorAll('.auth-user-name');
    userNameElements.forEach(el => {
      if (user) el.textContent = user.name;
    });

    const userRoleElements = document.querySelectorAll('.auth-user-role');
    userRoleElements.forEach(el => {
      if (user) el.textContent = user.role.toUpperCase();
    });
  },

  async login(email, password) {
    try {
      const response = await API.post('/auth/login', { email, password });
      if (response && response.status === 'success') {
        API.setAuth(response.token, response.user, response.profile);
        API.toast(`Welcome back, ${response.user.name}!`, 'success');

        // Redirect based on role
        setTimeout(() => {
          if (response.user.role === 'patient') {
            window.location.href = '/pages/patient/dashboard.html';
          } else if (response.user.role === 'doctor') {
            window.location.href = '/pages/doctor/dashboard.html';
          } else if (response.user.role === 'admin') {
            window.location.href = '/pages/admin/dashboard.html';
          } else {
            window.location.href = '/index.html';
          }
        }, 600);
      }
    } catch (err) {
      // Error handled in API.toast
    }
  },

  async registerPatient(formData) {
    try {
      const response = await API.post('/auth/register-patient', formData);
      if (response && response.status === 'success') {
        API.setAuth(response.token, response.user, response.profile);
        API.toast('Patient registration successful!', 'success');
        setTimeout(() => {
          window.location.href = '/pages/patient/dashboard.html';
        }, 700);
      }
    } catch (err) {
      // Error handled in API.toast
    }
  },

  async registerDoctor(formData) {
    try {
      const response = await API.post('/auth/register-doctor', formData);
      if (response && response.status === 'success') {
        API.setAuth(response.token, response.user, response.profile);
        API.toast('Doctor registration successful!', 'success');
        setTimeout(() => {
          window.location.href = '/pages/doctor/dashboard.html';
        }, 700);
      }
    } catch (err) {
      // Error handled in API.toast
    }
  },

  async forgotPassword(email) {
    try {
      const response = await API.post('/auth/forgot-password', { email });
      if (response && response.status === 'success') {
        API.toast(response.message || 'Verification code sent to your email!', 'success');
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  },

  async verifyOTP(email, otp) {
    try {
      const response = await API.post('/auth/verify-otp', { email, otp });
      if (response && response.status === 'success') {
        API.toast(response.message || 'OTP verified successfully!', 'success');
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  },

  async resetPassword(email, otp, newPassword) {
    try {
      const response = await API.post('/auth/reset-password', { email, otp, newPassword });
      if (response && response.status === 'success') {
        API.toast(response.message || 'Password reset successfully!', 'success');
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  },

  logout() {
    API.clearAuth();
    API.toast('Logged out successfully', 'info');
    setTimeout(() => {
      window.location.href = '/pages/login.html';
    }, 400);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Auth.init();
});
