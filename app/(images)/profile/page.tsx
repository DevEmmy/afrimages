"use client";
import React, { useState } from "react";
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import ImageContent, { ImageContentProps } from '@/components/Reusables/ImageContent';
import { Add } from "iconsax-react";

// Mock data for demonstration
const mockUser = {
  role: "creator", // 'user' or 'creator'
  name: "Aisha Mwangi",
  username: "aisha_mwangi",
  email: "aisha@example.com",
  location: "Nairobi, Kenya",
  profileImage: "/images/showcase.jpg",
  coverImage: "/images/banner.jpg",
  stats: {
    images: 48,
    followers: 12500,
    earnings: 1240.50,
    downloads: 3200,
    favorites: 180,
  },
};

const mockImages: ImageContentProps[] = [
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
  {
    _id: "3",
    title: "Portrait",
    newDimension: { url: "/images/ads.png" },
    userId: { firstName: "Aisha", profilePicture: "/images/showcase.jpg" },
  },
  {
    _id: "4",
    title: "Landscape",
    newDimension: { url: "/images/logo.png" },
    userId: { firstName: "Aisha", profilePicture: "/images/showcase.jpg" },
  },
];

const mockCollections = [
  {
    id: "c1",
    name: "Wildlife Wonders",
    description: "A collection of Africa's most stunning wildlife moments.",
    coverImage: "/images/banner.jpg",
    images: [mockImages[0], mockImages[1]],
  },
  {
    id: "c2",
    name: "Urban Life",
    description: "Capturing the vibrant energy of African cities.",
    coverImage: "/images/showcase.jpg",
    images: [mockImages[2], mockImages[3]],
  },
];

const ProfilePage = () => {
  const user = mockUser;
  const isCreator = user.role === "creator";
  const [tab, setTab] = useState(isCreator ? "images" : "downloads");
  const [showCollectionModal, setShowCollectionModal] = useState(false);
  const [activeCollection, setActiveCollection] = useState<any>(null);

  // Handler for Add Image (redirect)
  const handleAddImage = () => {
    window.location.href = "/add-image";
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Nav transparent={false} /> */}
      {/* Cover Section */}
      <div className="relative w-full h-64 md:h-80 bg-gray-200">
        <img
          src={user.coverImage}
          alt="Cover"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2 z-10">
          <img
            src={user.profileImage}
            alt={user.name}
            width={128}
            height={128}
            className="rounded-full border-4 border-white shadow-xl object-cover w-32 h-32"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-12">
        {/* Profile Info */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{user.name}</h1>
          <p className="text-gray-600 text-lg mb-2">@{user.username}</p>
          <p className="text-gray-500 mb-2">{user.location}</p>
          <p className="text-gray-500 mb-2">{user.email}</p>
          {isCreator && (
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium mb-2">Creator</span>
          )}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {isCreator ? (
            <>
              <button
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${tab === "images" ? "bg-gray-900 text-white shadow-lg" : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setTab("images")}
              >
                Images
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${tab === "collections" ? "bg-gray-900 text-white shadow-lg" : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setTab("collections")}
              >
                Collections
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${tab === "add" ? "bg-orange-500 text-white shadow-lg" : "bg-white text-orange-600 border border-orange-200 hover:bg-orange-50"}`}
                onClick={handleAddImage}
              >
                <span className="flex items-center gap-2"><Add size={20} /> Add Image</span>
              </button>
            </>
          ) : (
            <>
              <button
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${tab === "downloads" ? "bg-gray-900 text-white shadow-lg" : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setTab("downloads")}
              >
                Downloads
              </button>
              <button
                className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${tab === "favorites" ? "bg-gray-900 text-white shadow-lg" : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"}`}
                onClick={() => setTab("favorites")}
              >
                Favorites
              </button>
            </>
          )}
        </div>

        {/* Tab Content */}
        <div>
          {/* User Tabs */}
          {!isCreator && tab === "downloads" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Downloads</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mockImages.map((img) => (
                  <ImageContent key={img._id} {...img} />
                ))}
              </div>
            </div>
          )}
          {!isCreator && tab === "favorites" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Favorites</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mockImages.map((img) => (
                  <ImageContent key={img._id} {...img} />
                ))}
              </div>
            </div>
          )}

          {/* Creator Tabs */}
          {isCreator && tab === "images" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Images</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {mockImages.map((img) => (
                  <ImageContent key={img._id} {...img} />
                ))}
              </div>
            </div>
          )}
          {isCreator && tab === "collections" && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">My Collections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockCollections.map((col) => (
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
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProfilePage;
