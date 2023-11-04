import React from "react";

const Input = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="mb-3 w-full py-2 px-2 border border-gray-400 shadow-md focus:outline-none rounded-md focus:ring-1 ring-indigo-500"
    />
  );
};

export default Input;
