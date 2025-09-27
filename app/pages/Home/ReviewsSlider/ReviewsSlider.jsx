import React from "react";

const ReviewsSlider = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Client Reviews
        </h2>
        <div className="flex overflow-x-auto space-x-8 pb-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-offwhite dark:bg-gray-800 p-6 rounded-2xl"
            >
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Excellent service! They delivered beyond our expectations."
              </p>
              <div className="font-semibold text-foreground">Client Name</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
