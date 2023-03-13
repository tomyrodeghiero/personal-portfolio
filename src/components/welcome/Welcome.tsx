import React, { useEffect, useState } from "react";
import welcomeStyles from "./welcome.module.css";

export const Welcome = () => {
  const [animation, setAnimation] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(!animation);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 7500);

    return () => clearTimeout(timeout);
  }, []);

  //   <div class= 'container'>
  // <div class="container_content">
  // <div class="container_content_inner">

  // </div>
  // </div>
  // </div>

  // <div class="overlay"></div>

  return (
    <div
      className={`${welcomeStyles.fullContainer} ${
        show ? "" : welcomeStyles.hide
      }`}
    >
      <p
        className={
          animation
            ? welcomeStyles.welcomeTextAnimation
            : welcomeStyles.welcomeText
        }
      >
        {animation
          ? "Hi, nice to meet you!"
          : "Why don't we create something digital? 🙂"}
      </p>
    </div>
  );
};
