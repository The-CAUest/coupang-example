import React from "react";
import SearchBar from "../components/SearchBar";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const TopBar = ({ style }) => (
  <div className="top-bar" style={style}>
    <a className="logo" href="/">
      <img
        className="logo"
        alt="logo"
        src={
          "https://image7.coupangcdn.com/image/coupang/common/logo_coupang_w350.png"
        }
      />
    </a>
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

export default TopBar;