import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "../../../components/home/navigation/ui/Button";
import InputGroup from "../../../components/home/navigation/ui/Input";
import UserCaption from "./UserCaption";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="space-y-4">
              <img
                src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                loading="lazy"
                className="w-10"
                alt="tailus logo"
              />
              <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                Sign in to unlock the <br /> best of Tailus.
              </h2>
            </div>
            <div className="relative">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <InputGroup
                  type="email"
                  name="email"
                  placeholder="Email address"
                  id="email"
                  label="Email address"
                />
                <InputGroup
                  type="password"
                  name="password"
                  placeholder="************"
                  id="password"
                  label="Your Password"
                />

                <Button $primary type="submit">
                  Login
                </Button>
              </div>
            </div>
          </div>
          <div className="m-auto">
            <div className="p-6 sm:p-16">
              <div className=" grid space-y-4">
                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <FcGoogle size={24} className="absolute left-0 w-5" />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>

                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                      className="absolute left-0 w-5"
                      alt="Facebook logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Facebook
                    </span>
                  </div>
                </button>
              </div>

              <UserCaption />
            </div>
          </div>
          <p>
            Don't have account?{" "}
            <Link to="/register">
              {" "}
              <span className="font-bold cursor-pointer hover:text-blue-500">
                Create a Account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
