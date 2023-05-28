import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Products from '../Products/Products';
import Account from '../Accounts/Account';
import Add_Product from '../Products/Add-Product/Add_Product';

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/add_product" element={<Add_Product/>}></Route>
    </Routes>
  );
};

export default appRoutes;