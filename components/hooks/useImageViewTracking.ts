import { useEffect, useRef } from 'react';
import { trackImageView } from '@/app/utils/trackingUtils';

/**
 * Hook to track image views when they come into viewport
 * @param imageId - The ID of the image to track
 * @param enabled - Whether tracking is enabled (default: true)
 * @param onSuccess - Optional callback to execute after successful tracking
 */
export const useImageViewTracking = (
  imageId: string, 
  enabled: boolean = true,
  onSuccess?: () => void
) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!enabled || !imageId || hasTracked.current) return;

    // Check if we've already tracked this view in this session
    const sessionKey = `viewport-view-tracked-${imageId}`;
    const hasTrackedInSession = sessionStorage.getItem(sessionKey);
    
    if (hasTrackedInSession) {
      hasTracked.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackImageView(imageId, onSuccess);
            // Mark as tracked in session storage
            sessionStorage.setItem(sessionKey, 'true');
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is visible
        rootMargin: '50px', // Start tracking 50px before the image comes into view
      }
    );

    const element = document.querySelector(`[data-image-id="${imageId}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [imageId, enabled]); // Remove onSuccess from dependencies to prevent re-runs

  return { hasTracked: hasTracked.current };
}; 