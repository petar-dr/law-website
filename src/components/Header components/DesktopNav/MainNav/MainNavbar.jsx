import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import ContactBtn from "./ContactBtn";

function MainNavbar() {
  return (
    <nav className="mainNav">
      <Logo />
      <NavMenu />
      <ContactBtn />
    </nav>
  );
}

export default MainNavbar;
