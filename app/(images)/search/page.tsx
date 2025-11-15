"use client";
import React, { useState, Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import H_ImagesContainer from '@/components/Reusables/H_ImagesContainer';
import ImageContent, { ImageContentProps } from '@/components/Reusables/ImageContent';
import { useSearchAssets, mapSearchResultToImageContent, SearchResponse } from '@/components/hooks/useSearchAssets';
import { useImages } from '@/components/hooks/useImages';
import { 
  Filter, 
  Sort, 
  Grid3, 
  RowVertical, 
  SearchNormal,
  ArrowDown2,
  Star1,
  Calendar,
  Camera
} from 'iconsax-react';

const PageContent = () => {
  const query = useSearchParams();
  const searchQuery = query.get("query") || "";
  const { refetchImage } = useImages();
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Use the search hook
  const { data: searchResults, isLoading, error, isFetching } = useSearchAssets(searchQuery, currentPage, 20);

  const categories = [
    'Nature', 'People', 'Architecture', 'Food', 'Travel', 'Business', 'Technology', 'Art'
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'free', label: 'Free Only' },
    { value: 'paid', label: 'Paid Only' },
    { value: 'under10', label: 'Under $10' },
    { value: '10to50', label: '$10 - $50' },
    { value: 'over50', label: 'Over $50' }
  ];

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange('all');
    setSortBy('relevance');
  };

  // Loading state
  if (isLoading && !searchResults) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Searching for "{searchQuery}"...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load search results</p>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  const results = (searchResults as unknown as SearchResponse)?.data || [];
  const totalResults = (searchResults as unknown as SearchResponse)?.pagination?.total || 0;
  const hasMorePages = searchResults ? currentPage < (searchResults as unknown as SearchResponse).pagination.totalPages : false;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <SearchNormal size={24} className="text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">
                Search Results
              </h1>
            </div>
            <div className="flex items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Grid3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <RowVertical size={20} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all duration-300">
                  <Sort size={16} />
                  <span className="text-sm font-medium">
                    {sortOptions.find(opt => opt.value === sortBy)?.label}
                  </span>
                  <ArrowDown2 size={16} />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  showFilters 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <Filter size={16} />
                <span className="text-sm font-medium">Filters</span>
              </button>
            </div>
          </div>

          {/* Search Query Display */}
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>
              Results for <span className="font-semibold text-gray-900">"{searchQuery}"</span>
            </span>
            <span>•</span>
            <span>{totalResults.toLocaleString()} images found</span>
            {isFetching && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current"></div>
                  Updating...
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 sticky top-32">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([...selectedCategories, category]);
                            } else {
                              setSelectedCategories(selectedCategories.filter(c => c !== category));
                            }
                          }}
                          className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="priceRange"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button 
                  onClick={handleClearFilters}
                  className="w-full py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
            {/* Results Stats */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{totalResults.toLocaleString()} results</span>
                {selectedCategories.length > 0 && (
                  <>
                    <span>•</span>
                    <span>{selectedCategories.length} categories selected</span>
                  </>
                )}
                {currentPage > 1 && (
                  <>
                    <span>•</span>
                    <span>Page {currentPage}</span>
                  </>
                )}
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star1 size={14} className="text-yellow-400" />
                  <span>4.8 avg rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>Updated today</span>
                </div>
              </div>
            </div>

            {/* Results Container */}
            {results.length > 0 ? (
              <>
                <div className={`${
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                    : 'space-y-4'
                }`}>
                  {results.map((result) => {
                    const imageContent = mapSearchResultToImageContent(result);
                    return (
                      <ImageContent 
                        key={imageContent._id} 
                        {...imageContent} 
                        onRefetch={() => refetchImage(imageContent._id)}
                      />
                    );
                  })}
                </div>

                {/* Load More */}
                {hasMorePages && (
                  <div className="text-center mt-12">
                    <button 
                      onClick={handleLoadMore}
                      disabled={isFetching}
                      className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                    >
                      {isFetching ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                          Loading...
                        </>
                      ) : (
                        'Load More Images'
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <Camera size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any images matching "{searchQuery}"
                </p>
                <div className="text-sm text-gray-500">
                  <p>Try:</p>
                  <ul className="mt-2 space-y-1">
                    <li>• Using different keywords</li>
                    <li>• Checking your spelling</li>
                    <li>• Using more general terms</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <PageContent />
    </Suspense>
  );
};

export default page; 