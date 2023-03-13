import React from "react";
import resumeStyles from "./resume.module.css";

const Card = (props: any) => {
  return (
    <div className={resumeStyles.timeline__item}>
      <i className={`${props.icon} ${resumeStyles.icon}`}></i>
      <span className={resumeStyles.timeline__data}>{props.year}</span>
      <h3 className={resumeStyles.timeline__tile}>{props.title}</h3>
      <p className={resumeStyles.timeline__text}>{props.desc}</p>
    </div>
  );
};

export default Card;
