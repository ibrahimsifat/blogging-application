import React from "react";

const Categories = () => {
  return (
    <div className=" w-full max-w-md bg-white rounded-lg sm:p-8">
      <p className="text-xl font-bold leading-none text-gray-900 mb-4">
        Recommended topics
      </p>
      <div className="flex flex-wrap ">
        <Category text="Programming" />
        <Category text="Design" />
        <Category text="UI/UX" />
        <Category text="JavaScript" />
        <Category text="ReactJS" />
      </div>
    </div>
  );
};

export default Categories;
const Category = ({ text }) => {
  return (
    <button
      type="button"
      className="border border-gray-200 bg-gray-200 text-gray-900 rounded-full px-3 py-1 m-1.5 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};
