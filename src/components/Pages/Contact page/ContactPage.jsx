import React from "react";
import IntroSection from "../../Sections/IntroSection";
import TextBoxContact from "./TextBoxContact";
import ContactsLarge from "./ContactsLarge";

function ContactPage() {
  const pageTitle = "Contact us";

  return (
    <div className="contactPage">
      <IntroSection
        pageTitle={pageTitle}
        imgSource={require("../../../assets/img/Sections/IntroImg/Contact/contact1300x876.jpg")}
      />
      <div className="contactPage__main">
        <TextBoxContact />
        <ContactsLarge />
      </div>
    
    </div>
  );
}

export default ContactPage;
