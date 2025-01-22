import React, { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/image/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/slices/auth";
import Footer from "./Footer";
import SideCartBar from "./SideCartBar";
import SideCartBar2 from "./SideCartBar2";
import { closeCart, GetCart, toggleCart } from "../redux/slices/Cart";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeItem, setactiveItem] = useState("Home");
  const navitem = useRef("");
  const dropdownRef = useRef(null);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const handleNavBar = () => {
    setVisible((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const access_token = useSelector((state) => state.auth.token?.access_token);
  const user_id = useSelector((state) => state.auth.token?.user_id);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.cart);

  const handleItemClick = (e) => {
    console.log(activeItem);

    setactiveItem(e.target.innerText);
  };

  useEffect(() => {
    if (user_id) {
      dispatch(GetCart(user_id));
    }
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

  return (
    <>
      <nav className="bg-white border-gray-200 py-4 sticky top-0 shadow-md max-md:shadow-sm z-50">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto ">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="h-6 mr-3 sm:h-9 rounded-full"
              alt="Clothophile Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap font-openSans tracking-wider max-md:text-lg max-sm:text-sm max-smallest1:text-[12px] ">
              ClothoPhile Store
            </span>
          </Link>
          <div className="flex items-center lg:order-2 gap-4 max-smaller1:gap-[2px]">
            <Link
              to="/#"
              className="text-black focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 lg:px-2 py-2 sm:mr-2 focus:outline-none"
            >
              <IoSearch className="font-light text-2xl max-md:text-xl" />
            </Link>
            <Link
              to={`${
                window.location.pathname === "/view-cart" ? "/view-cart" : "#"
              }`}
              className="relative"
            >
              <div
                className="relative cursor-pointer"
                onClick={() =>
                  window.location.pathname === "/view-cart"
                    ? dispatch(closeCart())
                    : dispatch(toggleCart())
                }
              >
                <FaCartShopping className="text-2xl max-md:text-lg" />
                {cartItems > 0 && (
                  <span className="absolute -top-3 -right-[0.6rem] text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center max-md:text-[10px] max-md:w-3 max-md:h-3 max-md:-top-[0.4rem] max-md:-right-[0.4rem]">
                    {cartItems}
                  </span>
                )}
              </div>
            </Link>
            {isCartOpen && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
                <SideCartBar />
              </div>
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
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
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
              className="inline-flex items-center p-2 max-smaller1:p-0 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 max-lg:text-white ${
                    activeItem == "Home" ? "lg:text-[#e53637] " : ""
                  } rounded lg:bg-transparent `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/filter-products"
                  ref={navitem}
                  onClick={handleItemClick}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${
                    activeItem == "Shop" ? "lg:text-[#e53637] " : ""
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={handleItemClick}
                  ref={navitem}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${
                    activeItem == "Pages" ? "lg:text-[#e53637] " : ""
                  }`}
                >
                  About us
                </Link>
              </li>
              {/* <li>
                <Link
                  to="#"
                  onClick={handleItemClick}
                  ref={navitem}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${
                    activeItem == "Blogs" ? "lg:text-[#e53637] " : ""
                  }`}
                >
                  Blogs
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact-us"
                  ref={navitem}
                  onClick={handleItemClick}
                  className={`block py-2 px-4 max-md:p-0 text-gray-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#e53637] ${
                    activeItem == "Contact" ? "lg:text-[#e53637] " : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
