import React from "react";
import pdfStyle from "./pdf.module.css";
import { FaRegFilePdf } from "react-icons/fa6";

function Pdf() {
  return (
    <div className={pdfStyle.container}>
      <h1>Pdf QrCode:</h1>
      <div className={pdfStyle.pdfContainer}>
        <FaRegFilePdf className={pdfStyle.icon} />
        <p>
          Add pdf file by clicking the file below or drag and drop them here.
        </p>
        <button>Add File</button>
      </div>
    </div>
  );
}

export default Pdf;
