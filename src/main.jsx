import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContactProvider } from "./context/ContactContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactProvider>
  </React.StrictMode>
);
