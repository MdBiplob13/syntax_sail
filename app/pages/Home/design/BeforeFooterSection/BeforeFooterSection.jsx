import React from "react";

const BeforeFooterSection = () => {
  return (
    <section className="relative py-32 bg-gray-900 text-white text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Let's create something amazing together
        </p>
        <button className="bg-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red/90 transition-all duration-300">
          Get Free Consultation
        </button>
      </div>
    </section>
  );
};

export default BeforeFooterSection;
