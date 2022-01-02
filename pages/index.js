import React from "react";
import Button from "../components/Button";
import App from "../layout/App";

function index() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="flex items-center justify-center w-full text-white sm:bg-blue-500 bg-rose-500 aspect-video">
        Tailwindcss
      </div>
      <div className="flex items-center justify-center w-full text-white bg-rose-500 aspect-video">
        Tailwindcss
      </div>
      <div className="flex items-center justify-center w-full text-white bg-rose-500 aspect-video">
        Tailwindcss
      </div>
    </div>
  );
}

export default index;

index.getLayout = (page) => <App children={page} />;
