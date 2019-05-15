// React: imports
import React, { Component } from "react";
import Answer from "./Answer";

// Superagent: import
import * as request from "superagent";

// Redux: connect and actions
import { connect } from "react-redux";
import { setDogBreeds } from "../../actions/SetDogbreeds";
import { GetQuestion } from "../../actions/GetQuestion";

// Function: import
import GenerateQuestion from "../../functions/GenerateQuestion";

class QuestionContainer extends Component {
  /*   // Get the winning breed: logic
  getWinningBreed(array) {
    return array.find(breed => {
      return breed.isWinner === true;
    });
  }

  // Get the winning breed: capture
  winningBreed = this.getWinningBreed(this.generatedQuestion); */

  // Fetch API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // Action creotor call
        this.props.setDogBreeds(Object.keys(response.body.message));
        return request.get("secondurl");
      })
      .then(response => {
        const breeds = this.props.dogbreeds;
        this.props.GetQuestion(GenerateQuestion(breeds));
      })
      .catch(console.error);
  }

  /* componentDidMount() {    
    request
      .get(
        "https://dog.ceo/api/breed/" +
          this.winningBreed.breed +
          "/images/random"
      )
      .then(response => {
        console.log(response.body.message);
      })
      .catch(console.error);
  } */

  render() {
    // Capture question
    const question = this.props.question;
    // Sort question when available (note: array is copied with spread)
    const sortedQuestion =
      question && [...question].sort(() => Math.random() - 0.5);

    return (
      <div>
        <h1>Which breed am I?</h1>
        <img
          src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
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
    question: state.question
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  { setDogBreeds, GetQuestion }
)(QuestionContainer);
