import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, GetCart } from "../redux/slices/Cart";
import Loading from "../utils/Loading";

function CheckOut() {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.token?.user_id);

  const { cartData, loading, fullCartData } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(GetCart(user_id));
    dispatch(closeCart());
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-red-200 to-orange-200 py-[4rem]">
        <h2 className="text-xl font-light  sm:text-4xl text-center font-nunitoSans">
          Check Out
        </h2>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="mt-10  px-4 pt-8 lg:mt-0">
          <p className="text-xl md:text-2xl font-medium">Payment Information</p>

          <p className="text-gray-400 font-nunitoSans font-light mt-2 mb-8">
            Provide your payment information to complete the checkout process.
          </p>
          <div className="">
            <label
              for="fullName"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Full Name<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <label
              for="country"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Country/Region <span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select
                name="country"
                id="country"
                className="px-4 py-3 pr-10 border shadow-sm outline-none focus:z-10 border-gray-200 rounded-md  focus:border-red-500 focus:ring-red-500 w-full"
              >
                <option value="" disabled selected>
                  Select your country
                </option>
                <option value="india">India</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="armenia">Armenia</option>
                <option value="azerbaijan">Azerbaijan</option>
                <option value="bahrain">Bahrain</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="bhutan">Bhutan</option>
                <option value="brunei">Brunei</option>
                <option value="cambodia">Cambodia</option>
                <option value="china">China</option>
                <option value="cyprus">Cyprus</option>
                <option value="georgia">Georgia</option>
                <option value="indonesia">Indonesia</option>
                <option value="iran">Iran</option>
                <option value="iraq">Iraq</option>
                <option value="israel">Israel</option>
                <option value="japan">Japan</option>
                <option value="jordan">Jordan</option>
                <option value="kazakhstan">Kazakhstan</option>
                <option value="kuwait">Kuwait</option>
                <option value="kyrgyzstan">Kyrgyzstan</option>
                <option value="laos">Laos</option>
                <option value="lebanon">Lebanon</option>
                <option value="malaysia">Malaysia</option>
                <option value="maldives">Maldives</option>
                <option value="mongolia">Mongolia</option>
                <option value="myanmar">Myanmar</option>
                <option value="nepal">Nepal</option>
                <option value="north-korea">North Korea</option>
                <option value="oman">Oman</option>
                <option value="pakistan">Pakistan</option>
                <option value="philippines">Philippines</option>
                <option value="qatar">Qatar</option>
                <option value="saudi-arabia">Saudi Arabia</option>
                <option value="singapore">Singapore</option>
                <option value="south-korea">South Korea</option>
                <option value="sri-lanka">Sri Lanka</option>
                <option value="syria">Syria</option>
                <option value="tajikistan">Tajikistan</option>
                <option value="thailand">Thailand</option>
                <option value="timor-leste">Timor-Leste</option>
                <option value="turkmenistan">Turkmenistan</option>
                <option value="uae">United Arab Emirates</option>
                <option value="uzbekistan">Uzbekistan</option>
                <option value="vietnam">Vietnam</option>
                <option value="yemen">Yemen</option>
              </select>
            </div>
            <label for="city" className="mt-4 mb-2 block text-sm font-medium">
              Town/City<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="city"
                name="city"
                className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>

            <label
              for="address"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Address<span className="text-red-600">*</span>
            </label>

            <div className="relative">
              <textarea
                name=""
                id=""
                rows={6}
                className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-red-500 focus:ring-red-500 resize-none"
              ></textarea>
            </div>

            <label
              for="pincode"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Pin Code<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <label
              for="phonenumber"
              className="mt-4 mb-2 block text-sm font-medium"
            >
              Phone Number<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                id="phonenumber"
                name="phonenumber"
                className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <label for="email" className="mt-4 mb-2 block text-sm font-medium">
              Email<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm  shadow-sm outline-none focus:z-10 focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>
        </div>
        <div className="px-4 pt-8 ">
          <p className="text-xl md:text-2xl font-medium">Your Order</p>
          <div className="bg-[#fbfbfc] px-5">
            <div className="mt-8 space-y-3  py-4  ">
              {cartData && cartData.length > 0 ? (
                cartData.map((cart, index) => {
                  return (
                    <div
                      className="flex flex-col rounded-lg  sm:flex-row"
                      key={index}
                    >
                      <img
                        className="m-2 h-24 w-[5.5rem] rounded-md border object-cover object-center"
                        src={cart.image}
                        alt=""
                      />
                      <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">{cart.name}</span>
                        <span className="float-right text-gray-400 capitalize text-sm">
                          {cart.color}/{cart.size}
                        </span>
                        <p className="text-[16px] font-semibold font-nunitoSans">
                          ₹{cart.price}
                        </p>
                      </div>
                    </div>
                  );
                })
              ) : loading ? (
                <Loading />
              ) : (
                <span>Your Cart is empty!!</span>
              )}
            </div>

            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <form className="mt-5 grid gap-6">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-red-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-red-400 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-red-500 peer-checked:bg-red-50 flex cursor-pointer select-none rounded-lg border border-red-400 p-4"
                  for="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Online payment mode
                    </span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="peer-checked:border-red-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-red-400 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-red-500 peer-checked:bg-red-50 flex cursor-pointer select-none rounded-lg border border-red-400 p-4"
                  for="radio_2"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Cash On Delivery</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="mt-6  border-b py-2"></div>
              <div className="mt-6 flex items-center justify-between">
                <p className=" text-xl font-medium text-center">Total</p>
                <p className="text-xl font-semibold text-gray-900">
                  ₹{fullCartData.totalPrice ? fullCartData.totalPrice : 0}
                </p>
              </div>
              <button className="mt-4 mb-8 w-full rounded-md bg-red-500 px-6 py-3 font-medium text-white hover:bg-red-600">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
