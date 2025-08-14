import React from "react";
import leftStyle from "./left.module.css";
import Url from "../contents/url/Url";
import Text from "../contents/text/Text";
import Email from "../contents/email/Email";
import Sms from "../contents/sms/Sms";
import Phone from "../contents/phone/Phone";
import Vcard from "../contents/vcard/Vcard";
import Pdf from "../contents/pdf/Pdf";
import Location from "../contents/location/Location";
import Facebook from "../contents/facebook/Facebook";
import Mp3 from "../contents/mp3/Mp3";
import Mp4 from "../contents/mp4/Mp4";

function Left() {
  return (
    <div className={leftStyle.container}>
      <Mp4 />
    </div>
  );
}

export default Left;
