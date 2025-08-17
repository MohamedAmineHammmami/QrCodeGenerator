import React, { useState } from "react";
import wifiStyle from "./wifi.module.css";
import { RiQuestionFill } from "react-icons/ri";

function Wifi() {
  const [currentType, setCurrentType] = useState("none");

  const handleRadioBtnsClick = (e) => {
    setCurrentType(e.target.name);
  };
  return (
    <div className={wifiStyle.container}>
      <h1>Wifi QrCode:</h1>
      <form>
        <div className={wifiStyle.networkContainer}>
          <label htmlFor="networkId">Network Name:</label>
          <div className={wifiStyle.network}>
            <input type="text" placeholder="SSID" id="networkId" />
          </div>
          <div className={wifiStyle.hide}>
            <input type="checkbox" />
            <span>Hidden</span>
            <RiQuestionFill className={wifiStyle.icon} />
            <span className={wifiStyle.tooltip}>
              Is this a hidden Wifi network?
            </span>
          </div>
        </div>
        <div className={wifiStyle.passwordContainer}>
          <label htmlFor="passwordId">Password:</label>
          <input type="password" placeholder="change me!" id="passwordId" />
        </div>
        <div className={wifiStyle.encryption}>
          <div>
            <label>Encyption:</label>
          </div>
          <div className={wifiStyle.radioBtns}>
            <div>
              <input
                type="radio"
                id="noneId"
                name="none"
                checked={currentType === "none"}
                onClick={(e) => handleRadioBtnsClick(e)}
              />
              <label
                htmlFor="noneId"
                className={
                  currentType === "none"
                    ? wifiStyle.activeLabel
                    : wifiStyle.passiveLabel
                }
              >
                None
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="wpaId"
                name="wpaId"
                checked={currentType === "wpaId"}
                onClick={(e) => handleRadioBtnsClick(e)}
              />
              <label
                htmlFor="wpaId"
                className={
                  currentType === "wpaId"
                    ? wifiStyle.activeLabel
                    : wifiStyle.passiveLabel
                }
              >
                WPA/WPA2
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="wepId"
                name="wepId"
                checked={currentType === "wepId"}
                onClick={(e) => handleRadioBtnsClick(e)}
              />
              <label
                htmlFor="wepId"
                className={
                  currentType === "wepId"
                    ? wifiStyle.activeLabel
                    : wifiStyle.passiveLabel
                }
              >
                WEP
              </label>
            </div>
          </div>
        </div>
        <button>GENERATE</button>
      </form>
    </div>
  );
}

export default Wifi;
