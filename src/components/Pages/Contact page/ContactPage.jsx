import React from "react";
import IntroSection from "../../Sections/IntroSection";

function ContactPage() {
  const pageTitle = "Contact us";

  return (
    <div className="contactPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../../../assets/img/Sections/IntroImg/contact.jpg")}
      />
    </div>
  );
}

export default ContactPage;
