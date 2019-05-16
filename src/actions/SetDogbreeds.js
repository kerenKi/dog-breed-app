// Superagent: import
import * as request from "superagent";

// Protection against typos
export const SET_DOGBREEDS = "SET_DOGBREEDS";

export function setDogBreeds(dogbreeds) {
  // Direct return action object
  return {
    type: SET_DOGBREEDS,
    payload: dogbreeds
  };

}

export function getDogBreeds() {
  return function(dispatch) {
    // Logic: fetch API, dispatch setDogBreeds
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        dispatch(setDogBreeds(Object.keys(response.body.message)));
      })
      .catch(console.error);
  };
}

