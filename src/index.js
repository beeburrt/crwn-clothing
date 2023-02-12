import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("👑")).render(
  <Provider store={store}>
    <BrowserRouter>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </Provider>
);
