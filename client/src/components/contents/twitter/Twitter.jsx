import React, { useState } from "react";
import twitterStyle from "./twitter.module.css";

function Twitter() {
  const [currentType, setCurrentType] = useState("url");
  const [toggle, setToggle] = useState(false);

  const handleActiveType = (e) => {
    setCurrentType(e.target.id);
    setToggle(() => (currentType !== e.target.id ? !toggle : toggle));
  };

  return (
    <div className={twitterStyle.container}>
      <h1>Twitter QrCode:</h1>
      <div className={twitterStyle.radioBtns}>
        <div>
          <input type="radio" id="url" checked={!toggle} />
          <label
            id="url"
            onClick={(e) => handleActiveType(e)}
            htmlFor="url"
            className={
              currentType === "url"
                ? twitterStyle.activeLabel
                : twitterStyle.passiveLabel
            }
          >
            Twitter Url
          </label>
        </div>
        <div>
          <input type="radio" id="contentId" checked={toggle} />
          <label
            id="content"
            onClick={(e) => handleActiveType(e)}
            htmlFor="contentId"
            className={
              currentType === "content"
                ? twitterStyle.activeLabel
                : twitterStyle.passiveLabel
            }
          >
            Twite content
          </label>
        </div>
      </div>
      <form>
        {currentType === "url" ? (
          <div className={twitterStyle.twitterUrl}>
            <input
              type="url"
              placeholder="your twitter url.."
              id="twitterUrlId"
            />
          </div>
        ) : (
          <div className={twitterStyle.twitterContent}>
            <textarea placeholder="write your twite.." id="twiteId" />
          </div>
        )}

        <button>GENERATE QRCODE</button>
      </form>
    </div>
  );
}

export default Twitter;
