import React from "react";

const RecentArticles = () => {
  return (
    <div class="p-4 w-full max-w-md bg-white rounded-lg sm:p-8 ">
      <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 ">
          Recent Blogs
        </h5>
        <a
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div class="flow-root">
        <ul role="list">
          <Article />
          <Article />
          <Article />
          <Article />
        </ul>
      </div>
    </div>
  );
};

export default RecentArticles;
const Article = () => {
  return (
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 cursor-pointer group">
        <div class="flex-shrink-0">
          <img
            class="w-5 h-5 rounded-full"
            src="https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            alt="Bo"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600">
            Bonnie Green
          </p>
        </div>
      </div>
      <p class="tex-md mt-2 font-bold hover:text-blue-600 cursor-pointer">
        Veteran journalist covering Big Tech and society..
      </p>
    </li>
  );
};
