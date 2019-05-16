// React: import
import React, { Component } from "react";

// Component: import
import QuestionContainer from "./QuestionContainer";

// Redux: connect
import { connect } from "react-redux";

//action: import
import resetGameScore from '../../actions/ResetGameScore'

//alert: import
import SweetAlert from 'react-bootstrap-sweetalert'

//route redirect import
import { Redirect } from 'react-router';

// Style: import
import "../../style/GameOne.css";

 class GameOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }  

  exitGame() {
    const getAlert = () => (
      <SweetAlert 
        warning
        showCancel
        confirmBtnText="Yes, I want to exit!"
        cancelBtnText="Ok, I'll keep playing"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="warning"
        title="Are you sure?" 
        onConfirm={this.handleClick}
        onCancel={() => this.hideAlert()}
      >
        if you leave now you will lose all of your points
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  handleClick = () => {
    this.setState({redirect: true});
    this.props.resetGameScore()
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      
      <div>
        <h1>Game 1</h1>
        {<QuestionContainer />}
        <button className="exitGameButton" onClick={() => this.exitGame()}> Exit Game </button>
        {this.state.alert}
    </div>
    );
  }
}

export default connect(null,{resetGameScore})(GameOne)

