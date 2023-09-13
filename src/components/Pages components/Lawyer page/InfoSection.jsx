import React from "react";
import EmailCard from "../../elements/EmailCard";
import PhoneCard from "../../elements/PhoneCard";
import LanguageCard from "../../elements/LanguageCard";
import img from "../../../assets/img/Team page/team_06-570x668.jpg";

function InfoSection() {
  return (
    <section className="infoSection">
      <div className="infoSection__imgBox">
        <img className="infoSection__imgBox__img" src={img} alt="" />
      </div>
      <div className="infoSection__textBox">
        <h2 className="infoSection__textBox__name">Slobodan Luković</h2>
        <EmailCard />
        <PhoneCard />
        <LanguageCard />
      </div>
    </section>
  );
}

export default InfoSection;
