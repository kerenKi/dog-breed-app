// Protection against typos
export const SET_GAMESCORE = "SET_GAMESCORE";

export function setGameScore(array) {
  return {
    type: SET_GAMESCORE,
    payload: array
  };
}
