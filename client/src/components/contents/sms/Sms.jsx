import React from "react";
import smsStyle from "./sms.module.css";

function Sms() {
  return (
    <div className={smsStyle.container}>
      <h1>Sms Qr Code:</h1>
      <form>
        <div className={smsStyle.numberContainer}>
          <label htmlFor="numberId">Number:</label>
          <input type="number" placeholder="enter you number.." id="numberId" />
        </div>
        <div className={smsStyle.messageContainer}>
          <label htmlFor="messageId">Message:</label>
          <textarea placeholder="enter your message here .." />
        </div>
        <button>GENERATE QR CODE</button>
      </form>
    </div>
  );
}

export default Sms;
