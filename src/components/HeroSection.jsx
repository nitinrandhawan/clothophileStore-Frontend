import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import { nanoid } from "nanoid";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
export default function HeroSection() {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/beautiful-belarus-person-city_23-2149372931.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid",
      alt: "Fashion 1",
      title: "Discover the Latest Fashion Trends",
      description:
        "Explore our curated selection of this season's top fashion picks.",
    },
    {
      src: "https://img.freepik.com/free-photo/full-shot-transgenders-sitting-stairs_23-2149154653.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid",
      alt: "Fashion 2",
      title: "Trends You Can't Miss",
      description:
        " Dive into the world of contemporary fashion with trends that inspire.",
    },
    {
      src: "https://img.freepik.com/free-photo/portrait-siblings-outdoors-brothers-day-celebration_23-2150266817.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid",
      alt: "Fashion 3",
      title: "Elevate Your Style",
      description:
        "Shop premium outfits that define your unique fashion statement.",
    },
    {
      src: "https://img.freepik.com/free-photo/charming-young-man-pink-hoodie-yellow-shorts-his-friend-jeans-orange-jacket-dance-listen-music-with-record-player-hold-beer-bottles-blue-background_197531-29673.jpg?ga=GA1.1.1013915960.1727949138&semt=ais_hybrid",
      alt: "Fashion 4",
      title: "Casual Vibes for the Trendsetter",
      description:
        "Embrace casual comfort with stylish looks for every occasion.",
    },
  ];

  return (
    <>
      
        <div className="relative h-[calc(100vh-76px)] max-md:h-[calc(65vh-76px)] max-lg:h-[calc(100vh-70px)] overflow-hidden object-center">
          <Swiper
            navigation={true}
            spaceBetween={0}
            autoplay={{
              delay: 1800,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper text-white"
            pagination={{
              clickable: true,
            }}
          >
            {images.map((image) => {
              return (
             
                  <SwiperSlide key={nanoid()}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out `}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-6">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
                        {image.title}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 max-w-3xl max-md:max-w-[25rem] max-sm:max-w-[17rem] max-smaller:max-w-[11.5rem]">
                        {image.description}
                      </p>
                     <Link to="/All-Products">
                     
                     <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 max-md:text-sm">
                        Shop Now
                      </button>
                      </Link>
                    </div>
                  </SwiperSlide>
               
              );
            })}
          </Swiper>
        </div>
     
    </>
  );
}
