// Secure against typos
export const GET_QUESTION = "GET_QUESTION";

export function GetQuestion(questionOptions) {
  return {
    type: GET_QUESTION,
    payload: questionOptions
  };
}
