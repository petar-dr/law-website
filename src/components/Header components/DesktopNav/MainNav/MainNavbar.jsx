import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import ContactBtn from "./ContactBtn";

function MainNavbar() {
  return (
    <div className="mainNav">
      <Logo />
      <NavMenu />
      <ContactBtn />
    </div>
  );
}

export default MainNavbar;
