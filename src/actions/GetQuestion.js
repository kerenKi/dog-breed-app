// Superagent: import
import * as request from "superagent";

// Function: imports
import GenerateQuestion from "../functions/GenerateQuestion";
import { setDogBreeds } from "../actions/SetDogbreeds";
import { GetWinner } from "../actions/GetWinner";


// Function: local
function getWinningBreed(array) {
  return array.find(breed => {
    return breed.isWinner === true;
  });
}

// Protection against typos
export const GET_QUESTION = "GET_QUESTION";

export function GetQuestion(question) {
  return {
    type: GET_QUESTION,
    payload: question
  };
}

export function SetQuestion() {
  return function(dispatch) {
    request
      // Fetch API
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // Get dogbreeds from API
        const breeds = Object.keys(response.body.message);
        // Dispatch SET_DOGBREEDS using breeds
        dispatch(setDogBreeds(breeds));
        // Get question using breeds
        const question = GenerateQuestion(breeds);
        // Dispatch GET_QUESTION using question
        dispatch(GetQuestion(question));
        // Get winning breed using question
        const winningBreed = getWinningBreed(question);
        // Fetch API using winning breed
        return request.get(
          "https://dog.ceo/api/breed/" + winningBreed.breed + "/images/random"
        );
      })
      .then(response => {
        // Dispatch GET_WINNER with result
        dispatch(GetWinner(response.body.message));
      })
      .catch(console.error);
  };
}
