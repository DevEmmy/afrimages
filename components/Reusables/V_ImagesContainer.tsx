import React from "react";
import ImageContent from "./ImageContent";

const V_ImagesContainer = ({ images }: any) => {
  return (
    <div className="flex flex-col gap-5">
      {images.map((image: any, i: number) => {
        return <ImageContent {...image} key={i} />;
      })}
    </div>
  );
};

export default V_ImagesContainer;
