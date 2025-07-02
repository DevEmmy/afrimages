"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import ImageContent, { ImageContentProps } from '@/components/Reusables/ImageContent';
import { Camera, Heart, ArrowDown2, People, Star1, UserAdd, UserMinus } from "iconsax-react";

// Mock data for demonstration
const mockProfiles: Record<string, any> = {
  "1": {
    role: "creator",
    name: "Aisha Mwangi",
    username: "aisha_mwangi",
    email: "aisha@example.com",
    location: "Nairobi, Kenya",
    profileImage: "/images/showcase.jpg",
    coverImage: "/images/banner.jpg",
    stats: {
      images: 48,
      followers: 12500,
      downloads: 3200,
      favorites: 180,
      rating: 4.8,
    },
    isFollowed: false,
    images: [
      {
        _id: "1",
        title: "Sunset Over Beach",
        newDimension: { url: "/images/banner.jpg" },
        userId: { firstName: "Aisha", profilePicture: "/images/showcase.jpg" },
      },
      {
        _id: "2",
        title: "Market Scene",
        newDimension: { url: "/images/showcase.jpg" },
        userId: { firstName: "Aisha", profilePicture: "/images/showcase.jpg" },
      },
    ],
    collections: [
      {
        id: "c1",
        name: "Wildlife Wonders",
        description: "A collection of Africa's most stunning wildlife moments.",
        coverImage: "/images/banner.jpg",
        images: [
          {
            _id: "1",
            title: "Sunset Over Beach",
            newDimension: { url: "/images/banner.jpg" },
            userId: { firstName: "Aisha", profilePicture: "/images/showcase.jpg" },
          },
        ],
      },
      {
        id: "c2",
        name: "Urban Life",
        description: "Capturing the vibrant energy of African cities.",
        coverImage: "/images/showcase.jpg",
        images: [
          {
            _id: "2",
            title: "Market Scene",
            newDimension: { url: "/images/showcase.jpg" },
            userId: { firstName: "Aisha", profilePicture: "/images/showcase.jpg" },
          },
        ],
      },
    ],
  },
  "2": {
    role: "user",
    name: "Kwame Osei",
    username: "kwame_osei",
    email: "kwame@example.com",
    location: "Accra, Ghana",
    profileImage: "/images/ads.png",
    coverImage: "/images/showcase.jpg",
    stats: {
      downloads: 120,
      favorites: 45,
    },
    // downloads: [
    //   {
    //     _id: "3",
    //     title: "Portrait",
    //     newDimension: { url: "/images/ads.png" },
    //     userId: { firstName: "Kwame", profilePicture: "/images/ads.png" },
    //   },
    // ],
    // favorites: [
    //   {
    //     _id: "4",
    //     title: "Landscape",
    //     newDimension: { url: "/images/logo.png" },
    //     userId: { firstName: "Kwame", profilePicture: "/images/ads.png" },
    //   },
    // ],
  },
};

const ProfilePage = () => {
  const { id } = useParams();
  // @ts-ignore
  const profile = mockProfiles[id as string] || mockProfiles["1"];
  const isCreator = profile.role === "creator";
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [activeCollection, setActiveCollection] = useState<any>(null);
  const [isFollowed, setIsFollowed] = useState(profile.isFollowed || false);

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
  const handleFollow = () => {
    setIsFollowed((prev: any) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Nav transparent={false} /> */}
      {/* Cover Section */}
      <div className="relative w-full h-64 md:h-80 bg-gray-200">
        <img
          src={profile.coverImage}
          alt="Cover"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 z-10">
          <img
            src={profile.profileImage}
            alt={profile.name}
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-xl object-cover w-32 h-32"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12">
        {/* Profile Info */}
        <div className="text-center mb-10 flex flex-col items-center">
          <div className="flex flex-col md:items-center md:justify-center gap-4 w-full">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
              <p className="text-gray-600 text-lg mb-2">@{profile.username}</p>
              <p className="text-gray-500 mb-2">{profile.location}</p>
              {isCreator && (
                <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-2">Creator</span>
              )}
            </div>
            {isCreator && (
              <button
                onClick={handleFollow}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg border-2 ${isFollowed ? "bg-white text-orange-600 border-orange-500 hover:bg-orange-50" : "bg-orange-500 text-white border-orange-500 hover:bg-orange-600"}`}
              >
                {isFollowed ? <UserMinus size={20} /> : <UserAdd size={20} />}
                {isFollowed ? "Unfollow" : "Follow"}
              </button>
            )}
          </div>
        </div>

        {/* Stats Section - visually rich */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {isCreator && (
            <>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6 text-center border border-orange-200 flex flex-col items-center shadow">
                <Camera size={28} className="text-orange-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{profile.stats.images}</div>
                <div className="text-gray-600 text-sm">Images</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 text-center border border-blue-200 flex flex-col items-center shadow">
                <People size={28} className="text-blue-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{profile.stats.followers}</div>
                <div className="text-gray-600 text-sm">Followers</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 text-center border border-yellow-200 flex flex-col items-center shadow">
                <Star1 size={28} className="text-yellow-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{profile.stats.rating || 4.8}</div>
                <div className="text-gray-600 text-sm">Rating</div>
              </div>
            </>
          )}
          {profile.stats.downloads && (
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 text-center border border-blue-200 flex flex-col items-center shadow">
              <ArrowDown2 size={28} className="text-blue-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{profile.stats.downloads}</div>
              <div className="text-gray-600 text-sm">Downloads</div>
            </div>
          )}
          {profile.stats.favorites && (
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 text-center border border-pink-200 flex flex-col items-center shadow">
              <Heart size={28} className="text-pink-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{profile.stats.favorites}</div>
              <div className="text-gray-600 text-sm">Favorites</div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div>
          {isCreator ? (
            <>
              {/* Images */}
              <div className="mb-16">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {profile.images.map((img: ImageContentProps) => (
                    <ImageContent key={img._id} {...img} />
                  ))}
                </div>
              </div>
              {/* Collections */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {profile.collections.map((col: any) => (
                    <div key={col.id} className="bg-white rounded-2xl p-0 border border-gray-100 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col" onClick={() => openCollection(col)}>
                      <div className="h-40 w-full rounded-t-2xl overflow-hidden">
                        <img src={col.coverImage} alt={col.name} className="object-cover w-full h-full" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{col.name}</h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{col.description}</p>
                        <p className="text-gray-500 text-xs mt-auto">{col.images.length} images</p>
                      </div>
                    </div>
                  ))}
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
                        {activeCollection.images.map((img: ImageContentProps) => (
                          <ImageContent key={img._id} {...img} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Downloads */}
              <div className="mb-16">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Downloads</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {profile.downloads.map((img: ImageContentProps) => (
                    <ImageContent key={img._id} {...img} />
                  ))}
                </div>
              </div>
              {/* Favorites */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Favorites</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {profile.favorites.map((img: ImageContentProps) => (
                    <ImageContent key={img._id} {...img} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
