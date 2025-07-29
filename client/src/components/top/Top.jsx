import React, { useState } from "react";
import topStyle from "../top/top.module.css";
import Link from "./Link";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const types = [
  "URL",
  "TEXT",
  "EMAIL",
  "PHONE",
  "SMS",
  "VCARD",
  "LOCATION",
  "MP3",
  "MP4",
  "PDF",
  "IMG",
  "FACEBOOK",
  "YOUTUBE",
  "WIFI",
  "EVENT",
];

function Top() {
  const [activeState, setAcitiveState] = useState("URL");
  const [animation, setAnimation] = useState(null);
  const [max, setMax] = useState(9);
  const [min, setMin] = useState(0);

  const handleLinkClick = (e) => {
    setAcitiveState(e.target.name);
  };

  const handleBackward = () => {
    setAnimation("left");
    setTimeout(() => {
      setMax((c) => (c > 9 ? c - 3 : c));
      setMin((c) => (c > 0 ? c - 3 : c));
      setAnimation(null);
    }, 100);
  };

  const handleForward = () => {
    setAnimation("right");
    setTimeout(() => {
      setAnimation(null);
      setMax((c) => (c < 15 ? c + 3 : c));
      setMin((c) => (c < 6 ? c + 3 : c));
    }, 100);
  };

  return (
    <div className={topStyle.container}>
      <RxDoubleArrowLeft className={topStyle.icon} onClick={handleBackward} />
      <div
        className={
          !animation
            ? topStyle.links
            : animation === "left"
            ? topStyle.leftAnimation
            : topStyle.rightAnimation
        }
      >
        {types
          .map((el, i) => {
            return (
              <Link {...{ handleLinkClick, activeState }} key={i}>
                {el}
              </Link>
            );
          })
          .filter((_, i) => i >= min && i < max)}
      </div>

      <RxDoubleArrowRight className={topStyle.icon} onClick={handleForward} />
    </div>
  );
}

export default Top;
