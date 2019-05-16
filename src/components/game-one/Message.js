// React: imports
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

// Redux: connect
import { connect } from "react-redux";

//finction: import
import { getWinningBreed } from '../../actions/GetQuestion'


class Message extends Component {
  // PropTypes: check type of props
  static propTypes = {
    questionresult: PropTypes.bool.isRequired,
  };
  
  render() {
    const winningBreedObject = this.props.question && getWinningBreed(this.props.question)
    
    return ( 
      //turnary: is answer is true shows firs <p>, else show second <p>
      <div>
        <span>
          {this.props.questionresult ?
            <p>your answer is correct</p> : 
            <p>Wrong answer! <br/> Right answer was {winningBreedObject.breed} </p> 
          }
        </span> 
      </div>
      )
    }
  }
  
  // Redux: get both part of states
  const mapStateToProps = state => {
    return {  
      question: state.question
    };
  };

  // Redux: connect to state, bind action creator
  export default connect(mapStateToProps)(Message);
  
  