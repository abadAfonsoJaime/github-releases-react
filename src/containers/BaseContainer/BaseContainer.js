import React, { Component } from "react";

import SearchContainer from "../SearchContainer";

import { Link, IndexLink } from "react-router";

class BaseContainers extends Component {
  render() {
    return (
      // IndexLink avoids CSS Style inheritance
      <main className="container">
        <nav>
          <IndexLink to="/" className="Link" activeClassName="Link--active">
            Home
          </IndexLink>
          <Link to="/about" className="Link" activeClassName="Link--active">
            About
          </Link>
        </nav>
        {this.props.children} || <SearchContainer />;
      </main>
    );
  }
}

export default BaseContainers;
