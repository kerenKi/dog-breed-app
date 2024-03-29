// React: imports
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

//style: import
import "../../style/answerButtons.css";

export default class Answer extends Component {
  // PropTypes: check type of props
  static propTypes = {
    breed: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  };

/* REQUEST LIKE THIS: this.props.url */


  render() {
    // Capitalize answer
/*     const breedCapitalized =
      this.props.breed.charAt(0).toUpperCase() + this.props.breed.slice(1); */
    // Render answer
    return (
      <button className="answerButton" onClick={this.props.onClick}>
        {this.props.breed} 
      </button>
    );
  }
}
