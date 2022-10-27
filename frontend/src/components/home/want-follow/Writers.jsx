import React from "react";
import { FilterSectionContainer } from "../../shared/homeFilterSection/FilterSectionContainer";
import FilterSectionHeading from "../../shared/homeFilterSection/FilterSectionHeading";

const Writers = () => {
  return (
    <FilterSectionContainer>
      <FilterSectionHeading title="Want to Follow" />
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 ">
          <User />
          <User />
          <User />
          <User />
          <User />
        </ul>
      </div>
    </FilterSectionContainer>
  );
};

const User = () => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 group cursor-pointer">
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png"
            alt="Bo"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 ">
            Bonnie Green
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Veteran journalist covering Big Tech and society. Subscribe to
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 border rounded-full px-3 py-1 hover:bg-gray-100">
          <button>Follow</button>
        </div>
      </div>
    </li>
  );
};
export default Writers;
