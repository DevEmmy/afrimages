"use client";
import React, { useState, useRef } from 'react';
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import { 
  Message, 
  Call, 
  Location, 
  Clock, 
  Send, 
  Star1,
  Instagram,
  Facebook,
} from 'iconsax-react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  // Refs for animations
  const heroRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  useGSAP(() => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll(".hero-content, .hero-badge"), {
        opacity: 0,
        y: 60
      }, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Contact info cards animation
    if (contactInfoRef.current) {
      gsap.fromTo(".contact-card", {
        opacity: 0,
        y: 40,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Form and additional info section animation
    if (formSectionRef.current) {
      gsap.fromTo(formSectionRef.current.querySelectorAll(".form-section, .info-section"), {
        opacity: 0,
        y: 80,
        x: (index) => index === 0 ? -60 : 60
      }, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: formSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    }

    // FAQ cards animation
    if (faqRef.current) {
      gsap.fromTo(".faq-card", {
        opacity: 0,
        y: 50,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  }, []);

  const contactInfo = [
    {
      icon: Message,
      title: 'Email Us',
      details: 'info@afrimages.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: Call,
      title: 'Call Us',
      details: '+234-904-8988-583',
      description: 'Mon-Fri from 8am to 6pm WAT'
    },
    {
      icon: Location,
      title: 'Visit Us',
      details: 'Lagos, Nigeria',
      description: 'Schedule a meeting with our team'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: '< 24 hours',
      description: 'We typically respond within a day'
    }
  ];

  const faqs = [
    {
      question: 'How do I sell my photos on Afrimages?',
      answer: 'Simply create an account, upload your high-quality African photography, set your pricing, and start earning from your creative work.'
    },
    {
      question: 'What types of images do you accept?',
      answer: 'We accept all types of high-quality photography that showcases African culture, landscapes, people, and creativity. Images must be original and properly licensed.'
    },
    {
      question: 'How do I get paid for my sales?',
      answer: 'We offer multiple payment methods including bank transfers, PayPal, and mobile money. Payments are processed monthly for all sales above the minimum threshold.'
    },
    {
      question: 'Can I use images for commercial purposes?',
      answer: 'Yes, all images come with appropriate licensing. Free images have basic usage rights, while premium images include commercial usage rights. Check individual image licenses for details.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav transparent={false} />
      
      {/* Hero Section */}
      <div ref={heroRef} className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Message size={16} className="text-orange-400" />
              <span className="text-sm font-medium">Get in touch with us</span>
            </div>
            <h1 className="hero-content text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Connect
            </h1>
            <p className="hero-content text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions about Afrimages? We're here to help you navigate your photographic journey in Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Contact Info Grid */}
        <div ref={contactInfoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="contact-card bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-6">
                  <IconComponent size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-sm font-semibold text-orange-500 mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm font-poppins">{info.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div ref={formSectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="form-section bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="info-section space-y-8">
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why choose Afrimages?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star1 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Authentic African Content</h4>
                    <p className="text-gray-600">Curated collection of genuine African photography and art</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star1 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Support Local Creators</h4>
                    <p className="text-gray-600">Direct support to African photographers and artists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star1 size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Guaranteed</h4>
                    <p className="text-gray-600">High-resolution images with proper licensing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card faq-card bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage; 