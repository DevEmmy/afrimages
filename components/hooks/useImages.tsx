import { useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/app/utils/axiosConfig';

export interface ImageContentProps {
  _id: string;
  title: string;
  variants: { thumbnail?: string };
  uploader: { firstName: string; avatarUrl?: string };
  originalUrl?: string;
  favoritedBy?: string[];
  likesCount?: number;
}

interface AssetApiResponse {
  success: boolean;
  data: any[];
  count: number;
}

const DEFAULT_USER = {
  firstName: 'Unknown',
  profilePicture: '/images/profile-placeholder.png',
};

function mapApiToImageContentProps(asset: any): ImageContentProps {
  return {
    _id: asset._id,
    title: asset.title,
    variants: { thumbnail: asset.variants?.thumbnail || asset.originalUrl },
    uploader: asset.userId
      ? {
          firstName: asset.userId.firstName || DEFAULT_USER.firstName,
          avatarUrl: asset.userId.profilePicture || DEFAULT_USER.profilePicture,
        }
      : { firstName: DEFAULT_USER.firstName, avatarUrl: DEFAULT_USER.profilePicture },
    originalUrl: asset.originalUrl,
    favoritedBy: asset.favoritedBy || [],
    likesCount: asset.likes || 0,
  };
}

const fetchImages = async (): Promise<ImageContentProps[]> => {
  const { data } = await axiosInstance.get<AssetApiResponse>('/assets');
  return data.data;
};

export function useImages() {
  const queryClient = useQueryClient();
  
  const {
    data: images = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<any>({
    queryKey: ['assets', 'images'],
    queryFn: fetchImages,
  });

  // Function to invalidate and refetch specific image
  const refetchImage = (imageId: string) => {
    // Invalidate the specific image query
    queryClient.invalidateQueries({ queryKey: ['assets', 'image', imageId] });
    // Also invalidate the images list to update any cached data
    queryClient.invalidateQueries({ queryKey: ['assets', 'images'] });
  };

  return { images, isLoading, isError, error, refetch, refetchImage };
} 