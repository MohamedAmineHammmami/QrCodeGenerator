import React from "react";
import topStyle from "./top.module.css";
import stamp from "../../assets/stamp.png";

function Top() {
  return (
    <div className={topStyle.container}>
      <img src={stamp} alt="stamp" />

      <div className={topStyle.header}>
        <h1>The QR Code Generator – Create free QR Codes instantly</h1>
        <p>
          Quickly generate either a static or a dynamic QR Code tailored for
          your specific use—such as linking to a website, contact details, or a
          digital menu. No fine print, no surprises—just a straightforward tool
          built for professionals who need efficiency.
        </p>
      </div>
    </div>
  );
}

export default Top;
