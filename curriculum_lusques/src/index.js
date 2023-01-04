import React from "react";
import ReactDOM from "react-dom/client";
import ReactRoutes from "./Routes";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section className="all-container pt-lg-4 bg-gray-300">
    <ReactRoutes />
  </section>,
);
