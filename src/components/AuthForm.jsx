import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { GetItems, SetItems } from "../utils/LocalStorage";
import { useDispatch } from "react-redux";
import { userActions} from '../redux/slices/auth.jsx'

function AuthForm({ type }) {
  let formStructure = {
    name: "",
    email: "",
    password: "",
  };

  const dispath=useDispatch()
  const navigate=useNavigate()

  const [FormData, setFormData] = useState(formStructure);
  const typeWord = type.replace("-", " ");
  const passwordRegex =
   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleAuthForm = async (e) => {
    e.preventDefault();
    let { name, email, password } = FormData;

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (type === "sign-in") {
      if (!name) {
        return toast.error("All fields are required");
      }
      if (!emailRegex.test(email)) {
        return toast.error("Please enter valid email address");
      }
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password that requires at least 1 uppercase, 1 lowercase letter, one number, and a minimum of 8 characters"
      );
    }
    let Loading;
    try {
       Loading = toast.loading("Just a moment...");
      const { data } = await axios.post(
        `http://localhost:3000/${type}`,
        FormData
      );

      dispath(userActions.login(data))

      toast.remove(Loading);
      toast.success(`${typeWord} Successfully`);
      console.log(data);
      navigate("/")
    } catch (error) {
        
      toast.remove(Loading);
      console.log("error",error);
      toast.error(error.response.data.error);
    }
  };

  useEffect(() => {
    setFormData(formStructure);
  }, [type]);

  return (
    <>
      <Toaster />
      <div className="min-h-[calc(100vh-76px)] bg-gray-100 flex flex-col justify-center  sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-openSans">
            {type === "Sign-in"
              ? "Sign in to your account"
              : "Create an account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Or{" "}
            <Link
              to={`/${type === "Sign-in" ? "sign-up" : "sign-in"}`}
              className="font-medium hover:text-[#e53637] text-[#f25f5f]"
            >
              {type === "Sign-in"
                ? "Create an account"
                : "Sign in to your account"}
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 pb-6 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#">
              {type === "Sign-up" ? (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      name="name"
                    value={FormData.name}
                      type="text"
                      onChange={handleChange}
                      required
                      className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#f25f5f] focus:border-[#f25f5f] focus:z-10 sm:text-sm"
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    value={FormData.email}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#f25f5f] focus:border-[#f25f5f] focus:z-10 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={FormData.password}
                    type="password"
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#f25f5f] focus:border-[#f25f5f] focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-[#db2828] accent-[#e73c3c]  focus:ring-[#f25f5f] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium hover:text-[#e53637] text-[#f25f5f]"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#e53637] hover:bg-[#da3c3c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f25f5f] "
                  onClick={handleAuthForm}
                >
                  {type.replace("-", " ")}
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-100 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-5 w-full flex items-center  justify-center ">
                <button
                  type="button"
                  className=" bg-white  font-medium rounded-lg  px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 text-gray-700 font-openSans text-normal"
                >
                  <FcGoogle className="text-2xl mr-2 " />
                  {type.replace("-", " ")} with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
