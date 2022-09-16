import React from "react";
import "./Footer.scss";
import logo from "../../assets/logos/fxdigitallogo.png";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-top">
          <img src={logo} alt="FX Digital Logo" className="footer__logo" />
          <span className="footer__line"></span>
          <p className="footer__text">The Connected TV App Experts</p>
        </div>
        <div className="footer__container-bottom">
          <p className="footer__contact">
            Tel: <a href="tel:020-3773-8253">020 3773 8253</a>
          </p>
          <a
            href="https://fxdigital.uk/contact"
            target="_blank"
            className="footer__link"
            rel="noopener"
          >
            <Button label="Contact us now" type="contact" />
          </a>
        </div>
      </div>
      <p className="footer__rights">
        Privacy Policy. © FX Digital. All Rights Reserved. Company no. 07595370
      </p>
    </footer>
  );
};

export default Footer;
