import React from "react";
import facebookStyle from "./facebook.module.css";

function Facebook() {
  return (
    <div className={facebookStyle.container}>
      <input type="url" placeholder="Enter your facebook" id="facebookId" />
      <button>GENERATE QR CODE</button>
    </div>
  );
}

export default Facebook;
