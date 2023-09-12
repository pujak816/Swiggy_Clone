import React, { useEffect } from "react";
import CartItems from "./CartItems";
// import useCart from "../utils/useCart";
import { Link } from "react-router-dom";
import CartLeft from "./CartLeft";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, calculateTotal } from "../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const cart = useSelector((store) => store.cart);
  const itemTotal = cart.cartTotalAmount;

  const platformFee = 2;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-16">
      {cartItems.length === 0 ? (
        <div className="empty-cart pt-36 sm:pt-48 lg:pt-16">
          <div className=" text-center p-2 sm:p-8 w-4/5 sm:w-6/12 m-auto shadow-xl rounded-md">
            <img
              src="	https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="emptyImg"
              className="w-80 m-auto"
            />
            <p className=" font-bold text-xl m-2">Your cart is empty</p>
            <p className="text-sm text-slate-500">
              You can go to home page to view more restaurants
            </p>
            <div className="text-white font-semibold bg-orange-500 w-2/3 m-auto p-1 mt-4">
              <Link to="/">
                <p className="text-xs lg:text-base">SEE RESTAURANTS NEAR YOU</p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between bg-gray-200">
          <CartLeft />
          <div className="w-full sm:w-3/4 lg:w-2/4 lg:m-10 bg-white relative  h-full">
            <h1 className="font-bold p-6 mx-7 text-black text-2xl relative">
              Cart
              <span className="text-gray-500 text-sm pb-2 absolute top-8 left-20">
                {cart.cartTotalQuantity} item
              </span>
            </h1>

            {/* mapping over cartItems */}
            <div className="max-h-[calc(100vh - 270px)] h-52 overflow-y-auto relative">
              {cartItems.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </div>

            <div className="py-2 p-10  ">
              <h1 className="font-semibold text-sm py-3">Bill Details</h1>
              <div className="text-gray-600 text-sm  flex justify-between">
                <span>Item Total</span>
                <span>₹{itemTotal.toFixed(2)}</span>
              </div>
              <div className="text-gray-600 text-sm flex justify-between">
                <span>Platform fee</span>
                <span>₹{platformFee}</span>
              </div>
            </div>

            <div className="py-2 p-10 flex justify-between font-bold text-lg">
              <span>TO PAY</span>
              <span> ₹{itemTotal.toFixed(1) + platformFee} </span>
            </div>

            {/* clear & checkout Cart JSX */}
            <div className="mx-10 my-4 p-4 flex justify-center">
              <button
                className="bg-red-600 text-white font-semibold text-sm p-2 py-1 m-1 rounded-lg"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
              <button className="bg-green-700 text-white font-semibold text-sm p-2 py-1 m-1 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
