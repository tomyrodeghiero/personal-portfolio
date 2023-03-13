import React from "react";
import blogStyles from "./blog.module.css";

const Blog = () => {
  return (
    <section className={`${blogStyles.blog} container section`} id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className={`${blogStyles.blog__container} grid`}>
        <div className={blogStyles.blog__card}>
          <div className={blogStyles.blog__thumb}>
            <a href="#">
              <span className={blogStyles.blog__category}>Reviews</span>
            </a>
            <a href="#">
              <img
                src="/assets/blog-1.svg"
                alt=""
                className={blogStyles.blog__img}
              />
            </a>
          </div>

          <div className={blogStyles.blog__details}>
            <h3 className={blogStyles.blog__title}>
              5 Best App Development Tool for Your Projects
            </h3>
            <div className={blogStyles.blog__meta}>
              <span>09 February, 2022</span>
              <span className={blogStyles.blog__dot}>.</span>
              <span>Tomás Rodeghiero</span>
            </div>
          </div>
        </div>

        <div className={blogStyles.blog__card}>
          <div className={blogStyles.blog__thumb}>
            <a href="#">
              <span className={blogStyles.blog__category}>Tutorial</span>
            </a>
            <a href="#">
              <img
                src="/assets/blog-2.svg"
                alt=""
                className={blogStyles.blog__img}
              />
            </a>
          </div>

          <div className={blogStyles.blog__details}>
            <h3 className={blogStyles.blog__title}>
              Common Misconceptions About Payment
            </h3>
            <div className={blogStyles.blog__meta}>
              <span>07 February, 2022</span>
              <span className={blogStyles.blog__dot}>.</span>
              <span>Tomás Rodeghiero</span>
            </div>
          </div>
        </div>

        <div className={blogStyles.blog__card}>
          <div className={blogStyles.blog__thumb}>
            <a href="#">
              <span className={blogStyles.blog__category}>Business</span>
            </a>
            <a href="#">
              <img
                src="/assets/blog-3.svg"
                alt=""
                className={blogStyles.blog__img}
              />
            </a>
          </div>

          <div className={blogStyles.blog__details}>
            <h3 className={blogStyles.blog__title}>
              3 Things to know about startup business
            </h3>
            <div className={blogStyles.blog__meta}>
              <span>05 February, 2022</span>
              <span className={blogStyles.blog__dot}>.</span>
              <span>Tomás Rodeghiero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
