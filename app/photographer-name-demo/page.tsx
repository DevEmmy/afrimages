"use client";
import React from "react";
import Nav from "@/components/Widgets/Nav";
import Footer from "@/components/Widgets/Footer";
import PhotographerNameDemo from "@/components/Micro/PhotographerNameDemo";

const PhotographerNameDemoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav transparent={false} />
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
          <PhotographerNameDemo />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PhotographerNameDemoPage; 