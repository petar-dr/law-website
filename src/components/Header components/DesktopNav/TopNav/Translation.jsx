import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { BiSolidDownArrow } from "react-icons/bi";

function Translation() {
  const [open, setOpen] = useState(false);
  const [dropClasses, setDropClasses] = useState(
    "translation__dropDown hideDropMenu"
  );
  const [btnClasses, setBtnClasses] = useState("translation__btn");
  const [lang, setLang] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) {
      setDropClasses("translation__dropDown showDropMenu");
      setBtnClasses("translation__btn btnHover");
    } else {
      setDropClasses("translation__dropDown hideDropMenu");
      setBtnClasses("translation__btn");
    }
  }, [open]);

  function handleLang() {
    setLang(!lang);
    setOpen(false)

  }
  return (
    <div className="translation">
      <button
        type="button"
        className={btnClasses}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <ReactCountryFlag
          countryCode={lang ? "RS" : "GB"}
          svg
          className="translation__btn__flag"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
        <BiSolidDownArrow className="translation__btn__arrow" />
      </button>
      <div
        className={dropClasses}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div>
          <Link
            to={pathname}
            onClick={handleLang}
            className="translation__dropDown__box"
          >
            <span className="translation__dropDown__box__text">
              {lang ? "EN" : "SR"}
            </span>
            <ReactCountryFlag
              countryCode={lang ? "GB" : "RS"}
              svg
              className="translation__dropDown__box__flag"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Translation;
