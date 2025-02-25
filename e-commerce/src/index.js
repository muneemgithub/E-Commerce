
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Components/Homepage/Home";
import Layout from "./Components/Layout/Layout";
import AboutUs from "./Components/Homepage/AboutUs"
import Checkout from "./Components/Homepage/Checkout";
import Checkoutpage from "./Components/Homepage/Checkoutpage";
import OrderComplete from "./Components/Homepage/OrderComplete";
import ProductDetails from "./Components/Homepage/ProductDetail";
import ShoppingCart from "./Components/Homepage/ShoppingCart";
import TouchIn from "./Components/Homepage/TouchIn";
import AdminLayout from "./Components/Layout/AdminLayout";
import SignUpForm from "./Components/CreateAccount/SignUp";
import CollectionPage from "./Components/Homepage/Collectionpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/home",
        element: <Home />,
      },
     {
      path: "/aboutus",
      element: <AboutUs/>
     },
     {
      path: "/checkout",
      element: <Checkout/>
     },
     {
      path: "/checkoutpage",
      element: <Checkoutpage/>
     },
     {
      path: "/ordercomplete",
      element: <OrderComplete/>
     },
     {
      path: "/productdetail",
      element: <ProductDetails/>
     },
     {
      path: "/shoppingcart",
      element: <ShoppingCart/>
     },
     {
      path: "/touchin",
      element: <TouchIn/>
     },
     {
      path: "/collectionpage",
      element: <CollectionPage/>
     }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children: [
      {
        path: "signup",
        element: <SignUpForm/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>    
    <RouterProvider router={router} />
  </React.StrictMode>
);
