import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer } from "./reducers/userReducers";
import { userAnswerReducer } from "./reducers/answersReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  answers: userAnswerReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// const answerFromStorage = localStorage.getItem("answers")
//   ? JSON.parse(localStorage.getItem("answers"))
//   : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // answers: { answers: answerFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
