import React from "react";
import { Link } from "react-router-dom";

function Checkout({ setCartCount }) {
  setCartCount(0);
  return (
    <div>
      <div style={{ padding: "50px" }}>
        <h2>Thanks for Shopping</h2>
        <h5>Your order will be delivered within 3 working days !</h5>
        <h6><Link to="/products">Shop more ...</Link></h6>
      </div>
    </div>
  );
}

export default Checkout;
