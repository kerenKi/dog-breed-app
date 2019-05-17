// React: imports
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

// Redux: connect
import { connect } from "react-redux";

//style: import
import '../../style/message.css'


//Game 2

class Message extends Component {
  // PropTypes: check type of props
  static propTypes = {
    questionresult: PropTypes.bool.isRequired,
  };
  
  render() {
    
    return ( 
      //turnary: is answer is true shows firs <p>, else show second <p>
      <div>
        <span>
          {this.props.questionresult ?
            <p className="correctAnswer">your answer is correct</p> : 
            <p className="wrongAnswer">Wrong guess!  </p> 
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
  
  