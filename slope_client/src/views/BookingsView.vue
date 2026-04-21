<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const auth = useAuthStore();
const bookings = ref([]);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
    try {
        const res = await fetch(`/api/v1/bookings/booking/${auth.userId}/bookings`, {
            headers: { Authorization: `Bearer ${auth.token}` }
        });
        const data = await res.json();
        if (res.ok) bookings.value = data.data;
        else error.value = data.message;
    } catch {
        error.value = 'Connection error.';
    } finally {
        loading.value = false;
    }
});

const cancelBooking = async (bookingId) => {
    if (!confirm('Cancel this booking?')) return;
    try {
        const res = await fetch(`/api/v1/bookings/booking/${bookingId}/delete`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${auth.token}` }
        });
        if (res.ok) bookingId.value = bookings.value.filter(b => b.id !== bookingId);
        else alert('Could not cancel booking.');
    } catch {
        alert('Connection error.');
    }
};

const logout = () => {
    auth.clearToken();
    router.push('/login');
};

const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB') : '-'; 
</script>

<template>
    <div class="page">

        <main class="main">
            <h2 class="page-title">My Bookings</h2>
            <div v-if="loading" class="state-box">Loading...</div>
            <div v-else-if="error" class="state-box error">{{ error }}</div>
            <div v-else-if="bookings.length === 0" class="empty-state">
                <i class="bi bi-calendar-x"></i>
                <p>You have no bookings yet.</p>
                <router-link to="/home"><button class="explore-btn">Explore Facilities</button></router-link>
            </div>
            <div v-else class="bookings-grid">
                <div v-for="booking in bookings" :key="booking.id" class="booking-card">
                    <div class="booking-header">
                        <span class="facility-name">{{ booking.skiFacility?.name }}</span>
                        <span :class="['status-badge', booking.status?.toLowerCase()]">{{ booking.status }}</span>
                    </div>
                    <div class="booking-details">
                        <div class="detail"><span class="label">Type</span><span>{{ booking.type }}</span></div>
                        <div class="detail"><span class="label">Date</span><span>{{ formatDate(booking.bookingDate)
                        }}</span></div>
                        <div class="detail"><span class="label">Price</span><span>€{{ booking.totalPrice }}</span></div>
                        <div class="detail"><span class="label">Participants</span><span>{{ booking.participants?.length
                            ?? 1 }}</span></div>
                    </div>
                    <div class="booking-actions">
                        <button class="cancel-btn" @click="cancelBooking(booking.id)">
                            <i class="bi bi-trash"></i> Cancel
                        </button>
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
    padding: 40px;
    max-width: 1000px;
    margin: 0 auto;
}

.page-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1a3a5c;
    margin-bottom: 32px;
}

.state-box {
    text-align: center;
    padding: 80px;
    color: #5a7a9a;
}

.state-box.error {
    color: #c0392b;
}

.empty-state {
    text-align: center;
    padding: 80px 20px;
    color: #5a7a9a;
}

.empty-state i {
    font-size: 48px;
    margin-bottom: 16px;
    display: block;
}

.empty-state p {
    font-size: 16px;
    margin-bottom: 24px;
}

.explore-btn {
    padding: 12px 28px;
    background: linear-gradient(135deg, #1a3a5c, #2a5298);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}

.bookings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.booking-card {
    background: #fff;
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(26, 58, 92, 0.08);
}

.booking-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.facility-name {
    font-size: 1rem;
    font-weight: 700;
    color: #1a3a5c;
}

.status-badge {
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 20px;
}

.status-badge.confirmed {
    background: #e6fff3;
    color: #059652;
}

.status-badge.pending {
    background: #fff8e6;
    color: #d68910;
}

.status-badge.cancelled {
    background: #fff0f0;
    color: #c0392b;
}

.booking-details {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
}

.detail {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.label {
    color: #5a7a9a;
    font-weight: 500;
}

.booking-actions {
    display: flex;
    gap: 10px;
}

.cancel-btn {
    flex: 1;
    padding: 9px;
    background: #fff0f0;
    border: 1px solid rgba(220, 53, 69, 0.2);
    border-radius: 8px;
    color: #c0392b;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s;
}

.cancel-btn:hover {
    background: #ffe0e0;
}
</style>