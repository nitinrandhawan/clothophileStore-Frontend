import React, { useEffect } from "react";
import tShirt1 from "../assets/image/t-shirt1.png";
import tShirt2 from "../assets/image/t-shirt2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../utils/Loading";
function CardSection2() {
  const { latestProducts, loading } = useSelector((state) => state.products);
  useEffect(() => {
    console.log("products", latestProducts);
  }, []);
  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <h1 className="text-[3.50rem]  max-md:text-4xl max-md:mb-10 font-openSans text-center my-5 mb-20 ">
        Latest Trends & Essentials
      </h1>

      {!latestProducts ? (
        <Loading />
      ) : 
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start mb-10">
      {  latestProducts.map((product,index) => (
       
        index<4 ? 
         <Link to={`/product/${product.colors[0].slug}`} key={index}>
        <section className={` text-center transform duration-500 hover:-translate-y-2 cursor-pointer ${index===0 ? "bg-pink-50" : index===1 ? "bg-green-50": index===2 ? "bg-blue-50" : "bg-red-50"}`}>
          <div className=" m-auto flex items-center justify-center ">
            <img src={product.colors[0].image} alt="" className="object-cover w-full xl:h-[450px] lg:h-[550px] md:h-[500px] sm:h-[700px] max-sm:h-[450px] " />
          </div>
          <div className="px-10 py-5">

          
          <h1 className="text-3xl my-5 capitalize line-clamp-2">{product.name}</h1>
          <p className="mb-5 line-clamp-3">{product.description}</p>
          <div className="space-x-1 flex justify-center mb-3">
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
            <svg
              className="w-4 h-4 mx-px fill-current text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            </svg>
          </div>
          <span className="font-semibold text-red-600 ">{`(${product.colors[0].discount}% OFF)`}</span>
          <div className="flex space-x-2 justify-center items-center mb-3">
          <span className="font-semibold text-gray-800 text-xl">₹{product.colors[0].discountedPrice }</span> 
          <span className="font-semibold text-gray-400 line-through">₹{product.colors[0].price}</span> 
        </div>
          <button className={`p-2 px-6 text-white rounded-md ${index===0 ? "bg-pink-500 hover:bg-pink-600" : index===1 ? "bg-green-500 hover:bg-green-600": index===2 ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"}`}>
            Add To Cart
          </button>
          </div>
        </section>
      </Link> :""
        ))}
        </section>
      }
    </section>
  );
}

export default CardSection2;
