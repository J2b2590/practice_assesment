import React, { Component } from "react";

import Counter from "./Counter";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return <Counter {...this.state} />;
  }
}

export default App;
