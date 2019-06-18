// Styles
import "../../index.css";

import React, { Component } from "react";

import SearchContainer from "../SearchContainer";
import Header from "../../components/Header";
// import About from "../../components/About";

import { Link } from "react-router-dom";

class BaseContainers extends Component {
  render() {
    return (
      // IndexLink avoids CSS Style inheritance
      <main className="container">
        <Header />
        <nav className="Navigation">
          <Link to="/" className="Link" activeClassName="Link--active">
            Home
          </Link>
          <Link to="/about" className="Link" activeClassName="Link--active">
            Go to About
          </Link>
        </nav>
        <SearchContainer />
      </main>
    );
  }
}

export default BaseContainers;
