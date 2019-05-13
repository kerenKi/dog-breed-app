// React imports
import React, { Component } from "react";
import Doglist from "./Doglist";

// Superagent import
import * as request from "superagent";

// Redux import
import { connect } from "react-redux";

// Import actions
import { fetchDogBreeds } from "../actions/SetDogbreeds";

class DoglistContainer extends Component {
  // Fetching the API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // Use imported action, turn data into array
        this.props.dispatch(fetchDogBreeds(Object.keys(response.body.message)));
      })
      .catch(console.error);
  }

  render() {
    const dogbreeds = this.props.dogbreeds;

    return (
      <div>
        <h1>Dogs list:</h1>

        {dogbreeds &&
          // If exists, then map array and pass props
          dogbreeds.map((dogbreed, index) => {
            return <Doglist key={index} dogbreed={dogbreed} />;
          })}

        <ul />
      </div>
    );
  }
}

// Redux: get part of state
const mapStateToProps = state => {
  return {
    dogbreeds: state
  };
};
// Redux: connect to state
export default connect(mapStateToProps)(DoglistContainer);
