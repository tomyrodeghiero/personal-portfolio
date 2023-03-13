import React from "react";
import headerSocialsStyles from "./headerSocials.module.css";

const HeaderSocials = () => {
  return (
    <div className={headerSocialsStyles.header__socials}>
      <a
        href=""
        className={headerSocialsStyles.header__social_link}
        target="_blank"
      >
        <img
          src="./assets/icons/instagram.png"
          alt=""
          className={headerSocialsStyles.icon}
        />
      </a>

      <a
        href=""
        className={headerSocialsStyles.header__social_link}
        target="_blank"
      >
        <img
          src="./assets/icons/twitter.png"
          alt=""
          className={headerSocialsStyles.icon}
        />
      </a>

      <a
        href=""
        className={headerSocialsStyles.header__social_link}
        target="_blank"
      >
        <img
          src="./assets/icons/behance.png"
          alt=""
          className={headerSocialsStyles.icon}
        />
      </a>

      <a
        href=""
        className={headerSocialsStyles.header__social_link}
        target="_blank"
      >
        <img
          src="./assets/icons/dribbble.png"
          alt=""
          className={headerSocialsStyles.icon}
        />
      </a>

      <a
        href=""
        className={headerSocialsStyles.header__social_link}
        target="_blank"
      >
        <img
          src="./assets/icons/pinterest.png"
          alt=""
          className={headerSocialsStyles.icon}
        />
      </a>
    </div>
  );
};

export default HeaderSocials;
