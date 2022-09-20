import React from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";
import search from "../../assets/icons/search.svg";

export const Home = ({ data, date }) => {
  // jump to top of page
  window.scrollTo(0, 0);

  return (
    <section className="home">
      <div className="home__background"></div>
      <h1 className="home__title">{`Web TV Streaming Program \non ${date}`}</h1>

      {data.length === 0 ? (
        <section className="error">
          <div className="home__not-found">
            <img src={search} alt="magnifying glass" className="home__search" />
            <h2 className="home__error">
              Sorry, we could not find any episodes that air on web/streaming
              channels on the selected date.
            </h2>
          </div>
        </section>
      ) : (
        <div className="home__container">
          {data.map((item) => (
            <Card
              image={
                item.image === null ? item._embedded.show.image : item.image
              }
              name={`${item._embedded.show.name}: Season ${item.season}`}
              ep={item.name}
              summary={item._embedded.show.summary}
              airtime={item.airtime}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
