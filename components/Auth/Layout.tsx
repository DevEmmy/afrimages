"use client"
import React from 'react'
import Button from '../Micro/Button'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft2 } from 'iconsax-react';


const Layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    const pathname = usePathname()

    console.log(pathname)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo and Back Button */}
                        <div className="flex items-center gap-4">
                            <Link 
                                href="/" 
                                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            >
                                <ArrowLeft2 size={20} />
                                <span className="text-sm font-medium">Back to Home</span>
                            </Link>
                        </div>

                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <img 
                                src="/images/logo2.png" 
                                alt="Afrimages Logo" 
                                width={40} 
                                height={40} 
                                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                                Afrimages
                            </span>
                        </Link>

                        {/* Auth Toggle Button */}
                        <Button 
                            link={pathname === "/login" ? "/sign-up" : "/login"} 
                            className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hidden md:block  "
                        >
                            {pathname === "/login" ? "Create Account" : "Login"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] py-8">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white border-t border-gray-100 py-6">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                    <div className="text-center text-sm text-gray-600">
                        <p>&copy; 2024 Afrimages. All rights reserved.</p>
                        <div className="flex items-center justify-center gap-6 mt-2">
                            <Link href="/about" className="hover:text-gray-900 transition-colors duration-300">
                                About
                            </Link>
                            <Link href="/contact" className="hover:text-gray-900 transition-colors duration-300">
                                Contact
                            </Link>
                            <Link href="/pricing" className="hover:text-gray-900 transition-colors duration-300">
                                Pricing
                            </Link>
                            <Link href="/privacy" className="hover:text-gray-900 transition-colors duration-300">
                                Privacy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout