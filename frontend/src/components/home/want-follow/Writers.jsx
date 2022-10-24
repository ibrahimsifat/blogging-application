import React from "react";

const Writers = () => {
  return (
    <div class="p-4 w-full max-w-md bg-white rounded-lg sm:p-8 ">
      <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 ">
          Who to follow
        </h5>
        <a
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 ">
          <User />
          <User />
          <User />
          <User />
          <User />
        </ul>
      </div>
    </div>
  );
};

const User = () => {
  return (
    <li class="py-3 sm:py-4">
      <div class="flex items-center space-x-4 group cursor-pointer">
        <div class="flex-shrink-0">
          <img
            class="w-8 h-8 rounded-full"
            src="https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            alt="Bo"
          />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 ">
            Bonnie Green
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            Veteran journalist covering Big Tech and society. Subscribe to
          </p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 border rounded-full px-3 py-1 hover:bg-gray-100">
          <button>Follow</button>
        </div>
      </div>
    </li>
  );
};
export default Writers;
