import React, { Component } from "react";
import "./App.css";
import DoglistContainer from "./components/DoglistContainer";
import DogimagesContainer from "./components/DogimagesContainer"

// Import BrowserRouter
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/doglist" component={DoglistContainer} />
        <Route exact path="/dogimage" component={DogimagesContainer} />
      </div>
    );
  }
}

export default App;
