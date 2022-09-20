import React from "react";
import "./ErrorMessage.scss";
import search from "../../assets/icons/search.svg";

const ErrorMessage = () => {
  return (
    <section className="error">
      <div className="error__not-found">
        <img src={search} alt="magnifying glass" className="error__search" />
        <h2 className="error__msg">
          Sorry, we could not find any episodes that air on web/streaming
          channels on the selected date.
        </h2>
      </div>
    </section>
  );
};

export default ErrorMessage;
