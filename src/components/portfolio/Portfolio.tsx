import React, { useState } from "react";
import portfolioStyles from "./portfolio.module.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem: string) => {
    const updatedItems = Menu.filter((curElem: any) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className={`${portfolioStyles.work} container section`} id="work">
      <h2 className="section__title">Recent Works</h2>

      <div className={portfolioStyles.work__filters}>
        <span
          className={portfolioStyles.work__item}
          onClick={() => setItems(Menu)}
        >
          Everything
        </span>
        <span
          className={portfolioStyles.work__item}
          onClick={() => filterItem("Creative")}
        >
          Creative
        </span>
        <span
          className={portfolioStyles.work__item}
          onClick={() => filterItem("Art")}
        >
          Art
        </span>
        <span
          className={portfolioStyles.work__item}
          onClick={() => filterItem("Design")}
        >
          Design
        </span>
        <span
          className={portfolioStyles.work__item}
          onClick={() => filterItem("Branding")}
        >
          Branding
        </span>
      </div>

      <div className={`${portfolioStyles.work__container} grid`}>
        {items.map((elem: any) => {
          const { id, image, title, category } = elem;

          return (
            <div className={portfolioStyles.work__card} key={id}>
              <div className={portfolioStyles.work__thumbnail}>
                <img src={image} alt="" className={portfolioStyles.work__img} />
                <div className={portfolioStyles.work__mask}></div>
              </div>

              <span className={portfolioStyles.work__category}>{category}</span>
              <h3 className={portfolioStyles.work__title}>{title}</h3>
              <a href="#" className={portfolioStyles.work__button}>
                <i
                  className={`icon-link ${portfolioStyles.work__button_icon}`}
                ></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
