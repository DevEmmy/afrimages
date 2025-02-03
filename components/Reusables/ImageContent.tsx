"use client";
import React from "react";
import { RiAddLine, RiHeart2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

// Define the interface for the content prop
interface User {
  firstName: string;
  profilePicture: string;
}

interface ImageDimensions {
  url: string;
}

export interface ImageContentProps {
  _id: string;
  title: string;
  newDimension: ImageDimensions;
  userId: User;
}

const ImageContent: React.FC<ImageContentProps> = (content) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = content.newDimension.url;
    link.download = content.newDimension.url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Link href={`/images/${content._id}`}>
      <div className="relative top-0 left-0 w-full -z-0 main-image ">
        <div className="w-full h-full">
          <Image
            width={500}
            height={500}
            unoptimized
            src={"/images/showcase.jpg"}
            alt={content.title}
            className="object-cover w-full h-full rounded-xl"
            unselectable="on"
          />
        </div>

        <div className="image-options">
          <div className="full-overlay" />
          <div className="absolute z-20 flex items-center gap-2 top-3 left-3">
            <Image
              unselectable="on"
              width={30}
              height={30}
              src={"/images/banner.jpg"}
              unoptimized
              alt="profile-picture"
              className="w-[40px] h-[40px] object-cover rounded-full border border-orange400"
            />
            <div className="flex flex-col leading-tight text-white">
              <p className="text-[20px]">{content.userId?.firstName}</p>
            </div>
          </div>
          <div className="absolute z-20 flex  justify-between flex-col w-full px-3 bottom-3">
            <div className="text-white text-[18px] pb-2">
              Lady from the east having a session with her developers on a
              proposal
            </div>

            <div className="flex  justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="img-icon">
                  <RiHeart2Line size={24}/>
                </div>

                <div className="img-icon">
                  <RiAddLine size={24}/>
                </div>
              </div>

              <div className="img-icon text-[20px]" onClick={downloadImage}>
                Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageContent;
