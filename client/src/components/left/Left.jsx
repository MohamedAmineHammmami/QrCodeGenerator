import React from "react";
import leftStyle from "./left.module.css";
import Url from "../contents/url/Url";
import Text from "../contents/text/Text";
import Email from "../contents/email/Email";
import Sms from "../contents/sms/Sms";
import Phone from "../contents/phone/Phone";
import Vcard from "../contents/vcard/Vcard";
import Pdf from "../contents/pdf/Pdf";

function Left() {
  return (
    <div className={leftStyle.container}>
      <Pdf />
    </div>
  );
}

export default Left;
