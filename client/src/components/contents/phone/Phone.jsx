import React from "react";
import phoneStyle from "./phone.module.css";

function Phone() {
  return (
    <div className={phoneStyle.container}>
      <input type="phone" placeholder="+ 1 2 3 4 5 6 7 8 9" />
      <button>GENERATE QR CODE</button>
    </div>
  );
}

export default Phone;
