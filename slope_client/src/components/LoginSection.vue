<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const auth = useAuthStore()

const handleLogin = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields.'
    return
  }

  error.value = ''
  loading.value = true

  try {
    const res = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value }),
    })

    const data = await res.json()

    if (res.ok && data.message === 'Login success') {
      auth.setToken(data.data.token)
      router.push('/home')
    } else {
      error.value = data.message || 'Invalid credentials. Please try again.'
    }
  } catch (err) {
    error.value = 'Connection error. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-page">

    <!-- Left panel -->
    <div class="login-panel">
      <div class="login-box">

        <div class="login-logo">
          <a href="/" class="logo d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 45 45" fill="none">
              <path
                d="M26.2409 33.633L31.3639 35.498C33.0209 36.101 34.8379 35.375 35.6459 33.864L36.5919 34.209C35.6189 36.177 33.3389 37.17 31.2169 36.504L31.0169 36.436L24.2609 33.978L24.2519 33.974L24.2429 33.97L7.99988 28.058L8.34188 27.118L26.2409 33.633Z"
                fill="#63b3f5" stroke="#63b3f5" />
              <path
                d="M24.8639 32.733L29.2689 26.781C29.6909 26.212 29.6519 25.434 29.2009 24.91L26.3989 22.371C26.2339 22.221 26.1889 21.984 26.2809 21.787L29.0999 17.546L30.2979 18.345C30.6079 19.873 31.1419 20.663 32.0179 21.196C32.8339 21.691 33.9089 21.941 35.2339 21.99V22.99C32.2709 22.883 30.4319 21.806 29.6609 19.916L28.7819 19.828L27.3899 21.916L29.7369 24.031C30.6519 24.855 30.8249 26.216 30.1689 27.238L25.6179 33.294M20.6019 31.208L23.8249 26.992L23.7499 26.307L20.7489 23.774C20.2659 23.366 19.9949 22.788 19.9649 22.19L21.0829 22.61L25.1239 26.158C25.3089 26.313 25.3529 26.575 25.2389 26.781L21.3149 31.759M17.6749 16.692L19.1509 15.089C21.5839 12.092 24.6969 11.449 27.2719 12.578L27.9679 12.046C27.8489 11.269 27.9909 10.449 28.4269 9.722C29.4229 8.065 31.5729 7.529 33.2299 8.524C34.8869 9.52 35.4229 11.669 34.4279 13.326C33.9679 14.09 33.2649 14.615 32.4759 14.863L31.7529 15.709L30.9089 15.147L31.6679 14.013C32.4279 13.939 33.1459 13.517 33.5699 12.811C34.2809 11.628 33.8989 10.093 32.7149 9.382C31.5319 8.67 29.9959 9.053 29.2849 10.237C28.8629 10.938 28.8259 11.763 29.1109 12.466L28.0629 14.21C25.7389 12.381 22.3659 12.717 20.4509 14.998L19.3379 16.677L19.5859 17.41"
                fill="#63b3f5" stroke="#63b3f5" />
              <path d="M8.60785 14.061L24.6138 20.065" stroke="#63b3f5" stroke-width="2" />
            </svg>
            <span>SLOPE</span>
          </a>

        </div>

        <h1>Welcome back</h1>
        <p class="login-subtitle">Sign in to access your mountain dashboard</p>

        <div v-if="error" class="error-banner">
          <i class="bi bi-exclamation-circle"></i>
          {{ error }}
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <i class="bi bi-envelope input-icon"></i>
            <input id="email" v-model="email" type="email" placeholder="you@example.com" @keyup.enter="handleLogin"
              autocomplete="email" />
          </div>
        </div>

        <div class="form-group">
          <div class="label-row">
            <label for="password">Password</label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>
          <div class="input-wrapper">
            <i class="bi bi-lock input-icon"></i>
            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
              @keyup.enter="handleLogin" autocomplete="current-password" />
            <button class="toggle-pwd" type="button" @click="showPassword = !showPassword" tabindex="-1">
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </button>
          </div>
        </div>

        <button class="login-btn" @click="handleLogin" :disabled="loading">
          <span v-if="!loading">Sign In</span>
          <span v-else class="spinner"></span>
        </button>

        <p class="register-prompt">
          Don't have an account?
          <router-link to="/registration">Sign up for free</router-link>
        </p>

      </div>
    </div>

    <!-- Right panel -->
    <div class="hero-panel">
      <div class="hero-panel-overlay"></div>
      <div class="hero-panel-content">
        <h2>Your slopes,<br>your way.</h2>
        <p>Real-time conditions, ski pass booking, and resort maps — all in one place.</p>
        <div class="features">
          <div class="feature-item">
            <i class="bi bi-snow"></i>
            <span>Live slope conditions</span>
          </div>
          <div class="feature-item">
            <i class="bi bi-ticket-perforated"></i>
            <span>Instant ski pass booking</span>
          </div>
          <div class="feature-item">
            <i class="bi bi-map"></i>
            <span>Interactive trail maps</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
}

