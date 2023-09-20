import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
    // totalItemsCount: 0,
  },
  reducers: {
    //reducer function
    addItem: (state, action) => {
      const itemIndexCheck = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (itemIndexCheck >= 0) {
        state.items[itemIndexCheck].itemQuantity += 1;
        toast.info(
          `increased ${state.items[itemIndexCheck].card.info.name} quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const item = { ...action.payload, itemQuantity: 1 };
        state.items.push(item);
        state.cartTotalQuantity += 1;

        toast.success(`${action.payload.card.info.name} added to cart`, {
          position: "bottom-left",
        });

        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decreaseItem: (state, action) => {
      const itemIndexCheck = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      const removeItem = state.items.filter(
        (item) => item.card.info.id !== action.payload.card.info.id
      );
      if (state.items[itemIndexCheck].itemQuantity > 1) {
        state.items[itemIndexCheck].itemQuantity -= 1;
        toast.info(
          `decreased ${state.items[itemIndexCheck].card.info.name} quantity`,
          {
            position: "bottom-left",
          }
        );
      } else if ((state.items[itemIndexCheck].itemQuantity = 1)) {
        state.items = removeItem;
        toast.info(
          `removed ${state.items[itemIndexCheck].card.info.name} from cart`,
          {
            position: "bottom-left",
          }
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      // state.items = [];
      state.items.length = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    calculateTotal: (state) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, item) => {
          const { price, defaultPrice } = item.card.info;
          const itemPrice = price ? price / 100 : defaultPrice / 100;
          const { itemQuantity } = item;

          const subTotal = itemPrice.toFixed(1) * itemQuantity;
          cartTotal.total += subTotal;
          cartTotal.quantity += itemQuantity;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addItem, decreaseItem, clearCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
