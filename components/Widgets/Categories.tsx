"use client"
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import {
  Users,
  TreePine,
  Coffee,
  PawPrint,
  Building2,
  Palette,
  Utensils
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Category {
  url: string;
  title: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  // color: string;
  hoverBg: string;
  count: string;
  height: string;
}

export const categories: Category[] = [
   {
     url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZU6ScLvFnpU_w6fhH8YTEdEIRjmzXiOZvkU5OQwPb6N0DwUNIKjeTY8Herdv6Qe-JWUCSmXRJkg_p6TTjVAqVxwilKHvvMpmD1XlYJ7gkRDpLHCuu2zjVlCpy9z91T69OzpZuMJ2n6cMz-nAT4vcpWOBYnITithCc2aZ4keUhdSEed5SFkG7VpmotnPHPNSWFV7nKJuBqA64DJXWkKNORqcMr0G3nZ3HjKitxIuTae6b1-6fL6MW_pstx9fs9PAsVKcpos9adxfI",
     title: "People",
     icon: Users,
     hoverBg: "group-hover:bg-white/80",
     count: "2.3K+ Images",
     height: "h-[320px]"
   },
   {
     url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Dox_DwjMyE9oR9GBKuxC7NJQY-a1gtmWzFJA24FmmDnvlKC-D4GQAGfjanW8U8jQbA-g_hsjkS0fo5fxW4pc5s62A2AqG1ursNEx34-CzQecGU1zd4SN37_x33EB62aDgqsukWsySpO9QE1SHVERgAyfzbj_Zg9ukzVafjRV7ursBYdiIwPDC5l0LxMWj0Xj1iUiHo0HEfWkHQQo57bZ7O3UE6xKgwEpL_gCIEFFTTcJCoTneSSYFGBV2_ok_rtz_qhcUIo6V9Y",
     title: "Nature",
     icon: TreePine,
     hoverBg: "group-hover:bg-emerald-500",
     count: "3.2K+ Images",
     height: "h-[240px]"
   },
   {
     url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9QIa8fve5uQ1AII7Eyf6-GmKlzwKwOGHMCv2bqa1SKoS1BVhsEqnKFm1FMae-y-L4lm3-skQD6OsknWnxjgkyYDOwYsmrIztlHmI7s7FzDM-6F5DlPkhvFA6if0a6GxoeyPKE3Z_cR8hWXQmaD3KHC3AWk3L9n3LdC9da1y2SxfW1w96OXdnXhKJxzRuB4xh8MjGfzcJbMXRy1r2Hhj_zmJvSdwJtpQWzaZO6bK1hdkIFeJFwsMIjvQo8gRZ3vBM68ldqbHr9h0",
     title: "Abstract",
     icon: Palette,
     hoverBg: "group-hover:bg-indigo-500",
     count: "1.5K+ Images",
     height: "h-[400px]"
   },
   {
     url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-lnQSrvE9ymCsl20H9ZhIO6dxxJ8xnu-JmDSY5kU_xW-Of9jp3TVBDDDwTpBjzPmvqPGOT2Az6pNOD7o18EkvxSy9PMQpY91KBSWPPTnnypSD__yXOiMDY2-6KrC2vO463F4qhdkyLF9dZZmucoeYPnaFLSCADI5upqRVa_pZUn8Qs1orJbC86-XtkL4b6OVfULnByac2zTntwN-369Cxfku4vQGq23pp_87IpL96c666T13tG3ziL6WuilsWUNKAk7pcATWLFLo",
     title: "Food & Drinks",
     icon: Utensils,
     hoverBg: "group-hover:bg-orange-500",
     count: "1.8K+ Images",
     height: "h-[260px]"
   },
   {
     url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOfZo2WqIgNfEBKWPutsy8noSBLLDyfF29UtX9BIhMqw9PVqNeOnXuQ_ZXCd61fbSsB_L8hwxwPNVc_9CV7K4_B3E0kWt7l5S5ujc_13Z6dwJGLNOzfuT6MR2IznlgHlCquOetriHWEZ6HBQQbJrhB7O_wo7TP21QDAIQbFKTfHSaWJaNOTpbj8ygI8odEU30UwPh9M9K1t-zxRRlrdSAJBNxL6v0iCsK10E9JBmmBhyMSq046v0D4YJ63hEuZBYHiS1ytT_BaHOo",
     title: "Urban/City",
     icon: Building2,
     hoverBg: "group-hover:bg-cyan-500",
     count: "1.1K+ Images",
     height: "h-[300px]"
   },
   {
     url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1jWv3iPzCjxp49QJLImJHNBY7Z-fu0cCf0Jo5LrihSD2kDThV441Yxt7JqtYlEZPoKxGfRCVsEupMGFReLlwHAw1zsD3HhYn44iAyFeR43UwudjK8yKbjYGAEBJziex1n-WI39_yJwmNc0Gd1tS0TAvS02lrbvfY6GQAX-nFhxCPukL_ZEmRj5JIrjYRsL3Tl2_4qtf-mi8GUMdadyBJCRM0q9qkqa1KIMuwWqzBV8mQE1xtX7qK23-2GK7Pg7afqH1JI7PXceTY",
     title: "Animals",
     icon: PawPrint,
     hoverBg: "group-hover:bg-purple-500",
     count: "3K+ Images",
     height: "h-[340px]"
   }
 ];


const Categories = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Set initial state for all items
    gsap.set(itemRefs.current, {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotationY: 15
    });

    // Create popup animation for each item
    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      gsap.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }, []);

  return (
    <section className="px-6 py-16 max-w-7xl mx-auto mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore by Category
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover authentic African visuals across diverse categories, from people and nature to urban landscapes and abstract art.
        </p>
      </div>

      <div ref={containerRef} className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <Link
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              key={i}
              href="/"
              className={`block relative group rounded-2xl overflow-hidden cursor-pointer ${cat.height}`}
            >
              <img
                src={cat.url}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div
                className={`absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white transition-colors duration-300 ${cat.hoverBg}`}
              >
                <Icon size={18} />
              </div>

              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white text-2xl font-bold mb-1">
                  {cat.title}
                </h3>
                <p className="text-gray-300 text-xs uppercase tracking-wider mb-4">
                  {cat.count}
                </p>

                <button className="text-white text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  View Collection →
                </button>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
          View all categories →
        </button>
      </div>
    </section>
  );
};

export default Categories;
