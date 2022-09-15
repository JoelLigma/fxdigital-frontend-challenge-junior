import React from "react";
import "./Button.scss";
import arrow from "../../assets/icons/arrow.svg";

const Button = ({ type, label, action }) => {
  return (
    <button className={`button button__${type}`} onClick={action}>
      <span className="button__label">{label}</span>
      <img src={arrow} alt="right arrow" className="button__img" />
    </button>
  );
};

export default Button;
