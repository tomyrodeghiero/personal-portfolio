import React, { useEffect, useState } from "react";
import headerStyles from "./header.module.css";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import TypewriterComponent from "typewriter-effect";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowHeader(!showHeader);
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section
        className={`${headerStyles.header} ${
          showHeader ? headerStyles.show : ""
        }`}
        id="home"
      >
        <div className={headerStyles.header__main__img__container}>
          <img
            src="/assets/avatar-main.png"
            alt="avatar"
            className={headerStyles.header__main__img}
          />
        </div>
        <div className={headerStyles.intro}>
          <h1 className={headerStyles.text}>
            {"I'm "}
            <span
              className={`${headerStyles.underlined} ${headerStyles.underline_clip}`}
            >
              Tomi
            </span>
            {" Rodeghiero"} 👋
          </h1>

          {/* <span className={headerStyles.header__education}>
            I'm a Front-End Developer
          </span> */}

          <span className={headerStyles.header__text}>
            <span className={headerStyles.header__text__primary}>I'm</span>
            <TypewriterComponent
              options={{
                strings: [
                  "a Mobile & Web Developer",
                  "in love with UI | UX design",
                  "learning to teach",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>

          {/* <HeaderSocials /> */}

          <a href="#contact" className="btn">
            Contact Me
          </a>

          <ScrollDown />
        </div>

        <Shapes />
      </section>
    </>
  );
};

export default Header;
