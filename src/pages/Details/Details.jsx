import React from "react";
import "./Details.scss";
import unavailable from "../../assets/images/preview-unavailable.png";

const Details = ({ data }) => {
  console.log("details data", data);

  const findSelectedShow = (data, id) => {
    return data.find((item) => item.id === id);
  };

  return (
    <section className="details">
      <h1 className="details__title">{`Program Details: ${data._embedded.show.name}`}</h1>
      <img
        src={
          data.image !== null && Object.keys(data.image).includes("original")
            ? data.image.original
            : unavailable
        }
        alt="No preview picture available"
        className="card__img"
      />
    </section>
  );
};

export default Details;
