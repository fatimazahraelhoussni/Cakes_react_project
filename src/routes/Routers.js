import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// No protected
import Home from "../pages/Home";
import PizzaDetails from "../pages/ProductDetails";
import Allfoods from "../pages/Allproducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profil from "../pages/Profil";

// Protected
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Allproducts from "../pages/Allproducts";
import ProductDetails from "../pages/ProductDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/foods' element={<Allproducts />} />
      <Route path='/cart' element={<Cart />} />

      <Route path='checkout' element={<Checkout />} />
      <Route path='/foods/:id' element={<ProductDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Profil' element={<Profil />} />
    </Routes>
  );
};

export default Routers;
