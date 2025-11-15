import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/app/utils/axiosConfig';
import { useUserStore } from './useUserStore';
import type { UseQueryOptions } from '@tanstack/react-query';
import { toastSuccess } from '../Micro/toastUtils';
import { useEffect } from 'react';

const replaceRoute = ()=>{
    if(typeof window !== 'undefined'){
        window.location.href = '/';
    }
}

// Interfaces (import from types if available)
export interface ILoginRequest {
    email: string;
    password: string;
}
export interface IRegisterRequest {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    role: string;
}
export interface IUserProfile {
    socialLinks: {
        instagram: string | null;
        twitter: string | null;
        behance: string | null;
        linkedin: string | null;
    };
    subscription: {
        plan: string;
        isActive: boolean;
        expiresAt: string | null;
    };
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: 'user' | 'admin' | 'moderator' | 'creator';
    isVerified: boolean;
    avatarUrl: string | null;
    bio: string;
    website: string | null;
    uploads: any[];
    downloads: any[];
    bookmarks: any[];
    collections: any[];
    credits: number;
    totalEarnings: number;
    createdAt: string;
    updatedAt: string;
    username: string;
    location: string;
    coverImage: string;
    // profileImage: string;
}
export interface IAuthResponse {
    user: IUserProfile;
    token: string;
    refreshToken: string;
}

// ... other interfaces as needed

const getProfile = async () => {
    const { data } = await axiosInstance.get<{ data: IAuthResponse['user'] }>('/auth/profile');
    return data.data;
};

export function useProfile() {
    const { setUser, clearUser, token, refreshToken } = useUserStore();
    const { data: profile, ...rest } = useQuery<IAuthResponse['user'], Error, IAuthResponse['user'], ['auth', 'profile']>({
        queryKey: ['auth', 'profile'],
        queryFn: getProfile,
        enabled: true,
        onSuccess: (data: IAuthResponse['user']) => {
            console.log('data', data);
            setUser({ ...data, role: data.role as 'user' | 'admin' | 'moderator' | 'creator' }, token, refreshToken);
        },
        onError: () => {
            clearUser();
        },
    } as UseQueryOptions<IAuthResponse['user'], Error, IAuthResponse['user'], ['auth', 'profile']>);

    useEffect(() => {
        console.log('profile', profile);
        if (profile) {
            setUser({ ...profile, role: profile.role as 'user' | 'admin' | 'moderator' | 'creator' }, token, refreshToken);
        }
    }, [profile]);

    return { ...rest };
}

export function useLogin() {
    const { setUser, clearUser, token, refreshToken } = useUserStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (payload: ILoginRequest) => {
            const { data } = await axiosInstance.post<{ data: IAuthResponse }>('/auth/login', payload);
            return data.data;
        },
        onSuccess: async (data) => {
            setUser({ ...data.user, role: data.user.role as 'user' | 'admin' | 'moderator' | 'creator' }, data.token, data.refreshToken);
            await queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
            replaceRoute();
        },
        onError: () => {
            clearUser();
        },
    });
}

export function useRegister() {
    const { setUser, clearUser, token, refreshToken } = useUserStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (payload: IRegisterRequest) => {
            const { data } = await axiosInstance.post<{ data: IAuthResponse }>('/auth/register', payload);
            if (typeof window !== 'undefined') {
                // localStorage.setItem('accessToken', data.token);
                // localStorage.setItem('refreshToken', data.refreshToken);
            }
            return data.data;
        },
        onSuccess: async (data) => {
            console.log('data', data);
            setUser({ ...data.user, role: data.user.role as 'user' | 'admin' | 'moderator' | 'creator' }, data.token, data.refreshToken);
            await queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
            toastSuccess('Account created successfully! Please check your email for verification.');
            replaceRoute();
        },
        onError: () => {
            clearUser();
        },
    });
}

export function useLogout() {
    const { clearUser } = useUserStore();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            await axiosInstance.post('/auth/logout');
            if (typeof window !== 'undefined') {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        },
        onSuccess: () => {
            clearUser();
            queryClient.removeQueries({ queryKey: ['auth', 'profile'] });
            replaceRoute();
        },
    });
}

export function useRefresh() {
    const { setUser, token, refreshToken } = useUserStore();
    const queryClient = useQueryClient();
    return async () => {
        const refreshTokenValue = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null;
        if (!refreshTokenValue) return;
        const { data } = await axiosInstance.post<IAuthResponse>('/auth/refresh', { refreshToken: refreshTokenValue });
        if (typeof window !== 'undefined') {
            localStorage.setItem('accessToken', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);
        }
        setUser({ ...data.user, role: data.user.role as 'user' | 'admin' | 'moderator' | 'creator' }, data.token, data.refreshToken);
        await queryClient.invalidateQueries({ queryKey: ['auth', 'profile'] });
        return data;
    };
}
