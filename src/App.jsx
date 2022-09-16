import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
// import "./global.css";
import "./styles/partials/globals/_resets.scss";

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </section>
          </main>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
