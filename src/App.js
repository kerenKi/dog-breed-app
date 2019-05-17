// React: imports
import React, { Component } from "react";
import "./style/App.css";

// Component: imports
import DoglistContainer from "./components/practice/DoglistContainer";
import DogimagesContainer from "./components/practice/DogimagesContainer";
import GameOne from "./components/game-one/GameOne";
import GameTwo from "./components/game-two/GameTwo";
import MainPage from './components/mainPage'

// BrowserRouter: import
import { Route } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/list" component={DoglistContainer} />
        <Route exact path="/dogbreeds/:breed" component={DogimagesContainer} />
        <Route exact path="/game-one" component={GameOne} />
        <Route exact path="/game-two" component={GameTwo} />
        <Route exact path="/" component={MainPage} />

      </div>
    );
  }
}

export default App;
