import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import Main from "./router/Main";
import MyCart from "./router/MyCart";
import MyCoupang from "./router/MyCoupang";
import ProductSearchList from "./router/ProductSearchList";
import Product from "./router/Product";
import Login from "./router/Login";
Amplify.configure(config);

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<MyCart />} />
      <Route path="/my-coupang" element={<MyCoupang />} />
      <Route path="/search" element={<ProductSearchList />} />
      <Route path="/products/:productID" element={<Product />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
