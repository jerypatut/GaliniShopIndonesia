import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Pastikan ini ada untuk mengimpor Tailwind CSS
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Pastikan ini ada */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
