import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Adjusted the import path

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
