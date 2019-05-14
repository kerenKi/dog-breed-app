// React: imports
import React, { Component } from "react";
import "./App.css";

// Component: imports
import DoglistContainer from "./components/practice/DoglistContainer";
import DogimagesContainer from "./components/practice/DogimagesContainer"
import QuestionContainer from "./components/game-one/QuestionContainer"

// BrowserRouter: import
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        
        <Route exact path="/list" component={DoglistContainer} />
        <Route exact path="/images" component={DogimagesContainer} />
        <Route exact path="/random-question" component={QuestionContainer} />

      </div>
    );
  }
}

export default App;
