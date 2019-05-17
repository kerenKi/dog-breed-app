// Superagent: import
import * as request from "superagent";

// Function: imports
import GenerateQuestion from "../functions/GenerateQuestion";
import { setDogBreeds } from "../actions/SetDogbreeds";
import { setRandomPic } from "./GetRandomPic";

// Function: local
export function getWinningBreed(array) {
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
        // Dispatch SET_DOGBREEDS
        dispatch(setDogBreeds(breeds));
        // Generate question from dogbreeds
        const question = GenerateQuestion(breeds);
        // Dispatch GET_QUESTION
        dispatch(GetQuestion(question));
        // Fetch 3 random pictures from API within array
        const picPromises = question.map(answer => {
          return request
            .get("https://dog.ceo/api/breed/" + answer.breed + "/images/random")
            .then(response => response.body.message);
        });
        // Return the array when all promises are solved
        Promise.all(picPromises)
          // Then make new array that combines question and url data
          .then(urls => {
            const questionwithRandomPics = urls.map((url, index) => {
              return {
                breed: question[index].breed,
                isWinner: question[index].isWinner,
                url: url
              };
            });
            return questionwithRandomPics;
          })
          .then(response => {
            // Dispatch setRandomPic
            dispatch(setRandomPic(response));
          })
          .catch(console.error);
      });
  };
}
