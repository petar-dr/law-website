import React from "react";
import IntroSection from "../components/Sections/IntroSection";
import InfoSection from "../components/Pages components/Lawyer page/InfoSection";
import BiographySection from "../components/Pages components/Lawyer page/BiographySection";
import EducationSection from "../components/Pages components/Lawyer page/EducationSection";

function LawyerPage() {
  const pageTitle = "Slobodan Luković";
  return (
    <div className="lawyerPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../assets/img/Sections/IntroImg/About/aboutReSize.jpg")}
      />
      <div className="lawyerPage__main">
        <InfoSection />
        <BiographySection />
        <EducationSection />
      </div>
    </div>
  );
}

export default LawyerPage;
