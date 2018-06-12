import React, { Component } from "react";

import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Beers from "./Beers";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Home />
        <Beers />
      </React.Fragment>
    );
  }
}

export default App;
