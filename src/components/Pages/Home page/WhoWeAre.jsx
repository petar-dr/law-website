import React from "react";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <section className="howWeAre">
      <div className="howWeAre__box">
        <div className="howWeAre__box__question">
          <h3 className="howWeAre__box__question__title">Who are we?</h3>
        </div>
        <div className="howWeAre__box__description">
          <h4 className="howWeAre__box__description__title">
            Welcome to Law firm
          </h4>
          <p className="howWeAre__box__description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            hic molestiae. Voluptas officia perspiciatis et architecto corporis
            nobis autem recusandae consequatur sed asperiores, unde cupiditate
            saepe nostrum facere voluptates dignissimos.
          </p>
          <Link to="/about" className="howWeAre__box__description__link">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
