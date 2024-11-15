import React from 'react';

function AboutUs() {
  return (
    <div className="bg-white py-12 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
        Welcome to <span className="font-semibold">ClothoPhile Store</span>—your go-to destination for the latest trends in fashion. Our mission is to provide high-quality clothing and accessories that help you express your unique style, whether you're dressing up for a special occasion or keeping it casual.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            ClothoPhile Store was founded with a simple idea: to make stylish and affordable clothing accessible to everyone. From our humble beginnings as a small online boutique, we have grown into a global brand with customers all around the world. Our journey is driven by a passion for fashion and a commitment to providing an exceptional shopping experience.
          </p>
          <p className="text-gray-700">
            We believe that fashion is more than just clothing—it's a way to express yourself, to stand out, and to feel confident. That's why we carefully curate each collection to ensure that you have access to the latest styles, while never compromising on quality.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <img
            src="https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHN0b3JlfGVufDB8MHx8fDE2MzU0NjcyMDA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="About Us"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What Makes Us Unique</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Curated Collections: Our team of fashion experts selects each piece to ensure you have access to the best trends.</li>
          <li>Quality Assurance: We focus on premium materials and craftsmanship to deliver products that last.</li>
          <li>Customer-Centric: Your satisfaction is our top priority. We strive to provide top-notch customer service at every step.</li>
          <li>Eco-Friendly Packaging: We are committed to reducing our environmental impact by using eco-friendly packaging for all our orders.</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          At ClothoPhile Store, our vision is to become a global leader in the fashion industry by offering unique and stylish apparel that makes every customer feel special. We aim to continue growing while staying true to our core values of quality, affordability, and exceptional service.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
        <p className="text-gray-700 mb-4">
          We invite you to explore our latest collections, share your style with us on social media, and become a part of our growing community. Thank you for choosing <span className="font-semibold">ClothoPhile Store</span> as your fashion destination.
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
