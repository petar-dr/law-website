import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <div className="footerContacts col-12 col-sm-6 col-lg-3 ">
      
      <h3 className="footerContacts__title">Constacts</h3>
      <span className="footerContacts__text">
        <FiMapPin className="footerContacts__icon" />
        Kralja Petra 28, 11000 Belgrade, Serbia
      </span>
      <a className="footerContacts__text" href="tel:+4733378901">
        <FiPhone className="footerContacts__icon" />
        +47 333 78 901
      </a>
      <a className="footerContacts__text" href="mailto: abc@example.com">
        <FaEnvelope className="footerContacts__icon" /> 
        abc@example.com
      </a>
    </div>
  );
}

export default Contacts;
