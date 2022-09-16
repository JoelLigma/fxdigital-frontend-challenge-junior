import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.scss";
import unavailableTwo from "../../assets/icons/unavailable.svg";
import Button from "../Button/Button.jsx";

const Card = ({ image, name, ep, summary, airtime, id }) => {
  return (
    <article className="card">
      <div
        className={`card__container ${
          image === null ? "card__container--unavailable" : ""
        }`}
      >
        <img
          src={
            image !== null && Object.keys(image).includes("original")
              ? image.original
              : unavailableTwo
          }
          alt="No preview picture available"
          className={`card__img ${
            image === null ? "card__img--unavailable" : ""
          }`}
        />
      </div>
      <div className="card__title-container">
        <h2 className="card__text">{ep}</h2>
        <h1 className="card__title">{name}</h1>
      </div>
      <p className="card__text"> {`${summary.slice(3, -4)}`}</p>
      <h3 className="card__schedule"> {`Local airtime: ${airtime}`}</h3>
      <div className="card__button-container">
        <NavLink to={`/show-details/${id}`} className="card__link">
          <Button label="Read more" />
        </NavLink>
      </div>
    </article>
  );
};

export default Card;
