import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

const useCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // const { price, defaultPrice } = cartItems?.card?.info;
  // const price = cartItems.map((item) => item?.card?.info?.price);
  // const defaultPrice = cartItems.map((item) => item?.card?.info?.defaultPrice);
  // console.log(price);

  const itemQuantity = cartItems.map((item) => item?.itemQuantity);
  // console.log(itemQuantity);

  // const itemPrice = price ? price / 100 : defaultPrice / 100;
  // const itemPrice = price / 100;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateSubtotal = () => {
    // return cartItems?.card?.info?.price * cartItems.itemQuantity;
    // return itemPrice.toFixed(2) * cartItems.itemQuantity;
    console.log(itemPrice * itemQuantity);
  };

  const TotalSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item),
      0
    );
  };

  // const calculateTotal = subTotal.reduce((acc, curr) => {
  //   acc = acc + curr;
  //   return acc;
  // }, 0);

  return { cartItems, handleClearCart, calculateSubtotal };
};

export default useCart;
