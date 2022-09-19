import React from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";

export const Home = ({ data, date }) => {
  // jump to top of page
  window.scrollTo(0, 0);

  console.log("Home", data);

  // if (date.length === 0) {
  //   return (

  //   )
  // }
  return (
    <section className="home">
      <div className="home__background"></div>
      <h1 className="home__title">{`Web TV Streaming Program \non ${date}`}</h1>
      <div className="home__container">
        {data.map((item) => (
          <Card
            image={item.image}
            name={`${item._embedded.show.name}: Season ${item.season}`}
            ep={item.name}
            summary={item._embedded.show.summary}
            airtime={item.airtime}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
