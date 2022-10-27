import React from "react";

const UserCaption = () => {
  return (
    <div className="mt-4 space-y-4 text-gray-600 text-center sm:-mb-8">
      <p className="text-xs">
        By proceeding, you agree to our{" "}
        <a href="#" className="underline">
          Terms of Use
        </a>{" "}
        and confirm you have read our{" "}
        <a href="#" className="underline">
          Privacy and Cookie Statement
        </a>
        .
      </p>
    </div>
  );
};

export default UserCaption;
