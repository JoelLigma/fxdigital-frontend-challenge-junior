import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/fxdigitallogo.png";
import "./Header.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 20 ? setScrolled(false) : setScrolled(true);
    });
  });

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <nav className="navbar">
        <img
          src={logo}
          alt="logo"
          className={`navbar__img ${scrolled ? "navbar__img--white" : ""}`}
        />
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <NavLink to="/" className="navbar__link">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
