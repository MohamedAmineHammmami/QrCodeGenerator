import React from "react";
import mp3Style from "./mp3.module.css";
import { BsFiletypeMp3 } from "react-icons/bs";

function Mp3() {
  return (
    <div className={mp3Style.container}>
      <h1>Mp3 QrCode:</h1>
      <div className={mp3Style.mp3Container}>
        <BsFiletypeMp3 className={mp3Style.icon} />
        <p>
          Add pdf file by clicking the file below or drag and drop them here.
        </p>
        <button>Add File</button>
      </div>
    </div>
  );
}

export default Mp3;
