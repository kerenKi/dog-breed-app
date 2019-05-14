// React: imports
import React, { Component } from "react";
import Answer from "./Answer";

// Superagent: import
import * as request from "superagent";

export default class QuestionContainer extends Component {
  // Temp data
  generatedQuestion = [
    { breed: "affenpinscher", isWinner: false },
    { breed: "borzoi", isWinner: true },
    { breed: "cattledog", isWinner: false }
  ];

  // Get the winning breed: logic
  getWinningBreed(array) {
    return array.find(breed => {
      return breed.isWinner === true;
    });
  }
  // Get the winning breed: capture
  winningBreed = this.getWinningBreed(this.generatedQuestion);

  // Shuffle data
  generatedQuestionShuffled = this.generatedQuestion.sort(
    () => Math.random() - 0.5
  );

  componentDidMount() {    
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
  }
  
  render() {
    return (
      <div>
        <h1>Which breed am I?</h1>

        <img
          src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
          alt="Guess me"
        />
        <ul>
          {this.generatedQuestionShuffled.map((answer, index) => {
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
