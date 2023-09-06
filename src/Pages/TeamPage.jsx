import React from "react";
import IntroSection from "../components/Sections/IntroSection";

function TeamPage() {
  const pageTitle = "Our team";
  return (
    <div className="teamPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../assets/img/Sections/IntroImg/Team/team1300x867.jpg")}
      />
    </div>
  );
}

export default TeamPage;