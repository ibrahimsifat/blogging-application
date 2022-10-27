import React from "react";

const Batch = ({ label }) => {
  return (
    <button
      type="button"
      className="border border-gray-200 bg-gray-200 text-gray-900 rounded-full px-3 py-1 m-1.5 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
    >
      {label || "Press"}
    </button>
  );
};

export default Batch;
