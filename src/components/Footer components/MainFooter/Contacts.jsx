import React from "react";

function Contacts() {
  return (
    <div className="contacts">
      <h3 className="contacts__title">CONTACTS</h3>
      <span>Kralja Petra 28, 11000 Belgrade, Serbia</span>
      <a className="topNav__contacts__number" href="tel:+4733378901">
        {/* <FaPhoneAlt className="topNav__contacts__phonelIcon" /> */}
        +47 333 78 901
      </a>
      <a className="topNav__contacts__email" href="mailto: abc@example.com">
        {/* <FaEnvelope className="topNav__contacts__emailIcon" /> */}
        abc@example.com
      </a>
    </div>
  );
}

export default Contacts;
