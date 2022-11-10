import React from "react";

const StatusSwitcher = ({ handleStatus, data }) => {
  return (
    <label class="flex items-center relative w-max cursor-pointer select-none">
      <input
        type="checkbox"
        class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none bg-red-500"
        onChange={(e) => handleStatus(e, data?._id)}
        checked={data?.status === "published"}
      />
      <span class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
    </label>
  );
};

export default StatusSwitcher;
