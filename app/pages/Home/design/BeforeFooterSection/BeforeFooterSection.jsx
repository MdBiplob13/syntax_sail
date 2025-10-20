import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const BeforeFooterSection = () => {
  return (
    <section className="relative py-24  text-white overflow-hidden">
      {/* Background with better opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Main heading with better hierarchy */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Start Your Project?
        </h2>
        
        {/* Subtitle with improved spacing */}
        <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Let's create something amazing together. Transform your ideas into reality with our expert team.
        </p>

        {/* Centered CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/start-project"
            className="relative flex h-[60px] w-[240px] rounded-2xl items-center justify-center overflow-hidden bg-red-600 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 group"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

            {/* Static gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-red-600"></div>
            
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2 font-semibold text-lg transition-all duration-300 group-hover:gap-3">
              Start Your Project
              <FiArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>

        {/* Additional trust element */}
        <div className="mt-12 flex justify-center items-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>No upfront costs</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default BeforeFooterSection;