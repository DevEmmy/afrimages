"use client";
import React from "react";
import { RiCheckLine } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";

interface PhotographerNameProps {
  name: string;
  isVerified?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  showBadge?: boolean;
}

const PhotographerName: React.FC<PhotographerNameProps> = ({
  name,
  isVerified = true, // Default to true as requested
  size = "sm",
  className = "",
  showBadge = true,
}) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const badgeSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const iconSizes = {
    sm: 10,
    md: 14,
    lg: 16,
  };

  const cogSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-8 h-8",
  };

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-medium ${sizeClasses[size]}`}>
        {name}
      </span>
      
      {isVerified && showBadge && (
        <div className="relative">
          {/* Cog background shape */}
          <div className={`${cogSizes[size]} relative flex items-center justify-center`}>
           
            
            {/* Brighter center badge */}
            <div 
              className={`${badgeSizes[size]} rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg border-2 border-white relative z-10`}
            >
              {/* Main check icon */}
              <RiCheckLine 
                size={iconSizes[size]} 
                className="text-white font-bold drop-shadow-sm" 
              />
              
              {/* Bright glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/40 to-orange-400/20 animate-pulse"></div>
              
              {/* Outer ring glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-orange-400/30 to-orange-500/20 blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographerName; 