// React: import
import React, { Component } from "react";

// Component: import
import QuestionContainer from "./QuestionContainer";

//Link: import
import {Link} from 'react-router-dom'

//action: import
import resetGameScore from '../../actions/ResetGameScore'


export default class GameOne extends Component {

  handleClick = () => {
    this.props.dispatch(resetGameScore)
  }
  render() {
    return (
      <div>
        <h1>Game 1</h1>
        {<QuestionContainer />}
        <Link to='/' onClick={this.handleClick}> Exit Game</Link>
      </div>
    );
  }
}
