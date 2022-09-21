import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
import "./styles/partials/globals/_resets.scss";
import { API_ENDPOINT } from "./api/api";
import { convertDate } from "./utils/utils";
import axios from "axios";

/**
 * The starting page for your App
 */

const App = () => {
  // hard-coded date for demo purposes to display ~10 items
  const [date, setDate] = useState("2022-09-05");
  // for non-demo purposes, the default date is today's date
  // const [date, setDate] = useState(new Date());

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}/schedule/web?date=${date}&country=GB`
      );
      setData(res.data);
    } catch (error) {
      console.error("GET web tv data error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [date]);

  return (
    <>
      <BrowserRouter>
        <Header setDate={setDate} date={date} />
        <main>
          <section className="app">
            <Routes>
              <Route
                path="/show-details/:showId"
                element={<Details data={data} date={convertDate(date)} />}
              />
              <Route
                exact
                path="/"
                element={<Home data={data} date={convertDate(date)} />}
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
