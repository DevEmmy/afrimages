"use client";
import React from 'react';
import Nav from '@/components/Widgets/Nav';
import Footer from '@/components/Widgets/Footer';
import { 
  Star1, 
  Heart, 
  People, 
  Flash, 
  Crown, 
  Global,
  Award,
  Shield,
  Camera,
  ArrowRight3,
  User
} from 'iconsax-react';

const AboutPage = () => {
  const stats = [
    {
      number: '10M+',
      label: 'High-quality images',
      icon: Camera
    },
    {
      number: '50K+',
      label: 'African creators',
      icon: People
    },
    {
      number: '100+',
      label: 'Countries reached',
      icon: Global
    },
    {
      number: '99%',
      label: 'Customer satisfaction',
      icon: Award
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We celebrate genuine African stories and perspectives through authentic photography and art.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We ensure secure transactions and protect the rights of both creators and buyers.'
    },
    {
      icon: Flash,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best platform for African creative expression.'
    },
    {
      icon: Crown,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in everything we do.'
    }
  ];

  const team = [
    {
      name: 'Olaosebikan Emmanuel',
      role: 'Founder & CEO',
      bio: 'Passionate about showcasing African creativity to the world.'
    },
    {
      name: 'Olaniyan Precious',
      role: 'Head of Content',
      bio: 'Creating contents across our social platforms'
    },
    {
      name: 'Faith Adeyombo',
      role: 'Brand Designer',
      bio: 'Designing our brand looks'
    },
    {
      name: 'Adedolapo Adeleke',
      role: 'Graphics Designing',
      bio: 'Creating appealing designs around our product'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav transparent={false} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star1 size={16} className="text-orange-400" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering African Creativity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to showcase the rich diversity and beauty of Africa through photography and art, while supporting local creators and connecting them with a global audience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <IconComponent size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
              <Flash size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To democratize access to authentic African visual content while providing sustainable income opportunities for African photographers and artists.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that every African story deserves to be told, and every African creator deserves to be compensated fairly for their work.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
              <Global size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To become the world's leading platform for authentic African visual content, connecting millions of creators with billions of viewers worldwide.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where African creativity is celebrated globally and creators are empowered to build sustainable careers doing what they love.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a simple idea to a global platform, here's how Afrimages came to life
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Afrimages was born from a simple observation: the world was missing authentic African perspectives in visual content. While there were countless stock photo platforms, none truly represented the diversity, beauty, and complexity of Africa.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our founder, Aisha Okeowo, a photographer herself, noticed that African creators were often overlooked by major platforms, and their work was either misrepresented or undervalued.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In 2023, she decided to change this narrative by creating a platform that would not only showcase African creativity but also ensure that creators were fairly compensated for their work.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Today</h4>
                <p className="leading-relaxed">
                  Afrimages has grown into a vibrant community of over 50,000 African creators, serving millions of users worldwide who seek authentic African visual content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind Afrimages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <User size={32} className="text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-16 md:p-20 border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join the Afrimages Community
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you're a creator looking to showcase your work or a buyer seeking authentic African content, we'd love to have you as part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
              Start Creating
              <ArrowRight3 size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              Explore Images
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage; 