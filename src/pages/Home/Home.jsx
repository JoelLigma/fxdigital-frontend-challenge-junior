import React from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";
// import dummyData from "../../dummyData.json"; // To be replaced with your api response data

export const Home = ({ data, date }) => {
  return (
    <div className="home">
      <div className="home__background"></div>
      <h1 className="home__title">{`Web TV Streaming Program \non ${date}`}</h1>
      <h2 className="home__title">{``}</h2>
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
    </div>
  );
};

export default Home;
