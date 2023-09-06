import React from "react";
import IntroSection from "../components/Sections/IntroSection";
import TextBoxContact from "../components/Pages components/Contact page/TextBoxContact";
import ContactsLarge from "../components/Pages components/Contact page/ContactsLarge";

function ContactPage() {
  const pageTitle = "Contact us";

  return (
    <div className="contactPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../assets/img/Sections/IntroImg/Contact/contact1300x876.jpg")}
      />
      <div className="contactPage__main">
        <TextBoxContact />
        <ContactsLarge />
      </div>
    
    </div>
  );
}

export default ContactPage;
