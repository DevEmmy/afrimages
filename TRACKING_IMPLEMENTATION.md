# Image View and Download Tracking Implementation

This document describes the implementation of view and download tracking for images in the Afrimages frontend application.

## Overview

The tracking system automatically tracks:
- **Image Views**: When users view images in detail pages or when images come into viewport in lists
- **Image Downloads**: When users download images through the download buttons
- **Image Likes/Favorites**: When users like or unlike images through the heart buttons

## Implementation Details

### 1. Backend Endpoints

The tracking system uses these backend endpoints:
- `PATCH /assets/:id/views` - Track an image view
- `PATCH /assets/:id/downloads` - Track an image download
- `PATCH /assets/:assetId/favorites/toggle` - Toggle image favorite/like status

### 2. Frontend Implementation

#### Utility Functions (`app/utils/trackingUtils.ts`)

- `trackImageView(imageId: string)` - Tracks a view for an image
- `trackImageDownload(imageId: string)` - Tracks a download for an image
- `toggleImageFavorite(assetId: string, onSuccess?)` - Toggles favorite/like status for an image
- `downloadImageWithTracking(imageId, imageUrl, fileName, size)` - Enhanced download function that tracks and downloads

#### Custom Hook (`components/hooks/useImageViewTracking.ts`)

- `useImageViewTracking(imageId, enabled)` - Hook that tracks views when images come into viewport using Intersection Observer

### 3. Component Integration

#### Image Detail Page (`app/(images)/images/[id]/page.tsx`)
- Automatically tracks view when image is loaded using `useEffect`
- Enhanced download buttons that track downloads

#### Image Content Component (`components/Reusables/ImageContent.tsx`)
- Tracks views when images come into viewport using `useImageViewTracking`
- Enhanced download functionality with tracking
- Added `data-image-id` attribute for intersection observer

#### Profile Pages
- Updated to use correct `ImageContentProps` interface
- All image displays now include tracking

### 4. Data Flow

1. **View Tracking**:
   - User navigates to image detail page → `useEffect` triggers view tracking → `invalidateAndRefetch` updates UI
   - User scrolls and image comes into viewport → `useImageViewTracking` triggers view tracking → `onRefetch` updates UI

2. **Download Tracking**:
   - User clicks download button → `downloadImageWithTracking` tracks download → `onRefetch` updates UI → initiates file download

3. **Like/Favorite Tracking**:
   - User clicks heart button → `toggleImageFavorite` toggles like status → optimistic UI update → server response updates `favoritedBy` array → `onRefetch` updates UI

4. **React Query Integration**:
   - Tracking success triggers query invalidation
   - UI automatically updates with fresh data from backend
   - Cache is updated to reflect new view/download/like counts and `favoritedBy` arrays

### 5. Error Handling

- All tracking functions include try-catch blocks
- Errors are logged but don't break user experience
- Failed tracking doesn't prevent image viewing or downloading

### 6. Performance Considerations

- View tracking uses Intersection Observer for efficient viewport detection
- **Duplicate Prevention**: Session storage prevents duplicate tracking requests
- Tracking requests are non-blocking and don't affect UI performance
- React Query provides intelligent caching and background updates
- Query invalidation ensures data consistency across components
- **Tracking Flags**: Each image is tracked only once per session to prevent spam

## Usage Examples

### Basic View Tracking
```typescript
import { trackImageView } from '@/app/utils/trackingUtils';

// Track a view
await trackImageView('image-id-123');
```

### Enhanced Download with Tracking
```typescript
import { downloadImageWithTracking } from '@/app/utils/trackingUtils';

// Download with tracking
await downloadImageWithTracking(
  'image-id-123',
  'https://example.com/image.jpg',
  'my-image',
  'original'
);
```

### Toggle Image Favorite/Like
```typescript
import { toggleImageFavorite, isImageFavoritedByUser } from '@/app/utils/trackingUtils';

// Check if user has favorited an image
const isFavorited = isImageFavoritedByUser(image.favoritedBy, currentUserId);

// Toggle favorite with callback
const result = await toggleImageFavorite('image-id-123', (isFavorited) => {
  console.log(`Image is now ${isFavorited ? 'favorited' : 'unfavorited'}`);
  // Update UI or trigger refetch
});
```

### View Tracking Hook
```typescript
import { useImageViewTracking } from '@/components/hooks/useImageViewTracking';

const MyComponent = ({ imageId }) => {
  useImageViewTracking(imageId);
  
  return <div data-image-id={imageId}>Image content</div>;
};
```

### React Query Integration with Refetching
```typescript
import { useImageDetails } from '@/components/hooks/useImageDetails';
import { trackImageView } from '@/app/utils/trackingUtils';

const ImageDetailPage = ({ imageId }) => {
  const { image, invalidateAndRefetch } = useImageDetails(imageId);
  
  useEffect(() => {
    if (image) {
      trackImageView(imageId, () => {
        // Refetch image details to get updated view count
        invalidateAndRefetch();
      });
    }
  }, [image, imageId, invalidateAndRefetch]);
  
  return <div>{/* Image content */}</div>;
};
```

### Image List with Refetching
```typescript
import { useImages } from '@/components/hooks/useImages';
import ImageContent from '@/components/Reusables/ImageContent';

const ImageList = () => {
  const { images, refetchImage } = useImages();
  
  return (
    <div>
      {images.map(image => (
        <ImageContent 
          key={image._id} 
          {...image} 
          onRefetch={() => refetchImage(image._id)}
        />
      ))}
    </div>
  );
};
```

## Testing

To test the tracking implementation:

1. Open browser developer tools
2. Navigate to images or explore pages
3. Check console for tracking logs:
   - "Tracking view for image: [id]"
   - "Successfully tracked view for image: [id]"
   - "View already tracked for image: [id]" (duplicate prevention)
   - "Tracking download for image: [id]"
   - "Successfully tracked download for image: [id]"

4. Verify that the `data-image-id` attributes are present on image containers
5. Test download functionality and verify tracking logs appear
6. **Like/Favorite Test**: Click heart buttons and verify like status toggles with optimistic updates
7. **Duplicate Prevention Test**: Refresh the page or navigate back - you should see "View already tracked" messages instead of duplicate tracking requests

### Clearing Tracking Flags

To reset tracking for testing:
```typescript
import { clearTrackingFlags } from '@/app/utils/trackingUtils';

// Clear all tracking flags
clearTrackingFlags();

// Clear tracking for specific image
clearTrackingFlags('image-id-123');
```

## Future Enhancements

- Add analytics dashboard to view tracking data
- Implement rate limiting to prevent spam
- Add user session tracking for more detailed analytics
- Consider implementing A/B testing for different tracking strategies 