"use client";

import React, { useState, useEffect, useRef } from "react";

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      title: "DISCOVERY & STRATEGY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      items: [
        "Client Meeting",
        "Research market trends",
        "Create project roadmap",
      ],
    },
    {
      title: "DESIGN & DEVELOPMENT",
      description:
        "Transform concepts into compelling digital experiences with modern design and robust development.",
      items: ["UI/UX Design", "Frontend Development", "Backend Integration"],
    },
    {
      title: "TESTING & QUALITY",
      description:
        "Ensure flawless performance across all devices and platforms with comprehensive testing.",
      items: [
        "Quality Assurance",
        "Performance Testing",
        "User Acceptance Testing",
      ],
    },
    {
      title: "LAUNCH & SUPPORT",
      description:
        "Successful deployment and ongoing maintenance to keep your digital presence optimal.",
      items: ["Deployment", "Post-launch Support", "Continuous Maintenance"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveStep(index);

              // Calculate progress based on which step is active
              const progressPercentage = ((index + 1) / steps.length) * 100;
              setProgress(progressPercentage);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  // Initialize stepsRef array
  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, steps.length);
  }, [steps.length]);

  return (
    <section className="py-20 bg-offwhite dark:bg-gray-900" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="gap-12 items-start flex">
          {/* Left - Interactive Display */}
          <div className="sticky top-[40%] w-1/2">
            <div className="text-center">
              {/* Current Step Display */}
              <div className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <span className="text-4xl text-white font-bold">
                  {activeStep + 1}/{steps.length}
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                At the intersection of vision and execution, we bring creative
                ideas from transform concepts into compelling narratives.
              </p>
            </div>
          </div>

          {/* Progress Bar with Empty Circles */}
          <div className="flex flex-col items-center relative">
            <div className="relative">
              {/* Thin Gray Background Bar */}
              <div className="w-1 h-[1600px] bg-gray-200 rounded-full" />
              
              {/* Animated Red Progress Bar */}
              <div
                className="absolute top-0 left-0 w-1 bg-red-500 rounded-full transition-all duration-1000 ease-out"
                style={{ height: `${progress}%` }}
              />

              {/* Empty Circles that fill with red */}
              {steps.map((_, index) => (
                <div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
                >
                  {/* Circle Container */}
                  <div className="relative">
                    {/* Empty Circle (Gray Border) */}
                    <div
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-500 ${
                        index <= activeStep
                          ? "border-red-500 bg-red-500"
                          : "border-gray-400 bg-white"
                      }`}
                    >
                      {/* Inner White Circle for empty effect */}
                      <div
                        className={`absolute inset-1 rounded-full transition-all duration-500 ${
                          index <= activeStep
                            ? "bg-red-500 scale-100"
                            : "bg-white scale-100"
                        }`}
                      />
                      
                      {/* Step Number */}
                      <span
                        className={`absolute inset-0 flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                          index <= activeStep ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Steps Content */}
          <div className="space-y-20 w-1/2">
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                OUR SOLUTIONS
              </h2>
              <h3 className="text-3xl font-semibold text-red-500 mb-6">
                STEPS
              </h3>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={`transition-all duration-500 ${
                  index === activeStep
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-50 transform translate-x-4"
                }`}
              >
                <div className="flex items-start space-x-6">
                  {/* Step Number - Hidden since we have it on the progress bar */}
                  <div className="w-12 h-12 opacity-0">
                    <span>{index + 1}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h4
                      className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                        index === activeStep
                          ? "text-red-500"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Step Items */}
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              index === activeStep
                                ? "bg-red-500"
                                : "bg-gray-400"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Separator */}
                {index < steps.length - 1 && (
                  <div className="ml-6 mt-8 pl-6 border-l-2 border-gray-200 dark:border-gray-700 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;