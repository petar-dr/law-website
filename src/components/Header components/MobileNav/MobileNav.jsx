import React, { useState } from "react";
import HamBtn from "./HamBtn";
import Logo from "../DesktopNav/MainNav/Logo";
import MobileMenu from "./MobileMenu";

function MobileNav() {
  const [hamClick, setHamClick] = useState(false);
  console.log(hamClick);

  return (
    <nav className="mobileNav">
      <Logo />
      <HamBtn setHamClick={setHamClick} />
      <MobileMenu hamClick={hamClick} />
    </nav>
  );
}

export default MobileNav;
