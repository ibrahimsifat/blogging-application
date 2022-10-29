import React from "react";
import LoadingIcon from "../../assets/loading.gif";
function ThemedSuspense() {
  return (
    <div className=" w-full h-screen p-6 text-lg font-medium flex justify-center items-center">
      <img src={LoadingIcon} alt="Loading...." />
    </div>
  );
}

export default ThemedSuspense;
