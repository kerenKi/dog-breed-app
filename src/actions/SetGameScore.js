// Protection against typos
export const SET_GAMESCORE = "SET_GAMESCORE";

export function setGameScore(boolean) {
  return {
    type: SET_GAMESCORE,
    payload: boolean
  };
}
