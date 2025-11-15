import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/app/utils/axiosConfig';

interface FollowUserResponse {
  success: boolean;
  message: string;
  isFollowed: boolean;
}

const followUser = async (userId: string): Promise<FollowUserResponse> => {
  const { data } = await axiosInstance.post<{ data: FollowUserResponse }>(`/users/${userId}/follow`);
  return data.data;
};

const unfollowUser = async (userId: string): Promise<FollowUserResponse> => {
  const { data } = await axiosInstance.delete<{ data: FollowUserResponse }>(`/users/${userId}/follow`);
  return data.data;
};

export function useFollowUser(userId: string) {
  const queryClient = useQueryClient();

  const followMutation = useMutation({
    mutationFn: () => followUser(userId),
    onSuccess: () => {
      // Invalidate and refetch user details
      queryClient.invalidateQueries({ queryKey: ['user', 'details', userId] });
    },
  });

  const unfollowMutation = useMutation({
    mutationFn: () => unfollowUser(userId),
    onSuccess: () => {
      // Invalidate and refetch user details
      queryClient.invalidateQueries({ queryKey: ['user', 'details', userId] });
    },
  });

  const toggleFollow = async (isCurrentlyFollowed: boolean) => {
    if (isCurrentlyFollowed) {
      return unfollowMutation.mutateAsync();
    } else {
      return followMutation.mutateAsync();
    }
  };

  return {
    follow: followMutation.mutateAsync,
    unfollow: unfollowMutation.mutateAsync,
    toggleFollow,
    isLoading: followMutation.isPending || unfollowMutation.isPending,
    error: followMutation.error || unfollowMutation.error,
  };
} 