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
    // Render answer
    return <li winner={this.props.isWinner}>{this.props.breed}</li>;
  }
}
