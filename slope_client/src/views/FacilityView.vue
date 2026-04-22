<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

const facility = ref(null);
const loading = ref(true);
const error = ref('');
const booking = ref({ startDate: '', type: 'DAILY', participants: [] });
const bookingError = ref('');
const bookingSuccess = ref(false);
const bookingLoading = ref(false);

const today = new Date().toISOString().split('T')[0]

onMounted(async () => {
    try {
        const res = await fetch(`/api/v1/skifacilities/skifacility/${route.params.id}/skifacility`, {
            headers: { Authorization: `Bearer ${auth.token}` }
        });
        const data = await res.json();
        if (res.ok) facility.value = data.data;
        else error.value = data.message;
    } catch {
        error.value = 'Connection error.';
    } finally {
        loading.value = false;
    }
});

const submitBooking = async () => {
    if (!booking.value.startDate) {
        bookingError.value = 'Please select a date.';
        return;
    }
    bookingError.value = '';
    bookingLoading.value = true;
    try {
        const res = await fetch(`/api/v1/bookings/booking?userId=${auth.userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', Authorization: `Bearer ${auth.token}`
            },
            body: JSON.stringify({
                skiFacilityId: Number(route.params.id),
                startDate: booking.value.startDate,
                type: booking.value.type,
                participants: booking.value.participants
            })
        });
        const data = await res.json();
        if (res.ok) {
            bookingSuccess.value = true;
            setTimeout(() => router.push('/bookings'), 2000)
        } else
            bookingError.value = data.message || 'Booking failed.';
    } catch {
        bookingError.value = 'Connection error.';
    } finally {
        bookingLoading.value = false;
    }
}

const logout = () => {
    auth.clearToken();
    router.push('/login');
}

const statusClass = (s) => s ? 'open' : 'closed';
const statusLabel = (s) => s ? 'Open' : 'Closed';
</script>

<template>
    <div class="page">

        <main class="main">
            <div v-if="loading" class="state-box">Loading...</div>
            <div v-else-if="error" class="state-box error">{{ error }}</div>
            <div v-else-if="facility" class="content">

                <h2 class="facility-name">{{ facility.name }}</h2>

                <div class="tables-row">
                    <!-- Ski Runs table -->
                    <div class="table-box">
                        <h3>Ski Runs</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="run in facility.skiRuns" :key="run.id">
                                    <td>{{ run.name }}</td>
                                    <td>{{ run.difficulty }}</td>
                                    <td :class="statusClass(run.status)">{{ statusLabel(run.status) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Lift Structures table -->
                    <div class="table-box">
                        <h3>Lift Structures</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Seats</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="lift in facility.liftStructures" :key="lift.id">
                                    <td>{{ lift.name }}</td>
                                    <td>{{ lift.type }}</td>
                                    <td>{{ lift.seats }}</td>
                                    <td :class="statusClass(lift.status)">{{ statusLabel(lift.status) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Booking form -->
                <div class="booking-box">
                    <h3>Book a Ski Pass</h3>
                    <div v-if="bookingSuccess" class="success-banner"><i class="bi bi-check-circle"></i> Booking
                        confirmed! Redirecting...</div>
                    <div v-if="bookingError" class="error-banner"><i class="bi bi-exclamation-circle"></i> {{
                        bookingError }}</div>

                    <div class="form-group">
                        <label>Pass Type</label>
                        <select v-model="booking.type">
                            <option value="DAILY">Daily</option>
                            <option value="WEEKLY">Weekly</option>
                            <option value="MONTHLY">Monthly</option>
                            <option value="ANNUAL">Annual</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Start Date</label>
                        <input type="date" v-model="booking.startDate" :min="today" />
                    </div>

                    <button class="book-btn" @click="submitBooking" :disabled="bookingLoading">
                        <span v-if="!bookingLoading">Confirm Booking</span>
                        <span v-else class="spinner"></span>
                    </button>
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
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    color: #1a3a5c;
    letter-spacing: 0.1em;
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
}

.logout-btn:hover {
    border-color: #2a5298;
    color: #2a5298;
}

.main {
    padding: 80px;
    max-width: 1000px;
    margin: 0 auto;
}

.state-box {
    text-align: center;
    padding: 80px;
    color: #5a7a9a;
}

.state-box.error {
    color: #c0392b;
}

.facility-name {
    font-size: 2rem;
    font-weight: 700;
    color: #1a3a5c;
    margin-bottom: 32px;
}

.tables-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
}

.table-box {
    background: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(26, 58, 92, 0.07);
}

.table-box h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #1a3a5c;
    margin: 0 0 16px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th {
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    color: #5a7a9a;
    text-transform: uppercase;
    padding: 8px 10px;
    border-bottom: 1.5px solid #e8f0ff;
}

td {
    padding: 10px;
    font-size: 14px;
    color: #2a4a6a;
    border-bottom: 1px solid #f0f6ff;
}

.open {
    color: #059652;
    font-weight: 600;
}

.closed {
    color: #e74c3c;
    font-weight: 600;
}

.booking-box {
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 2px 12px rgba(26, 58, 92, 0.08);
    max-width: 480px;
}

.booking-box h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #1a3a5c;
    margin: 0 0 24px;
}

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

.form-group select,
.form-group input {
    width: 100%;
    padding: 10px 14px;
    font-size: 14px;
    border: 1.5px solid rgba(42, 82, 152, 0.2);
    border-radius: 8px;
    color: #1a3a5c;
    background: #f8fbff;
    outline: none;
    box-sizing: border-box;
}

.form-group select:focus,
.form-group input:focus {
    border-color: #63b3f5;
    box-shadow: 0 0 0 3px rgba(99, 179, 245, 0.15);
}

.book-btn {
    width: 100%;
    padding: 13px;
    background: linear-gradient(135deg, #1a3a5c, #2a5298);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
}

.book-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #2a5298, #63b3f5);
}

.book-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.success-banner {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f0fff8;
    border: 1px solid rgba(5, 150, 82, 0.2);
    border-radius: 8px;
    color: #059652;
    font-size: 13px;
    padding: 10px 14px;
    margin-bottom: 20px;
}

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

.spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>