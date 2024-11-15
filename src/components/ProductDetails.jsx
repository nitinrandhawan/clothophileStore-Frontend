import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../redux/slices/Products";
import logo from "../assets/image/logo.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../utils/Loading";
import Footer from "./Footer";
import SimilarProductsSlider from "./SimilarProductSlider";
import { AddToCart, increaseCart } from "../redux/slices/Cart";
import SideCartBar from "./SideCartBar";

const ProductDetails = () => {
  let productDataStructure = {
    price: null,
    discountedPrice: null,
    discount: null,
    image: null,
    colorName: "",
    coverImages: [],
    size: [],
    stock: null,
  };

  const [productData, setProductData] = useState(productDataStructure);
  let { slug } = useParams();

  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setactiveItem] = useState("Home");
  const navitem = useRef("");
  const dropdownRef = useRef(null);
  const [selectedSize, setselectedSize] = useState("");
  const handleSelectedSize = (e) => {
    setselectedSize(e.target.value);
  };

  const handleNavBar = () => {
    setVisible((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const access_token = useSelector((state) => state.auth.token?.access_token);
  const user_id = useSelector((state) => state.auth.token?.user_id);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.cart);

  const handleItemClick = (e) => {
    setactiveItem(e.target.innerText);
  };

  const { loading, error } = useSelector((state) => state.products);

  useEffect(() => {
   
    dispatch(fetchProductDetails(slug));
  }, [dispatch, slug]);

  const tabs = ["Features", "Description", "Product Details", "Other Details"];
  const tabContentStructure = [
    {
      content: "",
    },
    {
      content: "",
    },
    {
      content: "",
    },
    {
      content: "",
    },
  ];

  const [tabContent, settabContent] = useState(tabContentStructure);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const {
    name,
    description,
    colors,
    features,
    productDetails,
    otherDetails,
    mainCategory,
    subCategory,
  } = useSelector((state) => state.products.productDetails);

  useEffect(() => {
    setProductData(productDataStructure);
    if (colors && colors[0] && colors.some((color) => color.slug === slug)) {
    

      const {
        price,
        discountedPrice,
        discount,
        image,
        coverImages,
        size,
        stock,
        colorName,
      } =
        colors[
          colors.findIndex((color) => {
            return color.slug === slug;
          })
        ];

      setProductData({
        price,
        discountedPrice,
        discount,
        image,
        coverImages,
        size,
        stock,
        colorName,
      });
    }
  }, [colors]);

  let {
    price,
    discountedPrice,
    discount,
    image,
    coverImages,
    size,
    stock,
    colorName,
  } = productData;

  const [mainImage, setMainImage] = useState();

  const changeImage = (src) => {
    setMainImage(src);
  };

  useEffect(() => {
    if (image) setMainImage(image);
    else {
     console.log("loading..");
     
    }
    if (size) {
      setselectedSize(size[0]);
    }

    if (
      description &&
      features &&
      features.length > 0 &&
      productDetails &&
      productDetails.length > 0 &&
      otherDetails &&
      otherDetails.length > 0
    ) {
      settabContent([
        { content: features },
        { content: description },
        { content: productDetails },
        { content: otherDetails },
      ]);
    }
  }, [image]);

  if (error) {
    console.error(`error: ${error}`);
  }
  const [value, setValue] = useState(1); 

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);

   
    if (!isNaN(inputValue)) {
      setValue(Math.max(1, Math.min(inputValue, stock))); 
    }
  };
  const handleCart = () => {
    dispatch(AddToCart({ user_id, slug,quantity:value,size:selectedSize }));
  };
 
  return (
    <>
      <Toaster />

      <nav className="bg-white border-gray-200 py-4 sticky top-0 shadow-md max-md:shadow-sm z-50">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto max-smaller1:flex-col max-smaller1:justify-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-9 rounded-full"
              alt="Clothophile Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap font-openSans tracking-wider max-md:text-lg max-sm:text-sm ">
             ClothoPhile Store
            </span>
          </Link>
          <div className="flex items-center lg:order-2 gap-4">
            <Link
              to="/search"
              className="text-black focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 lg:px-2 py-2 sm:mr-2 focus:outline-none"
            >
              <IoSearch className="font-light text-2xl max-md:text-xl" />
            </Link>
            {/* <Link to={"/view-cart"} className="relative"> */}
            <div className="relative cursor-pointer">
              <FaCartShopping className="text-2xl max-md:text-lg" onClick={()=> setIsCartOpen((prev)=> !prev)}/>
              {cartItems > 0 && (
                <span className="absolute -top-3 -right-[0.6rem] text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center max-md:text-[10px] max-md:w-3 max-md:h-3 max-md:-top-[0.4rem] max-md:-right-[0.4rem]">
                  {cartItems}
                </span>
              )}
            </div>

            {/* </Link> */}
            {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <SideCartBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        </div>
        // <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
        //   <SideCartBar2 isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        // </div>
      )}

            {access_token ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center justify-center text-center w-8 h-8"
                >
                  <FaUserAlt className="text-xl max-md:text-lg" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.setItem("user", null);
                        dispatch(userActions.logout());
                        navigate("/");
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/sign-in">
                <button className="px-3 py-[0.32rem] bg-[#e53637] hover:bg-red-600 rounded-xl font-openSans text-sm text-white">
                  Login
                </button>
              </Link>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              onClick={handleNavBar}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              visible ? "" : "max-lg:hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 font-openSans text-[1.15rem]">
              <li>
                <Link
                  to="/"
                  ref={navitem}
                  onClick={handleItemClick}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 max-lg:text-white ${activeItem=='Home'? "lg:text-[#e53637] ":""} rounded lg:bg-transparent `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/All-products"
                  ref={navitem}
                  onClick={handleItemClick}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${activeItem=='Shop'? "lg:text-[#e53637] ":""}`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/add-product"
                  onClick={handleItemClick}
                  ref={navitem}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${activeItem=='Pages'? "lg:text-[#e53637] ":""}`}
                >
                  Pages
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={handleItemClick}
                  ref={navitem}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${activeItem=='Blogs'? "lg:text-[#e53637] ":""}`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  ref={navitem}
                  onClick={handleItemClick}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${activeItem=='Contact'? "lg:text-[#e53637] ":""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-white">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-8 lg:flex  lg:justify-center lg:mt-4 lg:gap-8">
                  <img
                    src={mainImage}
                    alt="Product"
                    className="object-cover rounded-lg shadow-md mb-4 w-[45.5rem] h-[30.7rem] lg:w-[23rem] lg:h-[33rem] xl:w-[29rem] xl:h-[37rem] sm-only:w-for-img"
                    id="mainImage"
                  />
                  <div
                    className={`flex gap-4 py-4  xl:h-[37rem] lg:h-[33rem] lg:flex-col  max-lg:overflow-scroll ${
                      coverImages.length > 3
                        ? " max-lg:justify-around sm:justify-center md:justify-around "
                        : "justify-center md:gap-6"
                    }`}
                  >
                    <img
                      src={image}
                      className="size-16 lg:h-[95px] lg:w-[67px] sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                      onClick={() => changeImage(image)}
                    />
                    {coverImages?.map((image, index) => {
                      return (
                        <img
                          src={image}
                          onClick={() => changeImage(image)}
                          key={index}
                          className="size-16  lg:h-[95px] lg:w-[67px] sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-4">
                  <h2 className="text-3xl font-bold mb-2 capitalize">{name}</h2>
                  <p className=" mb-4 text-2xl text-red-600">
                    {discount}% <span className="text-xl">OFF</span>
                  </p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold mr-2">
                      ₹{discountedPrice}
                    </span>
                    <span className="text-gray-500 line-through">₹{price}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-600">
                      4.5 (120 reviews)
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-lg font-openSans">
                      Description:
                    </h3>
                    <p className="text-gray-700 mb-6 text-justify xl:w-[580px]">
                      {description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 font-openSans w-[200px] flex items-center gap-1">
                      <span>Color: </span>
                      <span className="text-[#636363] font-[400] font-openSans ml-1  text-[16px] capitalize ">
                        {colorName}
                      </span>
                    </h3>

                    <div className="flex space-x-2">
                      {colors && colors.length > 0
                        ? colors.map((color, index) => {
                            return (
                              <Link to={`/product/${color.slug}`} key={index}>
                                <div className={ `mr-2 `}>
                                  <img
                                    src={color.image}
                                    alt=""
                                    className={`object-cover w-[50px] h-[75px] rounded-md  ${color.slug===slug ? "border-2 border-black": " border-2 border-gray-300 "} `}
                                  />
                                </div>
                              </Link>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 font-openSans w-[200px] flex items-center gap-1">
                      <span>Size: </span>
                      <span className="text-[#636363] font-[400] font-openSans ml-1  text-[16px] capitalize ">
                        {selectedSize}
                      </span>
                    </h3>
                    <div className="flex items-center mt-2">
                      {size.map((sizeoption, i) => {
                        return (
                          <button
                            className={`border  text-[15px]  py-2 px-[10px] min-w-12 h-[35px]  mr-2  capitalize flex items-center justify-center font-semibold hover:border-black hover:text-black transition ease-in-out duration-500 ${
                              selectedSize == sizeoption
                                ? "border-black "
                                : " border-gray-300 text-gray-600 "
                            }`}
                            key={i}
                            value={sizeoption}
                            onClick={handleSelectedSize}
                          >
                            {sizeoption}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="mb-2 font-semibold text-lg font-openSans">
                      Stock available:{" "}
                      <span className="text-red-600">{stock}</span>
                    </span>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="quantity"
                      className="block text-md font-medium text-gray-700 mb-1"
                    >
                      Quantity:
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={value}
                      onChange={handleChange}
                      className="w-16 text-center rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="flex space-x-4 mb-6">
                    <button
                      className="bg-red-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={handleCart}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                    <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-8 font-semibold py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="sm:p-6 xl:px-24 mt-4">
                  <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 gap-y-4 border-b ">
                    {tabs.map((tab, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`${
                          activeTab === index
                            ? "border-b-2  border-black text-black"
                            : "text-gray-600"
                        } text-sm sm:text-lg font-semibold pb-3 hover:border-b-2 hover:border-black hover:text-black transition ease-in-out`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-8">
                    <div className="text-sm sm:text-base p-4 sm:p-6  rounded-lg max-w-md sm:max-w-lg">
                      {Array.isArray(tabContent[activeTab].content) &&
                      tabContent[activeTab].content.length > 0 ? (
                        <ul className="list-disc ml-4">
                          {tabContent[activeTab].content.map((li, i) => (
                            <li key={i} className="mt-1">
                              {li}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{tabContent[activeTab].content}</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* <SimilarProductsSlider /> */}
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default ProductDetails;
