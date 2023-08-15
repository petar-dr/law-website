import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import DesctopNav from "./DesktopNav/DesctopNav";

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

  return <>{navSize ? <DesctopNav /> : <MobileNav />}</>;
}

export default Navbar;
