// Secure against typos
export const GET_WINNER = "GET_WINNER";

export function GetWinner(winnerBreed) {
  return {
    type: GET_WINNER,
    payload: winnerBreed
  };
}
