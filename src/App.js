import React, { lazy, Suspense } from "react";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RootLayout from "./layouts/RootLayout";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

const Grocery = lazy(() => import("./components/Grocery/Grocery"));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="restaurants/:resId" element={<RestaurantMenu />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="/grocery"
        element={
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        }
      />
    </Route>
  )
);

export default App;
