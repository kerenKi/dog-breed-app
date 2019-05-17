//Game 2

// React: imports
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

//style: import
import "../../style/GameTwoAnswer.css";

export default class Answer extends Component {
  // PropTypes: check type of props
  static propTypes = {
    breed: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {

    // Render answer
    return (
      <div className="answer-images">
        <img onClick={this.props.onClick}
          src={this.props.url && this.props.url}
          alt="Guess me, no cheating!"
        />
      </div>
    );
  }
}
