import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import Main from "./router/Main";
import Cart from "./router/Cart";
import MyCoupang from "./router/MyCoupang";
Amplify.configure(config);

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/my-coupang" element={<MyCoupang />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
