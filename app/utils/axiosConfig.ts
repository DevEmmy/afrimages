import axios from "axios";
import { useUserStore } from '@/components/hooks/useUserStore';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/',
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

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (
            typeof window !== 'undefined' &&
            error.response &&
            error.response.status === 401 &&
            !error.config._retry
        ) {
            error.config._retry = true;
            try {
                // Get refreshToken from store or localStorage
                let refreshToken = useUserStore.getState().refreshToken;
                if (!refreshToken) {
                    refreshToken = localStorage.getItem('refreshToken') || '';
                }
                if (!refreshToken) throw new Error('No refresh token');

                // Attempt to refresh token
                const refreshResponse = await axiosInstance.post('/auth/refresh', { refreshToken });
                const { token: newToken, refreshToken: newRefreshToken, user } = refreshResponse.data.data;

                // Update store and localStorage
                if(newToken && newRefreshToken){
                    useUserStore.getState().setUser(user, newToken, newRefreshToken);
                    localStorage.setItem('token', newToken);
                    localStorage.setItem('refreshToken', newRefreshToken);
                }

                // Update the original request's Authorization header
                error.config.headers['Authorization'] = `Bearer ${newToken}`;

                // Retry the original request
                return axiosInstance(error.config);
            } catch (refreshError) {
                // Clear user on refresh failure
                useUserStore.getState().clearUser();
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;