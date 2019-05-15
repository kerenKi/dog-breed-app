// React: imports
import React, { Component } from "react";

// Superagent: import
import * as request from "superagent";

// Component: import
import Dogimages from "./Dogimages";

// Redux: imports
import { connect } from "react-redux";

// Action: imports
import { setDogImages } from "../../actions/SetDogimages";

class DogimagesContainer extends Component {
  // Action creotor call
  breed = this.props.match.params.breed;

  // Fetch API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breed/" + this.breed + "/images")
      .then(response => {
        // Dispatch action
        this.props.setDogImages(response.body.message);
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Images of {this.breed}</h1>

        <ul>
          {this.props.dogimages &&
            // If exists, filter and map array, then pass props
            this.props.dogimages
              .filter((image, index) => index < 11)
              .map((image, index) => {
                return <Dogimages key={index} breed={this.breed} img={image} />;
              })}
        </ul>
      </div>
    );
  }
}

// Redux: get part of state
const mapStateToProps = state => {
  return {
    dogimages: state.dogimages
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  { setDogImages }
)(DogimagesContainer);
