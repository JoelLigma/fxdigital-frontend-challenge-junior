import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logos/OnTV.png";
import "./Header.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const Header = ({ setDate, date }) => {
  const [scrolled, setScrolled] = useState(true);
  const [openCalender, setOpenCalender] = useState(false);

  const location = useLocation();

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
          alt="OnTV logo"
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
          {!location.pathname.includes("show-details") && (
            <li
              className={`navbar__list-item ${
                scrolled ? "" : "navbar__link--red"
              }`}
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
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
