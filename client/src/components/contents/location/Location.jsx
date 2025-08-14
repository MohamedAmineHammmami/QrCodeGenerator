import React from "react";
import locationStyle from "./location.module.css";

function Location() {
  return (
    <div className={locationStyle.container}>
      <h1>Location QrCode:</h1>
      <div className={locationStyle.map}>map</div>
      <button>GENEATE QRCODE</button>
    </div>
  );
}

export default Location;
