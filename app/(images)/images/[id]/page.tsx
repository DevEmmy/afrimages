"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Heart, 
  ArrowDown, 
  Share, 
  Calendar, 
  Camera, 
  Location, 
  User, 
  Star1,
  ArrowRight3,
  Bookmark,
  More
} from 'iconsax-react';

const ImageDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState('standard');

  const licenses = [
    {
      id: 'standard',
      name: 'Standard License',
      price: 'Free',
      description: 'Personal and commercial use, attribution required',
      features: ['Personal projects', 'Social media', 'Websites', 'Print materials']
    },
    {
      id: 'extended',
      name: 'Extended License',
      price: '$29.99',
      description: 'Unlimited commercial use, no attribution required',
      features: ['All standard features', 'Unlimited commercial use', 'No attribution required', 'Resale rights']
    }
  ];

  const relatedImages = [
    { id: 1, src: '/images/banner.jpg', title: 'African Sunset' },
    { id: 2, src: '/images/showcase.jpg', title: 'Market Scene' },
    { id: 3, src: '/images/ads.png', title: 'Portrait' },
    { id: 4, src: '/images/logo.png', title: 'Landscape' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300">
                <ArrowRight3 size={20} className="rotate-180" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">Image Details</h1>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isBookmarked 
                    ? 'text-orange-500 bg-orange-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Bookmark size={20} />
              </button>
              <button className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300">
                <Share size={20} />
              </button>
              <button className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300">
                <More size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative">
                <Image 
                  src="/images/banner.jpg" 
                  width={800} 
                  height={600} 
                  alt="A Man having nice time with his woman" 
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                      isLiked 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  A Man having nice time with his woman
                </h1>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A beautiful moment captured between two people sharing a special connection. This image showcases the warmth and intimacy of human relationships, perfect for romantic themes, lifestyle content, or emotional storytelling.
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Published June 2, 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Camera size={16} />
                    <span>iPhone 15 Pro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Location size={16} />
                    <span>Lagos, Nigeria</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['romance', 'couple', 'lifestyle', 'african', 'love', 'intimacy'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Photographer Info */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Image 
                  src="/images/banner.jpg" 
                  alt="Emmanuel Olaosebikan" 
                  width={60} 
                  height={60} 
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Emmanuel Olaosebikan</h3>
                  <p className="text-sm text-gray-600">Photographer @ Afrimages</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star1 size={14} className="text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8 (127 reviews)</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                <User size={16} />
                View Profile
              </button>
            </div>

            {/* License Selection */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose License</h3>
              <div className="space-y-3">
                {licenses.map((license) => (
                  <div 
                    key={license.id}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedLicense === license.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedLicense(license.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{license.name}</h4>
                      <span className="text-lg font-bold text-gray-900">{license.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{license.description}</p>
                    <ul className="space-y-1">
                      {license.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Download Options</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <ArrowDown size={20} />
                  Download Now
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    {selectedLicense === 'standard' ? 'Free download' : 'Secure payment required'}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Details */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Resolution</span>
                  <span className="font-medium">4000 x 3000 px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">File Size</span>
                  <span className="font-medium">8.2 MB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Format</span>
                  <span className="font-medium">JPEG</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">Lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Images */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <Image 
                    src={image.src} 
                    width={300} 
                    height={200} 
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailPage;