/* Left panel */
.login-panel {
  flex: 0 0 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 48px 40px;
  z-index: 1;
}

.login-box {
  width: 100%;
  max-width: 360px;
}

/* Logo */
.login-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
}

.login-logo span {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #1a3a5c;
}

.login-logo a {
  text-decoration: none;
}

/* Headings */
.login-box h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a3a5c;
  margin: 0 0 8px 0;
}

.login-subtitle {
  font-size: 14px;
  color: #5a7a9a;
  margin: 0 0 32px 0;
}

/* Error */
.error-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff0f0;
  border: 1px solid rgba(220, 53, 69, 0.2);
  border-radius: 8px;
  color: #c0392b;
  font-size: 13px;
  padding: 10px 14px;
  margin-bottom: 20px;
}

/* Form */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: #2a4a6a;
  margin-bottom: 6px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.label-row label {
  margin-bottom: 0;
}

.forgot-link {
  font-size: 12px;
  color: #63b3f5;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #2a5298;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  font-size: 15px;
  color: #8aa8c8;
  pointer-events: none;
}

.input-wrapper input {
  width: 100%;
  padding: 11px 40px 11px 38px;
  font-size: 14px;
  border: 1.5px solid rgba(42, 82, 152, 0.2);
  border-radius: 8px;
  color: #1a3a5c;
  background: #f8fbff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}

.input-wrapper input:focus {
  border-color: #63b3f5;
  box-shadow: 0 0 0 3px rgba(99, 179, 245, 0.15);
  background: #ffffff;
}

.input-wrapper input::placeholder {
  color: #b0c8e0;
}

.toggle-pwd {
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #8aa8c8;
  font-size: 15px;
  padding: 4px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.toggle-pwd:hover {
  color: #2a5298;
}

/* Login button */
.login-btn {
  width: 100%;
  padding: 13px;
  margin-top: 8px;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(26, 58, 92, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
}

.login-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #2a5298, #63b3f5);
  box-shadow: 0 6px 24px rgba(42, 82, 152, 0.4);
  transform: translateY(-1px);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Register prompt */
.register-prompt {
  text-align: center;
  margin-top: 24px;
  font-size: 13px;
  color: #5a7a9a;
}

.register-prompt a {
  color: #2a5298;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.register-prompt a:hover {
  color: #63b3f5;
}

/* Right hero panel */
.hero-panel {
  flex: 1;
  position: relative;
  background: linear-gradient(135deg, #1a3a5c 0%, #2a5298 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-panel::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2363b3f5' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-panel-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
      rgba(26, 58, 92, 0.2) 0%,
      rgba(26, 58, 92, 0.5) 100%);
}

.hero-panel-content {
  position: relative;
  z-index: 1;
  padding: 48px;
  max-width: 420px;
}

.hero-panel-content h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 20px 0;
  letter-spacing: -0.01em;
}

.hero-panel-content p {
  font-size: 16px;
  color: rgba(232, 240, 254, 0.85);
  line-height: 1.7;
  margin: 0 0 40px 0;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #e8f0fe;
  font-size: 15px;
}

.feature-item i {
  font-size: 18px;
  color: #63b3f5;
  width: 44px;
  height: 44px;
  background: rgba(99, 179, 245, 0.12);
  border: 1px solid rgba(99, 179, 245, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Accent line */
.hero-panel::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, transparent, #63b3f5, transparent);
}

/* Responsive */
@media (max-width: 900px) {
  .login-page {
    flex-direction: column;
  }

  .login-panel {
    flex: none;
    width: 100%;
    padding: 40px 24px;
  }

  .hero-panel {
    min-height: 280px;
    order: -1;
  }

  .hero-panel-content h2 {
    font-size: 2rem;
  }

  .hero-panel::after {
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    width: auto;
    height: 3px;
    background: linear-gradient(to right, transparent, #63b3f5, transparent);
  }
}
</style>