// React: imports
import React, { Component } from "react";
import Answer from "./Answer";

export default class QuestionContainer extends Component {
  // Temp data
  generatedQuestion = [
    { breed: "affenpinscher", isWinner: true },
    { breed: "borzoi", isWinner: false },
    { breed: "cattledog", isWinner: false }
  ];

  // Shuffle data
  generatedQuestionShuffled = this.generatedQuestion.sort(
    () => Math.random() - 0.5
  );

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
