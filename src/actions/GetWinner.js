// Secure against typos
export const GET_WINNER_RANDOM_PIC = "GET_WINNER_RANDOM_PIC";

export function GetWinner(winnerBreed) {
  return {
    type: GET_WINNER_RANDOM_PIC,
    payload: winnerBreed
  };
}
