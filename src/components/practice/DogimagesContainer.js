// React: imports
import React, { Component } from "react";

// Superagent: import
import * as request from "superagent";
import Dogimages from "./Dogimages";

// Redux: imports
import { connect } from "react-redux";

// Action: imports
import { setDogImages } from "../../actions/SetDogimages";

class DogimagesContainer extends Component {
  // Local state
  state = { images: null };

  // Params
  breed = this.props.match.params.breed;

  // Fetching API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breed/" + this.breed + "/images")
      .then(response => {
        // Dispatch action to reducer
        this.props.dispatch(setDogImages(response.body.message));
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Dog breed details:</h1>

        <ul>
          {this.props.dogimages &&
            this.props.dogimages
              .filter((image, index) => index < 11)
              .map((image, index) => {
                return (
                  <Dogimages key={index} dbreed={this.breed} img={image} />
                );
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
// Redux: connect to state
export default connect(mapStateToProps)(DogimagesContainer);
