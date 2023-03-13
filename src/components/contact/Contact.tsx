import React from "react";
import contactStyles from "./contact.module.css";

const Contact = () => {
  return (
    <section
      className={`${contactStyles.contact} container section`}
      id="contact"
    >
      <h2 className="section__title">Get In Touch</h2>

      <div className={`${contactStyles.contact__container} grid`}>
        <div className={contactStyles.contact__info}>
          <h3 className={contactStyles.contact__title}>
            Let's talk about everything!
          </h3>
          <p className={contactStyles.contact__details}>
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form action="" className={contactStyles.contact__form}>
          <div className={contactStyles.contact__form_group}>
            <div className={contactStyles.contact__form_div}>
              <input
                type="text"
                className={contactStyles.contact__form_input}
                placeholder="Insert your name"
              />
            </div>

            <div className={contactStyles.contact__form_div}>
              <input
                type="email"
                className={contactStyles.contact__form_input}
                placeholder="Insert your email"
              />
            </div>

            <div className={contactStyles.contact__form_div}>
              <input
                type="text"
                className={contactStyles.contact__form_input}
                placeholder="Insert your subject"
              />
            </div>
          </div>

          <div
            className={`${contactStyles.contact__form_div} ${contactStyles.contact__form_area}`}
          >
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className={contactStyles.contact__form_input}
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
