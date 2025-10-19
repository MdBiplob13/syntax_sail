"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiSearch, FiTrendingUp, FiPalette } from "react-icons/fi";

const ServicesCards = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive and engaging user experiences that convert visitors into customers",
      icon: FiPalette,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      darkBgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "Web Development",
      desc: "Building robust and scalable web applications with modern technologies",
      icon: FiCode,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      darkBgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "SEO Optimization",
      desc: "Boosting your visibility and search rankings to drive organic traffic",
      icon: FiSearch,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      darkBgColor: "from-green-900/20 to-emerald-900/20"
    },
    {
      title: "Digital Marketing",
      desc: "Driving growth through strategic campaigns and data-driven insights",
      icon: FiTrendingUp,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      darkBgColor: "from-orange-900/20 to-red-900/20"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            We Help You Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D90A2C] to-red-600">
              Digital Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs and goals. 
            From concept to launch, we're your trusted partner.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                         transition-all duration-500 border border-gray-100 dark:border-gray-700 
                         hover:border-[#D90A2C]/30 hover:scale-105 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.darkBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#D90A2C] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  {/* Learn More Link */}
                  <motion.div 
                    className="flex items-center text-[#D90A2C] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D90A2C]/30 transition-all duration-300"></div>

                {/* Animated Corner */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D90A2C] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D90A2C] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button 
            className="bg-gradient-to-r from-[#D90A2C] to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
            <FiArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCards;
