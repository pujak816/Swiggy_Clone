import React from "react";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Login from "./components/Login";
import RootLayout from "./layouts/RootLayout";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SearchRes from "./components/SearchRes";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route path="search" element={<SearchRes />} />
      <Route path="restaurant/:resId" element={<RestaurantMenu />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

export default App;
