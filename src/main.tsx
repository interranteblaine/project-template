import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import { LayoutProvider } from "./common/context/LayoutAPI";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <LayoutProvider>
      <App />
    </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
);
