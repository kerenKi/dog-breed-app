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

// style: import
import "../../style/QuestionContainer.css";


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
    
  handleUserChoice = (event) => {
    const winnibgBreedObject = this.getWinningBreed(this.props.question)
    
    if (winnibgBreedObject.breed === event.currentTarget.value){
      alert ('Correct answer!')
      // add dispatch function here to update 'true' to store
   
    } 
    else {
      alert ('Wrong answer')
      // add dispatch function here to update 'false' to store
    
    }
    
  }

  //correct answer func and wrong answer func:

  // clickCorrectAns = () =>{
  //   this.setState({...this.state,correct:true,wrong:false})
  //   }
  
    
    clickWrongAns = () =>{
      // this.setState({...this.state,correct:false,wrong:true})
      setTimeout(function(){
        console.log('ask next question')
        //dispatch new question here....
      },2000)
    
    }

    renderResult = () =>{
      return (
        <span>{this.state.correct?<p>your answer is correct</p>:''}
        {this.state.wrong?<p>Right answer was {this.state.ans} </p>:''}</span>
        )
      }  

  render() {
    // Capture question and winner
    const question = this.props.question;
    const winner = this.props.winner;

    // Sort question when available (note: array is copied with spread)
    const sortedQuestion =
      question && [...question].sort(() => Math.random() - 0.5);

    return (
      <div className="question">
      {/* let the user know the anser: */}
        {this.renderResult()}

        <h2>Which breed am I?</h2>
        <img src={winner && winner} alt="Guess me" />
        <ul>
          {sortedQuestion &&
            sortedQuestion.map((answer, index) => {
              // Map shuffled array. and pass 3 answers as props
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
  { setDogBreeds, GetQuestion, GetWinner }
)(QuestionContainer);
