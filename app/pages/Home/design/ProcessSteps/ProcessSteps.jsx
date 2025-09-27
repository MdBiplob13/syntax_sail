import React from "react";

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-offwhite dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Number Display */}
          <div className="text-center">
            <div className="w-32 h-32 bg-red rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl text-white font-bold">1/4</span>
            </div>
          </div>

          {/* Right - Steps */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-foreground">
              Our Process
            </h3>
            <div className="space-y-6">
              {[
                "Discovery & Planning",
                "Design & Development",
                "Testing & Quality Assurance",
                "Launch & Maintenance",
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">{index + 1}</span>
                  </div>
                  <span className="text-lg text-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
