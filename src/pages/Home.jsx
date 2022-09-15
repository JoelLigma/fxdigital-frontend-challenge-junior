import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import dummyData from "../dummyData.json"; // To be replaced with your api response data
import { API_ENDPOINT } from "../api/api";

export const Home = () => {
  const [data, setData] = useState([]);

  const handleError = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };

  const getData = () => {
    fetch(`${API_ENDPOINT}/web?date=2022-09-05&country=GB`, {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Space X Ships</h1>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      >
        {/* <Card
          image={data.image}
          name={data.name}
          home_port={data.season}
          roles={data.roles}
        /> */}
      </div>
    </>
  );
};

export default Home;
