import React from "react";
import IntroSection from "../../Sections/IntroSection";

function TeamPage() {
  const pageTitle = "Our team";
  return (
    <div className="teamPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../../../assets/img/Sections/IntroImg/team.jpg")}
      />
    </div>
  );
}

export default TeamPage;