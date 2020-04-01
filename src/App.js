import React, { Component } from "react";
import HomePage from "./components/HomePage/HomePage";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar></NavigationBar>
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;
