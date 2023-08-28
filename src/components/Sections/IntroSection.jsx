import React from "react";

function IntroSection({ pageTitle, imgSource }) {
  return (
    <section className="introSection">
      <img src={imgSource} alt="Cover" className="introSection__cover" />
      <h2 className="introSection__title">{pageTitle}</h2>
    </section>
  );
}

export default IntroSection;
