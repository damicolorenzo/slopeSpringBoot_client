<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();
const facilities = ref([]);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
  try {
    console.log(auth.id);
    const response = await fetch('http://localhost:9194/api/v1/skifacilities/all');
    const data = await response.json();
    if (data.message === 'Success') {
      facilities.value = data.data;
    } else {
      error.value = 'Failed to load ski facilities.';
    }
  } catch (err) {
    error.error = 'Connection error. Please try again.';
  } finally {
    loading.value = false;
  }
});

const getRunsByType = (facility, type) => {
  return facility.countSkiRun?.find(r => r.type === type)?.CNT || 0;
};
</script>

<template>
  <div class="logged-home">

    <div class="container">

      <!-- Page header -->
      <div class="page-header">
        <h1>Ski Resorts</h1>
        <p>Explore Abruzzo's best slopes and plan your perfect mountain day</p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="state-box">
        <div class="loader"></div>
        <p>Loading resorts...</p>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="state-box error-state">
        <i class="bi bi-exclamation-circle"></i>
        <p>{{ error }}</p>
      </div>

      <!-- Facility cards -->
      <div v-else class="facilities-list">
        <div
          v-for="facility in facilities"
          :key="facility.id"
          class="facility-card"
        >

          <!-- Left: image -->
          <div class="facility-img-wrapper">
            <img
              v-if="facility.images?.length"
              :src="`http://localhost:9194${facility.images[0].downloadUrl}`"
              :alt="facility.name"
              class="facility-img"
            />
            <div v-else class="facility-img-placeholder">
              <i class="bi bi-image"></i>
            </div>
            <!-- Status badge -->
            <div :class="['status-badge', facility.status ? 'open' : 'closed']">
              <span class="status-dot"></span>
              {{ facility.status ? 'Open' : 'Closed' }}
            </div>
          </div>

          <!-- Right: details -->
          <div class="facility-details">

            <h3 class="facility-name">{{ facility.name }}</h3>

            <div class="detail-grid">

              <!-- Ski runs -->
              <div class="detail-section">
                <h4><i class="bi bi-snow"></i> Ski Runs</h4>
                <div class="runs-list">
                  <div v-if="getRunsByType(facility, 'blu')" class="run-chip blu">
                    <span class="run-dot"></span>
                    Blue <strong>{{ getRunsByType(facility, 'blu') }}</strong>
                  </div>
                  <div v-if="getRunsByType(facility, 'rossa')" class="run-chip rossa">
                    <span class="run-dot"></span>
                    Red <strong>{{ getRunsByType(facility, 'rossa') }}</strong>
                  </div>
                  <div v-if="getRunsByType(facility, 'nera')" class="run-chip nera">
                    <span class="run-dot"></span>
                    Black <strong>{{ getRunsByType(facility, 'nera') }}</strong>
                  </div>
                  <div v-if="getRunsByType(facility, 'verde')" class="run-chip verde">
                    <span class="run-dot"></span>
                    Green <strong>{{ getRunsByType(facility, 'verde') }}</strong>
                  </div>
                  <div v-if="!facility.countSkiRun?.length" class="no-data">No data available</div>
                </div>
              </div>

              <!-- Lifts -->
              <div class="detail-section">
                <h4><i class="bi bi-arrow-up-circle"></i> Ski Lifts</h4>
                <div class="lifts-list">
                  <div
                    v-for="lift in facility.countLift"
                    :key="lift.type"
                    class="lift-item"
                  >
                    <span class="lift-type">{{ lift.type.charAt(0).toUpperCase() + lift.type.slice(1) }}</span>
                    <span class="lift-count">{{ lift.CNT }}</span>
                  </div>
                  <div v-if="!facility.countLift?.length" class="no-data">No data available</div>
                </div>
              </div>

            </div>

            <!-- Footer -->
            <div class="facility-footer">
              <router-link
                :to="`/facility/${facility.name}`"
                class="explore-btn"
              >
                <span>Explore</span>
                <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.logged-home {
  min-height: 100vh;
  background: #f4f8fd;
  padding: 48px 0 80px;
}

/* Page header */
.page-header {
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(42, 82, 152, 0.1);
}

.page-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a3a5c;
  margin: 0 0 8px 0;
}

.page-header p {
  font-size: 15px;
  color: #5a7a9a;
  margin: 0;
}

/* Loading / error states */
.state-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 80px 0;
  color: #5a7a9a;
  font-size: 15px;
}

.state-box i {
  font-size: 2rem;
}

.error-state {
  color: #c0392b;
}

.loader {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(42, 82, 152, 0.15);
  border-top-color: #2a5298;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Facility list */
.facilities-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Facility card */
.facility-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(42, 82, 152, 0.1);
  box-shadow: 0 4px 24px rgba(26, 58, 92, 0.07);
  display: flex;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(26, 58, 92, 0.14);
}

/* Image */
.facility-img-wrapper {
  position: relative;
  flex: 0 0 300px;
  min-height: 240px;
}

.facility-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.facility-img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.3);
  font-size: 3rem;
}

/* Status badge */
.status-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  backdrop-filter: blur(6px);
}

.status-badge.open {
  background: rgba(5, 150, 82, 0.15);
  border: 1px solid rgba(5, 150, 82, 0.3);
  color: #059652;
}

.status-badge.closed {
  background: rgba(192, 57, 43, 0.15);
  border: 1px solid rgba(192, 57, 43, 0.3);
  color: #c0392b;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s infinite;
}

.status-badge.closed .status-dot {
  animation: none;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* Details panel */
.facility-details {
  flex: 1;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.facility-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a3a5c;
  margin: 0;
}

/* Detail grid */
.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  flex: 1;
}

.detail-section h4 {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8aa8c8;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-section h4 i {
  font-size: 13px;
  color: #63b3f5;
}

/* Ski runs */
.runs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.run-chip {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.run-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
}

.run-chip.blu   { background: #e8f0fd; color: #1a56c4; }
.run-chip.rossa { background: #fdeaea; color: #c0392b; }
.run-chip.nera  { background: #2c2c2c; color: #ffffff; }
.run-chip.verde { background: #eaf6ee; color: #1a7a3c; }

/* Lifts */
.lifts-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lift-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid rgba(42, 82, 152, 0.07);
  font-size: 13px;
}

.lift-item:last-child {
  border-bottom: none;
}

.lift-type {
  color: #4a6a8a;
}

.lift-count {
  font-weight: 700;
  color: #1a3a5c;
  background: rgba(99, 179, 245, 0.12);
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
}

.no-data {
  font-size: 13px;
  color: #b0c8e0;
  font-style: italic;
}

/* Footer */
.facility-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid rgba(42, 82, 152, 0.08);
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(26, 58, 92, 0.25);
  transition: all 0.3s ease;
}

.explore-btn i {
  transition: transform 0.3s ease;
}

.explore-btn:hover {
  background: linear-gradient(135deg, #2a5298, #63b3f5);
  box-shadow: 0 6px 20px rgba(42, 82, 152, 0.35);
  transform: translateY(-1px);
  color: #ffffff;
}

.explore-btn:hover i {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 768px) {
  .facility-card {
    flex-direction: column;
  }

  .facility-img-wrapper {
    flex: none;
    height: 220px;
  }

  .facility-details {
    padding: 20px;
  }

  .detail-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.logged-home {
  overflow: visible !important; /* override the global section rule */
}
</style>