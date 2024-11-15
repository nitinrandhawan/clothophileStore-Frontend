import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, GetCart, increaseCart } from "../redux/slices/Cart";
const SideCartBar = ({ isCartOpen, setIsCartOpen }) => {
  const user_id = useSelector((state) => state.auth.token?.user_id);
  const { cartData } = useSelector((state) => state.cart);
  // const increaseQuantity = () => setQuantity(quantity + 1);
  // const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const increaseQuantity=({user_id,slug,size,quantity})=>{
dispatch(AddToCart({user_id,slug,size,quantity}))
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart(user_id));
  }, []);
  return (
    <>
      {/* Overlay that closes the cart when clicked */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity"
          onClick={() => setIsCartOpen(!isCartOpen)}
        ></div>
      )}

      {/* Side Cart Bar */}
      <div
        className={`fixed top-0 right-0 w-full smaller2:w-96 md:w-[28rem] lg:w-[30rem]  h-full bg-white shadow-lg z-50  transform transition duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">My Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="text-black hover:text-gray-700 mr-2 flex items-center justify-center"
          >
            <IoCloseCircle className="text-2xl" />
          </button>
        </div>

        {/* Cart Item */}
        <div className="overflow-scroll w-full h-[62vh] ">
          {cartData && cartData.length > 0 ? (
            cartData.map((cart, index) => {
              return (
                <div
                  className="flex items-center p-4 border-b space-x-4 gap-2 max-smallest:flex-col max-smallest:items-start mt-7 pb-10 "
                  key={index}
                >
                  <img
                    src={cart.image}
                    alt="Product"
                    className="w-24 h-28 object-cover max-smallest:ml-3"
                  />
                  <div className="flex-grow ">
                    <h3 className="text-lg font-semibold">{cart.name}</h3>
                    <p className="text-gray-600 mb-1">Rs. {cart.price}</p>

                    <p className="mb-1">
                      Size: <span className="text-gray-500">{cart.size}</span>
                    </p>
                    <p>
                      Color: <span className="text-gray-500">{cart.color}</span>
                    </p>
                    <div className="flex items-center space-x-2 mt-3 gap-3">
                      <button
                        // onClick={decreaseQuantity}
                        className="px-2 border"
                      >
                        -
                      </button>
                      <span>{cart.quantity}</span>
                      <button
                        onClick={()=>{increaseQuantity({user_id,slug: cart.slug,})}}
                        className="px-2 border"
                      >
                        +
                      </button>
                      <button>
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>Your Cart is empty!!</div>
          )}
        </div>
        {/* Order Instructions */}

        {/* Subtotal and Checkout */}
        <div className="p-4 relative bottom-0">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Subtotal</span>
            <span className="font-semibold">Rs. 2,000.00</span>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-600">
              I agree with the{" "}
              <Link
                to="/terms-and-conditions"
                className="text-blue-500 underline"
              >
                terms & conditions
              </Link>
              .
            </label>
          </div>
          <Link to={"/view-cart"}>
            {" "}
            <button className="w-full py-3 bg-black text-white font-semibold rounded-md mb-2">
              View Cart
            </button>
          </Link>{" "}
          <button
            className={`w-full py-3 ${
              agreeTerms
                ? "bg-white text-black border border-black"
                : "bg-gray-400  text-white"
            } font-semibold rounded-md`}
            disabled={!agreeTerms}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideCartBar;
