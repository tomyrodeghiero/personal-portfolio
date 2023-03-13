import React from "react";
import aboutStyles from "./about.module.css";

const AboutBox = () => {
  return (
    <div className={`${aboutStyles.about__boxes} grid`}>
      <div className={aboutStyles.about__box}>
        <i className={`${aboutStyles.about__icon} icon-briefcase`} />

        <div>
          <h3 className={aboutStyles.about__title}>1</h3>
          <span className={aboutStyles.about__subtitle}>Project completed</span>
        </div>
      </div>

      <div className={aboutStyles.about__box}>
        <i className={`${aboutStyles.about__icon} icon-cup`} />

        <div>
          <h3 className={aboutStyles.about__title}>0</h3>
          <span className={aboutStyles.about__subtitle}>Cup of coffee</span>
        </div>
      </div>

      <div className={aboutStyles.about__box}>
        <i className={`${aboutStyles.about__icon} icon-people`} />

        <div>
          <h3 className={aboutStyles.about__title}>1</h3>
          <span className={aboutStyles.about__subtitle}>Satisfied clients</span>
        </div>
      </div>

      <div className={aboutStyles.about__box}>
        <i className={`${aboutStyles.about__icon} icon-badge`} />

        <div>
          <h3 className={aboutStyles.about__title}>1</h3>
          <span className={aboutStyles.about__subtitle}>
            Mobile applications
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
