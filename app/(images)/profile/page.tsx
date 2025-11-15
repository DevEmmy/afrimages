"use client";
import React, { useState } from "react";
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import ImageContent, { ImageContentProps } from '@/components/Reusables/ImageContent';
import { Add, Share, Camera, Heart, ArrowDown2, People } from "iconsax-react";
import { useUserStore } from '@/components/hooks/useUserStore';
import { useImages } from '@/components/hooks/useImages';
import Image from "next/image";

type TabType = 'images' | 'collections' | 'downloads' | 'favorites';

const ProfilePage = () => {
  const { user } = useUserStore();
  const { refetchImage } = useImages();
  const isCreator = user?.role === 'creator';
  const [activeTab, setActiveTab] = useState<TabType>(isCreator ? 'images' : 'downloads');
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [activeCollection, setActiveCollection] = useState<any>(null);

  console.log('user', user?.bookmarks);
  // Handler for Add Image (redirect)
  const handleAddImage = () => {
    window.location.href = '/add-image';
  };

  // Handler for opening collection modal
  const openCollection = (collection: any) => {
    setActiveCollection(collection);
    setShowCollectionModal(true);
  };

  // Handler for closing modal
  const closeModal = () => {
    setShowCollectionModal(false);
    setActiveCollection(null);
  };

  // Helper to map user uploads/downloads/bookmarks to ImageContentProps
  const mapToImageContent = (img: any): ImageContentProps => ({
    _id: img._id || img.id || '',
    title: img.title || '',
    variants: { thumbnail: img.url || img.newDimension?.url || img.variants?.thumbnail || '' },
    uploader: {
      firstName: user?.firstName || '',
      avatarUrl: user?.avatarUrl || '',
    },
    originalUrl: img.originalUrl || img.url || '',
    favoritedBy: img.favoritedBy || [],
    likesCount: img.likes || img.likesCount || 0,
  });

  // Helper to map user collections
  const mappedCollections = user?.collections?.map((col: any) => ({
    id: col._id || col.id || '',
    name: col.name || '',
    description: col.description || '',
    coverImage: col.coverImage || (col.images?.[0]?.url || ''),
    images: (col.images || []).map(mapToImageContent),
  })) || [];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <span className="text-gray-500 text-lg">Loading profile...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Nav transparent={false} /> */}
      {/* Cover Section */}
      <div className="relative w-full h-64 md:h-80 bg-gray-200">
        <Image
          src={user.coverImage || '/images/banner.jpg'}
          alt="Cover"
          className="object-cover w-full h-full"
          width={1200}
          height={400}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 z-10">
          <Image
            src={user.avatarUrl || '/images/showcase.jpg'}
            alt={user.firstName || user.username || 'User'}
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-xl object-cover w-32 h-32"
            unoptimized
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12">
        {/* Profile Info */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-600 text-lg mb-2">{user.username}</p>
            <p className="text-gray-500 mb-2">{user.location || ''}</p>
            {user.bio && (
              <p className="text-gray-600 mb-2 max-w-2xl mx-auto">{user.bio}</p>
            )}
            {isCreator && (
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-2">Creator</span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-lg">
              <Share size={20} />
              Share
            </button>
            {isCreator && (
              <button
                onClick={handleAddImage}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-lg bg-orange-500 text-white  hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                <Add size={20} />
                Add Image
              </button>
            )}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.uploads?.length || 0}</div>
                <div className="text-gray-600 text-sm">Images</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.downloads?.length || 0}</div>
                <div className="text-gray-600 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{user.bookmarks?.length || 0}</div>
                <div className="text-gray-600 text-sm">Favorites</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {isCreator && (
                <button
                  onClick={() => setActiveTab('images')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'images'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Images
                </button>
              )}
              {isCreator && (
                <button
                  onClick={() => setActiveTab('collections')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'collections'
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Collections
                </button>
              )}
              <button
                onClick={() => setActiveTab('downloads')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'downloads'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Downloads
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'favorites'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Favorites
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'images' && (
              <div>
                {user.uploads?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {user.uploads.map(mapToImageContent).map((img) => (
                      <ImageContent 
                        key={img._id} 
                        {...img} 
                        onRefetch={() => refetchImage(img._id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Camera size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">No images uploaded yet</p>
                    <button
                      onClick={handleAddImage}
                      className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors mx-auto"
                    >
                      <Add size={16} />
                      Upload Your First Image
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'collections' && (
              <div>
                {mappedCollections.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mappedCollections.map((col) => (
                      <div key={col.id} className="bg-gray-50 rounded-2xl p-0 border border-gray-100 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col" onClick={() => openCollection(col)}>
                        <div className="h-40 w-full rounded-t-2xl overflow-hidden">
                          <Image src={col.coverImage} alt={col.name} className="object-cover w-full h-full" width={400} height={160} unoptimized />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{col.name}</h3>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{col.description}</p>
                          <p className="text-gray-500 text-xs mt-auto">{col.images.length} images</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Camera size={24} className="text-gray-400" />
                    </div>
                    <p className="text-gray-500">No collections created yet</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'downloads' && (
              <div>
                {user.downloads?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {user.downloads.map(mapToImageContent).map((img) => (
                      <ImageContent 
                        key={img._id} 
                        {...img} 
                        onRefetch={() => refetchImage(img._id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <ArrowDown2 size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">No downloads yet</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'favorites' && (
              <div>
                {user.bookmarks?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {user.bookmarks.map(mapToImageContent).map((img) => (
                      <ImageContent 
                        key={img._id} 
                        {...img} 
                        onRefetch={() => refetchImage(img._id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">No favorites yet</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal for collection images */}
        {showCollectionModal && activeCollection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full relative">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl" onClick={closeModal}>&times;</button>
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="w-full md:w-40 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={activeCollection.coverImage} alt={activeCollection.name} className="object-cover w-full h-full" width={160} height={128} unoptimized />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activeCollection.name}</h3>
                  <p className="text-gray-600 text-sm">{activeCollection.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeCollection.images.map((img: ImageContentProps) => (
                  <ImageContent 
                    key={img._id} 
                    {...img} 
                    onRefetch={() => refetchImage(img._id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
