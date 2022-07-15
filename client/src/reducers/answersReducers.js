import { ADD_ANSWER } from "../constants/answerConstants";

export const userAnswerReducer = (state = { answers: [] }, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      const item = action.payload;
      return { ...state, answers: [...state.answers, item] };
    default:
      return state;
  }
};
