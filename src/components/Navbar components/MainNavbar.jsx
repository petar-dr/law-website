import { Link } from "react-router-dom";
function MainNavbar({ navSize }) {
  return (
    <nav className="mainNav">
      <Link to="/" className="mainNav__navLogo">
        LOGO
      </Link>
      <ul className={navSize ? "mainNav__navMenu" : "hide"}>
        <li className="mainNav__navMenu__item">
          <Link to="/" className="mainNav__navMenu__item__link">
            Home
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/blog" className="mainNav__navMenu__item__link">
            Blog
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/aboutUs" className="mainNav__navMenu__item__link">
            About us
          </Link>
        </li>
        <li className="mainNav__navMenu__item">
          <Link to="/ourTeam" className="mainNav__navMenu__item__link">
            Our team
          </Link>
        </li>
      </ul>
      <div className={navSize ? "mainNav__rightNav" : "hide"}>
        <Link to="/contacUs" className="mainNav__rightNav__btnContact">
          Contact us
        </Link>
      </div>
      <div className={navSize ? "hide" : "mainNav__hamBtn"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default MainNavbar;
