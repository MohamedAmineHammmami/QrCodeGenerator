import React from "react";
import mp4Style from "./mp4.module.css";
import { BsFiletypeMp4 } from "react-icons/bs";

function Mp4() {
  return (
    <div className={mp4Style.container}>
      <h1>Mp4 QrCode:</h1>
      <div className={mp4Style.mp4Container}>
        <BsFiletypeMp4 className={mp4Style.icon} />
        <p>
          Add pdf file by clicking the file below or drag and drop them here.
        </p>
        <button>Add File</button>
      </div>
    </div>
  );
}

export default Mp4;
