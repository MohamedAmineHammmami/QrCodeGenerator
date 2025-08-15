import React from "react";
import youtubeStyle from "./youtube.module.css";

function Youtube() {
  return (
    <div className={youtubeStyle.container}>
      <input type="url" placeholder="Enter your youtube url.." />
      <button>GENERATE QR CODE</button>
    </div>
  );
}

export default Youtube;
