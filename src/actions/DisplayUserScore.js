// Protection against typos
export const DISPLAY_USERSCORE = "DISPLAY_USERSCORE";

export function DisplayUserScore(score) {
  return {
    type: DISPLAY_USERSCORE ,
    payload: score
  };
}