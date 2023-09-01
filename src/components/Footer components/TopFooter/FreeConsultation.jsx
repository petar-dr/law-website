import React from "react";
import imgBack from "../../../assets/img/Footer/freeConsultation/freeConsultation1300x867.jpg";

function FreeConsultation() {
  return (
    <section className="freeConsultation">
      <img src={imgBack} alt="" className="freeConsultation__img" />
      <div className="freeConsultation__box">
        <h3 className="freeConsultation__box__title">
          Call for free consultation
        </h3>
        <p className="freeConsultation__box__text">
          Working time: Monday to Friday 8am - 4pm
        </p>
      </div>
      <a href="tel:+4733378901" className="freeConsultation__number">
        +47 333 78 901
      </a>
    </section>
  );
}

export default FreeConsultation;
