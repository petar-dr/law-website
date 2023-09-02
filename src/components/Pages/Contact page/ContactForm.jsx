import React from "react";

function ContactForm() {
  return (
    <div>
      <form >
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Email address" />
        <input type="number" placeholder="Phone number" />
        <textarea placeholder="How we can help you"></textarea>
        <button type="submit">CONTACT US NOW</button>
      </form>
    </div>
  );
}

export default ContactForm;
