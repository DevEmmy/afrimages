"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { SearchNormal, Filter, Star1, Camera, Location, User, Heart } from 'iconsax-react';
import PhotographerName from '@/components/Micro/PhotographerName';

interface Photographer {
  id: string;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  followers: string;
  images: string;
  profileImage: string;
  coverImage: string;
  description: string;
  tags: string[];
}

const photographers: Photographer[] = [
  {
    id: "1",
    name: "Aisha Mwangi",
    location: "Nairobi, Kenya",
    specialty: "Portrait Photography",
    rating: 4.9,
    followers: "12.5K",
    images: "2.3K",
    profileImage: "/images/showcase.jpg",
    coverImage: "/images/banner.jpg",
    description: "Capturing the essence of African beauty through intimate portraits and cultural storytelling.",
    tags: ["Portraits", "Culture", "Fashion", "Documentary"]
  },
  {
    id: "2",
    name: "Kwame Osei",
    location: "Accra, Ghana",
    specialty: "Street Photography",
    rating: 4.8,
    followers: "8.9K",
    images: "1.7K",
    profileImage: "/images/ads.png",
    coverImage: "/images/showcase.jpg",
    description: "Documenting the vibrant street life and urban culture of West Africa.",
    tags: ["Street", "Urban", "Documentary", "Culture"]
  },
  {
    id: "3",
    name: "Fatima Hassan",
    location: "Cairo, Egypt",
    specialty: "Architecture Photography",
    rating: 4.7,
    followers: "15.2K",
    images: "3.1K",
    profileImage: "/images/logo.png",
    coverImage: "/images/banner.jpg",
    description: "Exploring the intersection of ancient and modern architecture across Africa.",
    tags: ["Architecture", "Heritage", "Modern", "Urban"]
  },
  {
    id: "4",
    name: "David Okonkwo",
    location: "Lagos, Nigeria",
    specialty: "Fashion Photography",
    rating: 4.9,
    followers: "22.1K",
    images: "4.5K",
    profileImage: "/images/showcase.jpg",
    coverImage: "/images/ads.png",
    description: "Pioneering African fashion photography with contemporary style and cultural depth.",
    tags: ["Fashion", "Style", "Portraits", "Contemporary"]
  },
  {
    id: "5",
    name: "Sarah Ndlovu",
    location: "Johannesburg, South Africa",
    specialty: "Wildlife Photography",
    rating: 4.6,
    followers: "18.7K",
    images: "5.2K",
    profileImage: "/images/banner.jpg",
    coverImage: "/images/showcase.jpg",
    description: "Capturing the majestic wildlife and natural landscapes of Southern Africa.",
    tags: ["Wildlife", "Nature", "Landscape", "Conservation"]
  },
  {
    id: "6",
    name: "Mohammed Al-Zahra",
    location: "Marrakech, Morocco",
    specialty: "Travel Photography",
    rating: 4.8,
    followers: "11.3K",
    images: "2.8K",
    profileImage: "/images/logo.png",
    coverImage: "/images/banner.jpg",
    description: "Showcasing the diverse landscapes and cultures across the African continent.",
    tags: ["Travel", "Landscape", "Culture", "Adventure"]
  }
];

const PhotographersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'portrait', name: 'Portrait Photography' },
    { id: 'street', name: 'Street Photography' },
    { id: 'architecture', name: 'Architecture Photography' },
    { id: 'fashion', name: 'Fashion Photography' },
    { id: 'wildlife', name: 'Wildlife Photography' },
    { id: 'travel', name: 'Travel Photography' },
  ];

  const filteredPhotographers = photographers.filter(photographer => {
    const matchesSearch = photographer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photographer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         photographer.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            photographer.specialty.toLowerCase().includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Camera size={16} className="text-orange-400" />
              <span className="text-sm font-medium">Discovering African talent since 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Meet Our Photographers
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover talented African photographers capturing the beauty, culture, and stories of our continent
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchNormal className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search photographers by name, location, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
            <div className="text-gray-600 text-sm">Photographers</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
            <div className="text-gray-600 text-sm">Countries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">2.5M+</div>
            <div className="text-gray-600 text-sm">Images</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">4.8</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm border border-gray-100">
          {/* Mobile Dropdown */}
          <div className="md:hidden mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Specialty
            </label>
            <div className="relative">
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
              >
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.name}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            </div>
          </div>

          {/* Desktop Button Filters */}
          <div className="hidden md:flex flex-wrap gap-3">
            {specialties.map((specialty) => (
              <button
                key={specialty.id}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {specialty.name}
              </button>
            ))}
          </div>
        </div>

        {/* Photographers Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Photographers
            </h2>
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredPhotographers.length}</span> photographers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotographers.map((photographer) => (
              <div key={photographer.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={photographer.coverImage}
                    alt={photographer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Follow Button */}
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <Heart size={20} />
                  </button>
                </div>

                {/* Profile Section */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <Image
                        src={photographer.profileImage}
                        alt={photographer.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <PhotographerName 
                        name={photographer.name} 
                        size="lg" 
                        className="mb-1"
                      />
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                        <Location size={16} />
                        <span>{photographer.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star1 size={16} className="text-yellow-400" />
                        <span className="text-sm font-medium">{photographer.rating}</span>
                        <span className="text-gray-500 text-sm">({photographer.followers} followers)</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="mb-4">
                    <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {photographer.specialty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {photographer.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {photographer.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{photographer.images}</div>
                      <div className="text-gray-600 text-xs">Images</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{photographer.followers}</div>
                      <div className="text-gray-600 text-xs">Followers</div>
                    </div>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-16 md:p-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Are you a photographer?
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join our community of talented African photographers and showcase your work to a global audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Apply to Join →
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographersPage; 