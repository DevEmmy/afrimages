"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Nav from "./Nav";

export const nav = [
  {
    link: "/explore",
    text: "Explore",
  },
  {
    link: "/photographers",
    text: "Photographers",
  },
  {
    link: "/pricing",
    text: "Pricing",
  },
  {
    link: "/about",
    text: "About us",
  },
  {
    link: "/contact",
    text: "Contact Us",
  },
];

const Banner = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  };

  
  return (
    <div className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden">
      <Nav />
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banner.jpg"
          alt="African creativity hero"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full md:w-2/3 text-center mx-auto mt-24 mb-16">
        <h1 className="text-4xl md:text-5xl font-[500] text-white drop-shadow-lg">
          Showcasing Africa's Creativity
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Discover, buy, and sell authentic African photography and art. Empowering creatives, connecting cultures.
        </p>
        <div className="sm:flex hidden sm:flex-row gap-4 justify-center mt-4">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semi[500] py-3 px-8 rounded-full shadow-lg transition"
            onClick={() => router.push("/explore")}
            type="button"
          >
            Explore Images
          </button>
          <button
            className="bg-green-700 hover:bg-green-800 text-white font-semi[500] py-3 px-8 rounded-full shadow-lg transition border border-green-700"
            onClick={() => router.push("/sign-up")}
            type="button"
          >
            Become a Creator
          </button>
        </div>
        {/* Search Bar */}
        <form className="w-4/5 bg-white/90 flex gap-2 p-2 rounded-full shadow-lg mt-6" onSubmit={handleSearch}>
          <input
            type="text"
            className="border-none focus:outline-none text-black w-full p-2 bg-transparent placeholder:text-gray-500"
            placeholder="Search Afrocentric images, art, and more..."
            value={search}
            onChange={(e) => setSearch(e.target.value as string)}
          />
          <button
            className="bg-green-700 hover:bg-green-800 md:py-2 md:px-5 p-3 flex gap-2 items-center text-white rounded-full"
            type="submit"
          >
            <RiSearch2Line size={20}/>
            <span className="hidden sm:block">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
