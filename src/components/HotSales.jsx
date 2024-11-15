import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useSelector } from "react-redux";
import Loading from "../utils/Loading.jsx";
function HotSales() {
  const { discountedProducts } = useSelector((state) => state.products);
  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4 capitalize font-openSans max-md:text-3xl">
          Hot Sales{" "}
        </h1>
        <h1 className="text-3xl font-openSans max-md:text-2xl">
          ONLY FOR THIS MONTH
        </h1>
      </div>
      <section
        id="Projects"
        className={`w-fit mx-auto  mb-10 ${
          discountedProducts
            ? "flex flex-wrap justify-center gap-4 gap-y-12 max-xl:gap-3 max-xl:gap-y-10 max-lg:gap-2 max-lg:gap-y-12 mx-auto max-w-screen-lg mt-8 max-md:mt-2"
            : "flex justify-center items-center"
        }`}
      >
        {!discountedProducts ? (
          <Loading className=" "/>
        ) : (
          discountedProducts.map((product) => {
            return (
              <Link to={`/product/${product.colors[0].slug}`} key={product._id}
              className={'w-full smaller:w-[48%] smallest:w-[90%] smaller1:w-[48.6%] sm:w-[32%] md:w-[32%] lg:w-[30%] xl:w-[32%]'}
              >
                <Card
                 image={product.colors[0].image}
                 price={product.colors[0].price}
                 discount={product.colors[0].discount}
                 heading={product.name}
                 className={'w-[100%] '}
                />
              </Link>
            );
          })
        )}
      </section>
      <div className="w-full flex items-center justify-center mb-4">
        <Link to="/All-products">
          <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 ">
            View All
          </button>
        </Link>
      </div>
    </>
  );
}

export default HotSales;
