import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
function DiscountSection() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
      once: true,
    });
  }, []);
  return (
    <section className="w-full flex bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-5">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">
            Redefine Your Style Today
          </h2>
          <div data-aos="zoom-out" className="inline-flex items-end justify-center w-full text-center mx-auto">
            <img
              src="../src/assets/image/t-shirt4.jpg"
              className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white hover:scale-105"
              alt="Avatar 1"
            />
            <img
              src="../src/assets/image/t-shirt3.jpg"
              className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white hover:scale-105"
              alt="Avatar 2"
            />
            <img
              src="../src/assets/image/t-shirt7.jpg"
              className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white hover:scale-105"
              alt="Avatar 3"
            />
            <img
              src="../src/assets/image/t-shirt6.jpg"
              className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white hover:scale-105"
              alt="Avatar 4"
            />
            <img
              src="../src/assets/image/t-shirt5.jpg"
              className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white hover:scale-105 relative object-cover object-top"
              alt="Avatar 5"
            />
          </div>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get 15% Off
            <span className="px-2 py-1 relative inline-block">
              <svg
                className="stroke-current bottom-0 absolute text-red-300 -translate-x-2"
                viewBox="0 0 410 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
                  strokeWidth="12"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                ></path>
              </svg>
              <span className="relative">&nbsp;Your First Order</span>
            </span>
          </p>
          <p data-aos="fade-in" className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Ready to upgrade your wardrobe? We're giving you 15% off your first
            order as a warm welcome! Don’t miss this chance to grab your
            favorite T-shirts at an unbeatable price.
          </p>
          <Link
            to="/filter-products"
            className="inline-block px-6 py-3 mt-8 bg-red-600 text-white font-semibold rounded hover:bg-red-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DiscountSection;
