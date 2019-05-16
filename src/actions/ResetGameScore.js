// Protection against typos
export const RESET_GAMESCORE = "RESET_GAMESCORE";

export default function resetGameScore() {
  return {
    type: RESET_GAMESCORE,
    payload: []
  };
}
