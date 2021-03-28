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

  DownCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  ResetCount = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  render() {
    return (
      <Counter
        {...this.state}
        UpCount={this.UpCount}
        DownCount={this.DownCount}
        ResetCount={this.ResetCount}
      />
    );
  }
}

export default App;
