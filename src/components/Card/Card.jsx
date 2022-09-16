import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.scss";
import unavailable from "../../assets/images/preview-unavailable.png";
import Button from "../Button/Button.jsx";

const Card = ({ image, name, ep, summary, airtime }) => {
  return (
    <article className="card">
      <div className="card__top-layer"></div>
      <div className="card__container">
        <img
          src={
            image !== null && Object.keys(image).includes("original")
              ? image.original
              : unavailable
          }
          alt="No preview picture available"
          className="card__img"
        />
      </div>
      <div className="card__title-container">
        <h2 className="card__text">{ep}</h2>
        <h1 className="card__title">{name}</h1>
      </div>
      <p className="card__text"> {`${summary.slice(3, -4)}`}</p>
      <h3 className="card__schedule"> {`Local airtime: ${airtime}`}</h3>
      <div className="card__button-container">
        <NavLink to="">
          <Button label="Read more" />
        </NavLink>
      </div>
    </article>
  );
};

export default Card;
