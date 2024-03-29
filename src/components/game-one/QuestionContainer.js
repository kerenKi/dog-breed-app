//Game 1

// React: imports
import React, { Component } from "react";
import Answer from "./Answer";
import Message from "./Message";

// Redux: connect
import { connect } from "react-redux";

// Action: imports
import { setDogBreeds } from "../../actions/SetDogbreeds";
import { GetQuestion, SetQuestion } from "../../actions/GetQuestion";
import { setGameScore } from "../../actions/SetGameScore";
import { getQuestionResult } from "../../actions/QuestionResult";
import { getRandomPic } from "../../actions/GetRandomPic";

//Component: import
import Score from "./Score";

// Style: import
import "../../style/QuestionContainer.css";

class QuestionContainer extends Component {
  // Dispatch question and random pics
  componentDidMount() {
    this.props.SetQuestion();
  }

  // Get random pic of winner
  getWinningBreed(array) {
    return array.find(breed => {
      return breed.isWinner === true;
    });
  }

  clickedAnswer = answer => e => {
    e.preventDefault();

    //set the QuestionResult back to null after 1.5 seconds
    setTimeout(() => this.props.getQuestionResult(null), 1500);

    //dispatch new question after 1.5 seconds
    this.props.questionresult === null &&
      setTimeout(() => this.props.SetQuestion(), 1500);

    if (answer[1] === true) {
      // add dispatch function here to update 'true' to store
      this.props.setGameScore(true);
      this.props.getQuestionResult(true);
    } else {
      // add dispatch function here to update 'false' to store
      this.props.setGameScore(false);
      this.props.getQuestionResult(false);
    }
  };

  render() {
    // Capture question with random pics
    const questionwithrandompics = this.props.randompic;

    // Capture winner with random pics
    const winnerwithrandompics =
      questionwithrandompics.length === 3 &&
      this.getWinningBreed(questionwithrandompics);

    // Shuffle questions
    const shuffledQuestion =
      questionwithrandompics.length === 3 &&
      [...questionwithrandompics].sort(() => Math.random() - 0.5);

    return (
      <div className="question">
        {/* let the user know the anser: */}
        {this.props.questionresult !== null && (
          <Message questionresult={this.props.questionresult} />
        )}
         <Score />

        <h2>Which breed am I?</h2>
        <img
          src={winnerwithrandompics.url && winnerwithrandompics.url}
          alt="Guess me"
        />

        <ul>
          {shuffledQuestion &&
            shuffledQuestion.map((answer, index) => {
              // Map array, pass props, capture clicked answer
              return (
                <Answer
                  key={index}
                  breed={answer.breed}
                  url={answer.url}
                  onClick={this.clickedAnswer([answer.breed, answer.isWinner])}
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
    winner: state.getwinner,
    questionresult: state.questionresult,
    randompic: state.randompic
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  {
    setDogBreeds,
    GetQuestion,
    SetQuestion,
    setGameScore,
    getQuestionResult,
    getRandomPic
  }
)(QuestionContainer);