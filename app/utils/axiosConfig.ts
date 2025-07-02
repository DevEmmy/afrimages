import axios from "axios";
import { useUserStore } from '@/components/hooks/useUserStore';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        
    },
});

axiosInstance.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const { token } = useUserStore.getState();
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});

export default axiosInstance;