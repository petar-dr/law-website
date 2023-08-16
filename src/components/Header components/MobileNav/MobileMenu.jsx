import React from "react";
import Translation from "../DesktopNav/TopNav/Translation";
import NavMenu from "../DesktopNav/MainNav/NavMenu";
import ContactBtn from "../DesktopNav/MainNav/ContactBtn";

function MobileMenu({ hamClick }) {
  return (
    <div
      className={
        hamClick
          ? "mobileNav__mobileMenu showMenu"
          : "mobileNav__mobileMenu hideMenu"
      }
    >
      <Translation />
      <NavMenu />
      <ContactBtn />
    </div>
  );
}

export default MobileMenu;
