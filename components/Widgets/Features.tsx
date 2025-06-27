import Image from "next/image";
import { 
  Brush2, 
  Book1, 
  Star1, 
  People, 
  ArrowRight3 
} from "iconsax-react";

interface Feature {
  title: string;
  desc: string;
  img: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    title: "Sell Your Art",
    desc: "Empower your creativity—list your photos and art for free or for sale, reaching a global audience.",
    img: "/images/ads.png",
    icon: Brush2,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Curated Collections",
    desc: "Explore handpicked, authentic African visuals—nature, people, culture, and more.",
    img: "/images/showcase.jpg",
    icon: Book1,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Royalty-Free & Premium",
    desc: "Download free images or support creators by purchasing premium, high-res art.",
    img: "/images/banner.jpg",
    icon: Star1,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Community Support",
    desc: "Join a vibrant network of African creatives—collaborate, learn, and grow together.",
    img: "/images/logo.png",
    icon: People,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
  },
];

const Features = () => (
  <section className="w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Everything you need to create
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover millions of high-quality images, support African creators, and build your creative projects with confidence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 rounded-3xl ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                <IconComponent size={32} className="text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                <ArrowRight3 size={24} className="text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">10M+</div>
          <div className="text-gray-600 text-lg">High-quality images</div>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">50K+</div>
          <div className="text-gray-600 text-lg">African creators</div>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">100%</div>
          <div className="text-gray-600 text-lg">Royalty-free downloads</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-16 md:p-20 border border-gray-100">
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
  </section>
);

export default Features;
