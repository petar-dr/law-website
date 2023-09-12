import React from "react";
import IntroSection from "../components/Sections/IntroSection";
import LawyerShort from "../components/Pages components/Team page/LawyerShort";

function TeamPage() {
  const pageTitle = "Our team";
  return (
    <div className="teamPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../assets/img/Sections/IntroImg/Team/team1300x867.jpg")}
      />
      <div className="teamPage__main">
        <LawyerShort />
        <LawyerShort />
      </div>
    </div>
  );
}

export default TeamPage;
