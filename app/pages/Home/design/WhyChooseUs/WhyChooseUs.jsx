"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const slides = [
    {
      image: "/office_scroll_1.jpg",
      smallHeading: "Why Choose Us?",
      mainHeading: "Expert Team",
      description:
        "Our highly skilled professionals bring years of real-world experience to craft solutions that elevate your business and deliver measurable impact.",
      button1: "View Projects",
      button2: "Start Your Project",
    },
    {
      image: "/office_scroll_2.jpg",
      smallHeading: "Our Approach",
      mainHeading: "Quality Assurance",
      description:
        "We follow a strict quality-first approach, ensuring every deliverable passes through multiple testing stages for flawless results every time.",
      button1: "View Projects",
      button2: "Start Your Project",
    },
    {
      image: "/office_scroll_3.jpg",
      smallHeading: "Our Promise",
      mainHeading: "Timely Delivery",
      description:
        "Time is valuable. We ensure every milestone is met on schedule—without cutting corners on quality or innovation.",
      button1: "View Projects",
      button2: "Start Your Project",
    },
    {
      image: "/office_scroll_4.jpg",
      smallHeading: "Our Difference",
      mainHeading: "Innovation Driven",
      description:
        "We push boundaries with creative problem-solving and cutting-edge technologies to help your brand stand out from the competition.",
      button1: "View Projects",
      button2: "Start Your Project",
    },
  ];

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    onResize();

    let rafId = null;
    const sectionEl = sectionRef.current;
    const trackEl = trackRef.current;
    if (!sectionEl || !trackEl) return;

    const handle = () => {
      const rect = sectionEl.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalSectionHeight = sectionEl.offsetHeight;
      const maxScroll = totalSectionHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), maxScroll);
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      const totalHorizontal = slides.length * viewportWidth - viewportWidth;
      const translateX = progress * totalHorizontal;
      trackEl.style.transform = `translate3d(-${translateX}px, 0, 0)`;
      rafId = requestAnimationFrame(handle);
    };

    rafId = requestAnimationFrame(handle);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, [viewportWidth]);

  const sectionHeightVh = slides.length * 100;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white dark:bg-black"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center">
        <div
          ref={trackRef}
          className="flex h-full"
          style={{
            width: `${slides.length * 100}vw`,
            transition: "transform 0s",
            willChange: "transform",
          }}
        >
          {slides.map((slide, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="flex-shrink-0 w-screen flex items-center justify-center px-8"
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center w-[85%] bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl h-[700px] `}
                >
                  {/* Left (or right) Content */}
                  <div className="space-y-8">
                    <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                      {slide.smallHeading}
                    </p>
                    <h3 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                      {slide.mainHeading}
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                      <Link
                        href="/portfolio"
                        className="px-10 py-4 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-300 hover:scale-105 text-center text-lg"
                      >
                        {slide.button1}
                      </Link>
                      <Link
                        href="/start-project"
                        className="px-10 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-red-500 hover:text-red-500 transition-all duration-300 text-center text-lg"
                      >
                        {slide.button2}
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={slide.image}
                        alt={slide.mainHeading}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
