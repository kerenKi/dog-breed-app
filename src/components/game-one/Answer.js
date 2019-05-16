// React: imports
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

//style: import
import '../../style/answerButtons.css'

export default class Answer extends Component {
  // PropTypes: check type of props
  static propTypes = {
    winner: PropTypes.bool.isRequired,
    breed: PropTypes.string.isRequired
  };

  render() {
    // const breedCapitalized = this.props.breed.charAt(0).toUpperCase() + this.props.breed.slice(1)
    // console.log(breedCapitalized)
    // Render answer
    return <button className="answerButton" onClick={this.props.onClick}>{this.props.breed}</button>;
  }
}
