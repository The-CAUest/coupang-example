import React from "react";
import SearchBar from "../components/SearchBar";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Main = () => (
  <div className="top-bar">
    <img
      className="logo"
      alt="logo"
      src={
        "https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"
      }
    />
    <SearchBar />
    <div className="top-menu my-coupang">
      <UserOutlined />
      <span>마이쿠팡</span>
    </div>
    <div className="top-menu cart">
      <ShoppingCartOutlined />
      <span>마이쿠팡</span>
    </div>
  </div>
);

export default Main;
