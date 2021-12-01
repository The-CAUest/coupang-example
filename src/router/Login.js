import React from "react";
import { useNavigate } from "react-router";
import WraplifyAuthenticator from "../components/auth/WraplifyAuthenticator";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="login"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 50,
      }}
    >
      <div className="login-header" onClick={() => navigate("/")}>
        <img
          alt="login-header-logo"
          className="login-header-logo"
          src="https://static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png"
        />
      </div>
      <WraplifyAuthenticator style={{ width: 500 }} />
    </div>
  );
};

export default Login;
