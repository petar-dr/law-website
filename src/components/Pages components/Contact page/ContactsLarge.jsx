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
        title="address"
        className="contactsLarge__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.9908780721057!2d20.455011475269643!3d44.82175047607556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a654b1fd76f7f%3A0xd3e040b6d740f912!2z0JrRgNCw0ZnQsCDQn9C10YLRgNCwIDY4LCDQkdC10L7Qs9GA0LDQtCAxMTAwMA!5e0!3m2!1ssr!2srs!4v1695922587043!5m2!1ssr!2srs"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactsLarge;
