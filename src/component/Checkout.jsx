import React from "react";
import Home from "./Home";
import { Navigate } from "react-router-dom";

function Checkout() {
  const isCheckout = false;
  return isCheckout ? <Home /> : <Navigate to="/login" />;
}

export default Checkout;
