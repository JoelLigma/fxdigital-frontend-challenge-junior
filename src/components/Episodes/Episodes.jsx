import React from "react";
import "./Episodes.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import unavailable from "../../assets/icons/unavailable.svg";
import { findSelectedEpisode } from "../../utils/utils";

const Episodes = ({ episodeData, setSelectedEp, showImage }) => {
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
      <Carousel responsive={responsive}>
        {episodeData.map((ep) => (
          <article
            key={ep.id}
            onClick={() =>
              findSelectedEpisode(setSelectedEp, episodeData, ep.id)
            }
            className="episodes__article"
          >
            <div
              className={`episodes__container ${
                showImage === null ? "episodes__container--unavailable" : ""
              }`}
            >
              <img
                src={
                  ep.image !== null
                    ? ep.image.original
                    : showImage !== null
                    ? showImage
                    : unavailable
                }
                className={`episodes__img ${
                  showImage === null && ep.image == null
                    ? "episodes__img--unavailable"
                    : ""
                }`}
              />
            </div>
            <h4 className="episodes__title">{ep.name}</h4>
          </article>
        ))}
      </Carousel>
    </section>
  );
};

export default Episodes;
