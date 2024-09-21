"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { nav } from '../Widgets/Banner';
import { categories } from '../Widgets/Categories';
import { RiSearch2Line } from 'react-icons/ri';
import Footer from '../Widgets/Footer';
import { useRouter } from 'next/navigation';

const Layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {

    const router = useRouter();
    const [search, setSearch] = useState("")

    const handleSearch = (e: any) => {
        e.preventDefault()
        router.push(`/search?query=${search}`)
    }

    return (
        <div className='flex flex-col gap-10'>
            <div className=' px-[5%] py-2 flex flex-col gap-2 border border-b fixed top-0 left-0 right-0 z-[100] bg-white'>
                <nav className='flex-between'>
                    {/* <Image src={"./images/logo.png"} unoptimized width={50} height={50} alt='Logo' className='w-auto h-auto'/> */}
                    <div className='flex items-center gap-10'>
                        <Link href={"/"} className='text-green700 text-[32px] font-bold'>Afrimages</Link>

                        <div className='flex gap-5'>
                            {
                                nav.map((item, i) => {
                                    return (
                                        <Link href={item.link} key={i}>
                                            {item.text}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <Link href={"/login"} className='border-2 border-green700 text-green700 px-5 py-2 rounded-md'>
                        Login
                    </Link>
                </nav>

                <form className='flex items-center justify-between border'  onSubmit={handleSearch}>
                    <select name="categories" className='p-3 cursor-pointer' id="">
                        {
                            categories.map((cat, i) => {
                                return (
                                    <option value={cat.title} key={i} className='cursor-pointer'>{cat.title}</option>
                                )
                            })
                        }
                    </select>
                    <input type="text" className=' border-none focus:outline-none text-black w-full p-2' placeholder='Search here...'  value={search} onChange={(e)=> setSearch(e.target.value as string)}/>
                    <button className='bg-green700 text-white py-2 px-5 flex gap-2 items-center mx-1' type='submit' >
                        <RiSearch2Line />
                        Search
                    </button>
                </form>

            </div>

            <div className='mx-[5%] mt-40'>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout