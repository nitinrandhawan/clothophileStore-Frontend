import React from "react";

function Card({image,heading,discount,price,className}) {
  return (
    
    <div className={`max-w-sm  bg-white shadow-md overflow-hidden ${className}`}>
      <div className="overflow-hidden">
        <img
          className={`object-cover object-center xl:h-[23.7rem] w-full lg:h-[18rem] md:h-[16.5rem] sm:h-[15rem] smaller1:h-[15rem] smallest:h-[15rem] hover:scale-105 ease-in-out duration-500`}
          src={image}
          alt="T-shirt"
        />
      </div>

      <div className="flex flex-col gap-1 mt-4 px-4 justify-center items-center">
        <h2 className="text-[0.9.5rem] font-semibold text-gray-800 text-center line-clamp-2 capitalize ">
         {heading}
        </h2>
      </div>
      <div className="flex items-center flex-col space-y-3 justify-around mt-4 pb-8">
        {/* <div className="flex justify-end gap-4">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500 w-5 h-auto fill-current hover:text-red-600"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500 w-5 h-auto fill-current hover:text-yellow-600"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
              viewBox="0 0 16 16"
            >
              <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500 w-5 h-auto fill-current hover:text-green-600"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>

          <span className="text-slate-400 font-medium">3.7/5</span>
        </div> */}

        <div className="flex space-x-2 justify-center items-center ">
          <span className="font-semibold text-gray-800 text-xl">₹{Math.floor((price - (discount * price) / 100)) }</span>
          <span className="font-semibold text-gray-400 line-through">₹{price}</span>
      {
        discount ?<span className="font-semibold text-red-600 ">{`(${discount}% OFF)`}</span> : ""
      }    
        </div>
      </div>
     
    </div>
  );
}

export default Card;
