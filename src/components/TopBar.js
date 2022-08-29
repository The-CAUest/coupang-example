import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import {
  UserOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import WraplifyAuth from "../classes/auth/WraplifyAuth";

const TopBar = ({ style }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => WraplifyAuth.currentUser().then((u) => setUser(u)), []);

  return (
    <div className="header">
      <article>
        <div className="header-nav">
          {user ? (
            <>
              <span
                onClick={() => navigate("/my-coupang")}
                style={{ fontWeight: "bold", fontSize: 13 }}
              >
                {user?.attributes?.name}님
              </span>
              <span
                onClick={() => {
                  WraplifyAuth.logout().then(() => navigate("/"));
                }}
              >
                로그아웃
              </span>
            </>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>로그인</span>
              <span onClick={() => navigate("/login")}>회원가입</span>
            </>
          )}
          <span onClick={() => navigate("/login")}>고객센터</span>
        </div>
      </article>
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
    </div>
  );
};

export default TopBar;
