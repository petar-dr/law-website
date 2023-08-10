import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <div className="contacts">
      <h3 className="contacts__title">CONTACTS</h3>
      <span className="contacts__address">
        <FiMapPin className="topNav__contacts__phonelIcon" />
        Kralja Petra 28, 11000 Belgrade, Serbia
      </span>
      <a className="contacts__number" href="tel:+4733378901">
        <FiPhone className="topNav__contacts__emailIcon" />
        +47 333 78 901
      </a>
      <a className="contacts__email" href="mailto: abc@example.com">
        <FaEnvelope className="topNav__contacts__emailIcon" /> 
        abc@example.com
      </a>
    </div>
  );
}

export default Contacts;
