import React, { lazy, Suspense } from "react";
import Body from "./components/Body";
// import Search from "./components/Search";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
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
      {" "}
      <Provider store={appStore}>
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
      <Route path="search" element={<SearchRes />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="restaurant/:resId" element={<RestaurantMenu />} />
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
