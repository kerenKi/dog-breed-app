// React: imports
import React, { Component } from "react";
import Answer from "./Answer";

// Superagent: import
import * as request from "superagent";

// Redux: connect and actions
import { connect } from "react-redux";
import { setDogBreeds } from "../../actions/SetDogbreeds";
import { GetQuestion } from "../../actions/GetQuestion";
import { GetWinner } from "../../actions/GetWinner";

// Function: import
import GenerateQuestion from "../../functions/GenerateQuestion";

class QuestionContainer extends Component {
  
  // Get winning breed function
  getWinningBreed(array) {
    return array.find(breed => {
      return breed.isWinner === true;
    });
  }

  // Fetch API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // Call dogbreeds action creotor
        this.props.setDogBreeds(Object.keys(response.body.message));
      })
      .then(() => {
        // Get dogbreeds from state
        const breeds = this.props.dogbreeds;
        // Get question from function
        this.props.GetQuestion(GenerateQuestion(breeds));
        // Get winning breed from state
        const winningBreed = this.getWinningBreed(this.props.question);
        // Fetch API with winning breed
        return request.get(
          "https://dog.ceo/api/breed/" + winningBreed.breed + "/images/random"
        );
      })
      .then(response => {
        // Call getwinner action creotor
        this.props.GetWinner(response.body.message);
      })
      .catch(console.error);
  }

  render() {
    // Capture question and winner
    const question = this.props.question;
    const winner = this.props.winner;


    console.log("PROPS FROM QUESTION: ", question);
    // Sort question when available (note: array is copied with spread)
    const sortedQuestion =
      question && [...question].sort(() => Math.random() - 0.5);

    return (
      <div>
        <h1>Which breed am I?</h1>
        <img
          src={winner && winner}
          alt="Guess me"
        />
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
  { setDogBreeds, GetQuestion, GetWinner }
)(QuestionContainer);
