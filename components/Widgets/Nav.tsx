"use client";
import Link from 'next/link';
import React, { FC, useState, useEffect } from 'react'
import { Menu } from '../Micro/Menu';
import { RiMenu2Line, RiSearch2Line, RiCloseLine } from 'react-icons/ri';
import { nav } from './Banner';
import { categories } from './Categories';
import { SearchNormal, ArrowDown2, User, Logout, Setting2, Profile } from "iconsax-react";
import Image from 'next/image';
import { useUserStore } from '../hooks/useUserStore';
import { useLogout } from '../hooks/useAuth';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { usePathname } from 'next/navigation';
import { ArrowDownToLine, Heart } from 'lucide-react';

interface NavProps {
    transparent?: boolean
}

const Nav: FC<NavProps> = ({ transparent = true }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showSearch, setShowSearch] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    
    const { user } = useUserStore();
    const logoutMutation = useLogout();
    const pathname = usePathname();

    // Check if link is active
    const isActiveLink = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };


    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".nav-bg", {
            yPercent: -100,
            duration: 1
        })
            .from(".nav-logo", {
                y: -20,
                opacity: 0,
                duration: 0.5
            }, "")
            .from(".nav-link", {
                y: -20,
                opacity: 0,
                duration: 0.5
            }, "")
            .from(".nav-action", {
                y: -20,
                opacity: 0,
                duration: 0.5
            }, "");

    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (!target.closest('.user-dropdown')) {
                setShowUserDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: any) => {
        e.preventDefault();
        // Handle search functionality
        console.log('Searching for:', search, 'in category:', selectedCategory);
    };

    const handleLogout = () => {
        logoutMutation.mutate();
        setShowUserDropdown(false);
    };

    // User Dropdown Component
    const UserDropdown = () => (
        <div className="relative user-dropdown">
            <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className={`flex items-center gap-2 p-2 rounded-xl transition-all duration-300 ${scrolled
                        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        : 'text-white hover:text-gray-200 hover:bg-white/10'
                    }`}
            >
                {user?.avatarUrl ? (
                    <Image
                        src={user.avatarUrl}
                        alt={`${user.firstName} ${user.lastName}`}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                        unoptimized
                    />
                ) : (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${scrolled ? 'bg-gray-200 text-gray-700' : 'bg-white/20 text-white'
                        }`}>
                        <User size={16} />
                    </div>
                )}
                <span className="hidden md:block font-medium">
                    {user?.firstName}
                </span>
                <ArrowDownToLine
                    size={16}
                    className={`transition-transform  duration-300 ${showUserDropdown ? 'rotate-180' : ''}`}
                />
            </button>

            {showUserDropdown && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 z-50">
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-100">
                        <div className="grid grid-cols-[1fr_8fr] items-center gap-3">
                            {user?.avatarUrl ? (
                                <Image
                                    src={user.avatarUrl}
                                    alt={`${user.firstName} ${user.lastName}`}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover"
                                    unoptimized
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    <User size={20} className="text-gray-600" />
                                </div>
                            )}
                            <div>
                                <p className="font-medium text-gray-900">
                                    {user?.firstName}
                                </p>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                        <Link
                            href={`/profile`}
                            onClick={() => setShowUserDropdown(false)}
                            className={`flex items-center gap-3 px-4 py-2 transition-colors duration-200 ${
                                isActiveLink('/profile') 
                                    ? 'text-orange-600 bg-orange-50' 
                                    : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <Profile size={18} />
                            <span>View Profile</span>
                        </Link>

                        <Link
                            href="/profile"
                            onClick={() => setShowUserDropdown(false)}
                            className={`flex items-center gap-3 px-4 py-2 transition-colors duration-200 ${
                                isActiveLink('/profile') 
                                    ? 'text-orange-600 bg-orange-50' 
                                    : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <Setting2 size={18} />
                            <span>Settings</span>
                        </Link>

                        <Link
                            href="/favorites"
                            onClick={() => setShowUserDropdown(false)}
                            className={`flex items-center gap-3 px-4 py-2 transition-colors duration-200 ${
                                isActiveLink('/favorites') 
                                    ? 'text-orange-600 bg-orange-50' 
                                    : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <Heart size={18} />
                            <span>My Favorites</span>
                        </Link>

                        <Link
                            href="/downloads"
                            onClick={() => setShowUserDropdown(false)}
                            className={`flex items-center gap-3 px-4 py-2 transition-colors duration-200 ${
                                isActiveLink('/downloads') 
                                    ? 'text-orange-600 bg-orange-50' 
                                    : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            <ArrowDownToLine size={18} />
                            <span>My Downloads</span>
                        </Link>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-gray-100 pt-2">
                        <button
                            onClick={handleLogout}
                            disabled={logoutMutation.isPending}
                            className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200 w-full text-left"
                        >
                            <Logout size={18} />
                            <span>{logoutMutation.isPending ? 'Logging out...' : 'Logout'}</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                {/* Top Navigation */}
                <div className="flex items-center justify-between py-4">
                    {/* Logo and Main Nav */}
                    <div className="flex items-center gap-8">
                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <RiMenu2Line
                                className={`text-2xl cursor-pointer transition-colors duration-300 ${scrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                                    }`}
                                onClick={() => setIsOpen(true)}
                            />
                        </div>

                        {/* Logo */}
                        <Link href="/" className="nav-logo flex items-center justify-center gap-3 group">
                            <Image
                                unoptimized
                                src={"/./images/Logo2.png"}
                                alt="Afrimages Logo"
                                width={40}
                                height={40}
                                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900 group-hover:text-gray-700' : 'text-white group-hover:text-gray-200'
                                }`}>
                                Afrimages
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden nav-link lg:flex items-center gap-8">
                            {nav.map((item, i) => {
                                const isActive = isActiveLink(item.link);
                                return (
                                    <Link
                                        href={item.link}
                                        key={i}
                                        className={`font-medium transition-all duration-300 relative ${
                                            isActive
                                                ? scrolled
                                                    ? 'text-orange-500'
                                                    : 'text-orange-400'
                                                : scrolled
                                                    ? 'text-gray-600 hover:text-gray-900'
                                                    : 'text-white hover:text-gray-200'
                                        }`}
                                    >
                                        {item.text}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4 nav-action">
                        {/* Mobile Search Toggle */}
                        <button
                            onClick={() => setShowSearch(!showSearch)}
                            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${scrolled
                                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                                }`}
                        >
                            {showSearch ? <RiCloseLine size={20} /> : <SearchNormal size={20} />}
                        </button>

                        {/* User Actions - Only show if not authenticated */}
                        {!user && (
                            <div className="hidden md:flex items-center gap-3">
                                <Link
                                    href="/favorites"
                                    className={`p-2 rounded-xl transition-all duration-300 ${
                                        isActiveLink('/favorites')
                                            ? scrolled
                                                ? 'text-orange-500 bg-orange-50'
                                                : 'text-orange-400 bg-white/20'
                                            : scrolled
                                                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                : 'text-white hover:text-gray-200 hover:bg-white/10'
                                    }`}
                                >
                                    <Heart size={20} />
                                </Link>
                                <Link
                                    href="/downloads"
                                    className={`p-2 rounded-xl transition-all duration-300 ${
                                        isActiveLink('/downloads')
                                            ? scrolled
                                                ? 'text-orange-500 bg-orange-50'
                                                : 'text-orange-400 bg-white/20'
                                            : scrolled
                                                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                                : 'text-white hover:text-gray-200 hover:bg-white/10'
                                    }`}
                                >
                                    <ArrowDownToLine size={20} />
                                </Link>
                            </div>
                        )}

                        {/* Login Button or User Dropdown */}
                        {user ? (
                            <UserDropdown />
                        ) : (
                            <Link
                                href="/login"
                                className={`px-6 hidden md:block py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg ${scrolled
                                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                                        : 'bg-orange-500 text-white hover:bg-orange-600 border-2 border-orange-500'
                                    }`}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* Desktop Search Bar - Show when scrolled */}
                {scrolled && (
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
                )}

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
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} color={scrolled ? "text-gray-700" : "text-orange-400"} />
        </header>
    )
}

export default Nav