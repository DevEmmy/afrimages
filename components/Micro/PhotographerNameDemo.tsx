"use client";
import React from "react";
import PhotographerName from "./PhotographerName";

const PhotographerNameDemo: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Photographer Name Component Demo</h2>
      
      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Different Sizes:</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-20">Small:</span>
            <PhotographerName name="Aisha Mwangi" size="sm" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-20">Medium:</span>
            <PhotographerName name="Kwame Osei" size="md" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-20">Large:</span>
            <PhotographerName name="Fatima Hassan" size="lg" />
          </div>
        </div>
      </div>

      {/* Verified vs Unverified */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Verification Status:</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-20">Verified:</span>
            <PhotographerName name="David Okonkwo" isVerified={true} />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-20">Unverified:</span>
            <PhotographerName name="Sarah Johnson" isVerified={false} />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 w-20">No Badge:</span>
            <PhotographerName name="Michael Chen" showBadge={false} />
          </div>
        </div>
      </div>

      {/* In different contexts */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-700">Usage Examples:</h3>
        
        {/* Card context */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <PhotographerName name="Aisha Mwangi" size="sm" />
              <p className="text-xs text-gray-500">Portrait Photography</p>
            </div>
          </div>
        </div>

        {/* Header context */}
        <div className="bg-gray-900 text-white p-4 rounded-xl">
          <PhotographerName name="Kwame Osei" size="lg" className="text-white" />
          <p className="text-sm text-gray-300 mt-1">Street Photography • Accra, Ghana</p>
        </div>

        {/* List context */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <PhotographerName name="Fatima Hassan" size="md" />
            <span className="text-sm text-gray-500">4.8 ★</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <PhotographerName name="David Okonkwo" size="md" />
            <span className="text-sm text-gray-500">4.9 ★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerNameDemo; 