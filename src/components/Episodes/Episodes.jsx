import React from "react";
import { NavLink } from "react-router-dom";
import "./Episodes.scss";
import WithScrollbar from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Episodes = ({ episodeData }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1280, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="episodes">
      <h3 className="episodes__header">More Episodes</h3>
      <WithScrollbar responsive={responsive}>
        {episodeData.map((ep) => (
          <NavLink to="/" key={ep.id}>
            <img src={ep.image.original} className="episodes__img" />
            <h4 className="episodes__title">{ep.name}</h4>
          </NavLink>
        ))}
      </WithScrollbar>
    </section>
  );
};

export default Episodes;
