import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import Main from "./pages/Main";
Amplify.configure(config);

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default Root;
