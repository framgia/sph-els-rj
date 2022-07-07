import apiClient from "../utils/axios";
import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constants/userConstants";

const csrf = () => apiClient.get("/csrf-cookie");

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    // const config = {
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    // };
    await csrf();
    const response = await apiClient.post("/login", { email, password });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: response.data,
    });

    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_LOGOUT });
};
