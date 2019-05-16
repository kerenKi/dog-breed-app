// React: imports
import React, { Component } from "react";
import Answer from "./Answer";

// Redux: connect
import { connect } from "react-redux";

// Action: imports
import { setDogBreeds } from "../../actions/SetDogbreeds";
import { GetQuestion, SetQuestion, getWinningBreed } from "../../actions/GetQuestion";
import { GetWinner } from "../../actions/GetWinner";
import { setGameScore } from "../../actions/SetGameScore";

// Style: import
import "../../style/QuestionContainer.css";

class QuestionContainer extends Component {
  // Dispatch question and random pic
  componentDidMount() {
    this.props.SetQuestion();
  }
    
  handleUserChoice = (event) => {
    const winningBreedObject = getWinningBreed(this.props.question)
    
    if (winningBreedObject.breed === event.currentTarget.value){
      alert ('Correct answer!')
      // add dispatch function here to update 'true' to store
      this.props.setGameScore(true);

    } 
    else {
      alert ('Wrong answer')
      // add dispatch function here to update 'false' to store
      this.props.setGameScore(false);
    }
    
  }

  render() {
    // Capture question and winner
    const question = this.props.question;
    const winner = this.props.winner;

    // Shuffle question  (note: spread operator was necessary)
    const shuffledQuestion =
      question && [...question].sort(() => Math.random() - 0.5);

    return (
      <div className="question">
        <h2>Which breed am I?</h2>
        <img src={winner && winner} alt="Guess me" />
        <ul>
          {shuffledQuestion &&
            shuffledQuestion.map((answer, index) => {
              // Map array. pass props
              return (
                <div className="answers_section">
                  <button key={index} onClick={this.handleUserChoice} value={answer.breed}>
                    <Answer
                      key={index}
                      breed={answer.breed}
                      winner={answer.isWinner}
                    />
                  </button>
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}

// Redux: get both part of states
const mapStateToProps = state => {
  return {
    dogbreeds: state.dogbreeds,
    question: state.question,
    winner: state.getwinner
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  { setDogBreeds, GetQuestion, GetWinner, SetQuestion, setGameScore }
)(QuestionContainer);
