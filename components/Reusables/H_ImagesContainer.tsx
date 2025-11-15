'use client'
import React from "react";
import V_ImagesContainer from "./V_ImagesContainer";
import { useImages } from "@/components/hooks/useImages";
import { ImageContentProps } from "./ImageContent";

const H_ImagesContainer = () => {
  const { images, isLoading, isError, error, refetchImage } = useImages();

  function splitArrayIntoThree(arr: ImageContentProps[]) {
    const chunkSize = Math.ceil(arr.length / 3);
    const images1 = arr.slice(0, chunkSize);
    const images2 = arr.slice(chunkSize, 2 * chunkSize);
    const images3 = arr.slice(2 * chunkSize);
    return { images1, images2, images3 };
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading images...</div>;
  }

  if (isError) {
    return <div className="text-center py-10 text-red-500">Error loading images: {error?.message}</div>;
  }

  const { images1, images2, images3 } = splitArrayIntoThree(images as ImageContentProps[]);

  return (
    <div className="grid gap-5  sm:grid-cols-2 md:grid-cols-3">
      <V_ImagesContainer images={images1} onRefetch={refetchImage} />
      <V_ImagesContainer images={images2} onRefetch={refetchImage} />
      <V_ImagesContainer images={images3} onRefetch={refetchImage} />
    </div>
  );
};

export default H_ImagesContainer;
