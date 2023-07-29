import React from "react";

import Products from "./Products";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import "./Layout.css";
import { cartActions } from "../store/cart-slice";

const Layout = () => {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  console.log(itemsList)
  const showCart = useSelector(state => state.cart.showCart)
  const dispatch = useDispatch();
  const resetCart = () =>{
    dispatch(cartActions.reset())
    alert("Order placed successully")
  }
  itemsList.forEach(element => {
    total += element.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems></CartItems>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn" onClick={resetCart}>Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
