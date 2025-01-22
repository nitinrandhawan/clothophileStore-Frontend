import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, closeCart, DeleteCart, GetCart, increaseCart, RemoveCart, toggleCart } from "../redux/slices/Cart";

const SideCartBar = () => {
  const user_id = useSelector((state) => state.auth.token?.user_id);
  const { cartData,fullCartData } = useSelector((state) => state.cart);
  

  const isCartOpen=useSelector((state)=> state.cart.isCartOpen)
  const [agreeTerms, setAgreeTerms] = useState(false);
  const handleRemove = (slug, size) => {
    dispatch(RemoveCart({ user_id, slug, size })).then(()=> dispatch(GetCart(user_id)))
  
  };

  const handleAdd = (slug, size) => {
    dispatch(AddToCart({ user_id, slug, size, quantity: 1 })).then(()=> dispatch(GetCart(user_id)))
    
  };
const handleDelete=(slug,size)=>{
dispatch(DeleteCart({user_id,slug,size})).then(()=> dispatch(GetCart(user_id)))

}
  
  const dispatch = useDispatch();
//   const increaseQuantity=({user_id,slug,size,quantity})=>{
// dispatch(AddToCart({user_id,slug,size,quantity}))
//   }
  
  
  useEffect(() => {
    
    dispatch(GetCart(user_id));
  }, []);
  return (
    <>
      {/* Overlay that closes the cart when clicked */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity"
          onClick={()=>dispatch(toggleCart())}
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
            onClick={()=>dispatch(closeCart())}
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
                    <p className="text-gray-600 mb-1">Rs. {cart.discountedPrice}</p>

                    <p className="mb-1">
                      Size: <span className="text-gray-500">{cart.size}</span>
                    </p>
                    <p>
                      Color: <span className="text-gray-500">{cart.color}</span>
                    </p>
                    <div className="flex items-center space-x-2 mt-3 gap-3">
                      <button
                        onClick={()=>handleRemove(cart.slug,cart.size[0])}
                        className="px-2 border"
                      >
                        -
                      </button>
                      <span>{cart.quantity}</span>
                      <button
                       onClick={()=>handleAdd(cart.slug,cart.size[0])}
                        className="px-2 border"
                      >
                        +
                      </button>
                      <button className="hover:text-red-500" onClick={()=>handleDelete(cart.slug,cart.size[0])}>
                        <RiDeleteBin5Line />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center my-5">Your Cart is empty!!</div>
          )}
        </div>
        {/* Order Instructions */}

        {/* Subtotal and Checkout */}
        <div className="p-4 relative bottom-0">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Subtotal</span>
            <span className="font-semibold">Rs. {fullCartData?.totalPrice ? fullCartData?.totalPrice : 0}</span>
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
          <Link to={`${agreeTerms ? "/checkout": ""}`}>
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
          </Link>

        </div>
      </div>
    </>
  );
};

export default SideCartBar;
