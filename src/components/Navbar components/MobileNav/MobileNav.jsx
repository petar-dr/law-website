import React, { useState } from "react";
import HamBtn from "./HamBtn";
import Logo from "../DesktopNav/MainNav/Logo";
import MobileMenu from "./MobileMenu";

function MobileNav() {
  const [hamClick, setHamClick] = useState(false);
  console.log(hamClick);

  return (
    <div className="mobileNav">
      <Logo />
      <HamBtn setHamClick={setHamClick} />
      <MobileMenu hamClick={hamClick} />
    </div>
  );
}

export default MobileNav;
