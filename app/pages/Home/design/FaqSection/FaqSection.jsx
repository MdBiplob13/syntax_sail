import React, { useState } from "react";

const services = [
  {
    title: "CUSTOM WEB DESIGN",
    content: "We create unique, tailored websites that reflect your brand's identity and meet your specific business needs. Our designs are modern, intuitive, and focused on user experience.",
  },
  {
    title: "RESPONSIVE DEVELOPMENT",
    content: "Our development ensures your website looks and functions perfectly on all devices, from desktops to mobiles, using the latest technologies for seamless performance.",
  },
  {
    title: "E-COMMERCE SOLUTIONS",
    content: "We build robust online stores with secure payment systems, inventory management, and user-friendly interfaces to help you sell effectively online.",
  },
  {
    title: "UI/UX DESIGN",
    content: "Our UI/UX experts craft intuitive interfaces and engaging user experiences that keep visitors on your site longer and convert them into loyal customers.",
  },
  {
    title: "ON GOING WEBSITE MAINTENANCE",
    content: "We provide continuous support, updates, and maintenance to keep your website secure, up-to-date, and performing at its best.",
  },
];

const WebsitesExpertsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-orange-500 inline-block">
            Websites Experts
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-6 mb-12 max-w-lg">
            A great website is essential for capturing attention and converting
            visitors into customers. Our web design services focus on creating
            responsive, visually appealing, and user-friendly websites that are
            optimized for performance across all devices.
          </p>
          <div className="flex flex-wrap justify-start gap-12">
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white">180+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white">90+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white">30K</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Coffee Cups</div>
            </div>
          </div>
        </div>

        {/* Right Column - Services Accordion */}
        <div className="mt-12 md:mt-0">
          <div className="space-y-0">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex justify-between items-center py-3 text-gray-900 dark:text-white font-semibold uppercase text-sm text-left transition-colors duration-200 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {service.title}
                  <span className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 text-gray-600 dark:text-gray-400 text-sm">
                    {service.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsitesExpertsSection;