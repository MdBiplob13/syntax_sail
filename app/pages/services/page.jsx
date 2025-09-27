"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      category: "design",
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user experiences that convert visitors into customers.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "User Testing",
      ],
      price: "Starting at $2,500",
      duration: "2-4 weeks",
    },
    {
      category: "development",
      icon: "💻",
      title: "Web Development",
      description:
        "Build robust, scalable web applications with modern technologies and best practices.",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "API Integration",
        "Performance Optimization",
      ],
      price: "Starting at $5,000",
      duration: "4-8 weeks",
    },
    {
      category: "seo",
      icon: "🔍",
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Content Strategy",
        "Analytics",
      ],
      price: "Starting at $1,500/mo",
      duration: "Ongoing",
    },
    {
      category: "marketing",
      icon: "📈",
      title: "Digital Marketing",
      description:
        "Reach your target audience through strategic digital marketing campaigns.",
      features: [
        "Social Media Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Analytics",
      ],
      price: "Starting at $2,000/mo",
      duration: "Ongoing",
    },
    {
      category: "branding",
      icon: "🏷️",
      title: "Brand Identity",
      description:
        "Develop a strong brand identity that resonates with your target audience.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Brand Strategy",
        "Marketing Materials",
      ],
      price: "Starting at $3,000",
      duration: "3-5 weeks",
    },
    {
      category: "ecommerce",
      icon: "🛒",
      title: "E-commerce Solutions",
      description:
        "Build online stores that drive sales and provide seamless shopping experiences.",
      features: [
        "Store Setup",
        "Payment Integration",
        "Inventory Management",
        "Security",
        "Mobile Optimization",
      ],
      price: "Starting at $7,000",
      duration: "6-10 weeks",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "design", name: "Design" },
    { id: "development", name: "Development" },
    { id: "seo", name: "SEO & Marketing" },
    { id: "branding", name: "Branding" },
    { id: "ecommerce", name: "E-commerce" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your goals and requirements",
    },
    {
      step: "02",
      title: "Planning",
      description: "We create a detailed project roadmap",
    },
    {
      step: "03",
      title: "Execution",
      description: "Our team brings your vision to life",
    },
    {
      step: "04",
      title: "Delivery",
      description: "We launch and provide ongoing support",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to drive your business
              growth and success.
            </p>
          </div>
        </section>

        {/* Services Filter */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose from our range of professional services
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-red text-white"
                      : "bg-offwhite dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-offwhite dark:bg-gray-800 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-red mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="font-semibold text-red">
                      {service.price}
                    </span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>

                  <button className="w-full bg-red text-white py-2 px-4 rounded-lg font-semibold hover:bg-red/90 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                How we deliver exceptional results every time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Choose the plan that fits your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$2,500",
                  description: "Perfect for small businesses",
                  features: [
                    "Basic Website",
                    "5 Pages",
                    "SEO Setup",
                    "1 Month Support",
                  ],
                },
                {
                  name: "Professional",
                  price: "$5,000",
                  description: "Ideal for growing businesses",
                  features: [
                    "Custom Website",
                    "10 Pages",
                    "Advanced SEO",
                    "3 Months Support",
                    "E-commerce Ready",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$10,000",
                  description: "For large-scale projects",
                  features: [
                    "Full Stack App",
                    "Unlimited Pages",
                    "Complete SEO",
                    "6 Months Support",
                    "Priority Support",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-red text-white transform scale-105"
                      : "bg-offwhite dark:bg-gray-800"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-red px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p
                    className={`mb-6 ${
                      plan.popular
                        ? "text-white/90"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                      plan.popular
                        ? "bg-white text-red hover:bg-gray-100"
                        : "bg-red text-white hover:bg-red/90"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red to-red/90 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and find the perfect solution for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-offwhite dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary based on complexity, but most websites take 4-8 weeks from start to finish.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes, we offer various support packages to ensure your website continues to perform optimally.",
                },
                {
                  q: "Can you work with our existing design?",
                  a: "Absolutely! We can work with your existing designs or create new ones from scratch.",
                },
                {
                  q: "What technologies do you use?",
                  a: "We use modern technologies like Next.js, React, Tailwind CSS, and various backend frameworks.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl"
                >
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
