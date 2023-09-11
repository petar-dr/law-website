import React from "react";
import img from "../../../assets/img/Team page/team_06-570x668.jpg";

function LawyerShort() {
  return (
    <div className="lawyer">
      <img className="lawyer__img" src={img} alt="" />
      <div className="lawyer__text">
        <h2>Boban Luković</h2>
        <h3>lawyer</h3>
      </div>
    </div>
  );
}

export default LawyerShort;
