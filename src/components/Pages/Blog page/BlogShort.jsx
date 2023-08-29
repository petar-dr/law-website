import React from "react";
import blogImg from "../../../assets/img/Blog page/blogImg.jpg";

function BlogShort() {
  return (
    <article className="blogShort">
      <div className="blogShort__left ">
        <div className="blogShort__left__box">
          <img src={blogImg} alt="Blog img" className="blogShort__left__box__img" />
        </div>
      </div>
      <div className="blogShort__content ">
        <div className="blogShort__content__header">
          <span className="blogShort__content__header__date ">August 29, 2023</span>
          <span className="blogShort__content__header__writer">written by Boban Lukovic </span>
        </div>
        <h2 className="blogShort__content__title">Lorem ipsum dolor sit amet</h2>
        <p className="blogShort__content__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          repellat porro ut neque voluptate recusandae cumque aspernatur atque
          magni temporibus, sapiente fugit inventore at, harum laboriosam eius
          distinctio eos et.
        </p>
        <a href="#" className="blogShort__content__btn">
          Read more
        </a>
      </div>
    </article>
  );
}

export default BlogShort;
