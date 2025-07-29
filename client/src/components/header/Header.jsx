import React from "react";
import headerStyle from "../header/header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className={headerStyle.container}>
      <img src={logo} alt="logo" />
      <div className={headerStyle.slogan}>
        <span>QR Code Generator</span>
        <h1>CREATE YOUR CODE FOR FREE</h1>
      </div>
    </div>
  );
}

export default Header;
