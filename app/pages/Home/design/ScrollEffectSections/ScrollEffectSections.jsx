"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ScrollEffectSections = () => {
  const sections = [
    {
      title: "INSTANT VIP SUPPORT",
      subtitle:
        "Get immediate, VIP-level support whenever you need it — a privilege that keeps your learning journey smooth and uninterrupted!",
      image: "/office_scroll_1.jpg",
    },
    {
      title: "POWERFUL ADVANCED CONTENT",
      subtitle:
        "Access advanced learning resources designed to push your skills to the next level.",
      image: "/office_scroll_2.jpg",
    },
    {
      title: "EXCLUSIVE PREMIUM CERTIFICATE",
      subtitle:
        "Earn industry-recognized certificates to boost your career and show your expertise.",
      image: "/office_scroll_3.jpg",
    },
    {
      title: "ACCESS UNLIMITED VIDEO COURSES",
      subtitle: "Learn anytime, anywhere with expert-led lessons.",
      image: "/office_scroll_4.jpg",
      gradient: "from-purple-600 to-indigo-500",
    },
  ];

  return (
    <section className="relative bg-[#05030a] pt-16 pb-26 overflow-x-clip">
      {sections.map((section, index) => {
        // higher index -> higher zIndex so new section sits above previous
        const z = 10 + index;

        return (
          <div
            key={index}
            className="sticky top-40 flex items-center justify-center w-[80%] mx-auto overflow-hidden mt-5"
            style={{ zIndex: z }}
          >
            {/* full-bleed background gradient (below content) */}
            <div
              className={`absolute inset-0 pointer-events-none bg-[#191919] rounded-3xl border border-[#272828]`}
              style={{ transform: "skewY(-0.5deg)" }}
            />

            {/* right positioned large background photo with slight parallax */}
            <motion.div
              className="absolute right-[50px] top-[20%] h-[450px] w-1/2 md:w-2/5 lg:w-1/3 overflow-hidden"
              initial={{ x: 60, scale: 1.06 }}
              whileInView={{ x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover object-right"
                  priority={index === 0}
                />
                {/* darker overlay so text stays readable */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </motion.div>

            {/* main content container */}
            <div className="relative z-20 max-w-6xl w-full px-8 md:px-16 py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* left content (larger) */}
                <motion.div
                  className="space-y-6 md:pr-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="border w-fit px-5 py-3 rounded-full flex items-center gap-2 bg-white/10 ">
                    <span className="text-white/90 font-semibold tracking-wide text-sm">
                      {section.title.toUpperCase()}
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                    {section.title}
                  </h2>

                  <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                    {section.subtitle}
                  </p>

                  <div className="flex items-center gap-4 mt-4">
                    <button className="px-8 py-4 rounded-full bg-white text-black font-semibold shadow-xl hover:scale-105 transform transition-all duration-200">
                      Learn More
                    </button>
                    <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-200">
                      Contact Us
                    </button>
                  </div>
                </motion.div>

                {/* right column placeholder to keep layout (image handled absolutely) */}
                <div className="hidden md:block" />
              </div>
            </div>

            {/* small progress dots bottom center */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              {sections.map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? "w-12 h-3 bg-white" : "w-3 h-3 bg-white/30"
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
