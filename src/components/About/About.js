import React, { Component } from "react";

import ExternalLink from "../ExternalLink";

class About extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  get openWebinarsLink() {
    return "https://openwebinars.net/cursos/react-js";
  }
  render() {
    return (
      <section className="About">
        <p>
          Esta aplicación es parte del curso de React impartido en{" "}
          <ExternalLink to={this.openWebinarsLink}>OpenWebinars</ExternalLink>;
        </p>
      </section>
    );
  }
}

export default About;
