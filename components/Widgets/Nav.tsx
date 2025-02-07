"use client";
import Link from 'next/link';
import React, { FC, useState } from 'react'
import { Menu } from '../Micro/Menu';
import { RiMenu2Line } from 'react-icons/ri';
import { nav } from './Banner';

interface NavProps{
    transparent?: boolean
}

const Nav: FC<NavProps> = ({transparent = true}) => {
    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <nav className={`flex justify-between items-center p-3`}>
            {/* <Image src={"./images/logo.png"} unoptimized width={50} height={50} alt='Logo' className='w-auto h-auto'/> */}
            <div className="lg:hidden">
              <RiMenu2Line
                className="text-white text-2xl cursor-pointer font-bold"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <Menu isOpen={isOpen} setIsOpen={setIsOpen} color="text-[#fba037]"/>
            <div className="items-center gap-10 hidden lg:flex">
              <Link href={"/"} className={`${transparent ? "text-white" : "text-black"} text-[32px] font-bold`}>
                Afrimages
              </Link>
    
              <div className="flex gap-5 md:text-sm lg:text-base">
                {nav.map((item, i) => {
                  return (
                    <Link href={item.link} key={i}>
                      {item.text}
                    </Link>
                  );
                })}
              </div>
            </div>
    
            <Link
              href={"/login"}
              className={`border-2 ${transparent ? "border-white" : "border-orange800 text-orange800"} px-5 py-2 rounded-md`}
            >
              Login
            </Link>
          </nav>
  )
}

export default Nav