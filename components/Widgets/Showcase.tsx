"use client"
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!contentRef.current) return;

        // Set initial state
        gsap.set(contentRef.current, {
            opacity: 0,
            y: 80,
            scale: 0.9
        });

        // Animate in when section comes into view
        gsap.to(contentRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }, []);

    return (
        <div
            style={{
                background: `linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7)), url(./images/showcase.jpg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className='h-[500px] sm:h-[600px] flex items-center justify-center w-full bg-cover bg-center text-white bg-no-repeat rounded-xl relative overflow-hidden'
        >
            <div ref={contentRef} className='bg-black/60 backdrop-blur-xl border border-orange-500/40 shadow-2xl p-6 sm:p-10 rounded-3xl w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/2 flex flex-col gap-6 items-center text-center relative z-10'>
                {/* Orange accent bar */}
                <div className='w-16 h-2 rounded-full bg-orange-500 mb-2 mx-auto'></div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg'>
                    Showcase Your Best Shots. Get Rewarded.
                </h1>
                <p className='text-gray-200 text-base sm:text-lg font-medium drop-shadow'>
                    Upload your finest photography and gain exposure. Share your talent, connect with fellow photographers, and earn rewards while showcasing your work to the world.
                </p>
                <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition text-base mt-2'>
                    Let’s Get You Started
                </button>
            </div>
        </div>
    )
}

export default Showcase