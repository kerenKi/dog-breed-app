// React: import
import React, { Component } from "react";

// Component: import
import QuestionContainer from "./QuestionContainer";

export default class GameOne extends Component {
  render() {
    return (
      <div>
        <h1>Game 1</h1>
        {<QuestionContainer />}
      </div>
    );
  }
}
