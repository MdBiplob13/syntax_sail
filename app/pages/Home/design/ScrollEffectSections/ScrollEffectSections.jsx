"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ScrollEffectSections = () => {
  const sections = [
    {
      title: "We design websites that convert visitors into customers.",
      image: "/office_scroll_1.jpg",
      bgColor: "from-blue-900/90 to-blue-700/90"
    },
    {
      title: "Custom web solutions — fast, reliable, and scalable.",
      image: "/office_scroll_2.jpg", 
      bgColor: "from-purple-900/90 to-purple-700/90"
    },
    {
      title: "UX-first design for memorable brand experiences.",
      image: "/office_scroll_3.jpg",
      bgColor: "from-green-900/90 to-green-700/90"
    },
    {
      title: "We build websites customers love to use.",
      image: "/office_scroll_4.jpg",
      bgColor: "from-red-900/90 to-red-700/90"
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
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={section.image}
                alt={`Office workspace ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.bgColor}`}></div>
            </div>

            {/* Content */}
            <motion.div 
              className="relative z-10 max-w-6xl mx-auto px-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {section.title}
              </motion.h2>
              
              {/* Decorative line */}
              <motion.div 
                className="w-24 h-1 bg-white mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              ></motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ScrollEffectSections;