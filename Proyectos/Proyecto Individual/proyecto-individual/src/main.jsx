import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "react-use-cart";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider id="my-cart">
      <App />
    </CartProvider>
  </React.StrictMode>
);
