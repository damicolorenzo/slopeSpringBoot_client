<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const auth = useAuthStore();
const user = ref(null);
const loading = ref(true);
const error = ref('');

onMounted(async () => {
    try {
        const res = await fetch(`/api/v1/users/${auth.userId}/user`, {
            headers: { Authorization: `Bearer ${auth.token}` }
        });
        console.log(res);
        const data = await res.json();
        if (res.ok) user.value = data.data;
        else error.value = data.message;
    } catch {
        error.value = 'Connection error.';
    } finally {
        loading.value = false;
    }
})

const logout = () => { auth.clearToken(); router.push('/login') };
const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB') : '—';
</script>

<template>
    <div class="page">

        <main class="main">
            <div v-if="loading" class="state-box">Loading...</div>
            <div v-else-if="error" class="state-box error">{{ error }}</div>
            <div v-else-if="user" class="profile-layout">

                <div class="profile-card">
                    <div class="avatar">
                        <i class="bi bi-person-circle"></i>
                    </div>
                    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
                    <p class="username">@{{ user.username }}</p>
                </div>

                <div class="info-card">
                    <h3>Personal Information</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <span class="info-label"><i class="bi bi-person"></i> First Name</span>
                            <span class="info-value">{{ user.firstName }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label"><i class="bi bi-person"></i> Last Name</span>
                            <span class="info-value">{{ user.lastName }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label"><i class="bi bi-envelope"></i> Email</span>
                            <span class="info-value">{{ user.email }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label"><i class="bi bi-telephone"></i> Phone</span>
                            <span class="info-value">{{ user.phoneNumber || '—' }}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label"><i class="bi bi-calendar"></i> Birth Date</span>
                            <span class="info-value">{{ formatDate(user.birthDate) }}</span>
                        </div>
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
    max-width: 900px;
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

.profile-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 24px;
}

.profile-card {
    background: #fff;
    border-radius: 16px;
    padding: 32px 20px;
    box-shadow: 0 2px 12px rgba(26, 58, 92, 0.08);
    text-align: center;
}

.avatar i {
    font-size: 72px;
    color: #63b3f5;
}

.profile-card h2 {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1a3a5c;
    margin: 16px 0 4px;
}

.username {
    font-size: 14px;
    color: #5a7a9a;
}

.info-card {
    background: #fff;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 2px 12px rgba(26, 58, 92, 0.08);
}

.info-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: #1a3a5c;
    margin: 0 0 24px;
}

.info-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f0f6ff;
}

.info-item:last-child {
    border-bottom: none;
}

.info-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #5a7a9a;
}

.info-label i {
    color: #63b3f5;
}

.info-value {
    font-size: 14px;
    color: #1a3a5c;
    font-weight: 500;
}

@media (max-width: 700px) {
    .profile-layout {
        grid-template-columns: 1fr;
    }
}
</style>