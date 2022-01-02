import React from "react";

function Guest({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800 bg-gray-100">
      <div className="w-1/3">
        <div className="p-6 bg-white shadow rounded-2xl">{children}</div>
      </div>
    </div>
  );
}

export default Guest;
