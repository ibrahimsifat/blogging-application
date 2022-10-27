import React from "react";
import { Link } from "react-router-dom";

const SwitchAuthRouteLabel = ({ questionLabel, linkLabel, link = "/" }) => {
  return (
    <p>
      {questionLabel}{" "}
      <Link to={link}>
        {" "}
        <span className="font-bold cursor-pointer hover:text-blue-500">
          {linkLabel}
        </span>
      </Link>
    </p>
  );
};

export default SwitchAuthRouteLabel;
