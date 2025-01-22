import React, { useEffect } from "react";
import tShirt1 from "../assets/image/t-shirt1.png";
import tShirt2 from "../assets/image/t-shirt2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/slices/Cart";
import Loading from "../utils/Loading";
import "aos/dist/aos.css";
import AOS from "aos";
function CardSection2() {
  const { latestProducts, loading } = useSelector((state) => state.products);
  const user_id = useSelector((state) => state.auth.token?.user_id);

  // useEffect(() => {
  //   console.log("products", latestProducts);
  // }, []);
  useEffect(() => {
      AOS.init({
        offset: 300,
        duration: 1000,
        easing: "ease-in-out",
        delay: 100,
        // once: true,
        mirror: true,
      });
    }, []);
  const dispatch=useDispatch()
  const handleCart = (slug,size) => {
    
    dispatch(AddToCart({ user_id, slug,quantity:1,size }));
  };
  return (
    <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <h1 data-aos="zoom-in" className="text-[3.50rem]  max-md:text-4xl max-md:mb-10 font-openSans text-center my-5 mb-20 ">
        Latest Trends & Essentials
      </h1>

      {!latestProducts || latestProducts.length===0 ? (
        <Loading />
      ) : 
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start mb-10">
      {  latestProducts.map((product,index) => (
       
        index<4 ? 
        
        <section className={` text-center transform duration-500 hover:-translate-y-2 cursor-pointer ${index===0 ? "bg-pink-50" : index===1 ? "bg-green-50": index===2 ? "bg-blue-50" : "bg-red-50"}`} key={index}>
           <Link to={`/product/${product.colors[0].slug}`} >
          <div className=" m-auto flex items-center justify-center ">
            <img src={product.colors[0].image} alt="" className="object-cover w-full xl:h-[450px] lg:h-[550px] md:h-[500px] sm:h-[700px] max-sm:h-[450px] " />
          </div></Link>
          <div className="px-10 py-5">
          <Link to={`/product/${product.colors[0].slug}`} >
          <h1 className="text-3xl my-5 capitalize line-clamp-2">{product.name}</h1>
          <p className="mb-5 line-clamp-3">{product.description}</p>
        
          <span className="font-semibold text-red-600 ">{`(${product.colors[0].discount}% OFF)`}</span>
          <div className="flex space-x-2 justify-center items-center mb-3">
        
          <span className="font-semibold text-gray-800 text-xl">₹{product.colors[0].discountedPrice }</span> 
          <span className="font-semibold text-gray-400 line-through">₹{product.colors[0].price}</span> 
        </div></Link>
          <button className={`p-2 px-6 text-white rounded-md ${index===0 ? "bg-pink-500 hover:bg-pink-600" : index===1 ? "bg-green-500 hover:bg-green-600": index===2 ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"}`} onClick={()=>handleCart(product.colors[0].slug,product.colors[0].size[0])}>
            Add To Cart
          </button>
          </div>
        </section>
       :""
        ))}
        </section>
      }
    </section>
  );
}

export default CardSection2;
