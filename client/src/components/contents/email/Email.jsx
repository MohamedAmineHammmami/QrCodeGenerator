import React from "react";
import emailStyle from "./email.module.css";

function Email() {
  return (
    <div className={emailStyle.container}>
      <h1>Email Qr Code:</h1>
      <form>
        <div className={emailStyle.emailContainer}>
          <label htmlFor="emailId">Email:</label>
          <input type="email" placeholder="example@gmail.com" id="emailId" />
        </div>
        <div className={emailStyle.subjectContainer}>
          <label htmlFor="subjectId">Subject:</label>
          <input type="text" placeholder="enter you subject.." id="subjectId" />
        </div>
        <div className={emailStyle.messageContainer}>
          <label htmlFor="messageId">Message:</label>
          <textarea placeholder="enter your message here .." />
        </div>
        <button>GENERATE QR CODE</button>
      </form>
    </div>
  );
}

export default Email;
