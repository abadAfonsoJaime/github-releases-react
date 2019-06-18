// Styles
import "./App.css";
import "./index.css";

//Libraries
import React, { Component } from "react";
import logo from "./logo.svg";

// Components
import { HashRouter, Route } from "react-router-dom";
import BaseContainer from "./containers/BaseContainer";
import About from "./components/About";

ReactDOM.render(
  <HashRouter basename="/">
    <Route exact path="/" component={BaseContainer} />
    <Route path=":user/:repo" component={DetailsContainer} />
    <Route path="about" component={About} />
  </HashRouter>,
  document.getElementById("root")
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
