import { useQuery } from '@tanstack/react-query';
import axiosInstance from '@/app/utils/axiosConfig';
import type { ImageContentProps } from '@/components/Reusables/ImageContent';

export interface SearchResult {
  _id: string;
  title: string;
  description?: string;
  variants: {
    thumbnail: string;
    medium?: string;
    small?: string;
  };
  uploader: {
    _id: string;
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    username: string;
  };
  originalUrl: string;
  favoritedBy?: string[];
  likes?: number;
  downloads?: number;
  tags?: string[];
  category?: string;
  createdAt: string;
  isPremium?: boolean;
  price?: number;
  license?: string;
}

export interface PaginationInfo {
  page: number;
  total: number;
  totalPages: number;
  limit: number;
}

export interface SearchResponse {
  success: boolean;
  data: SearchResult[];
  pagination: PaginationInfo;
}

const searchAssets = async (keyword: string, page: number = 1, limit: number = 20): Promise<SearchResponse> => {
  const { data } = await axiosInstance.get<SearchResponse>(`/assets/search?keyword=${encodeURIComponent(keyword)}&page=${page}&limit=${limit}`);
  return data;
};

export function useSearchAssets(keyword: string, page: number = 1, limit: number = 20) {
  return useQuery<SearchResponse, Error>({
    queryKey: ['search', 'assets', keyword, page, limit],
    queryFn: () => searchAssets(keyword, page, limit),
    enabled: !!keyword && keyword.trim().length > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Helper function to map search results to ImageContentProps
export const mapSearchResultToImageContent = (result: SearchResult): ImageContentProps => ({
  _id: result._id,
  title: result.title,
  variants: result.variants,
  uploader: {
    firstName: result.uploader.firstName,
    avatarUrl: result.uploader.avatarUrl || '',
  },
  originalUrl: result.originalUrl,
  favoritedBy: result.favoritedBy || [],
  likesCount: result.likes || 0,
}); 