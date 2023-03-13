import React from "react";
import servicesStyles from "./services.module.css";

const data = [
  {
    id: 1,
    image: "/assets/service-1.svg",
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: "/assets/service-2.svg",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: "/assets/service-3.svg",
    title: "Photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
  },
];

const Services = () => {
  return (
    <section
      className={`${servicesStyles.services} container section`}
      id="services"
    >
      <h2 className="section__title">Services</h2>

      <div className={`${servicesStyles.services__container} grid`}>
        {data.map(({ id, image, title, description }: any) => {
          return (
            <div className={servicesStyles.services__card} key={id}>
              <img
                src={image}
                alt=""
                className={servicesStyles.services__img}
              />

              <h3 className={servicesStyles.services__title}>{title}</h3>
              <p className={servicesStyles.services__description}>
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
