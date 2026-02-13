"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Nav from "./Nav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
  const container = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?query=${search}`);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
          ".hero-bg-img",
          { scale: 1.2, filter: "blur(8px)" },
          { scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.inOut" }
        )
        .from(
          ".hero-title-line",
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "circ.out",
          },
          "<0.2"
        )
        .from(
          ".hero-sub",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "<0.6"
        )
        .from(
          ".hero-search",
          {
            width: "50%",
            autoAlpha: 0,
            y: 20,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.6"
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative w-full h-[85vh] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <Nav />
      
      {/* Hero Image Background */}
      <div className="hero-bg absolute inset-0 z-0 select-none">
        <img
          src="/images/banner.jpg"
          alt="African creativity hero"
          className="hero-bg-img w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full md:w-2/3 text-center mx-auto mt-20 mb-16 px-4">
        
        {/* Title: Broken into spans for animation control */}
        <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
          <span className="hero-title-line block">Showcasing Africa's</span>
          <span className="hero-title-line block text-orange-500">Creativity</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
          Discover, buy, and sell authentic African photography and art.
          Empowering creatives, connecting cultures.
        </p>

        {/* CTA Buttons */}
        {/* FIXED: Removed 'hidden' so it displays on mobile. Used flex-col for mobile layout. */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-2">
          <button
            className="hero-btn1 bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-orange-900/20 transition transform active:scale-95"
            onClick={() => router.push("/explore")}
            type="button"
          >
            Explore Images
          </button>
          <button
            className="hero-btn2 bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full backdrop-blur-sm transition transform active:scale-95"
            onClick={() => router.push("/sign-up")}
            type="button"
          >
            Become a Creator
          </button>
        </div>

        {/* Search Bar */}
        <form
          className="hero-search w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 flex gap-2 p-2 rounded-full shadow-2xl mt-8"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            className="flex-1 border-none focus:outline-none text-white px-4 bg-transparent placeholder:text-gray-400 font-light"
            placeholder="Search Afrocentric images, art..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-white text-black hover:bg-gray-200 transition p-3 md:px-6 rounded-full flex items-center justify-center gap-2 group"
            type="submit"
          >
            <RiSearch2Line size={20} className="group-hover:scale-110 transition-transform" />
            <span className="hidden sm:block font-medium">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;