import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { calculateTotal } from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // big reducer
    cart: cartReducer, // each slice will have its own reducer
    // user: userReducer,
  },
});

// dispatch on application load
appStore.dispatch(calculateTotal());

export default appStore;
