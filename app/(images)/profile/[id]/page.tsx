"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import ImageContent, { ImageContentProps } from '@/components/Reusables/ImageContent';
import { Camera, Heart, ArrowDown2, People, Star1, UserAdd, UserMinus, Share } from "iconsax-react";
import { useUserDetails, IUserDetails } from '@/components/hooks/useUserDetails';
import { useFollowUser } from '@/components/hooks/useFollowUser';
import { useUserStore } from '@/components/hooks/useUserStore';

type TabType = 'images' | 'collections' | 'downloads' | 'favorites';

const ProfilePage = () => {
  const { id } = useParams();
  const userId = id as string;
  const { user: currentUser } = useUserStore();
  
  // Fetch user details from API
  const { data: profile, isLoading, error } = useUserDetails(userId);
  const { toggleFollow, isLoading: isFollowLoading } = useFollowUser(userId);
  
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [activeCollection, setActiveCollection] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<TabType>('images');

  // Check if current user is viewing their own profile
  const isOwnProfile = currentUser?._id === userId;
  const isCreator = (profile as IUserDetails)?.role === "creator";

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

  // Handler for follow/unfollow
  const handleFollow = async () => {
    if (!profile) return;
    try {
      await toggleFollow((profile as IUserDetails).isFollowed || false);
    } catch (error) {
      console.error('Error toggling follow:', error);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load profile</p>
          <p className="text-gray-600">{error?.message || 'User not found'}</p>
        </div>
      </div>
    );
  }

  const userDetails = profile as IUserDetails;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Nav transparent={false} /> */}
      {/* Cover Section */}
      <div className="relative w-full h-64 md:h-80 bg-gray-200">
        <img
          src={userDetails.coverImage || "/images/banner.jpg"}
          alt="Cover"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 z-10">
          <img
            src={userDetails.avatarUrl || "/images/showcase.jpg"}
            alt={`${userDetails.firstName} ${userDetails.lastName}`}
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-xl object-cover w-32 h-32"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12">
        {/* Profile Info */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {userDetails.firstName} {userDetails.lastName}
            </h1>
            <p className="text-gray-600 text-lg mb-2">{userDetails.username}</p>
            <p className="text-gray-500 mb-2">{userDetails.location}</p>
            {userDetails.bio && (
              <p className="text-gray-600 mb-2 max-w-2xl mx-auto">{userDetails.bio}</p>
            )}
            {isCreator && (
              <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-2">Creator</span>
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={handleFollow}
              disabled={isFollowLoading}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg ${
                isFollowLoading 
                  ? "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed" 
                  : userDetails.isFollowed 
                    ? "bg-white text-orange-600 border-orange-500 hover:bg-orange-50" 
                    : "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"
              }`}
            >
              {isFollowLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
              ) : userDetails.isFollowed ? (
                <UserMinus size={20} />
              ) : (
                <UserAdd size={20} />
              )}
              {isFollowLoading ? "Loading..." : userDetails.isFollowed ? "Unfollow" : "Follow"}
            </button>
            <button className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 shadow-lg">
              <Share size={20} />
              Share
            </button>
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userDetails?.stats?.images || 0}</div>
                <div className="text-gray-600 text-sm">Images</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userDetails?.stats?.followers || 0}</div>
                <div className="text-gray-600 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{userDetails?.stats?.downloads || 0}</div>
                <div className="text-gray-600 text-sm">Downloads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
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
                {userDetails.images?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {userDetails.images.map((img: ImageContentProps) => (
                      <ImageContent key={img._id} {...img} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Camera size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-500">No images uploaded yet</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'collections' && (
              <div>
                {userDetails.collections?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userDetails.collections.map((col: any) => (
                      <div key={col.id} className="bg-gray-50 rounded-2xl p-0 border border-gray-100 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col" onClick={() => openCollection(col)}>
                        <div className="h-40 w-full rounded-t-2xl overflow-hidden">
                          <img src={col.coverImage} alt={col.name} className="object-cover w-full h-full" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{col.name}</h3>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{col.description}</p>
                          <p className="text-gray-500 text-xs mt-auto">{col.images?.length || 0} images</p>
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
                {userDetails.downloads?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {userDetails.downloads.map((img: ImageContentProps) => (
                      <ImageContent key={img._id} {...img} />
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
                {userDetails.favorites?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {userDetails.favorites.map((img: ImageContentProps) => (
                      <ImageContent key={img._id} {...img} />
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
                  <img src={activeCollection.coverImage} alt={activeCollection.name} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activeCollection.name}</h3>
                  <p className="text-gray-600 text-sm">{activeCollection.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeCollection.images?.map((img: ImageContentProps) => (
                  <ImageContent key={img._id} {...img} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
