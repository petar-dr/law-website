import React from "react";
import { Link } from "react-router-dom";

function ContactBtn() {
  return (
    <div className="mainNav__rightNav">
      <Link to="/contact" className="mainNav__rightNav__btnContact">
        Contact us
      </Link>
    </div>
  );
}

export default ContactBtn;
