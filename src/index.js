import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkLightProvider } from "./context/DarkLightMode";

ReactDOM.render(
  <React.StrictMode>
    <DarkLightProvider>
      <App />
    </DarkLightProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
