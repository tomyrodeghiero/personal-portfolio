import React from "react";
import resumeStyles from "./resume.module.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className={`${resumeStyles.resume} container section`} id="resume">
      <h2 className="section__title">Experience</h2>

      <div className={`${resumeStyles.resume__container} grid`}>
        <div className={`${resumeStyles.timeline} grid`}>
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>

        <div className={`${resumeStyles.timeline} grid`}>
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
