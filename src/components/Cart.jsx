import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItems from "./FoodItems";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-xxl p-6">
        Cart Items - {cartItems.length}
      </h1>
      <button
        className="bg-green-800 text-white font-bold text-xxl p-2 m-1"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      {/* <div>
        {cartItems.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </div> */}
    </div>
  );
}
