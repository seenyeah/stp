import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";
import "./pages/Presentation.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <HashRouter>
        <HomePage />
      </HashRouter>
  </React.StrictMode>
);
