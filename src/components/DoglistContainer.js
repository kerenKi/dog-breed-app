// React: imports
import React, { Component } from "react";
import Doglist from "./Doglist";

// Superagent: imports
import * as request from "superagent";

// Redux: imports
import { connect } from "react-redux";

// Action: imports
import { setDogBreeds } from "../actions/SetDogBreeds";


class DoglistContainer extends Component {
  // Fetching API
  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // Dispatch action to reducer
        this.props.dispatch(setDogBreeds(Object.keys(response.body.message)));
      })
      .catch(console.error);
  }

  render() {
    const dogbreeds = this.props.dogbreeds;

    return (
      <div>
        <h1>Dog breed list:</h1>

        {dogbreeds &&
          // If exists, map array & pass props
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
