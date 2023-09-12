import React, { useEffect, useState } from "react";
import img from "../../../assets/img/Team page/team_06-570x668.jpg";
import ButtonClasic from "../../elements/ButtonClasic";
import { BtnContext } from "../../../context/BtnContext";

function LawyerShort() {
  const [showBtn, setShowBtn] = useState(false);
  return (
    <BtnContext.Provider value={showBtn}>
      <div
        className="lawyer"
        onMouseEnter={() => setShowBtn(true)}
        onMouseLeave={() => setShowBtn(false)}
      >
        <img className="lawyer__img" src={img} alt="" />
        <div className="lawyer__text">
          <h2 className="lawyer__text__name">Boban Luković</h2>
          <h3 className="lawyer__text__position">lawyer</h3>
          <ButtonClasic />
        </div>
      </div>
    </BtnContext.Provider>
  );
}

export default LawyerShort;
