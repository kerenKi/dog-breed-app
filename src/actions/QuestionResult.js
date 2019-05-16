// Protection against typos
export const SET_QUESTION_RESULT = "SET_QUESTION_RESULT";

export function getQuestionResult(boolean) {
  return {
    type: SET_QUESTION_RESULT,
    payload: boolean
  };
}
