// React: imports
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Answer extends Component {
  static propTypes = {
    // Check passed prop types
    winner: PropTypes.bool.isRequired,
    breed: PropTypes.string.isRequired
  };

  render() {
    // Render answer
    return <li winner={this.props.isWinner}>{this.props.breed}</li>;
  }
}
