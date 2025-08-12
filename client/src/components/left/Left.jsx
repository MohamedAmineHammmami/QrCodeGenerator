import React from "react";
import leftStyle from "./left.module.css";
import Url from "../contents/url/Url";

function Left() {
  return (
    <div className={leftStyle.container}>
      <Url />
    </div>
  );
}

export default Left;
