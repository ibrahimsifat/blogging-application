import React from "react";
import { Link } from "react-router-dom";

const FilterSectionHeading = ({ title, link = "/" }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h5 className="text-xl font-bold leading-none text-gray-900 ">{title}</h5>
      <Link
        to={link}
        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        View all
      </Link>
    </div>
  );
};

export default FilterSectionHeading;
