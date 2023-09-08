import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

function Contacts() {
  return (
    <div className="footerContacts col-12 col-sm-6 col-lg-3 ">
      <h3 className="footerContacts__title">Contacts</h3>
      <a
        href="https://www.google.com/maps/place/%D0%9A%D1%80%D0%B0%D1%99%D0%B0+%D0%9F%D0%B5%D1%82%D1%80%D0%B0+68,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4+11000/data=!4m2!3m1!1s0x475a654b1fd76f7f:0xd3e040b6d740f912?sa=X&ved=2ahUKEwiJ28Lc14uBAxX8X_EDHco9AbkQ8gF6BAgQEAA&ved=2ahUKEwiJ28Lc14uBAxX8X_EDHco9AbkQ8gF6BAgSEAI"
        className="footerContacts__text"
        target="_blank"
      >
        <FiMapPin className="footerContacts__icon" />
        Kralja Petra 28, 11000 Belgrade
        <br /> Serbia
      </a>
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
