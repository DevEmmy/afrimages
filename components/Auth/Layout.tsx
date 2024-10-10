"use client"
import React from 'react'
import Button from '../Micro/Button'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const Layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    const pathname = usePathname()

    console.log(pathname)

    return (
        <div className='mx-2 my-3 lg:mx-20 lg:my-5'>
            <nav className="flex items-center justify-between">
                <Link href="/">
                <img src="./images/logo.png" />
                </Link>

                <Button link={pathname == "/login" ? "/sign-up" : "/login"} className='bg-green700 text-white rounded-full p-2 lg:p-3 lg:px-5'>
                    {pathname == "/login" ? "Create Account" : "Login"}
                </Button>
            </nav>

            <div className='flex items-center justify-center mt-10'>
                {children}
            </div>
        </div>
    )
}

export default Layout