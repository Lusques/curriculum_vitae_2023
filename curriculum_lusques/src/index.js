import React from "react";
import ReactDOM from "react-dom/client";
import ReactRoutes from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section className="all-container bg-gray-300">
    <ReactRoutes />
  </section>,
);
