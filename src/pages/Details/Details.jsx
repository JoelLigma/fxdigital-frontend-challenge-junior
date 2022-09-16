import React from "react";
import { useParams } from "react-router-dom";
import "./Details.scss";
import unavailable from "../../assets/icons/unavailable.svg";
import element from "../../assets/icons/fx-element.svg";
import Button from "../../components/Button/Button";

const Details = ({ data }) => {
  const findSelectedShow = (data) => {
    const selectedShowObj = useParams();
    return data.find((item) => item.id === Number(selectedShowObj.showId));
  };

  const selectedShow = findSelectedShow(data);

  // jump to top of page
  window.scrollTo(0, 0);

  if (selectedShow === undefined) {
    return (
      <h1 className="details__error">
        Sorry, we could not find the selected show.
      </h1>
    );
  }
  return (
    <section className="details">
      <p className="details__header">Web TV Streaming</p>
      <h1 className="details__title">{`Program Details: ${selectedShow._embedded.show.name}`}</h1>{" "}
      <div className="details__wrapper">
        <div className="details__container-left">
          <img className="details__elements" src={element} alt="FX elements" />

          <div
            className={`details__container-img ${
              selectedShow.image === null
                ? "details__container-img--unavailable"
                : ""
            }`}
          >
            <img
              src={
                selectedShow.image !== null &&
                Object.keys(selectedShow.image).includes("original")
                  ? selectedShow.image.original
                  : unavailable
              }
              alt="No preview picture available"
              className={`details__img ${
                selectedShow.image === null ? "details__img--unavailable" : ""
              }`}
            />
          </div>
        </div>
        <div className="details__container-right">
          <p className="details__text details__text--large">{`${selectedShow._embedded.show.name}: Season ${selectedShow.season}, ${selectedShow.name}`}</p>
          <p className="details__text">{`${
            selectedShow.summary !== null && selectedShow.summary.length > 0
              ? selectedShow.summary.replaceAll("<p>", "").replaceAll("</p>")
              : "N/A"
          }`}</p>
          <p className="details__text">
            <span className="details__text--bold">{"Avg. rating: "}</span>
            {`${
              selectedShow._embedded.show.rating.average !== null &&
              String(selectedShow._embedded.show.rating.average).length > 0
                ? selectedShow._embedded.show.rating.average
                : "N/A"
            }`}
          </p>
          <p className="details__text">
            <span className="details__text--bold">{"Genre(s): "}</span>
            {`${
              selectedShow._embedded.show.genres !== null &&
              selectedShow._embedded.show.genres.length > 0
                ? selectedShow._embedded.show.genres
                : "N/A"
            }`}
          </p>
          <p className="details__text">
            <span className="details__text--bold">{"Runtime: "}</span>
            {`${
              selectedShow.runtime !== null &&
              String(selectedShow.runtime).length > 0
                ? `${selectedShow.runtime} minutes`
                : "N/A"
            }`}
          </p>
          <p className="details__text">
            <span className="details__text--bold">{"Language: "}</span>
            {`${
              selectedShow._embedded.show.language !== null &&
              selectedShow._embedded.show.language.length > 0
                ? selectedShow._embedded.show.language
                : "N/A"
            }`}
          </p>{" "}
          <p className="details__text">{`Available on ${selectedShow._embedded.show.webChannel.name}`}</p>
          <a
            href={selectedShow._embedded.show.officialSite}
            target="_blank"
            rel="noopener"
            className="details__link"
          >
            <Button label="Watch now" type="watch" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Details;
