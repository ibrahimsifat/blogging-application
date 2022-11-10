import { Button } from "@windmill/react-ui";
import React from "react";
import loaderImage from "../../../../assets/loading.svg";
const ProcessBtn = ({ label = "Press Me" }) => {
  return (
    <Button disabled block>
      <img src={loaderImage} className="h-6 w-28" alt="loading..." />
      {/* <span className="font-medium subpixel-antialiased">{label}...</span> */}
    </Button>
  );
};

export default ProcessBtn;
