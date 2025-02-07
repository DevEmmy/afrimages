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
    link: "/",
    text: "Photographers",
  },
  {
    link: "/",
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
    <div className="banner">
      <Nav />
      <div className="flex items-center justify-center flex-col gap-5 w-full md:w-2/3 text-center mx-auto mt-20">
        <h1 className="text-3xl sm:text-3xl md:text-[32px] leading-8 font-bold">
          Discover, Download, and Share the Finest Images from Afrimages
        </h1>
        <p className="text-[18px] sm:text-[20px]">
          Discover AfrImage's diverse collection, showcasing Africa's beauty.
          Bring it into your space with high-res downloads, sharing globally.
          
        </p>

        <form className="w-full md:w-2/3 bg-white flex gap-2 p-2" onSubmit={handleSearch}>
          <input
            type="text"
            className=" border-none focus:outline-none text-black w-full p-2"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value as string)}
          />
          <button
            className="bg-green700 py-2 px-5 flex gap-2 items-center"
            type="submit"
          >
            <RiSearch2Line />
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
