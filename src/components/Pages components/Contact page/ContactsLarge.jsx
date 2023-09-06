import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";

function ContactsLarge() {
  return (
    <div className="contactsLarge">
      <div className="contactsLarge__contacts">
        <div className="contactsLarge__contacts__wrapper">
          <h5 className="contactsLarge__contacts__wrapper__title">Address</h5>
          <a
            href="https://www.google.com/maps/place/%D0%9A%D1%80%D0%B0%D1%99%D0%B0+%D0%9F%D0%B5%D1%82%D1%80%D0%B0+68,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4+11000/data=!4m2!3m1!1s0x475a654b1fd76f7f:0xd3e040b6d740f912?sa=X&ved=2ahUKEwiJ28Lc14uBAxX8X_EDHco9AbkQ8gF6BAgQEAA&ved=2ahUKEwiJ28Lc14uBAxX8X_EDHco9AbkQ8gF6BAgSEAI"
            className="contactsLarge__contacts__wrapper__link"
            target="blank"
          >
            <FiMapPin className="contactsLarge__contacts__wrapper__link__icon" />
            Kralja Petra 28, 11000 Belgrade, Serbia
          </a>
        </div>
        <div className="contactsLarge__contacts__wrapper">
          <h5 className="contactsLarge__contacts__wrapper__title">Phone</h5>
          <a
            className="contactsLarge__contacts__wrapper__link "
            href="tel:+4733378901"
          >
            <FiPhone className="contactsLarge__contacts__wrapper__link__icon" />
            +47 333 78 901
          </a>
        </div>
        <div className="contactsLarge__contacts__wrapper">
          <h5 className="contactsLarge__contacts__wrapper__title">E-mail</h5>
          <a
            className="contactsLarge__contacts__wrapper__link"
            href="mailto: abc@example.com"
          >
            <FaEnvelope className="contactsLarge__contacts__wrapper__link__icon" />
            abc@example.com
          </a>
        </div>
      </div>
      <iframe
        className="contactsLarge__map"
        src="https://my.atlist.com/map/9bd7016c-bee5-4709-9391-9350d570106f?share=true"
        // allow="geolocation 'self' https://my.atlist.com"
        // width="100%"
        // height="400px"
        // frameborder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ContactsLarge;
