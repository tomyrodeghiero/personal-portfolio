import React from "react";
import pricingStyles from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={`${pricingStyles.pricing} container section`}>
      <h2 className="section__title">Pricing Plans</h2>

      <div className={`${pricingStyles.pricing__container} grid`}>
        <div className={pricingStyles.pricing__item}>
          <img
            className={pricingStyles.pricing__img}
            src="/assets/price-1.svg"
            alt=""
          />
          <h3 className={pricingStyles.pricing__plan}>Basic</h3>
          <p className={pricingStyles.pricing__title}>
            A Simple option but powerful to manage your business
          </p>
          <p className={pricingStyles.pricing__support}>Email support</p>
          <h3 className={pricingStyles.price}>
            <em>$</em> 9 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>

        <div className={`${pricingStyles.pricing__item} ${pricingStyles.best}`}>
          <span className={pricingStyles.badge}>Recommended</span>
          <img
            className={pricingStyles.pricing__img}
            src="/assets/price-1.svg"
            alt=""
          />
          <h3 className={pricingStyles.pricing__plan}>Premium</h3>
          <p className={pricingStyles.pricing__title}>
            Unlimited product including app integration and more features
          </p>
          <p className={pricingStyles.pricing__support}>Mon-Fri support</p>
          <h3 className={pricingStyles.price}>
            <em>$</em> 15 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>

        <div className={pricingStyles.pricing__item}>
          <img
            className={pricingStyles.pricing__img}
            src="/assets/price-1.svg"
            alt=""
          />
          <h3 className={pricingStyles.pricing__plan}>Ultimate</h3>
          <p className={pricingStyles.pricing__title}>
            A wise option for large companies and individuals
          </p>
          <p className={pricingStyles.pricing__support}>24/7 support</p>
          <h3 className={pricingStyles.price}>
            <em>$</em> 19 <span>Month</span>
          </h3>
          <a href="" className="btn">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
