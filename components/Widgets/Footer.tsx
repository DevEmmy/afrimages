"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const container = useRef<HTMLElement>(null);

  const footerContent = [
    {
      title: "Content",
      sub: [
        { title: "New Asset", link: "/add-image" },
        { title: "Search Trends", link: "/search" },
        { title: "Popular Content", link: "/explore" },
        { title: "Blogs", link: "/" },
      ],
    },
    {
      title: "Information",
      sub: [
        { title: "About Us", link: "/about" },
        { title: "Become a Contributor", link: "/photographers" },
        { title: "Sell your Content", link: "/sell-content" },
      ],
    },
    {
      title: "Legal",
      sub: [
        { title: "Terms and Condition", link: "/terms-and-conditions" },
        { title: "License agreement", link: "/license-agreement" },
        { title: "Copyright Information", link: "/copyright-information" },
        { title: "Privacy Policy", link: "/privacy-policy" },
      ],
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      tl
        .from(".footer-heading", {
          opacity: 0,
          duration: 1,
          stagger: 0.1,
        })
        .from(
          ".footer-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.05,
          },
          "-=0.5"
        )
        .from(
          ".footer-social-item", 
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .from(
          ".footer-divider",
          {
            scaleX: 0,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.2"
        )
        .from(".footer-copy", { opacity: 0, duration: 1 }, "-=0.5");
    },
    { scope: container }
  );

  return (
    <footer
      ref={container}
      className="bg-black pt-14 pb-8 px-[5%] w-full mt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-white">
        {footerContent.map((item) => (
          <div key={item.title}>
            <h2 className="footer-heading text-lg font-[500] mb-4 border-l-4 border-orange-500 pl-3">
              {item.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {item.sub.map((sub) => (
                <li key={sub.title} className="footer-item">
                  <Link
                    href={sub.link}
                    className="text-gray-300 hover:text-orange-400 transition inline-block hover:translate-x-1 duration-300"
                  >
                    {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4 md:col-span-2">
          <h2 className="footer-heading text-lg font-[500] mb-4 border-l-4 border-orange-500 pl-3">
            Social & Updates
          </h2>
          
          <div className="flex flex-col gap-4">
            {/* Icons */}
            <div className="footer-social-item flex gap-4">
              {[RiFacebookLine, RiTwitterLine, RiInstagramLine].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-orange-500 transition duration-300 hover:scale-110"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>

            {/* Text */}
            <p className="footer-social-item text-gray-400">
              Get exclusive updates just for you
            </p>

            {/* Button */}
            <div className="footer-social-item">
              <Link href={"/account/register"}>
                <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1 active:scale-95 text-base cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center my-8">
        <div className="footer-divider w-full h-[1px] bg-white/10 origin-center"></div>
      </div>

      {/* Copyright */}
      <p className="footer-copy text-gray-400 text-center text-sm tracking-wide">
        Afrimages &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;