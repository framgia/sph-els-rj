import { ADD_ANSWER } from "../constants/answerConstants";

export const answerChoice = (choiceID, wordID) => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_ANSWER,
      payload: choiceID,
      wordID,
    });
    localStorage.setItem("answers", JSON.stringify(getState().answers.answers));
  };
};
