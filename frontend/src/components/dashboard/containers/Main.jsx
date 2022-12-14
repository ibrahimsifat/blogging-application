import React from "react";

function Main({ children }) {
  return (
    <main className="h-full no-scrollbar  overflow-y-auto">
      <div className="container max-w-7xl grid px-6 mx-auto">{children}</div>
    </main>
  );
}

export default Main;
