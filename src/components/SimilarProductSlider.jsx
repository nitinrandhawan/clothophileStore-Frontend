import React, { useRef } from 'react';

const SimilarProductSlider = () => {
  const sliderRef = useRef(null);

  const products = [
    { id: 1, name: "VOOTER", title: "Men Relaxed Fit Cargo Pants", price: "₹850", originalPrice: "₹2,499", discount: "(66% off)", image: "https://via.placeholder.com/150" },
    { id: 2, name: "VOOTER", title: "Men Relaxed Fit Cargo Pants", price: "₹850", originalPrice: "₹2,499", discount: "(66% off)", image: "https://via.placeholder.com/150" },
    { id: 3, name: "DNMX", title: "Men Slim Fit Cargo Pants With Insert...", price: "₹1,299", image: "https://via.placeholder.com/150" },
    { id: 4, name: "VOOTER", title: "Men Solid Relaxed Fit Cargo Pants", price: "₹850", originalPrice: "₹2,499", discount: "(66% off)", image: "https://via.placeholder.com/150" },
    { id: 3, name: "DNMX", title: "Men Slim Fit Cargo Pants With Insert...", price: "₹1,299", image: "https://via.placeholder.com/150" },
    { id: 4, name: "VOOTER", title: "Men Solid Relaxed Fit Cargo Pants", price: "₹850", originalPrice: "₹2,499", discount: "(66% off)", image: "https://via.placeholder.com/150" },
    { id: 3, name: "DNMX", title: "Men Slim Fit Cargo Pants With Insert...", price: "₹1,299", image: "https://via.placeholder.com/150" },
    { id: 4, name: "VOOTER", title: "Men Solid Relaxed Fit Cargo Pants", price: "₹850", originalPrice: "₹2,499", discount: "(66% off)", image: "https://via.placeholder.com/150" },
    { id: 3, name: "DNMX", title: "Men Slim Fit Cargo Pants With Insert...", price: "₹1,299", image: "https://via.placeholder.com/150" },
    { id: 4, name: "VOOTER", title: "Men Solid Relaxed Fit Cargo Pants", price: "₹850", originalPrice: "₹2,499", discount: "(66% off)", image: "https://via.placeholder.com/150" },
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-8 w-full flex items-center justify-center flex-col">
      <h2 className="text-2xl font-semibold text-center mb-4">Similar Styles</h2>
      <div className="relative flex items-center w-[75vw]">
        {/* Left Arrow */}
        <button onClick={scrollLeft} className="absolute left-0 z-10 p-2  ">
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L6 9.414 11.293 4.293a1 1 0 111.414 1.414L8.414 9l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
        </button>

        {/* Slider */}
        <div ref={sliderRef} className="flex overflow-x-scroll scrollbar-hide space-x-4 px-8">
          {products.map((product) => (
            <div key={product.id} className="min-w-[200px] max-w-[200px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-yellow-700">{product.name}</h3>
                <p className="text-sm text-gray-500 truncate">{product.title}</p>
                <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">{product.originalPrice}</p>
                )}
                {product.discount && (
                  <p className="text-sm text-green-600">{product.discount}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button onClick={scrollRight} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </div>
  );
};

export default SimilarProductSlider;
