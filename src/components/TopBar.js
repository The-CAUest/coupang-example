import React from "react";
import SearchBar from "../components/SearchBar";
import {
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";

const TopBar = ({ style }) => {
  const navigate = useNavigate();

  return (
    <div className="top-bar" style={style}>
      <div className="category-btn">
        <MenuOutlined style={{ color: "#ffffff" }} />
        카테고리
      </div>
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
      <div
        className="top-menu my-coupang"
        onClick={() => navigate("/my-coupang")}
      >
        <UserOutlined />
        <span>마이쿠팡</span>
      </div>
      <div className="top-menu cart" onClick={() => navigate("/cart")}>
        <ShoppingCartOutlined />
        <span>장바구니</span>
      </div>
    </div>
  );
};

export default TopBar;
