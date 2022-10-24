import React from "react";

const Tags = () => {
  return (
    <div className=" w-full max-w-md bg-white rounded-lg sm:p-8">
      <p className="text-xl font-bold leading-none text-gray-900 mb-4">
        Recommended Tags
      </p>
      <div className="flex flex-wrap ">
        <Tag text="Programming" />
        <Tag text="Design" />
        <Tag text="UI/UX" />
        <Tag text="JavaScript" />
        <Tag text="ReactJS" />
      </div>
    </div>
  );
};

export default Tags;
const Tag = ({ text }) => {
  return (
    <button
      type="button"
      class="border border-gray-200 bg-gray-200 text-gray-900 rounded-full px-3 py-1 m-1.5 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
    >
      {text}
    </button>
  );
};
