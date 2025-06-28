"use client";
import Link from "next/link";
import React, { useState } from "react";
import { nav } from "../Widgets/Banner";
import { categories } from "../Widgets/Categories";
import { RiMenu2Line, RiSearch2Line, RiCloseLine } from "react-icons/ri";
import Footer from "../Widgets/Footer";
import { useRouter } from "next/navigation";
import { Menu } from "../Micro/Menu";
import { SearchNormal, User, Heart, ArrowDown2 } from "iconsax-react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-4">
            {/* Logo and Main Nav */}
            <div className="flex items-center gap-8">
              {/* Mobile Menu */}
              <div className="lg:hidden">
                <RiMenu2Line
                  className="text-gray-700 text-2xl cursor-pointer hover:text-gray-900 transition-colors duration-300"
                  onClick={() => setIsOpen(true)}
                />
              </div>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <img
                  src="/images/Logo2.png"
                  alt="Afrimages Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    true
                      ? "text-gray-900 group-hover:text-gray-700"
                      : "text-white group-hover:text-gray-200"
                  }`}
                >
                  Afrimages
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {nav.map((item, i) => (
                  <Link
                    href={item.link}
                    key={i}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300"
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Mobile Search Toggle */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                {showSearch ? (
                  <RiCloseLine size={20} />
                ) : (
                  <SearchNormal size={20} />
                )}
              </button>

              {/* User Actions */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/favorites"
                  className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                >
                  <Heart size={20} />
                </Link>
                <Link
                  href="/downloads"
                  className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                >
                  <ArrowDown2 size={20} />
                </Link>
              </div>

              {/* Login Button */}
              <Link
                href="/login"
                className="bg-gray-900 text-white px-6 py-2 rounded-xl hidden md:block font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Desktop Search Bar - Always visible */}
          <div className="hidden lg:block pb-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center bg-gray-100 rounded-2xl p-2 border border-gray-200 focus-within:border-gray-400 focus-within:bg-white transition-all duration-300">
                {/* Category Select */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 font-medium px-3 py-2 cursor-pointer"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat, i) => (
                    <option value={cat.title.toLowerCase()} key={i}>
                      {cat.title}
                    </option>
                  ))}
                </select>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300 mx-2"></div>

                {/* Search Input */}
                <div className="flex-1 flex items-center">
                  <SearchNormal className="text-gray-400 ml-2" size={20} />
                  <input
                    type="text"
                    placeholder="Search for images, photographers, or categories..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 px-3 py-2"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  <RiSearch2Line size={16} />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Mobile Search Bar - Full width when active */}
          {showSearch && (
            <div className="lg:hidden pb-4">
              <form onSubmit={handleSearch} className="relative">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-lg">
                  {/* Category Select - Full width on mobile */}
                  <div className="mb-3">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      <option value="all">All Categories</option>
                      {categories.map((cat, i) => (
                        <option value={cat.title.toLowerCase()} key={i}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Input - Full width on mobile */}
                  <div className="flex items-center bg-gray-100 rounded-xl p-3 border border-gray-200 focus-within:border-gray-400 focus-within:bg-white transition-all duration-300">
                    <SearchNormal className="text-gray-400 mr-3" size={20} />
                    <input
                      type="text"
                      placeholder="Search for images, photographers, or categories..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                      autoFocus
                    />
                  </div>

                  {/* Search Button - Full width on mobile */}
                  <button
                    type="submit"
                    className="w-full mt-3 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <RiSearch2Line size={18} />
                    Search
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} color="text-gray-700" />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
