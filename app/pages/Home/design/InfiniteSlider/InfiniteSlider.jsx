"use client"
import React from "react";

const InfiniteSlider = ({ speed = 60 }) => {
  const messages = [
    "DIGITAL EXCELLENCE",
    "INNOVATIVE SOLUTIONS", 
    "EXPERT SUPPORT",
    "PREMIUM QUALITY"
];

  return (
    <section className="bg-[#050b0d] py-4 overflow-hidden">
      <div 
        className="flex whitespace-nowrap"
        style={{ 
          animation: `marquee-adjustable ${speed}s linear infinite`,
          width: 'max-content'
        }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center space-x-8 md:space-x-12">
            {messages.map((message, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center">
                <span className="text-white text-xl md:text-2xl font-bold mx-4 md:mx-6">
                  ★ {message} ★
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes marquee-adjustable {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default InfiniteSlider;