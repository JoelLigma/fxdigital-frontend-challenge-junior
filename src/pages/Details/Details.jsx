import React, { useEffect, useState } from "react";
import "./Details.scss";
import unavailable from "../../assets/icons/unavailable.svg";
import element from "../../assets/icons/fx-element.svg";
import Button from "../../components/Button/Button";
import { API_ENDPOINT } from "../../api/api";
import {
  findSelectedShow,
  findSelectedEpisode,
  removeHTMLTags,
} from "../../utils/utils";
import Episodes from "../../components/Episodes/Episodes";
import axios from "axios";

const Details = ({ data }) => {
  const [episodeData, setEpisodeData] = useState([]);
  const [selectedEp, setSelectedEp] = useState({});

  const selectedShow = findSelectedShow(data);

  const getEpisodesData = async (selectedShow) => {
    const showId = selectedShow._embedded.show.id;
    try {
      const res = await axios.get(`${API_ENDPOINT}/shows/${showId}/episodes`);
      setEpisodeData(res.data);
      findSelectedEpisode(setSelectedEp, data, selectedShow.id);
    } catch (error) {
      console.error("GET episode data error:", error);
    }
  };

  // jump to top of page
  window.scrollTo(0, 0);

  useEffect(() => {
    getEpisodesData(selectedShow);
  }, []);

  if (selectedShow === undefined) {
    return <h1 className="details__error">Loading...</h1>;
  } else if (Object.keys(selectedEp).length === 0) {
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
              selectedEp.image === null &&
              selectedShow._embedded.show.image === null
                ? "details__container-img--unavailable"
                : ""
            }`}
          >
            <img
              src={
                selectedEp.image !== null
                  ? selectedEp.image.original
                  : selectedShow._embedded.show.image !== null
                  ? selectedShow._embedded.show.image.original
                  : unavailable
              }
              alt="Preview picture"
              className={`details__img ${
                selectedEp.image === null &&
                selectedShow._embedded.show.image === null
                  ? "details__img--unavailable"
                  : ""
              }`}
            />
          </div>
        </div>
        <div className="details__container-right">
          <p className="details__text details__text--large">{`Season ${selectedEp.season}, Episode ${selectedEp.number}: ${selectedEp.name}`}</p>
          <p className="details__text">{`${
            selectedEp.summary !== null && selectedEp.summary.length > 0
              ? removeHTMLTags(selectedEp.summary)
              : "N/A"
          }`}</p>
          <p className="details__text">
            <span className="details__text--bold">{"Avg. rating: "}</span>
            {`${
              selectedShow._embedded.show.rating.average !== null
                ? selectedShow._embedded.show.rating.average
                : "N/A"
            }`}
          </p>
          <p className="details__text">
            <span className="details__text--bold">{"Genre: "}</span>
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
              selectedEp.runtime !== null &&
              String(selectedEp.runtime).length > 0
                ? `${selectedEp.runtime} minutes`
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
      <Episodes
        episodeData={episodeData}
        setSelectedEp={setSelectedEp}
        selectedEp={selectedEp}
        showImage={
          selectedShow._embedded.show.image !== null
            ? selectedShow._embedded.show.image.original
            : null
        }
      />
    </section>
  );
};

export default Details;
