import React from "react";
import urlStyle from "./url.module.css";

function Url() {
  return (
    <div className={urlStyle.container}>
      <input type="url" placeholder="Enter your url" id="urlId" />
      <button>GENERATE QR CODE</button>
    </div>
  );
}

export default Url;
