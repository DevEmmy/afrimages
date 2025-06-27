"use client";
import React, { useState } from "react";
import { RiAddLine, RiHeart2Line, RiDownloadLine, RiUser3Line, RiHeartFill } from "react-icons/ri";
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
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const downloadImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = content.newDimension.url;
    link.download = content.newDimension.url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link href={`/images/${content._id}`} className="block">
      <div className="group relative w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}

        {/* Main Image */}
        <Image
          width={500}
          height={500}
          unoptimized
          src={"/images/showcase.jpg"}
          alt={content.title}
          className={`object-cover w-full h-full transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-105`}
          unselectable="on"
          onLoad={() => setImageLoaded(true)}
          priority={false}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Section - User Info */}
        <div className="absolute top-0 left-0 right-0 p-4 z-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30">
              {content.userId?.profilePicture ? (
                <Image
                  width={32}
                  height={32}
                  src={"/images/showcase.jpg"}
                  alt="profile-picture"
                  className="w-8 h-8 object-cover rounded-full"
                  unoptimized
                />
              ) : (
                <RiUser3Line className="text-white text-sm" />
              )}
            </div>
            <div className="flex flex-col">
              <p className="text-white text-sm font-semibold leading-tight drop-shadow-sm">
                {content.userId?.firstName || "Anonymous"}
              </p>
              <p className="text-white/80 text-xs drop-shadow-sm">Photographer</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Actions and Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-white text-sm font-medium line-clamp-2 leading-tight drop-shadow-sm">
              {content.title || "Lady from the east having a session with her developers on a proposal"}
            </h3>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                onClick={toggleLike}
                aria-label={isLiked ? "Unlike image" : "Like image"}
              >
                {isLiked ? (
                  <RiHeartFill size={16} className="text-red-500" />
                ) : (
                  <RiHeart2Line size={16} />
                )}
              </button>
              <button 
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                aria-label="Add to collection"
              >
                <RiAddLine size={16} />
              </button>
            </div>

            <button 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={downloadImage}
              aria-label="Download image"
            >
              <RiDownloadLine size={14} />
              Download
            </button>
          </div>
        </div>

        {/* Quick Download Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white rounded-full p-4 shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <RiDownloadLine size={28} className="text-gray-800" />
          </div>
        </div>

        {/* Image Info Badge */}
        <div className="absolute top-3 right-3 z-10">
          <div className="px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
            Free
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageContent;
