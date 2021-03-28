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

  UpCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <Counter {...this.state} UpCount={this.UpCount} />;
  }
}

export default App;
