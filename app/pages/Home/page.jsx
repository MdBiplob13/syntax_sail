"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Banner from "./design/Banner/Banner";
import InfiniteSlider from "./design/InfiniteSlider/InfiniteSlider";
import StatsSection from "./design/StatsSection/StatsSection";
import ServicesCards from "./design/ServicesCards/ServicesCards";
import ScrollEffectSections from "./design/ScrollEffectSections/ScrollEffectSections";
import ProductDesignSection from "./design/ProductDesignSection/ProductDesignSection";
import WhyChooseUs from "./design/WhyChooseUs/WhyChooseUs";
import ProcessSteps from "./design/ProcessSteps/ProcessSteps";
import ReviewsSlider from "./ReviewsSlider/ReviewsSlider";
import FaqSection from "./design/FaqSection/FaqSection";
import BeforeFooterSection from "./design/BeforeFooterSection/BeforeFooterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0a0b0e]">
      {/* Part 1: Banner */}
      <Banner />

      {/* Part 2: Infinite Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <InfiniteSlider />
      </motion.div>

      {/* Part 3: Stats Section */}
      <StatsSection />

      {/* Part 4: Services Cards */}
      <ServicesCards />

      {/* Part 5: Scroll Effect Sections */}
      <ScrollEffectSections />

      {/* Part 6: Product Design Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProductDesignSection />
      </motion.div>

      {/* Part 7: Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <WhyChooseUs />
      </motion.div>

      {/* Part 8: Process Steps */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ProcessSteps />
      </motion.div>

      {/* Part 9: Reviews Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ReviewsSlider />
      </motion.div>

      {/* Part 10: FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <FaqSection />
      </motion.div>

      {/* Part 11: Before Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <BeforeFooterSection />
      </motion.div>
    </div>
  );
};

export default HomePage;
