import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/improveMeLogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const checkToken = () => {
    const tokenLocal = localStorage.getItem("token");

    tokenLocal ? navigate("/dashboard") : navigate("/login");
  };
  return (
    <nav className="home-navbar">
      <img
        src={logo}
        alt="logo"
        className="nav-logo"
        onClick={() => navigate("/")}
      />
      <button className="btn-login txt-200" onClick={checkToken}>
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
