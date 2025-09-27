import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Why Choose Us?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          We deliver excellence in every project
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Team",
              desc: "Skilled professionals with years of experience",
            },
            {
              title: "Quality Assurance",
              desc: "Rigorous testing and quality control processes",
            },
            {
              title: "Timely Delivery",
              desc: "We respect deadlines and deliver on time",
            },
          ].map((item, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
