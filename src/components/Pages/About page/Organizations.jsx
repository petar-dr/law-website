import React from "react";
import img1 from "../../../assets/img/About page/associations/logo-tamni-1.png";

function Organizations() {
  return (
    <div className="org">
      <div className="org__header">
        <h3 className="org__header__title">Members of</h3>
      </div>
      <div className="org__content">
        <img src={img1} alt="" />
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Organizations;
