// React: imports
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

export default class Answer extends Component {
  // PropTypes: check type of props
  static propTypes = {
    winner: PropTypes.bool.isRequired,
    breed: PropTypes.string.isRequired
  };

  render() {
    const breedCapitalized = this.props.breed.charAt(0).toUpperCase() + this.props.breed.slice(1)
    // Render answer
    return <li winner={this.props.isWinner}>{breedCapitalized}</li>;
  }
}
