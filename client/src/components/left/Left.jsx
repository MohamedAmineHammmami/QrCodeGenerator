import React from "react";
import leftStyle from "./left.module.css";
import Url from "../contents/url/Url";
import Text from "../contents/text/Text";
import Email from "../contents/email/Email";
import Sms from "../contents/sms/Sms";

function Left() {
  return (
    <div className={leftStyle.container}>
      <Email />
    </div>
  );
}

export default Left;
