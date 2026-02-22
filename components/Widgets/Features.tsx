"use client";

import {
  Brush2,
  Book1,
  Star1,
  People,
  ArrowRight3
} from "iconsax-react";
import { BadgeCheck } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);
interface Feature {
  title: string;
  desc: string;
  // img: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  // color: string;
  iconBg: string;
  iconColor: string;
  // bgColor: string;
}

const features: Feature[] = [
  {
    title: "Sell Your Art",
    desc: "Empower your creativity—list your photos and art for free or for sale, reaching a global audience.",
    icon: Brush2,
    iconBg: "bg-orange-500/10 group-hover:bg-orange-500/20",
    iconColor: "text-orange-500",
  },
  {
    title: "Curated Collections",
    desc: "Explore handpicked, authentic African visuals—nature, people, culture, and more.",
    icon: Book1,
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    title: "Royalty-Free & Premium",
    desc: "Download free images or support creators by purchasing premium, high-res art.",
    icon: BadgeCheck,
    iconBg: "bg-purple-500/10 group-hover:bg-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Community Support",
    desc: "Join a vibrant network of African creatives—collaborate, learn, and grow together.",
    icon: People,
    iconBg: "bg-cyan-500/10 group-hover:bg-cyan-500/20",
    iconColor: "text-cyan-500",
  },
];


const Features = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const creatorsRef = useRef<HTMLDivElement>(null);
  const royaltyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const heroSplit = new SplitText(".split-line", { type: "chars, words" });
    gsap.from(heroSplit.chars, {
      yPercent: 50,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
      scrollTrigger: {
        trigger: ".split-line",
        start: "top 80%",
      },
    });

    gsap.fromTo(".feature-card", {
      opacity: 0,
      y: 40,
      duration: 1.8,
    },{
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".feature-card",
        start: "top 80%",
        toggleActions: "play none none none",
      }
  })

    // Counting animations
    const countUp = (element: HTMLElement, target: number, suffix: string, duration: number = 2) => {
      gsap.fromTo(
        element,
        { innerText: 0 },
        { 
          innerText: target,
          duration: duration,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            const current = Math.floor(Number(element.innerText));
            if (suffix === "M+") {
              element.innerText = `${(current / 1000000).toFixed(0)}M+`;
            } else if (suffix === "K+") {
              element.innerText = `${(current / 1000).toFixed(0)}K+`;
            } else if (suffix === "%") {
              element.innerText = `${current}%`;
            }
          },
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    };

    if (imagesRef.current) countUp(imagesRef.current, 10000000, "M+", 2.5);
    if (creatorsRef.current) countUp(creatorsRef.current, 50000, "K+", 2);
    if (royaltyRef.current) countUp(royaltyRef.current, 100, "%", 1.5);
  })
  return (
    <section className="w-full mx-auto py-10 md:py-22 bg-gray-10">
      <div className="">
        <div className="max-w-7xl px-4 md:px-8 lg:px-16 w-full mx-auto">
          <header className="w-full px-6 py-3 lg:py-8 text-center max-w-7xl mx-auto">
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary tracking-tight leading-tight">
              Everything you need <br className="hidden md:block" />
              <span className="italic split-line text-orange-500">to create</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-light max-w-2xl mx-auto leading-relaxed font-light">
              Discover millions of high-quality images, support African creators, and build your creative projects with
              confidence and authenticity.
            </p>
          </header>

          <section className="py-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={i}
                    className="group feature-card bg-white p-6 rounded-2xl border border-gray-100  shadow-sm transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${feature.iconBg}`}
                    >
                      <Icon size={28} className={feature.iconColor} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className=" bg-gray-50 w-full">
          <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 w-full py-16 mx-auto">
            <div className="text-center">
              <div ref={imagesRef} className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">0</div>
              <div className="text-gray-600 text-lg">High-quality images</div>
            </div>
            <div className="text-center">
              <div ref={creatorsRef} className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">0</div>
              <div className="text-gray-600 text-lg">African creators</div>
            </div>
            <div className="text-center">
              <div ref={royaltyRef} className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">0</div>
              <div className="text-gray-600 text-lg">Royalty-free downloads</div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 w-full mx-auto max-w-7xl">
          <div className="text-center bg-gradient-to-br rounded-3xl p-16 md:p-20 border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to start creating?
            </h3>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators and designers who trust Afrimages for their creative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Start exploring
                <ArrowRight3 size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Features;
