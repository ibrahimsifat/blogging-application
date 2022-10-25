import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
const ArticleLikeUnlike = () => {
  return (
    <div className="mb-2 flex items-center space-x-4">
      <button className="px-2 py-2 rounded-xl text-sm font-medium active:bg-grey-900 focus:outline-none border-4 border-indigo-100 bg-indigo-500 text-white focus:border-purple-200 transition-all flex items-center">
        <AiFillLike size={20} />
        <span className="ml-5 text-md">{0}</span>
      </button>

      <button className="px-2 py-2 rounded-xl text-sm font-medium active:bg-grey-900 focus:outline-none border-4 border-indigo-100 bg-indigo-500 text-white focus:border-purple-200 transition-all flex items-center">
        <AiFillDislike size={20} />
        <span className="ml-5 text-md">{0}</span>
      </button>
    </div>
  );
};

export default ArticleLikeUnlike;
