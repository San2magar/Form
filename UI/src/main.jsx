import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import ProductDetail from "./Pages/ProductDetail";
import EditProduct from "./Pages/EditProduct";
import Dashboard from "./Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/edit-product",
    element: <EditProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
