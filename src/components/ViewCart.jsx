import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { RiSubtractFill } from "react-icons/ri";
import {
  AddToCart,
  closeCart,
  DeleteCart,
  GetCart,
  RemoveCart,
} from "../redux/slices/Cart";
import Loading from "../utils/Loading";
import { RiDeleteBin5Line } from "react-icons/ri";

const ViewCart = () => {
  const user_id = useSelector((state) => state.auth.token?.user_id);
  const { cartData, loading, fullCartData } = useSelector(
    (state) => state.cart
  );
  const [fetchCart, setFetchCart] = useState(false);

  const subtotal = 500;
  const shippingEstimate = 5.0;
  const taxEstimate = 8.32;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  let OriginalPrice = cartData?.reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);
  const dispatch = useDispatch();

  const handleRemove = (slug, size) => {
    dispatch(RemoveCart({ user_id, slug, size })).then(() =>
      dispatch(GetCart(user_id))
    );
    setFetchCart((prev) => !prev);
  };

  const handleAdd = (slug, size) => {
    dispatch(AddToCart({ user_id, slug, size, quantity: 1 })).then(() =>
      dispatch(GetCart(user_id))
    );
    setFetchCart((prev) => !prev);
  };
  const handleDelete = (slug, size) => {
    dispatch(DeleteCart({ user_id, slug, size })).then(() =>
      dispatch(GetCart(user_id))
    );
    setFetchCart((prev) => !prev);
  };
  useEffect(() => {
    dispatch(GetCart(user_id));
    dispatch(closeCart());
  }, [dispatch, fetchCart]);

  const handleInputVal = (e) => {
    dispatch(GetCart(user_id));
  };
  return (
    <>
      <div className="bg-gradient-to-r from-red-200 to-orange-200 py-[4rem]">
        <h2 className="text-xl font-light  sm:text-4xl text-center font-nunitoSans">
          Shopping Cart
        </h2>
      </div>

      <section className="bg-white py-2 antialiased  md:py-4">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                <div></div>

                {/* <div className="container mx-auto p-4">
                  <table className="w-full ">
                    <thead>
                      <tr className="max-md:hidden">
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Product
                        </th>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Price
                        </th>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Quantity
                        </th>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody >

                    {cartData && cartData.length > 0 ? (
                      cartData.map((cart, index) => {
                        return (
                        
                              <tr className="py-3 " key={index}>
                                <td className="p-4 flex  gap-4">
                                  <Link to={`/product/${cart.slug}`}>
                                    <img
                                      src={cart.image}
                                      alt={cart.name}
                                      className="w-[4.9rem] h-[7rem] object-cover"
                                    />
                                  </Link>
                                  <div>
                                    <Link to={`/product/${cart.slug}`}>
                                      {" "}
                                      <p className="font-openSans hover:text-red-500 transition-all duration-300">
                                        {cart.name}
                                      </p>
                                    </Link>
                                    <p className="text-sm font-light font-nunitoSans text-gray-500 capitalize">
                                      {cart.color} / {cart.size[0]}
                                    </p>
                                    <button
                                      className="text-[14px] font-openSans  underline hover:text-red-500"
                                      onClick={() =>
                                        handleDelete(cart.slug, cart.size)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </td>
                                <td className="p-4">₹{cart.price}</td>
                                <td className="p-4  items-center gap-2 ">
                                  <div className="bg-[#f2f2f2] flex justify-center items-center w-[60%] m-auto px-1">
                                    <button
                                      className=" w-8 h-8 rounded-full flex justify-center items-center "
                                      onClick={() =>
                                        handleRemove(cart.slug, cart.size)
                                      }
                                    >
                                      <RiSubtractFill />
                                    </button>
                                    <span className="w-6  h-8 flex items-center justify-center">
                                      {cart.quantity}
                                    </span>
                                    <button
                                      className=" w-8 h-8 rounded-full flex justify-center items-center"
                                      onClick={() =>
                                        handleAdd(cart.slug, cart.size)
                                      }
                                    >
                                      <FiPlus />
                                    </button>
                                  </div>
                                </td>
                                <td className="p-4 font-semibold">
                                ₹{cart.price * cart.quantity}
                                </td>
                              </tr>
                        
                        );
                      })
                    ) : (
                      <span className="text-center block">
                        {" "}
                        Your Cart is empty!!
                      </span>
                    )}
                            </tbody>

                  </table>
                </div> */}

                <div className="container mx-auto p-4">
                  {/* Responsive Product List */}
                  <div className="block md:hidden">
                    {cartData && cartData.length > 0 ? (
                      cartData.map((cart, index) => (
                        <div
                          key={index}
                          className="flex flex-col border-b border-gray-200 py-4 gap-4"
                        >
                          <div className="flex items-center gap-4">
                            <Link to={`/product/${cart.slug}`}>
                              <img
                                src={cart.image}
                                alt={cart.name}
                                className="w-20 h-28 object-cover"
                              />
                            </Link>
                            <div>
                              <Link to={`/product/${cart.slug}`}>
                                <p className="font-openSans hover:text-red-500 transition-all duration-300">
                                  {cart.name}
                                </p>
                              </Link>
                              <p className="text-sm font-light font-nunitoSans text-gray-500 capitalize">
                                {cart.color} / {cart.size[0]}
                              </p>
                              <button
                                className="text-[14px] font-openSans underline hover:text-red-500"
                                onClick={() =>
                                  handleDelete(cart.slug, cart.size)
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-sm font-semibold">
                            <p>Price</p>
                            <p >₹{cart.price}</p>
                          </div>

                          <div className="flex justify-between items-center text-sm">
                            <p className="font-semibold ">Quantity</p>
                            <div className="flex items-center md:gap-2 bg-[#f2f2f2] md:px-2 md:py-1">
                              <button
                                className="w-8 h-8 rounded-full flex justify-center items-center"
                                onClick={() =>
                                  handleRemove(cart.slug, cart.size)
                                }
                              >
                                <RiSubtractFill />
                              </button>
                              <span className="w-6 text-center">
                                {cart.quantity}
                              </span>
                              <button
                                className="w-8 h-8 rounded-full flex justify-center items-center"
                                onClick={() => handleAdd(cart.slug, cart.size)}
                              >
                                <FiPlus />
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center text-sm font-semibold">
                            <p >Total</p>
                            <p>₹{cart.price * cart.quantity}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <span className="text-center block">
                        Your Cart is empty!!
                      </span>
                    )}
                  </div>

                  {/* Table for larger screens */}
                  <table className="hidden md:table w-full">
                    <thead>
                      <tr>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Product
                        </th>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Price
                        </th>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Quantity
                        </th>
                        <th className="text-left p-6 border-b border-gray-200 font-semibold">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody >
                      {cartData && cartData?.length > 0 ? (
                        cartData.map((cart, index) => (
                          <tr className="py-3" key={index}>
                            <td className="p-4 flex gap-4">
                              <Link to={`/product/${cart.slug}`}>
                                <img
                                  src={cart.image}
                                  alt={cart.name}
                                  className="w-[4.9rem] h-[7rem] object-cover"
                                />
                              </Link>
                              <div>
                                <Link to={`/product/${cart.slug}`}>
                                  <p className="font-openSans hover:text-red-500 transition-all duration-300">
                                    {cart.name}
                                  </p>
                                </Link>
                                <p className="text-sm font-light font-nunitoSans text-gray-500 capitalize">
                                  {cart.color} / {cart.size[0]}
                                </p>
                                <button
                                  className="text-[14px] font-openSans underline hover:text-red-500"
                                  onClick={() =>
                                    handleDelete(cart.slug, cart.size)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </td>
                            <td className="p-4">₹{cart.price}</td>
                            <td className="p-4 items-center gap-2">
                              <div className="bg-[#f2f2f2] flex justify-center items-center w-[60%] m-auto px-1">
                                <button
                                  className="w-8 h-8 rounded-full flex justify-center items-center"
                                  onClick={() =>
                                    handleRemove(cart.slug, cart.size)
                                  }
                                >
                                  <RiSubtractFill />
                                </button>
                                <span className="w-6 h-8 flex items-center justify-center">
                                  {cart.quantity}
                                </span>
                                <button
                                  className="w-8 h-8 rounded-full flex justify-center items-center"
                                  onClick={() =>
                                    handleAdd(cart.slug, cart.size)
                                  }
                                >
                                  <FiPlus />
                                </button>
                              </div>
                            </td>
                            <td className="p-4 font-semibold">
                              ₹{cart.price * cart.quantity}
                            </td>
                          </tr>
                        ))
                      ) : (
                       

                        <p className="text-center  lg:mt-3">
                          Your Cart is empty!!
                        </p>
                      
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
                <p className="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        ₹{OriginalPrice ? OriginalPrice : 0}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -₹{OriginalPrice - fullCartData?.totalPrice ? OriginalPrice - fullCartData?.totalPrice : 0}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 ">
                        Delivery Fee
                      </dt>
                      <dd className="text-base font-medium text-gray-500 ">
                        Free
                        <span className="font-[13px] text-gray-900 ml-1 line-through">
                          ₹{cartData?.length * 100 ? cartData?.length * 100 : 0}
                        </span>
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      ₹{fullCartData.totalPrice ? fullCartData.totalPrice : 0}
                    </dd>
                  </dl>
                </div>

                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-red-500 hover:bg-primary-800 focus:outline-none  "
                >
                  Checkout
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 ">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to="/filter-products"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline text-red-500 "
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500    "
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-red-500"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCart;
