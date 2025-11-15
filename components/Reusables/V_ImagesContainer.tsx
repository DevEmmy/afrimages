import React from "react";
import ImageContent from "./ImageContent";

interface V_ImagesContainerProps {
  images: any[];
  onRefetch?: (imageId: string) => void;
}

const V_ImagesContainer = ({ images, onRefetch }: V_ImagesContainerProps) => {
  return (
    <div className="flex flex-col gap-5">
      {images.map((image: any, i: number) => {
        return (
          <ImageContent 
            {...image} 
            key={i} 
            onRefetch={() => onRefetch?.(image._id)}
          />
        );
      })}
    </div>
  );
};

export default V_ImagesContainer;
