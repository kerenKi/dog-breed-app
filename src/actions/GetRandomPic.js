// Superagent: import
import * as request from "superagent";

// Protection against typos
export const SET_RANDOMPIC = "SET_RANDOMPIC";

export function setRandomPic(url) {
  return {
    type: SET_RANDOMPIC,
    payload: url
  };
}

export function getRandomPic(breed) {
  return function(dispatch) {
    request
      // Fetch random pic
      .get("https://dog.ceo/api/breed/" + breed + "/images/random")
      .then(response => {
        dispatch(setRandomPic(response.body.message));
      })
      .catch(console.error);
  };
}
