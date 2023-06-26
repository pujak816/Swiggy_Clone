import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RootLayout from "./layouts/RootLayout";
import RestaurantMenu from "./components/RestaurantMenu";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="restaurants/:resId" element={<RestaurantMenu />} />
    </Route>
  )
);

export default App;
