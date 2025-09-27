import React from "react";

const ProductDesignSection = () => {
  return (
    <section className="py-20 bg-offwhite dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-center">
        {/* Left Text */}
        <div>
          <h3 className="text-4xl font-bold mb-4 text-foreground">
            Product Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Creating beautiful and functional products that users love and
            businesses need.
          </p>
        </div>

        {/* Middle Image */}
        <div className="flex justify-center">
          <div className="bg-gray-300 dark:bg-gray-700 w-64 h-64 rounded-2xl flex items-center justify-center">
            <span className="text-4xl">📱</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center">
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">VIEW PRODUCT</div>
            <button className="w-20 h-20 bg-red rounded-full flex items-center justify-center hover:rotate-180 transition-transform duration-500">
              <span className="text-2xl text-white">→</span>
            </button>
          </div>
          <div className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center mx-auto">
            <span className="text-lg">☆</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesignSection;
