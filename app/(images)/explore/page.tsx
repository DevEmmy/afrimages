"use client";
import H_ImagesContainer from '@/components/Reusables/H_ImagesContainer'
import React, { useState } from 'react'
import { SearchNormal, Filter, Grid3, RowVertical, Star1 } from 'iconsax-react'

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', count: '2.5K' },
    { id: 'people', name: 'People', count: '856' },
    { id: 'nature', name: 'Nature', count: '1.2K' },
    { id: 'food', name: 'Food & Drinks', count: '432' },
    { id: 'animals', name: 'Animals', count: '678' },
    { id: 'urban', name: 'Urban/City', count: '543' },
    { id: 'abstract', name: 'Abstract', count: '234' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star1 size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">Discovering African creativity since 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Explore African Creativity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover millions of authentic African images, from traditional culture to modern urban life
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <SearchNormal className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search for images, photographers, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-32 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">2.5M+</div>
            <div className="text-gray-600 text-sm">Total Images</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-gray-600 text-sm">Creators</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
            <div className="text-gray-600 text-sm">Royalty-Free</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
            <div className="text-gray-600 text-sm">Support</div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select className="appearance-none bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium pr-10 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="trending">Trending</option>
                  <option value="downloads">Most Downloaded</option>
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button className="p-2 rounded-lg bg-white text-gray-900 shadow-sm">
                  <Grid3 size={20} />
                </button>
                <button className="p-2 rounded-lg text-gray-500 hover:text-gray-700">
                  <RowVertical size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Images' : categories.find(c => c.id === selectedCategory)?.name + ' Images'}
              </h2>
              <p className="text-gray-600 mt-1">
                Showing <span className="font-semibold">1-24</span> of <span className="font-semibold">2,456</span> results
              </p>
            </div>
          </div>
          
          <H_ImagesContainer />
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 mx-auto">
            Load More Images
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage 