import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
function TextBoxContact() {
  return (
    <div className="textBoxContacts">
      <h3 className="textBoxContacts__title">
        Lorem ipsum dolor sit amet consectetur
      </h3>
      <p className="textBoxContacts__paraf">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius
        minus tenetur aliquam suscipit, adipisci cum praesentium dignissimos
        sapiente! Dicta in doloremque eveniet velit illo officia quis nobis
        nulla minima! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo aut iusto eius error hic? Corrupti iusto repudiandae
        consectetur rerum eos neque numquam aspernatur qui, veniam, eligendi
        illum a officiis atque?
      </p>
      <div className="textBoxContacts__wrapper">
        <div className="textBoxContacts__wrapper__workTime">
          <h4 className="textBoxContacts__wrapper__workTime__title">
            Working hours
          </h4>
          <div className="textBoxContacts__wrapper__workTime__wrapper">
            <span className="textBoxContacts__wrapper__workTime__wrapper__days">
              <BsCalendarEvent className="textBoxContacts__wrapper__workTime__wrapper__icon" />
              Monday to Friday
            </span>
            <span className="textBoxContacts__wrapper__workTime__wrapper__hours">
              <BiTime className="textBoxContacts__wrapper__workTime__wrapper__icon" />
              8am - 4pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBoxContact;
