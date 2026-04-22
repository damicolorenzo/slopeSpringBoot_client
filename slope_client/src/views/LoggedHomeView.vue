<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const auth = useAuthStore();
const facilities = ref([]);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/api/v1/skifacilities/all', {
      headers: { Authorization: `Bearer ${auth.token}` }
    });
    const data = await response.json();
    if (response.ok) {
      facilities.value = data.data;
    } else {
      error.value = data.message;
    }
  } catch (err) {
    error.value = 'Connection error. Please try again.';
  } finally {
    loading.value = false;
  }
});

const logout = () => {
  auth.clearToken();
  router.push('/login');
}

const groupedRuns = (runs) => {
  if(!runs) return [];
  const map = {};
  runs.forEach(r => {
    map[r.type] = (map[r.type] || 0) + 1
  });
  return Object.entries(map).map(([type, count]) => ({ type, count }));
}

const groupedLifts = (lifts) => {
  if(!lifts) return [];
  const map = {};
  lifts.forEach(l => {
    map[l.type] = (map[l.type] || 0) + 1
  });
  return Object.entries(map).map(([type, count]) => ({ type, count }));
}

const capitalize = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '';
</script>

<template>
  <div class="page">
    <main class="main">
      <div v-if="loading" class="state-box">Loading facilities...</div>
      <div v-else-if="error" class="state-box error">{{ error }}</div>
      <div v-else class="facilities-grid">
        <div v-for="facility in facilities" :key="facility.id" class="facility-card">
          <div class="card-image">
            <img v-if="facility.images && facility.images.length"
            :src="facility.images?.length ? `http://localhost:9194${facility.images[0].downloadUrl}` : notFoundImg" alt="facility" />
            <div v-else class="no-image"><i class="bi bi-image"></i></div>
          </div>
          <div class="card-body">
            <h3>{{ facility.name }}</h3>
            <div class="ski-stats">
              <div class="runs">
                <h4>Ski Runs</h4>
                <div v-for="run in groupedRuns(facility.skiRuns)" :key="run.type" :class="['run-badge', run.type]">
                  {{ capitalize(run.type) }}: {{ run.count }}
                </div>
              </div>
              <div class="lifts">
                <h4>Lifts</h4>
                <div v-for="lift in groupedLifts(facility.liftStructures)" :key="lift.type" class="lift-badge">
                  {{ capitalize(lift.type) }}: {{ lift.count }}
                </div>
              </div>
            </div>
            <p class="status">
              Status:
              <span :class="facility.status === 'OPEN' ? 'open' : 'closed'">
                {{ facility.status === 'OPEN' ? 'Open' : 'Closed' }}
              </span>
            </p>
            <router-link :to="`/facility/${facility.id}`">
              <button class="explore-btn">Explore</button>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: #f0f6ff;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 8px rgba(26, 58, 92, 0.08);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #1a3a5c;
}

nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

nav a {
  text-decoration: none;
  color: #5a7a9a;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}

nav a:hover,
nav a.router-link-active {
  color: #2a5298;
}

.logout-btn {
  background: none;
  border: 1.5px solid rgba(42, 82, 152, 0.2);
  border-radius: 8px;
  color: #5a7a9a;
  font-size: 14px;
  padding: 6px 16px;
  cursor: pointer;
  transition: all 0.2s;
}

.logout-btn:hover {
  border-color: #2a5298;
  color: #2a5298;
}

.main {
  padding: 80px;
}

.state-box {
  text-align: center;
  padding: 80px;
  color: #5a7a9a;
  font-size: 16px;
}

.state-box.error {
  color: #c0392b;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

.facility-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(26, 58, 92, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.facility-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(26, 58, 92, 0.14);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.no-image {
  height: 200px;
  background: linear-gradient(135deg, #e8f0ff, #d0e4ff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8aa8c8;
  font-size: 40px;
}

.card-body {
  padding: 20px;
}

.card-body h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a3a5c;
  margin: 0 0 16px;
}

.ski-stats {
  display: flex;
  gap: 24px;
  margin-bottom: 14px;
}

.ski-stats h4 {
  font-size: 12px;
  font-weight: 600;
  color: #5a7a9a;
  margin: 0 0 8px;
  text-transform: uppercase;
}

.run-badge,
.lift-badge {
  font-size: 13px;
  color: #2a4a6a;
  margin-bottom: 4px;
}

.run-badge.blu {
  color: #2a7fff;
}

.run-badge.rossa {
  color: #e74c3c;
}

.run-badge.nera {
  color: #1a1a1a;
}

.run-badge.verde {
  color: #059652;
}

.status {
  font-size: 13px;
  color: #5a7a9a;
  margin-bottom: 16px;
}

.open {
  color: #059652;
  font-weight: 600;
}

.closed {
  color: #e74c3c;
  font-weight: 600;
}

.explore-btn {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #1a3a5c, #2a5298);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.explore-btn:hover {
  background: linear-gradient(135deg, #2a5298, #63b3f5);
}
</style>