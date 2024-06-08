import React, { useEffect, useState } from "react";
import CommonSection from "../Components/UI/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBinLine } from "@remixicon/react";
import { cartActions } from "../Redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((s) => s.cart.cartItems);
  const totalAmount = useSelector((s) => s.cart.totalAmount);
  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem({id,allItems:true}));
  };
  console.log(cartItems);
  return (
    <div>
      <CommonSection title="Shopping Cart" />
      {cartItems.length ? (
        <div className="cart-main">
          <div style={{ flex: 1 }}>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((i, k) => {
                  return (
                    <tr key={k}>
                      <td>
                        <img src={i.image} alt="img" />
                      </td>
                      <td>{i.productName}</td>
                      <td>₹{i.price}</td>
                      <td>{i.quantity}</td>
                      <td onClick={(e) => deleteItem(i.id)}>
                        <RiDeleteBinLine
                          size={20}
                          style={{ cursor: "pointer" }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="cart-p2">
            <div className="flex" style={{ justifyContent: "space-between" }}>
              <div>Subtotal</div>
              <b style={{ fontSize: "18px" }}>₹{totalAmount}</b>
            </div>
            <div style={{ color: "gray", fontSize: "13px", marginTop: "10px" }}>
              taxes and shipping will be calculated in checkout
            </div>
            <button><Link to="/shop" style={{color:'white'}}>Continue Shopping</Link></button>
            <Link to="/checkout"><button>Checkout</button></Link>
          </div>
        </div>
      ) : (
        <h3 style={{ textAlign: "center", padding: "100px" }}>
          No Items are added to cart
        </h3>
      )}
    </div>
  );
};

export default Cart;
