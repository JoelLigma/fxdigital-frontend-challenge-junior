import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Home.scss";
// import dummyData from "../../dummyData.json"; // To be replaced with your api response data
import { API_ENDPOINT } from "../../api/api";

export const Home = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("2022-09-05");
  const [country, setCountry] = useState("GB");

  const handleError = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  const getData = () => {
    fetch(`${API_ENDPOINT}/web?date=${date}&country=${country}`, {
      method: "GET",
    })
      .then(handleError)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data); // can be removed later
      })
      .catch((error) => console.error("GET web tv data error:", error));
  };

  const convertDate = (date) => {
    const selectedDate = new Date(date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return selectedDate.toLocaleDateString("en-GB", options);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <div className="home__background"></div>
      <h1 className="home__title">{`Web TV Streaming Program \non ${convertDate(
        date
      )}`}</h1>
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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
