import React from "react";
import textStyle from "./text.module.css";

function Text() {
  return (
    <div className={textStyle.container}>
      <input type="text" placeholder="Enter your text" id="textId" />
      <button>GENERATE QR CODE</button>
    </div>
  );
}

export default Text;
