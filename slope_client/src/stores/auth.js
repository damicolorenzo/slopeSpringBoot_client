import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token') ?? null);

    const setToken = (newToken) => {
        token.value = newToken;
        localStorage.setItem('token', newToken);
    };

    const clearToken = () => {
        token.value = null;
        localStorage.removeItem('token');
    };

    const isLoggedIn = () => !!token.value;

    return { token, setToken, clearToken, isLoggedIn };
});

