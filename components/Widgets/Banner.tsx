"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'

export const nav = [
        {
            link: "/explore",
            text: "Explore"
        },
        {
            link: "/",
            text: "Photographers"
        },
        {
            link: "/",
            text: "Pricing"
        },
        {
            link: "/",
            text: "About us"
        },
        {
            link: "/",
            text: "Contact Us"
        }
    ]

const Banner = () => {
   const router = useRouter();
   const [search, setSearch] = useState("")

   const handleSearch = (e: any)=>{
        e.preventDefault()
        router.push(`/search?query=${search}`)
   }

    return (
        <div className='banner'>
            <nav className='flex-between'>
                {/* <Image src={"./images/logo.png"} unoptimized width={50} height={50} alt='Logo' className='w-auto h-auto'/> */}
                <div className='flex items-center gap-10'>
                    <Link href={"/"} className='text-white text-[32px] font-bold'>Afrimages</Link>

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

                <Link href={"/login"} className='border-2 border-white px-5 py-2 rounded-md'>
                    Login
                </Link>
            </nav>

            <div className='flex items-center justify-center flex-col gap-3 w-2/3 text-center mx-auto mt-20'>
                <h1 className='text-[32px] font-bold'>Discover, Download, and Share the Finest Images from Afrimages</h1>
                <p>Discover AfrImage's diverse collection, showcasing Africa's beauty. Bring it into your space with high-res downloads, sharing globally. Embark on a visual journey effortlessly.</p>

                <form className='w-2/3 bg-white flex gap-2 p-2' onSubmit={handleSearch}>
                    <input type="text" className=' border-none focus:outline-none text-black w-full p-2' placeholder='Search here...' value={search} onChange={(e)=> setSearch(e.target.value as string)}/>
                    <button className='bg-green700 py-2 px-5 flex gap-2 items-center' type='submit'>
                        <RiSearch2Line />
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Banner