import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token') ?? null);
    const userId = ref(localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null);

    const setToken = (newToken) => {
        token.value = newToken;
        localStorage.setItem('token', newToken);
    };

    const setUserId = (id) => {
        userId.value = id;
        localStorage.setItem('userId', id);
    };

    const clearToken = () => {
        token.value = null;
        userId.value = null
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };

    const isLoggedIn = () => !!token.value;

    return { token, userId, setToken, setUserId, clearToken, isLoggedIn };
});

