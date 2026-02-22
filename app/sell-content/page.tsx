import React from "react";
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';

export default function SellContentPage() {
  return (
    <div className="bg-background-light text-text-light font-sans antialiased selection:bg-secondary selection:text-white">
    <Nav />
      <header className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden min-h-[80vh] flex items-center">
       <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium mb-8 text-gray-300">
              Empowering African Creators
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-semibold mb-8 tracking-tight leading-[1.1]">
              Turn Your Vision <br />
              <span className="italic text-secondary">into Value.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light mb-12">
              Join the premier marketplace for high-quality African creative assets. Reach a global audience while retaining your creative rights.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                className="px-10 py-5 bg-secondary text-white font-semibold text-lg rounded-full tracking-wide transition-all duration-300 transform hover:bg-[#D44D27] hover:scale-105 active:scale-95 shadow-lg"
                href="#join"
              >
                Start Selling
              </a>
              <a
                className="px-10 py-5 border border-white/30 text-white font-semibold text-lg rounded-full tracking-wide transition-all duration-300 transform hover:bg-white/10 hover:scale-105 active:scale-95 shadow-lg"
                href="#how-it-works"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-primary text-3xl">public</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Global Reach</h3>
              <p className="text-muted-light leading-relaxed">Connect with premium buyers and agencies across Europe, North America, and Asia seeking authentic African visuals.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Fair Commissions</h3>
              <p className="text-muted-light leading-relaxed">We offer industry-leading royalty rates. Keep more of what you earn with transparent, tiered commission structures.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">Creator Rights</h3>
              <p className="text-muted-light leading-relaxed">You always own your copyright. Our flexible licensing models are designed to protect and honor your intellectual property.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-background-light overflow-hidden" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">Simple, Transparent Process</h2>
            <p className="text-muted-light max-w-2xl mx-auto text-lg">Your journey from creator to global seller in three elegant steps.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-24">
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="md:w-1/2 text-center md:text-right">
                  <h4 className="font-display text-2xl font-bold text-primary mb-4">Upload Your Content</h4>
                  <p className="text-muted-light">Submit high-resolution photography, vectors, or 4K videos through our streamlined dashboard.</p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl outline outline-[10px] outline-background-light">1</div>
                <div className="md:w-1/2 h-32 hidden md:block"></div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="md:w-1/2 h-32 hidden md:block"></div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl outline outline-[10px] outline-background-light">2</div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h4 className="font-display text-2xl font-bold text-primary mb-4">Quality Review</h4>
                  <p className="text-muted-light">Our curation team reviews each asset for technical quality and authentic representation.</p>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center gap-12 group">
                <div className="md:w-1/2 text-center md:text-right">
                  <h4 className="font-display text-2xl font-bold text-primary mb-4">Start Earning</h4>
                  <p className="text-muted-light">Once approved, your assets go live globally. Track sales and get paid monthly via local or international transfers.</p>
                </div>
                <div className="relative z-10 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl outline outline-[10px] outline-background-light">3</div>
                <div className="md:w-1/2 h-32 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl font-bold text-primary mb-6">What we're looking for</h2>
              <p className="text-muted-light text-lg">We celebrate diverse African stories across multiple formats. High demand for authentic, everyday life visuals.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer category-card">
              <img alt="Photography" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj207MNced8Y6Ck3Pr9FuopvyAWjYww5w89v7PyhobFoaC5_a9fy2cEARnnxe2bra8fngfJFb3ywqzkDcSPapgJOlESPPIxOnFvw6ZjFjORMHbiUp3RhvywSZXv3u6E5axhV3KicFyqD7MiGuAgO3sGfdxtNXR9XFYchaGLF95feGcDGkbbjJCh7-YGaLhh6Rb6OGOzCzvgpm3QAebRGGBwxz647JUPodC9xGA_EdFFJEAu9VlqjWrN4hrnJhIhVNcVxaa9GBisE8" />
              <div className="overlay absolute inset-0 bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Still Imagery</span>
                <h4 className="font-display text-3xl text-white font-medium">Photography</h4>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer category-card">
              <img alt="Illustrations" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvRz6lwGX5qBVBLGIwgFmXe32WfhYB1-zfU94HtbRdIhdFtkbE8coDEcajgsOWMEM8LkfEi0wikOsq1wQEg5aThP4d2Roqr_k3nGZinWnCxnxlV-dRwf4pWVQBCJPbtjnZ59xZ89s6cChK7uoVe7BNyh393TnNyNilpbOS982BIZR8VpX-v8UrVBi7itK3o0aSFmG3UK3x-yAsabH1rLecA6r6TQeM0kC0R4ACXgHA5ph0cddsIbBW7CfUgd3n-tEz6UZwA2vMXJo" />
              <div className="overlay absolute inset-0 bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Digital Art</span>
                <h4 className="font-display text-3xl text-white font-medium">Illustrations</h4>
              </div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer category-card">
              <img alt="Video" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3x1aCDctibuNtReYrm4PKuzGPA22-9zCVWOIbYHBmA1IIhNyM5i7Oo5xY-FmtMQIGnsP6XBkKbnL7GM0FAto2Jk_WRgUbJgPRm5KdneYPNrXW72oPqOEfOvo9ZHUKEVtjj0fgo5ek_PeqP9dB1Pg71wwyTFDAzZnOTVN9xStLPC7csLVlxHNzEBJgJiQpP-2Fhv-f9u-_KNktotFJGzHoVxQCMQ9u0CbALLEGdlzY3ouZcdyUsfuQhFErAAqHb5PLXup2jaQ4iyU" />
              <div className="overlay absolute inset-0 bg-black/30 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Motion Assets</span>
                <h4 className="font-display text-3xl text-white font-medium">Video Content</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-40 bg-gray-50 border-t border-gray-100" id="join">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-8">Ready to Join?</h2>
          <p className="text-muted-light text-xl mb-12 max-w-2xl mx-auto">Create your professional profile today and start showcasing your work to the world's leading brands.</p>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input className="flex-1 px-6 py-4 rounded-sm border-gray-200 focus:border-secondary focus:ring-secondary text-base bg-white shadow-sm" placeholder="Enter your email" type="email" />
                <button className="bg-primary text-white px-8 py-4 font-bold rounded-sm hover:bg-black transition-colors shadow-lg">
                  Get Started
                </button>
              </div>
              <p className="text-[11px] text-muted-light mt-4 tracking-wider uppercase">No hidden fees. Professional support.</p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
