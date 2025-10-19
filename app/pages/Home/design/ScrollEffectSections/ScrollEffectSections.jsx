"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ScrollEffectSections = () => {
  const sections = [
    {
      title: "We design websites that convert visitors into customers.",
      subtitle: "Conversion-Focused Design",
      image: "/office_scroll_1.jpg",
      bgColor: "from-blue-900/80 to-blue-700/80",
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      title: "Custom web solutions — fast, reliable, and scalable.",
      subtitle: "Enterprise Development",
      image: "/office_scroll_2.jpg", 
      bgColor: "from-purple-900/80 to-purple-700/80",
      accentColor: "from-purple-500 to-pink-500"
    },
    {
      title: "UX-first design for memorable brand experiences.",
      subtitle: "User Experience",
      image: "/office_scroll_3.jpg",
      bgColor: "from-green-900/80 to-green-700/80",
      accentColor: "from-green-500 to-emerald-500"
    },
    {
      title: "We build websites customers love to use.",
      subtitle: "Customer Satisfaction",
      image: "/office_scroll_4.jpg",
      bgColor: "from-red-900/80 to-red-700/80",
      accentColor: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="relative">
      {sections.map((section, index) => {
        return (
          <div
            key={index}
            className="min-h-screen flex items-center justify-center sticky top-0 overflow-hidden"
          >
            {/* Background Image with Parallax */}
            <motion.div 
              className="absolute inset-0 w-full h-full"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-200px" }}
            >
              <Image
                src={section.image}
                alt={`Office workspace ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor}`}></div>
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
                
                {/* Left Content */}
                <motion.div 
                  className="space-y-8"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Subtitle */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${section.accentColor}`}></div>
                    <span className="text-white/90 font-medium text-sm">{section.subtitle}</span>
                  </motion.div>

                  {/* Main Title */}
                  <motion.h2 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {section.title}
                  </motion.h2>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <motion.button
                      className={`px-8 py-4 rounded-full bg-gradient-to-r ${section.accentColor} text-white font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Main Image Card */}
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={section.image}
                      alt={`Office workspace ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    
                    {/* Overlay with gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${section.bgColor}`}></div>
                    
                    {/* Floating Stats Card */}
                    <motion.div
                      className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="text-2xl font-bold text-gray-800">100+</div>
                      <div className="text-sm text-gray-600">Projects Delivered</div>
                    </motion.div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.6, 0.3, 0.6]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Progress Indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {sections.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex === index ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default ScrollEffectSections;