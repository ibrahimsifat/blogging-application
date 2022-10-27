import React from "react";

const FollowArticles = ({ image, authorName, articleTitle }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 cursor-pointer group">
        <div className="shrink-0">
          <img className="w-5 h-5 rounded-full" src={image} alt="Bo" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
            {authorName}
          </p>
        </div>
      </div>
      <p className="tex-md mt-2 font-bold hover:text-blue-600 cursor-pointer">
        {articleTitle}
      </p>
    </li>
  );
};

export default FollowArticles;
