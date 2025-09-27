"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Banner = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance animations only
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1.2
        }
      });

      tl.fromTo(headingRef.current, 
        {
          y: 100,
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)"
        }
      )
      .fromTo(paragraphRef.current,
        {
          y: 50,
          opacity: 0,
          filter: "blur(5px)"
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1
        },
        "-=0.8"
      )
      .fromTo(buttonsRef.current.children,
        {
          y: 30,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        },
        "-=0.5"
      );

      // Text glow effect on hover
      const headingElements = headingRef.current?.querySelectorAll("span, h1");
      headingElements?.forEach(element => {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, {
            textShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        element.addEventListener("mouseleave", () => {
          gsap.to(element, {
            textShadow: "none",
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image - Static */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/agency_photo.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay - Static */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content with Text Animations Only */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          We Build Digital {" "}
          <span className="text-red-600 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Experiences
          </span>
        </h1>
        
        <p 
          ref={paragraphRef}
          className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Transforming ideas into powerful digital solutions that drive growth and innovation
        </p>
        
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
          
          <button className="group relative border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform overflow-hidden">
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;