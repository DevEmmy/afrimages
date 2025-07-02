import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IUserProfile } from './useAuth';

interface UserStore {
  user: IUserProfile | null;
  token: string;
  refreshToken: string;
  setUser: (user: IUserProfile, token: string, refreshToken: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      token: '',
      refreshToken: '',
      setUser: (user, token, refreshToken) => set({ user, token, refreshToken }),
      clearUser: () => set({ user: null, token: '', refreshToken: '' }),
    }),
    {
      name: 'user-store', // name of the item in storage
      partialize: (state) => ({ user: state.user, token: state.token, refreshToken: state.refreshToken }),
    }
  )
); 