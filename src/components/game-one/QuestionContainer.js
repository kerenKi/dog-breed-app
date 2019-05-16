// React: imports
import React, { Component } from "react";
import Answer from "./Answer";
import Message from './Message'

// Redux: connect
import { connect } from "react-redux";

// Action: imports
import { setDogBreeds } from "../../actions/SetDogbreeds";
import { GetQuestion, SetQuestion, getWinningBreed } from "../../actions/GetQuestion";
import { GetWinner } from "../../actions/GetWinner";
import { setGameScore } from "../../actions/SetGameScore";
import { getQuestionResult } from "../../actions/QuestionResult";


// Style: import
import "../../style/QuestionContainer.css";

class QuestionContainer extends Component {
  // Dispatch question and random pic
  componentDidMount() {
    this.props.SetQuestion();
  }
  
  clickedAnswer = answer => e => {
    e.preventDefault();

     //return an object of the winnig breed
     const winningBreedObject = getWinningBreed(this.props.question)
    
     //set the QuestionResult back to null after 1.5 seconds
     setTimeout(()=>this.props.getQuestionResult(null),1500)
     
     //dispatch new question after 1.5 seconds
     this.props.questionresult === null && setTimeout(()=>this.props.SetQuestion(null),1500)
     
     
     if (winningBreedObject.breed === answer[0]){
       // add dispatch function here to update 'true' to store
       this.props.setGameScore(true);
       this.props.getQuestionResult(true);
     } 
     else {
       // add dispatch function here to update 'false' to store
       this.props.setGameScore(false);
       this.props.getQuestionResult(false); 
     }
  };  
  
  render() {
    // Capture question and winner
    const question = this.props.question;
    const winner = this.props.winner;
    
    // Shuffle question  (note: spread operator was necessary)
    const shuffledQuestion =
    question && [...question].sort(() => Math.random() - 0.5);
    
    return (
      <div className="question">
      {/* let the user know the anser: */}
      {this.props.questionresult !== null && <Message questionresult={this.props.questionresult} />}

      <h2>Which breed am I?</h2>
      <img src={winner && winner} alt="Guess me" />
      <ul>
      {shuffledQuestion &&
        shuffledQuestion.map((answer, index) => {
          // Map array, pass props, capture clicked answer
          return (
            <Answer
              key={index}
              breed={answer.breed}
              winner={answer.isWinner}
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
          questionresult: state.questionresult
          
        };
      };
      // Redux: connect to state, bind action creator
      export default connect(
        mapStateToProps,
        { setDogBreeds, GetQuestion, GetWinner, SetQuestion, setGameScore,getQuestionResult }
        )(QuestionContainer);
        