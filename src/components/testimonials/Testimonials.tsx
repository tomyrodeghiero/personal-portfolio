import React from "react";
import testimonialsStyles from "./testimonials.module.css";
// import Swiper ore and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: "/assets/avatar-1.svg",
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: "/assets/avatar-3.svg",
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];

const Testimonials = () => {
  return (
    <section className={`${testimonialsStyles.testimonials} container section`}>
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper
        className={`${testimonialsStyles.testimonials__container} grid`} // install Swiper modules
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide
              className={testimonialsStyles.testimonial__item}
              key={id}
            >
              <div className={testimonialsStyles.thum}>
                <img src={image} alt="" />
              </div>
              <h3 className={testimonialsStyles.testimonials__title}>
                {title}
              </h3>
              <span className={testimonialsStyles.subtitle}>{subtitle}</span>
              <div className={testimonialsStyles.comment}>{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
