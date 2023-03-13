import React from "react";
import scrollDownStyles from "./scrollDown.module.css";

const ScrollDown = () => {
  return (
    <div className={scrollDownStyles.scroll__down}>
      <a href="#about" className={scrollDownStyles.mouse__wrapper}>
        <span className={scrollDownStyles.header__scroll_name}>
          Scroll Down
        </span>
        <span className={scrollDownStyles.mouse}>
          <span className={scrollDownStyles.wheel}></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
