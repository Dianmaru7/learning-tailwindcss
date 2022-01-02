import React from "react";

function App({ children }) {
  return (
    <div className="min-h-screen antialiased tracking-tighter text-gray-800">
      {children}
    </div>
  );
}

export default App;
