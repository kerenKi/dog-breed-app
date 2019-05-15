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
    const divStyle = {
      float: 'left',
      margin: '5px',
      width: '250px',
      height:'250px',
      border: '1px solid dimgrey',
      borderRadius:'20px',
      boxShadow: '2px 2px 2px 2px #eee',
     
    };
    return (
      <div>
        <img src={this.props.img} alt={this.props.breed}  style={divStyle}/>
      </div>
    );
  }
}
