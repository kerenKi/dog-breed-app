// React: import
import React, { Component } from "react";

export default class Dogimages extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.breed} />
      </div>
    );
  }
}
