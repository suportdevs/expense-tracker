import React from "react";

const Select = ({ children, className, ...rest }) => {
  return (
    <select
      {...rest}
      className={`mb-3 py-2 w-full px-2 border border-gray-400 shadow-md focus:outline-none rounded-md focus:ring-1 ring-indigo-500 ${className}`}
    >
      {children}
    </select>
  );
};

export default Select;
