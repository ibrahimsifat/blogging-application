import React from "react";

const Otp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
            NewsLetters
          </h1>
          <p className="text-sm text-gray-500 text-center w-5/6">
            Hello, please enter your email address to subscribe our newsletters.
          </p>
          <input
            type="text"
            placeholder="Email"
            className="border-2 rounded-lg w-full h-12 px-4"
          />
          <button className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
