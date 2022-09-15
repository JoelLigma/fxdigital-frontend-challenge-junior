import React from "react";
import "./Card.scss";
import unavailable from "../../assets/preview-unavailable.png";

const Card = ({ image, name, ep, summary, airtime }) => {
  return (
    <article className="card">
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
      <h2 className="card__text">{ep}</h2>
      <h1 className="card__title">{name}</h1>
      <p className="card__text"> {`${summary.slice(3, -4)}`}</p>
      <p className="card__text"> {`Local airtime: ${airtime}`}</p>
    </article>
  );
};

export default Card;
