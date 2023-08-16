import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import DesktopHeader from "./DesktopNav/DesktopHeader";

function Navbar() {
  const [navSize, setNavSize] = useState(false);

  function navbarSize() {
    if (window.innerWidth >= 992) {
      setNavSize(true);
    } else {
      setNavSize(false);
    }
  }
  useEffect(() => {
    navbarSize();
    window.addEventListener("resize", navbarSize);
  }, []);

  return <>{navSize ? <DesktopHeader /> : <MobileNav />}</>;
}

export default Navbar;
