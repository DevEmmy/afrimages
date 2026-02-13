"use client";
import React, { useRef } from 'react';
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import { Zap, Languages, Heart, Shield, Lightbulb, Gem } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  // Refs for animations
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const missionVisionRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Statistics counting animation
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
            } else {
              element.innerText = `${current}${suffix}`;
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

    // Apply counting animations to statistics
    statsRefs.current.forEach((stat, index) => {
      if (!stat) return;
      const text = stat.textContent || "";
      if (text.includes("M+")) countUp(stat, 10000000, "M+", 2.5);
      else if (text.includes("K+")) countUp(stat, 50000, "K+", 2);
      else if (text.includes("+")) countUp(stat, 100, "+", 1.5);
      else if (text.includes("%")) countUp(stat, 99, "%", 1.5);
    });

    // Mission & Vision cards animation
    if (missionVisionRef.current) {
      gsap.fromTo(".mission-vision-card", {
        opacity: 0,
        y: 60,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: missionVisionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Journey section animation
    if (journeyRef.current) {
      gsap.fromTo(journeyRef.current.querySelectorAll(".journey-content, .journey-image"), {
        opacity: 0,
        y: 80
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: journeyRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    }

    // Core values cards animation
    if (valuesRef.current) {
      gsap.fromTo(".values-card", {
        opacity: 0,
        y: 40,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Team members animation
    if (teamRef.current) {
      gsap.fromTo(".team-member", {
        opacity: 0,
        y: 60,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  }, []);
  return (
    <div className="bg-background-light text-text-light font-sans antialiased selection:bg-secondary selection:text-white">
      <Nav transparent={false} />

      {/* Header */}
      <header className="w-full bg-primary text-white relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"></div> */}
        <div className="relative z-10 px-6 py-24 lg:py-32 max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs uppercase tracking-widest font-medium mb-8 text-gray-300">
            Our Story
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold mb-8 tracking-tight leading-tight">
            Empowering <br className="hidden md:block"/>
            <span className="italic text-secondary">African Creativity</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            We're on a mission to showcase the rich diversity and beauty of Africa through photography and art, while supporting local creators and connecting them with a global audience.
          </p>
        </div>
      </header>

      {/* Statistics */}
      <div className="bg-surface-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-4">
              <div ref={(el) => { statsRefs.current[0] = el; }} className="text-4xl font-display font-bold text-primary mb-2">10M+</div>
              <div className="text-xs uppercase tracking-widest text-muted-light font-medium">Images</div>
            </div>
            <div className="p-4">
              <div ref={(el) => { statsRefs.current[1] = el; }} className="text-4xl font-display font-bold text-primary mb-2">50K+</div>
              <div className="text-xs uppercase tracking-widest text-muted-light font-medium">Creators</div>
            </div>
            <div className="p-4">
              <div ref={(el) => { statsRefs.current[2] = el; }} className="text-4xl font-display font-bold text-primary mb-2">100+</div>
              <div className="text-xs uppercase tracking-widest text-muted-light font-medium">Countries</div>
            </div>
            <div className="p-4">
              <div ref={(el) => { statsRefs.current[3] = el; }} className="text-4xl font-display font-bold text-primary mb-2">99%</div>
              <div className="text-xs uppercase tracking-widest text-muted-light font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section ref={missionVisionRef} className="px-6 py-24 max-w-7xl mx-auto bg-[#FDFDFD]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="mission-vision-card glassmorphic p-10 md:p-12 rounded-3xl shadow-soft group hover:shadow-glass transition-all duration-500">
            {/* <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Zap className="text-secondary text-3xl" />
            </div> */}
            <h3 className="font-display text-3xl font-bold mb-6 text-primary">Our Mission</h3>
            <p className="text-muted-light leading-relaxed mb-6">
              To democratize access to authentic African visual content while providing sustainable income opportunities for African photographers and artists.
            </p>
            <p className="text-muted-light leading-relaxed">
              We believe that every African story deserves to be told, and every African creator deserves to be compensated fairly for their work.
            </p>
          </div>
          <div className="mission-vision-card glassmorphic p-10 md:p-12 rounded-3xl shadow-soft group hover:shadow-glass transition-all duration-500">
            {/* <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Languages className="text-primary text-3xl" />
            </div> */}
            <h3 className="font-display text-3xl font-bold mb-6 text-primary">Our Vision</h3>
            <p className="text-muted-light leading-relaxed mb-6">
              To become the world's leading platform for authentic African visual content, connecting millions of creators with billions of viewers worldwide.
            </p>
            <p className="text-muted-light leading-relaxed">
              We envision a world where African creativity is celebrated globally and creators are empowered to build sustainable careers doing what they love.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section ref={journeyRef} className="px-6 py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-muted-light font-light text-lg">From a simple idea to a global platform.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="journey-content lg:w-1/2 space-y-10">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-4">The Beginning</h3>
                <p className="text-muted-light leading-relaxed">
                  AfriCreate was born from a simple observation: the world was missing authentic African perspectives in visual content. While there were countless stock photo platforms, none truly represented the diversity, beauty, and complexity of Africa.
                </p>
              </div>
              <div>
                <p className="text-muted-light leading-relaxed">
                  Our founder, Aisha Okeowo, a photographer herself, noticed that African creators were often overlooked by major platforms, and their work was either misrepresented or undervalued.
                </p>
              </div>
              <div className="bg-secondary/5 border-l-4 border-secondary p-8 rounded-r-xl">
                <h4 className="font-display text-xl font-bold text-secondary mb-2">Today</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Afrimages has grown into a vibrant community of over 50,000 African creators, serving millions of users worldwide who seek authentic African visual content.
                </p>
              </div>
            </div>
            <div className="journey-image lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img alt="Founder working with team" className="w-full h-full object-cover" src="https://plus.unsplash.com/premium_vector-1729784873969-0fe0087a1e07?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-gray-100 rounded-3xl -z-0 hidden lg:block"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="px-6 py-24 bg-background-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-muted-light max-w-2xl mx-auto">The principles that guide everything we do as we build for the future.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="values-card bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex-shrink-0 flex items-center justify-center">
                <Heart className="text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">Authenticity</h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  We celebrate genuine African stories and perspectives through authentic photography and art, rejecting stereotypes.
                </p>
              </div>
            </div>
            <div className="values-card bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center">
                <Shield className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">Trust &amp; Security</h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  We ensure secure transactions and protect the rights of both creators and buyers, fostering a safe marketplace.
                </p>
              </div>
            </div>
            <div className="values-card bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex-shrink-0 flex items-center justify-center">
                <Gem className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">Innovation</h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  We continuously innovate to provide the best platform for African creative expression, using tech to bridge gaps.
                </p>
              </div>
            </div>
            <div className="values-card bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-green-50 flex-shrink-0 flex items-center justify-center">
                <Lightbulb className="text-green-600" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary mb-3">Excellence</h3>
                <p className="text-muted-light text-sm leading-relaxed">
                  We maintain the highest standards of quality in everything we do, from our curated collections to customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="px-6 py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-muted-light mb-16">The passionate individuals behind AfriCreate.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="team-member group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-secondary transition-colors duration-300">
                <img alt="Olaosebikan Emmanuel" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-lnQSrvE9ymCsl20H9ZhIO6dxxJ8xnu-JmDSY5kU_xW-Of9jp3TVBDDDwTpBjzPmvqPGOT2Az6pNOD7o18EkvxSy9PMQpY91KBSWPPTnnypSD__yXOiMDY2-6KrC2vO463F4qhdkyLF9dZZmucoeYPnaFLSCADI5upqRVa_pZUn8Qs1orJbC86-XtkL4b6OVfULnByac2zTntwN-369Cxfku4vQGq23pp_87IpL96c666T13tG3ziL6WuilsWUNKAk7pcATWLFLo"/>
              </div>
              <h3 className="font-display text-lg font-bold text-primary">Olaosebikan Emmanuel</h3>
              <p className="text-secondary text-sm font-medium mb-3">Founder &amp; CEO</p>
              <p className="text-xs text-muted-light leading-relaxed max-w-[200px] mx-auto">
                Passionate about showcasing African creativity to the world.
              </p>
            </div>
            <div className="team-member group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-secondary transition-colors duration-300">
                <img alt="Olaniyan Precious" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfZo2WqIgNfEBKWPutsy8noSBLLDyfF29UtX9BIhMqw9PVqNeOnXuQ_ZXCd61fbSsB_L8hwxwPNVc_9CV7K4_B3E0kWt7l5S5ujc_13Z6dwJGLNOzfuT6MR2IznlgHlCquOetriHWEZ6HBQQbJrhB7O_wo7TP21QDAIQbFKTfHSaWJaNOTpbj8ygI8odEU30UwPh9M9K1t-zxRRlrdSAJBNxL6v0iCsK10E9JBmmBhyMSq046v0D4YJ63hEuZBYHiS1ytT_BaHOo"/>
              </div>
              <h3 className="font-display text-lg font-bold text-primary">Olaniyan Precious</h3>
              <p className="text-secondary text-sm font-medium mb-3">Head of Content</p>
              <p className="text-xs text-muted-light leading-relaxed max-w-[200px] mx-auto">
                Creating contents across our social platforms.
              </p>
            </div>
            <div className="team-member group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-secondary transition-colors duration-300">
                <img alt="Faith Adeyombo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl9QIa8fve5uQ1AII7Eyf6-GmKlzwKwOGHMCv2bqa1SKoS1BVhsEqnKFm1FMae-y-L4lm3-skQD6OsknWnxjgkyYDOwYsmrIztlHmI7s7FzDM-6F5DlPkhvFA6if0a6GxoeyPKE3Z_cR8hWXQmaD3KHC3AWk3L9n3LdC9da1y2SxfW1w96OXdnXhKJxzRuB4xh8MjGfzcJbMXRy1r2Hhj_zmJvSdwJtpQWzaZO6bK1hdkIFeJFwsMIjvQo8gRZ3vBM68ldqbHr9h0"/>
              </div>
              <h3 className="font-display text-lg font-bold text-primary">Faith Adeyombo</h3>
              <p className="text-secondary text-sm font-medium mb-3">Brand Designer</p>
              <p className="text-xs text-muted-light leading-relaxed max-w-[200px] mx-auto">
                Designing our brand looks and visual identity.
              </p>
            </div>
            <div className="team-member group">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gray-50 shadow-lg group-hover:border-secondary transition-colors duration-300">
                <img alt="Adedolapo Adeleke" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Dox_DwjMyE9oR9GBKuxC7NJQY-a1gtmWzFJA24FmmDnvlKC-D4GQAGfjanW8U8jQbA-g_hsjkS0fo5fxW4pc5s62A2AqG1ursNEx34-CzQecGU1zd4SN37_x33EB62aDgqsukWsySpO9QE1SHVERgAyfzbj_Zg9ukzVafjRV7ursBYdiIwPDC5l0LxMWj0Xj1iUiHo0HEfWkHQQo57bZ7O3UE6xKgwEpL_gCIEFFTTcJCoTneSSYFGBV2_ok_rtz_qhcUIo6V9Y"/>
              </div>
              <h3 className="font-display text-lg font-bold text-primary">Adedolapo Adeleke</h3>
              <p className="text-secondary text-sm font-medium mb-3">Graphics Designing</p>
              <p className="text-xs text-muted-light leading-relaxed max-w-[200px] mx-auto">
                Creating appealing designs around our product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage; 