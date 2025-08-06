import React from "react";
import urlStyle from "./url.module.css";
import SubmitBtn from "../submitBtn/SubmitBtn";

function Url() {
  return (
    <div className={urlStyle.container}>
      <input type="url" placeholder="Enter your website" id="urlId" />
      <SubmitBtn />
    </div>
  );
}

export default Url;
