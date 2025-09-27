import React from "react";

const ServicesCards = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          We Help You Build Digital Business
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Comprehensive digital solutions tailored to your business needs and
          goals
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "UI/UX Design",
              desc: "Creating intuitive and engaging user experiences",
              icon: "🎨",
            },
            {
              title: "Web Development",
              desc: "Building robust and scalable web applications",
              icon: "💻",
            },
            {
              title: "SEO Optimization",
              desc: "Boosting your visibility and search rankings",
              icon: "🔍",
            },
            {
              title: "Digital Marketing",
              desc: "Driving growth through strategic campaigns",
              icon: "📈",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-offwhite dark:bg-gray-800 p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
