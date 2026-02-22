import React from "react";
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-background-light text-text-light font-sans antialiased selection:bg-secondary selection:text-white">
    <Nav /> 
      <header className="w-full bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10 px-6 py-24 lg:py-32 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium mb-8 text-gray-300">
              Legal Documentation
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold mb-8 tracking-tight leading-tight">
              Terms & <br className="hidden md:block" />
              <span className="italic text-secondary">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              Last updated: October 24, 2024. Please read these terms carefully before using the AfriCreate marketplace.
            </p>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <aside className="lg:w-1/4">
            <nav className="sticky top-12 space-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-light mb-6">Sections</p>
              <ul className="space-y-4">
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#introduction">01. Introduction</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#definitions">02. Key Definitions</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#accounts">03. User Accounts</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#intellectual-property">04. Intellectual Property</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#licensing">05. Licensing Terms</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#conduct">06. User Conduct</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#payments">07. Payments & Fees</a></li>
                <li><a className="sidebar-link block text-sm font-medium text-muted-light hover:text-primary" href="#termination">08. Termination</a></li>
              </ul>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs text-muted-light leading-relaxed">
                  Need a PDF version? <br />
                  <a className="text-secondary hover:underline flex items-center gap-1 mt-2" href="#">
                    <span className="material-symbols-outlined text-sm">download</span>
                    Download T&Cs
                  </a>
                </p>
              </div>
            </nav>
          </aside>
          <div className="lg:w-3/4 max-w-3xl">
            <section className="mb-20 scroll-mt-12" id="introduction">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">01.</span> Introduction
              </h2>
              <div className="space-y-6 text-muted-light leading-relaxed text-base">
                <p>Welcome to AfriCreate. These Terms and Conditions ("Terms") govern your access to and use of the AfriCreate website, mobile applications, and services. By accessing or using our platform, you agree to be bound by these Terms and our Privacy Policy.</p>
                <p>AfriCreate is a marketplace designed specifically to showcase and facilitate the licensing of high-quality African creative assets, including photography, digital art, and illustrations. Our mission is to empower African creators while providing the world with authentic visual stories.</p>
              </div>
            </section>
            <hr className="border-gray-100 my-16" />
            <section className="mb-20 scroll-mt-12" id="definitions">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">02.</span> Key Definitions
              </h2>
              <div className="grid gap-6">
                <div className="glassmorphic-card p-6 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">The Creator</h4>
                  <p className="text-muted-light text-sm leading-relaxed italic">The individual or entity who uploads and owns the original copyright to the visual asset submitted to the platform.</p>
                </div>
                <div className="glassmorphic-card p-6 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">The Licensee</h4>
                  <p className="text-muted-light text-sm leading-relaxed italic">The user who purchases a license to use the visual asset according to the terms specified at the time of purchase.</p>
                </div>
                <div className="glassmorphic-card p-6 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">Licensed Asset</h4>
                  <p className="text-muted-light text-sm leading-relaxed italic">Any photograph, image, vector, or digital file made available for licensing on AfriCreate.</p>
                </div>
              </div>
            </section>
            <hr className="border-gray-100 my-16" />
            <section className="mb-20 scroll-mt-12" id="accounts">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">03.</span> User Accounts
              </h2>
              <div className="space-y-6 text-muted-light leading-relaxed">
                <p>To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate and complete.</p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span>You are responsible for safeguarding your password and any activities under your account.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span>You must be at least 18 years of age to create an account or use our services.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                    <span>We reserve the right to suspend or terminate accounts that provide false information or violate our safety guidelines.</span>
                  </li>
                </ul>
              </div>
            </section>
            <hr className="border-gray-100 my-16" />
            <section className="mb-20 scroll-mt-12" id="intellectual-property">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">04.</span> Intellectual Property
              </h2>
              <div className="space-y-6 text-muted-light leading-relaxed">
                <p>All content on AfriCreate, including logos, trademarks, text, graphics, and the "look and feel" of the site, is the exclusive property of AfriCreate or its licensors and is protected by international copyright laws.</p>
                <p className="bg-gray-50 border-l-4 border-primary p-6 italic font-medium text-primary">
                  "Creators retain the full copyright of their original works. By uploading content, Creators grant AfriCreate a non-exclusive, worldwide license to display and market the work for the purpose of facilitating sales."
                </p>
              </div>
            </section>
            <hr className="border-gray-100 my-16" />
            <section className="mb-20 scroll-mt-12" id="licensing">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">05.</span> Licensing Terms
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-primary font-bold mb-3">Standard License</h4>
                  <p className="text-muted-light text-sm leading-relaxed">Allows for use in digital and print media, including websites, advertising, and internal presentations. Limited to 500,000 copies in print.</p>
                </div>
                <div className="pb-8 border-b border-gray-100">
                  <h4 className="text-primary font-bold mb-3">Extended License</h4>
                  <p className="text-muted-light text-sm leading-relaxed">Includes all rights of the Standard License plus the right to use assets in products for resale (merchandise, templates, etc.) and unlimited print runs.</p>
                </div>
                <div className="bg-secondary/5 border border-secondary/10 p-6 rounded-2xl">
                  <h4 className="text-secondary font-bold mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">info</span>
                    Prohibited Usage
                  </h4>
                  <ul className="text-sm text-muted-light space-y-2">
                    <li>• Reselling the stand-alone file.</li>
                    <li>• Using assets in a way that is defamatory or pornographic.</li>
                    <li>• Claiming false authorship of the asset.</li>
                  </ul>
                </div>
              </div>
            </section>
            <hr className="border-gray-100 my-16" />
            <section className="mb-20 scroll-mt-12" id="conduct">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">06.</span> User Conduct
              </h2>
              <div className="space-y-6 text-muted-light leading-relaxed">
                <p>Users must interact with the platform and other users in a professional and respectful manner. Any attempt to scrape data, bypass security measures, or upload malicious code will result in immediate termination of access.</p>
              </div>
            </section>
            <hr className="border-gray-100 my-16" />
            <section className="mb-20 scroll-mt-12" id="payments">
              <h2 className="font-display text-3xl font-bold text-primary mb-8 flex items-baseline gap-4">
                <span className="text-secondary text-lg font-sans">07.</span> Payments & Fees
              </h2>
              <div className="space-y-6 text-muted-light leading-relaxed">
                <p>All prices are listed in USD unless otherwise specified. AfriCreate takes a platform commission on every sale, which covers hosting, marketing, and transaction processing. Payouts to Creators are processed on a monthly basis once the minimum threshold is met.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
