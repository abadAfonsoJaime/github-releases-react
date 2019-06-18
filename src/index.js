// Styles
import "./index.css";

// Importamos las distintas librerias
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

// Importamos los componentes
import BaseContainer from "./containers/BaseContainer";
import About from "./components/About";
// import Header from "./components/Header";
// import SearchContainer from "./containers/SearchContainer";
import DetailsContainer from "./containers/DetailsContainer";

ReactDOM.render(
  <HashRouter basename="/">
    <Route exact path="/" component={BaseContainer} />
    <Route path="/:user/:repo" component={DetailsContainer} />
    <Route path="/about" component={About} />
  </HashRouter>,
  document.getElementById("root")
);
