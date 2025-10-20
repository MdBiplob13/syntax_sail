import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ReviewsSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    cssEase: "ease-in-out",
    arrows: false, // Disable default arrows since we're using custom ones
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      quote: '"Amazing experience from start to finish. The results exceeded our expectations!"',
      name: "Liam Reynolds",
      position: "CEO, SamirTS",
      image: "/user.jpg",
    },
    {
      quote: '"They truly understood our vision and brought it to life with stunning precision."',
      name: "Shahin Alam",
      position: "CEO, SamirTS",
      image: "/user.jpg",
    },
    {
      quote: '"Top-notch team! They nailed the design and delivered faster than expected."',
      name: "Noah Mitchell",
      position: "CEO, SamirTS",
      image: "/user.jpg",
    },
    {
      quote: '"Incredible team! They delivered exactly what we needed, on time and beyond expectations."',
      name: "Ava Thompson",
      position: "CEO, SamirTS",
      image: "/user.jpg",
    },
    {
      quote: '"Outstanding service and great communication throughout the project!"',
      name: "Emma Watson",
      position: "CEO, SamirTS",
      image: "/user.jpg",
    },
  ];

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with Custom Arrows */}
        <div className="flex flex-wrap items-center justify-between mb-12 gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              • User Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
              Hear from Our Happy Customers
            </h2>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="flex space-x-2">
            <button
              onClick={previous}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition hover:border-red-500 hover:text-red-500"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition hover:border-red-500 hover:text-red-500"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="reviews-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 outline-none">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl h-[280px] transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-red-200 dark:hover:border-red-800">
                  {/* Stars */}
                  <div className="text-yellow-400 text-xl mb-4">★★★★★</div>

                  {/* Quote */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-4 text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3 object-cover border-2 border-gray-200 dark:border-gray-600"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Slider Styles */}
        <style jsx>{`          
          .reviews-slider :global(.slick-slide) {
            padding: 0 8px;
          }
          
          .reviews-slider :global(.slick-list) {
            margin: 0 -8px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ReviewsSlider;