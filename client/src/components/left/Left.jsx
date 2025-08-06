import React from "react";
import leftStyle from "../left/left.module.css";
import Url from "../left/contents/url/Url";
import Vcard from "../left/contents/vcard/Vcard";

function Left() {
  return (
    <div className={leftStyle.container}>
      <Vcard />
    </div>
  );
}

export default Left;
