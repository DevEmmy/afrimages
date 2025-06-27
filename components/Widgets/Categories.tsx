import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { 
  People, 
  Tree, 
  Coffee, 
  Pet, 
  Building, 
  Shapes 
} from "iconsax-react";

interface Category {
  url: string;
  title: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  color: string;
  bgColor: string;
  count: string;
}

export const categories: Category[] = [
  {
    url: "https://static.vecteezy.com/system/resources/thumbnails/032/467/163/small_2x/traditional-zulu-people-south-africa-within-an-african-tribe-photo.jpg",
    title: "People",
    icon: People,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    count: "2.5K+"
  },
  {
    url: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    title: "Nature",
    icon: Tree,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    count: "3.2K+"
  },
  {
    url: "https://photos1.blogger.com/x/blogger/6449/2809/320/207294/africa.jpg",
    title: "Food & Drinks",
    icon: Coffee,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    count: "1.8K+"
  },
  {
    url: "https://web.yorubaheritagetrails.com/wp-content/uploads/2023/12/867fe0f1741db4eeb695ae801ec77dd6.webp",
    title: "Animals",
    icon: Pet,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    count: "2.1K+"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/View_from_Cairo_Tower_31march2007.jpg/1200px-View_from_Cairo_Tower_31march2007.jpg",
    title: "Urban/City",
    icon: Building,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    count: "1.9K+"
  },
  {
    url: "https://img.freepik.com/free-vector/aboriginal-doodle-pattern_1409-3913.jpg",
    title: "Abstract",
    icon: Shapes,
    color: "from-teal-500 to-indigo-500",
    bgColor: "bg-teal-50",
    count: "1.5K+"
  }
]

const Categories = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Explore by Category
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover authentic African visuals across diverse categories, from people and nature to urban landscapes and abstract art.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                href="/"
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="relative h-64 w-full">
                  <img
                    src={category.url}
                    alt={category.title}
                    
                    className="object-cover size-full  transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                          {category.title}
                        </h3>
                        <p className="text-white/80 text-sm drop-shadow-lg">
                          {category.count} images
                        </p>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Background */}
                <div className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </Link>
            );
          })}
        </div>

        {/* View All Categories CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/categories"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            View all categories
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Categories