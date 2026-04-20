import { useAuthStore } from "@/stores/auth";

export const fetchAuth = (url, options = {}) => {
    const auth = useAuthStore();

    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers ?? {}),
            Authorization: `Bearer ${auth.token}`,
        },
    });
}