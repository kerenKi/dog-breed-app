// React: imports
import React, { Component } from "react";
import Doglist from "./Doglist";

// Redux: connect and actions
import { connect } from "react-redux";
import { getDogBreeds } from "../../actions/SetDogbreeds";

class DoglistContainer extends Component {
  // Fetch dogbreeds and dispatch
  componentDidMount() {
    this.props.getDogBreeds();
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
    dogbreeds: state.dogbreeds
  };
};
// Redux: connect to state, bind action creator
export default connect(
  mapStateToProps,
  { getDogBreeds }
)(DoglistContainer);
