"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const StatsSection = () => {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Photo slide-in from left
      gsap.fromTo(
        photoRef.current,
        {
          x: -100,
          opacity: 0,
          scale: 1.1,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: photoRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Title animation - slide down with fade
      gsap.fromTo(
        titleRef.current,
        {
          y: -50,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Content container animation
      gsap.fromTo(
        contentRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stats cards staggered animation
      statsRef.current.forEach((stat, index) => {
        const numberElement = stat.querySelector(".stat-number");
        const targetNumber = numberElement.textContent;

        // Number counting animation
        if (targetNumber.includes("+")) {
          gsap.to(numberElement, {
            innerText: targetNumber,
            duration: 2.5,
            snap: { innerText: 1 },
            delay: 0.8 + index * 0.3,
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onStart: () => {
              numberElement.innerText = "0";
            },
          });
        }

        // Card entrance animation
        gsap.fromTo(
          stat,
          {
            x: 30,
            opacity: 0,
            scale: 0.9,
            rotationY: 10,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            delay: 0.8 + index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Parallax effect on photo while scrolling
      gsap.to(photoRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successful deliveries across various industries",
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Satisfied businesses we've partnered with",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Delivering excellence since 2019",
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock customer assistance",
    },
  ];

  const addToRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Numbers That <span className="text-[#D90A2C]">Speak</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our journey in numbers - showcasing the impact we've created through 
              dedication, innovation, and client success.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              ref={addToRefs}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl 
                       transition-all duration-500 border border-gray-100 dark:border-gray-700 
                       hover:border-[#D90A2C]/30 hover:scale-105 overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D90A2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D90A2C] to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-2xl">
                    {stat.number.includes("+") ? "+" : stat.number.includes("/") ? "∞" : "★"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="stat-number text-4xl md:text-5xl font-bold text-[#D90A2C] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  {stat.label}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D90A2C]/30 transition-all duration-300"></div>

              {/* Animated Corner */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D90A2C] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D90A2C] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gradient-to-r from-[#D90A2C] to-red-600 rounded-3xl p-8 text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-red-100 mb-6 text-lg max-w-2xl mx-auto">
              Join our growing list of satisfied clients and let's create something amazing together.
            </p>
            <motion.button 
              className="bg-[#fff] text-[#D90A2C] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

// "use client";
// import Image from "next/image";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const StatsSection = () => {
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate cards with stagger effect
//       gsap.fromTo(cardsRef.current,
//         {
//           y: 100,
//           opacity: 0,
//           scale: 0.8
//         },
//         {
//           y: 0,
//           opacity: 1,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             end: "bottom 20%",
//             toggleActions: "play none none none",
//           }
//         }
//       );

//       // Animate numbers counting
//       cardsRef.current.forEach((card, index) => {
//         const numberElement = card.querySelector('.stat-number');
//         const targetNumber = card.getAttribute('data-number');

//         if (targetNumber && targetNumber.includes('+')) {
//           gsap.to(numberElement, {
//             innerText: targetNumber,
//             duration: 2.5,
//             snap: { innerText: 1 },
//             delay: index * 0.3,
//             scrollTrigger: {
//               trigger: card,
//               start: "top 80%",
//               toggleActions: "play none none none",
//             },
//             onStart: () => {
//               numberElement.innerText = "0";
//             }
//           });
//         }
//       });

//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const stats = [
//     { number: "100+", label: "Projects Delivered", icon: "🚀" },
//     { number: "50+", label: "Satisfied Clients", icon: "💎" },
//     { number: "5+", label: "Years Excellence", icon: "⭐" },
//     { number: "24/7", label: "Dedicated Support", icon: "🛡️" }
//   ];

//   const addToRefs = (el) => {
//     if (el && !cardsRef.current.includes(el)) {
//       cardsRef.current.push(el);
//     }
//   };

//   return (
//     <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-red-50 to-transparent rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
//             Numbers That <span className="text-[#D90A2C]">Speak</span>
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Our journey in numbers - showcasing the impact we've created through dedication and innovation
//           </p>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               ref={addToRefs}
//               data-number={stat.number}
//               className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700
//                        rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500
//                        border border-gray-100 dark:border-gray-600 hover:scale-105"
//             >
//               {/* Icon */}
//               <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                 {stat.icon}
//               </div>

//               {/* Number */}
//               <div className="stat-number text-5xl md:text-6xl font-bold text-[#D90A2C] mb-2">
//                 {stat.number}
//               </div>

//               {/* Label */}
//               <div className="text-gray-600 dark:text-gray-300 font-semibold text-lg">
//                 {stat.label}
//               </div>

//               {/* Hover Effect Border */}
//               <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D90A2C] transition-all duration-300 opacity-0 group-hover:opacity-30"></div>

//               {/* Animated Corner */}
//               <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D90A2C] rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//               <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D90A2C] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-[#D90A2C] to-red-600 rounded-2xl p-8 text-white shadow-2xl">
//             <h3 className="text-2xl md:text-3xl font-bold mb-4">
//               Ready to Start Your Project?
//             </h3>
//             <p className="text-red-100 mb-6 text-lg">
//               Join our growing list of satisfied clients and let's create something amazing together.
//             </p>
//             <button className="bg-white text-[#D90A2C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
//               Get Started Today
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
