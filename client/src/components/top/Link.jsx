import React from "react";
import topStyle from "./top.module.css";

function Link({ handleLinkClick, activeState, children }) {
  return (
    <a
      onClick={(e) => handleLinkClick(e)}
      name={`${children}`}
      className={
        activeState === children ? topStyle.activeStyle : topStyle.passiveStyle
      }
    >
      {children}
    </a>
  );
}

export default Link;
