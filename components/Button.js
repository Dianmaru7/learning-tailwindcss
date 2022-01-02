import React from "react";

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className ? className : ""
      } text-white border border-transparent rounded-xl px-6 py-2.5 text-sm font-medium transition duration-300 focus:outline-none `}
    >
      {children}
    </button>
  );
}

export default Button;
