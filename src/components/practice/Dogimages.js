// React: import
import React, { Component } from "react";

// PropTypes: import
import PropTypes from "prop-types";

export default class Dogimages extends Component {
  // PropTypes: check type of props
  static propTypes = {
    img: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired
  };
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.breed} />
      </div>
    );
  }
}
