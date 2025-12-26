import React from "react";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./navbar";
import {  useState } from "react";

const Ecommerce = () => {
  const [cartItems, setCartItems] = useState(["product1", "product2"]);
  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <ShoppingCart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default Ecommerce;
