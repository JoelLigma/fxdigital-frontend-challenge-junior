import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
// import "./global.css";
import "./styles/partials/globals/_resets.scss";
import { API_ENDPOINT } from "./api/api";

/**
 * The starting page for your App
 */

const App = () => {
  const [date, setDate] = useState("2022-09-05");
  const [country, setCountry] = useState("GB");
  const [data, setData] = useState([]);

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
    <>
      <BrowserRouter>
        <Header />
        <main>
          <section>
            <Routes>
              <Route
                path="/show-details/:id"
                element={<Details data={data} date={convertDate(date)} />}
              />
              <Route
                exact
                path="/"
                element={<Home data={data} date={date} />}
              />
            </Routes>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
