import axiosInstance from './axiosConfig';

/**
 * Track a view for an image
 * @param imageId - The ID of the image being viewed
 * @param onSuccess - Optional callback to execute after successful tracking
 */
export const trackImageView = async (
  imageId: string, 
  onSuccess?: () => void
): Promise<void> => {
  try {
    // Check if we've already tracked this view in this request
    const requestKey = `view-request-${imageId}`;
    if (sessionStorage.getItem(requestKey)) {
      console.log(`View already tracked for image: ${imageId}`);
      return;
    }

    console.log(`Tracking view for image: ${imageId}`);
    await axiosInstance.patch(`/assets/${imageId}/views`);
    console.log(`Successfully tracked view for image: ${imageId}`);
    
    // Mark this request as tracked
    sessionStorage.setItem(requestKey, 'true');
    
    // Execute success callback if provided
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error('Failed to track image view:', error);
    // Don't throw error to avoid breaking the user experience
  }
};

/**
 * Track a download for an image
 * @param imageId - The ID of the image being downloaded
 * @param onSuccess - Optional callback to execute after successful tracking
 */
export const trackImageDownload = async (
  imageId: string, 
  onSuccess?: () => void
): Promise<void> => {
  try {
    // Check if we've already tracked this download in this request
    const requestKey = `download-request-${imageId}`;
    if (sessionStorage.getItem(requestKey)) {
      console.log(`Download already tracked for image: ${imageId}`);
      return;
    }

    console.log(`Tracking download for image: ${imageId}`);
    await axiosInstance.patch(`/assets/${imageId}/downloads`);
    console.log(`Successfully tracked download for image: ${imageId}`);
    
    // Mark this request as tracked
    sessionStorage.setItem(requestKey, 'true');
    
    // Execute success callback if provided
    if (onSuccess) {
      onSuccess();
    }
  } catch (error) {
    console.error('Failed to track image download:', error);
    // Don't throw error to avoid breaking the user experience
  }
};

/**
 * Enhanced download function that tracks the download and then downloads the file
 * @param imageId - The ID of the image
 * @param imageUrl - The URL of the image to download
 * @param fileName - The filename for the download
 * @param size - The size variant being downloaded
 * @param onSuccess - Optional callback to execute after successful tracking
 */
export const downloadImageWithTracking = async (
  imageId: string,
  imageUrl: string,
  fileName: string,
  size: string = 'original',
  onSuccess?: () => void
): Promise<void> => {
  // Track the download first
  await trackImageDownload(imageId, onSuccess);
  
  // Then proceed with the actual download
  const forceDownloadUrl = imageUrl?.replace(
    "/upload/",
    `/upload/fl_attachment:${fileName}_${size}/`
  );

  const link = document.createElement("a");
  link.href = forceDownloadUrl || imageUrl;
  link.setAttribute("download", `${fileName}_${size}.jpg`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Clear tracking flags for a specific image or all images
 * @param imageId - Optional image ID to clear flags for. If not provided, clears all tracking flags
 */
export const clearTrackingFlags = (imageId?: string): void => {
  if (imageId) {
    // Clear flags for specific image
    sessionStorage.removeItem(`view-tracked-${imageId}`);
    sessionStorage.removeItem(`viewport-view-tracked-${imageId}`);
    sessionStorage.removeItem(`view-request-${imageId}`);
    sessionStorage.removeItem(`download-request-${imageId}`);
    console.log(`Cleared tracking flags for image: ${imageId}`);
  } else {
    // Clear all tracking flags
    const keys = Object.keys(sessionStorage);
    keys.forEach(key => {
      if (key.includes('view-tracked-') || 
          key.includes('viewport-view-tracked-') || 
          key.includes('view-request-') || 
          key.includes('download-request-')) {
        sessionStorage.removeItem(key);
      }
    });
    console.log('Cleared all tracking flags');
  }
};

/**
 * Check if a user has favorited an image based on the favoritedBy array
 * @param favoritedBy - Array of user IDs who have favorited the image
 * @param userId - Current user's ID
 * @returns boolean indicating if the user has favorited the image
 */
export const isImageFavoritedByUser = (favoritedBy: string[] = [], userId?: string): boolean => {
  if (!userId || !favoritedBy) return false;
  return favoritedBy.includes(userId);
};

/**
 * Toggle favorite/like status for an image
 * @param assetId - The ID of the image to toggle favorite status
 * @param onSuccess - Optional callback to execute after successful toggle
 */
export const toggleImageFavorite = async (
  assetId: string,
  onSuccess?: (isFavorited: boolean) => void
): Promise<{ isFavorited: boolean } | null> => {
  try {
    console.log(`Toggling favorite for image: ${assetId}`);
    const response = await axiosInstance.patch(`/assets/${assetId}/favorites/toggle`, {});
    console.log(`Successfully toggled favorite for image: ${assetId}`);
    
    // The response should contain the updated favoritedBy array or isFavorited boolean
    const isFavorited = response.data?.data?.isFavorited || 
                       response.data?.data?.favoritedBy?.includes(response.data?.data?.currentUserId) || 
                       false;
    
    // Execute success callback if provided
    if (onSuccess) {
      onSuccess(isFavorited);
    }
    
    return { isFavorited };
  } catch (error) {
    console.error('Failed to toggle image favorite:', error);
    // Don't throw error to avoid breaking the user experience
    return null;
  }
}; 