import React from "react";

function Index() {
  return (
    <div className="container">
      <h1 className="text-2xl text-center">Hello</h1>
      <button
        type="submit"
        className="px-4 py-2 text-white transition duration-500 bg-purple-500 rounded-md shadow-md focus:ring-2 ring-purple-600 shadow-purple-500 hover:bg-purple-700"
      >
        Click Me
      </button>
      <button className="mx-3 hover:mx-1.5 btn-purple">Button</button>
    </div>
  );
}

export default Index;
