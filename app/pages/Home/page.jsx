import Image from "next/image";
import React from "react";
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
    <div className="min-h-screen">
      {/* Part 1: Banner */}
      <Banner />

      {/* Part 2: Infinite Slider */}
      <InfiniteSlider />

      {/* Part 3: Stats Section */}
      <StatsSection />

      {/* Part 4: Services Cards */}
      <ServicesCards />

      {/* Part 5: Scroll Effect Sections */}
      <ScrollEffectSections />

      {/* Part 6: Product Design Section */}
      <ProductDesignSection />

      {/* Part 7: Why Choose Us */}
      <WhyChooseUs />

      {/* Part 8: Process Steps */}
      <ProcessSteps />

      {/* Part 9: Reviews Slider */}
      <ReviewsSlider />

      {/* Part 10: FAQ Section */}
      <FaqSection />

      {/* Part 11: Before Footer */}
      <BeforeFooterSection />
    </div>
  );
};

export default HomePage;
