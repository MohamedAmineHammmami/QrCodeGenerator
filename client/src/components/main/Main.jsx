import React from "react";
import Left from "../left/Left";
import Right from "../right/Right";
import mainStyle from "../main/main.module.css";

function Main() {
  return (
    <div className={mainStyle.container}>
      <Left />
      <Right />
    </div>
  );
}

export default Main;
