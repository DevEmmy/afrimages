import { useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/app/utils/axiosConfig';

export interface ImageDetails {
  _id: string;
  title: string;
  description?: string;
  uploader: {
    _id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    username: string;
    bio: string;
    role: string;
  };
  tags: string[];
  category: string;
  keywords: string[];
  location?: string;
  camera?: string;
  dateTaken?: string;
  license: "free" | "premium" | "exclusive";
  isPremium: boolean;
  price?: number;
  isPublic: boolean;
  allowCommercialUse: boolean;
  requireAttribution: boolean;
  modelRelease: boolean;
  propertyRelease: boolean;
  cloudinaryId: string;
  format?: string;
  resolution?: string;
  fileSize?: string;
  originalUrl: string;
  variants: {
    thumbnail?: string;
    medium?: string;
    large?: string;
    webp?: string;
    small?: string;
  };
  width?: number;
  height?: number;
  sizeInBytes?: number;
  views: number;
  downloads: number;
  likes: number;
  favoritedBy: string[];
  isApproved: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface ImageDetailsResponse {
  success: boolean;
  data: ImageDetails;
}

const fetchImageDetails = async (id: string): Promise<ImageDetails> => {
  const { data } = await axiosInstance.get<ImageDetailsResponse>(`/assets/${id}`);
  return data.data;
};

export function useImageDetails(id: string) {
  const queryClient = useQueryClient();
  
  const {
    data: image,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<ImageDetails, Error>({
    queryKey: ['assets', 'image', id],
    queryFn: () => fetchImageDetails(id),
    enabled: !!id,
  });

  // Function to invalidate and refetch this specific image
  const invalidateAndRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ['assets', 'image', id] });
    // Also invalidate the images list to update any cached data
    queryClient.invalidateQueries({ queryKey: ['assets', 'images'] });
  };

  return { image, isLoading, isError, error, refetch, invalidateAndRefetch };
} 