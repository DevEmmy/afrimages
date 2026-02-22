import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/app/utils/axiosConfig';
import type { IUserProfile } from './useAuth';

// Extended interface for user details that includes additional fields
export interface IUserDetails extends IUserProfile {
  stats?: {
    images?: number;
    followers?: number;
    downloads?: number;
    favorites?: number;
    rating?: number;
  };
  isFollowed?: boolean;
  images: any[];
  collections: any[];
  downloads: any[];
  favorites: any[];
}

const getUserDetails = async (userId: string): Promise<IUserDetails> => {
  const { data } = await axiosInstance.get<{ data: IUserDetails }>(`/users/${userId}/`);
  return data.data;
};

export function useUserDetails(userId: string) {
  return useQuery<IUserDetails, Error, IUserDetails, ['user', 'details', string]>({
    queryKey: ['user', 'details', userId],
    queryFn: () => getUserDetails(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
} 