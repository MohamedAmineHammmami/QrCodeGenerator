import React, { useState } from "react";
import navbarStyle from "./navbar.module.css";
import { PiArrowBendDoubleUpLeftLight } from "react-icons/pi";
import { PiArrowBendDoubleUpRightLight } from "react-icons/pi";

const types = [
  "URL",
  "TEXT",
  "EMAIL",
  "PHONE",
  "SMS",
  "VCARD",
  "PDF",
  "LOCATION",
  "FACEBOOK",
  "MP3",
  "MP4",
  "TWITTER",
  "YOUTUBE",
  "WIFI",
  "EVENT",
  "BITCON",
];

function Navbar() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [activeLink, setActiveLink] = useState("URL");
  console.log("activeLink", activeLink);

  const handleBackward = () => {
    setMax((c) => (c > 10 ? c - 3 : c));
    setMin((c) => (c > 0 ? c - 3 : c));
  };
  const handleForward = () => {
    setMax((c) => (c < 14 ? c + 3 : c));
    setMin((c) => (c < 6 ? c + 3 : c));
  };

  const handleClick = (e) => {
    setActiveLink(e.target.id);
  };
  return (
    <div className={navbarStyle.container}>
      <PiArrowBendDoubleUpLeftLight
        className={min < 3 ? navbarStyle.disableIcon : navbarStyle.icon}
        onClick={handleBackward}
      />
      <div className={navbarStyle.types}>
        {types
          .map((el, i) => {
            return (
              <span
                id={el}
                className={
                  activeLink === el
                    ? navbarStyle.activeLink
                    : navbarStyle.passiveLink
                }
                onClick={(e) => handleClick(e)}
                key={i}
              >
                {el}
              </span>
            );
          })
          .filter((_, i) => i < max && i >= min)}
      </div>
      <PiArrowBendDoubleUpRightLight
        className={max > 13 ? navbarStyle.disableIcon : navbarStyle.icon}
        onClick={handleForward}
      />
    </div>
  );
}

export default Navbar;
