import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/fxdigitallogo.png";
import "./Header.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Header = ({ setDate, date }) => {
  const [scrolled, setScrolled] = useState(true);
  const [openCalender, setOpenCalender] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > 20 ? setScrolled(false) : setScrolled(true);
    });
  }, []);

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
            <NavLink
              to="/"
              className={`navbar__link ${scrolled ? "" : "navbar__link--red"}`}
            >
              Home
            </NavLink>
          </li>
          <li
            className="navbar__list-item"
            onClick={() => setOpenCalender(true)}
          >
            Choose a date
            {openCalender && (
              <Calendar
                onChange={(value, _event) => {
                  setDate(new Date(value).toLocaleDateString("en-CA"));
                  setOpenCalender(false);
                }}
                value={new Date(date)}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
