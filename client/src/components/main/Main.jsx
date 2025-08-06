import React from "react";
import Left from "../left/Left";
import Right from "../right/Right";
import mainStyle from "../main/main.module.css";
import Middle from "../middle/Middle";

function Main() {
  return (
    <div className={mainStyle.container}>
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default Main;
