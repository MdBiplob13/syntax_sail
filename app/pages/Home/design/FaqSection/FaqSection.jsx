import React from "react";

const FaqSection = () => {
  return (
    <section className="py-20 bg-offwhite dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left - Achievements */}
        <div>
          <h3 className="text-4xl font-bold mb-8 text-foreground">
            Our Achievements
          </h3>
          <div className="space-y-6">
            <div className="text-3xl font-bold text-red">200+</div>
            <div className="text-lg text-foreground">
              Satisfied Clients Worldwide
            </div>

            <div className="text-3xl font-bold text-red">500+</div>
            <div className="text-lg text-foreground">
              Projects Successfully Delivered
            </div>

            <div className="text-3xl font-bold text-red">98%</div>
            <div className="text-lg text-foreground">Client Retention Rate</div>
          </div>
        </div>

        {/* Right - FAQ */}
        <div>
          <h3 className="text-4xl font-bold mb-8 text-foreground">FAQ</h3>
          <div className="space-y-4">
            {[
              {
                q: "How long does a project take?",
                a: "Typically 2-6 weeks depending on complexity",
              },
              {
                q: "Do you provide support after launch?",
                a: "Yes, we offer 3 months free support",
              },
              {
                q: "What technologies do you use?",
                a: "Modern frameworks like Next.js, React, Tailwind",
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely! We collaborate seamlessly",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 dark:border-gray-700 pb-4"
              >
                <div className="font-semibold text-foreground mb-2">
                  {faq.q}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
