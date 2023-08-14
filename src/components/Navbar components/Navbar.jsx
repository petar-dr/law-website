import React, { useEffect, useState } from "react";
import TopNavbar from "./TopNav/TopNavbar";
import MainNavbar from "./MainNav/MainNavbar";
function Navbar() {
  const [navColor, setNavColor] = useState(false);
  const [navSize, setNavSize] = useState(false);

  function changeNavBackground() {
    if (window.scrollY >= 67) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }
  function navbarSize() {
    if (window.innerWidth >= 992) {
      setNavSize(true);
    } else {
      setNavSize(false);
    }
  }
  useEffect(() => {
    navbarSize();
    window.addEventListener("scroll", changeNavBackground);
    window.addEventListener("resize", navbarSize);
  }, []);

  return (
    <nav className={navColor ? "navbar navBlack" : "navbar"}>
      {!navSize || <TopNavbar />}
      <MainNavbar navSize={navSize} />
    </nav>
  );
}

export default Navbar;
