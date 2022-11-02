import React from "react";

const SubmitError = ({ submitError }) => {
  return (
    <ul>
      {submitError.map((error, i) => (
        <li className="text-red-500" key={i}>
          {error}
        </li>
      ))}
    </ul>
  );
};

export default SubmitError;
