import React from "react";
const Tag = ({ text, selected }) => {
  return (
    <button
      type="button"
      className={`border border-gray-200 ${
        selected ? "bg-blue-500 text-white" : "bg-gray-200"
      } text-gray-900 px-3 py-1  transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline font-bold`}
    >
      {text}
    </button>
  );
};
const RelatedTags = () => {
  return (
    <div className="space-x-3">
      <Tag text="Javascript" selected />
      <Tag text="React" />
      <Tag text="Node Js" />
    </div>
  );
};

export default RelatedTags;
