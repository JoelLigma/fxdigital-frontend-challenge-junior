import React from "react";
import "./Footer.scss";
import logo from "../../assets/logos/OnTV.png";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-top">
          <img src={logo} alt="OnTV Logo" className="footer__logo" />
          <span className="footer__line"></span>
          <p className="footer__text">The Connected TV App Experts</p>
        </div>
        <div className="footer__container-bottom">
          <p className="footer__contact">
            Tel: <a href="tel:012-3456-7890">012 3456 7890</a>
          </p>
          <a target="_blank" className="footer__link" rel="noopener">
            <Button label="Contact us now" type="contact" />
          </a>
        </div>
      </div>
      <p className="footer__rights">
        Privacy Policy. © OnTV. All Rights Reserved. Company no. 01234567
      </p>
    </footer>
  );
};

export default Footer;
