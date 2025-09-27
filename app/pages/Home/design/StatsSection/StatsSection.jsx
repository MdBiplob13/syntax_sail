import React from "react";

const StatsSection = () => {
  return (
    <section className="py-20 bg-offwhite dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Driving Digital Success Through Innovation
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-red mb-2">
                  100+
                </div>
                <div className="text-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-red mb-2">
                  50+
                </div>
                <div className="text-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-red mb-2">
                  5+
                </div>
                <div className="text-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-red mb-2">
                  24/7
                </div>
                <div className="text-foreground">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-300 dark:bg-gray-700 h-80 rounded-2xl flex items-center justify-center">
              <span className="text-foreground">Your Image Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
