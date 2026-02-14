import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.css";
import App from "./App.jsx";
import UserProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" theme="light" />
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
);
