import React from "react";

function TrendySection() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 pt-10">
        <h2 className="text-4xl font-semibold max-md:text-3xl mb-10 text-center font-openSans">
          Latest Fashion Picks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
              <div className=" h-[16rem] flex">
                <img
                  className=" object-cover w-full object-center"
                  src="https://img.freepik.com/free-photo/vibrant-portrait-person-bright-environment_23-2151078861.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid"
                  alt="Health Benefits of Sunglasses"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-gray-800 text-white px-4 py-2 text-sm">
                16 September 2024
              </div>
            </div>
            <div className="px-6 py-4 ">
              <h3 className="font-bold text-lg line-clamp-1">
              Athleisure 2.0: The Rise of Luxury Activewear
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
              Athleisure has evolved into a luxurious lifestyle choice, blending comfort with style. Dive into the latest high-end activewear collections that prove you can look chic while staying active, and find inspiration for your next workout outfit.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold mt-2 inline-block"
              >
                READ MORE
              </a>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
            <div className=" h-[16rem] flex">
                <img
                  className=" object-cover w-full object-center"
                  src="https://img.freepik.com/free-photo/portrait-fashionable-boy-posing_23-2148184640.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-gray-800 text-white px-4 py-2 text-sm">
                28 June 2024
              </div>
            </div>
            <div className="px-6 py-4">
              <h3 className="font-bold text-lg line-clamp-1">
              Sustainable Style: Eco-Friendly Fashion Revolution
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
              Discover how sustainability is reshaping the fashion industry, from organic fabrics.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold mt-2 inline-block"
              >
                READ MORE
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded overflow-hidden shadow-lg">
            <div className="relative">
            <div className=" h-[16rem] flex">
                <img
                  className=" object-cover w-full object-center"
                  src="https://img.freepik.com/free-photo/guy-dark-sunglasses-wearing-backpack-isolated-background_197531-26767.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid"
                  alt="Health Benefits of Sunglasses"
                />
              </div>
              <div className="absolute bottom-0 left-0 bg-gray-800 text-white px-4 py-2 text-sm">
                21 August 2024
              </div>
            </div>
            <div className="px-6 py-4">
              <h3 className="font-bold text-lg line-clamp-1">
              The Boldest Trend of the Season
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
              Embrace the dramatic flair of statement sleeves! From puffed to ruffled, learn this trend.
              </p>
              <a
                href="#"
                className="text-red-500 font-bold mt-2 inline-block"
              >
                READ MORE
              </a>
            </div>
          </div>

       
         
        </div>
      </div>
    </>
  );
}

export default TrendySection;
