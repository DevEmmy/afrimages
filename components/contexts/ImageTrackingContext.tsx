import React, { createContext, useContext, ReactNode } from 'react';

interface ImageTrackingContextType {
  refetchImage?: (imageId: string) => void;
  refetchImages?: () => void;
}

const ImageTrackingContext = createContext<ImageTrackingContextType>({});

export const useImageTracking = () => {
  const context = useContext(ImageTrackingContext);
  if (!context) {
    throw new Error('useImageTracking must be used within an ImageTrackingProvider');
  }
  return context;
};

interface ImageTrackingProviderProps {
  children: ReactNode;
  refetchImage?: (imageId: string) => void;
  refetchImages?: () => void;
}

export const ImageTrackingProvider: React.FC<ImageTrackingProviderProps> = ({
  children,
  refetchImage,
  refetchImages,
}) => {
  return (
    <ImageTrackingContext.Provider value={{ refetchImage, refetchImages }}>
      {children}
    </ImageTrackingContext.Provider>
  );
}; 