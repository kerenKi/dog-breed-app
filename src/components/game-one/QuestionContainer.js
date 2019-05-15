// React: imports
import React, { Component } from "react";
import Answer from "./Answer";

// Redux: connect and actions
import { connect } from "react-redux";
import { setDogBreeds } from "../../actions/SetDogbreeds";
import { GetQuestion, SetQuestion } from "../../actions/GetQuestion";
import { GetWinner } from "../../actions/GetWinner";

class QuestionContainer extends Component {
  // Dispatch question and random pic
  componentDidMount() {
    this.props.SetQuestion();
  }

  render() {
    // Capture question and winner
    const question = this.props.question;
    const winner = this.props.winner;

    // Sort question when available (note: array is copied with spread)
    const sortedQuestion =
      question && [...question].sort(() => Math.random() - 0.5);

    return (
      <div>
        <h2>Which breed am I?</h2>
        <img src={winner && winner} alt="Guess me" />
        <ul>
          {sortedQuestion &&
            sortedQuestion.map((answer, index) => {
              // Map shuffled array. and pass 3 answers as props
              return (
                <Answer
                  key={index}
                  breed={answer.breed}
                  winner={answer.isWinner}
                />
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
  { setDogBreeds, GetQuestion, GetWinner, SetQuestion }
)(QuestionContainer);
