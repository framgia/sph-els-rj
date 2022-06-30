import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../utils/axios";

const initialState = {
  userInfo: {},
  token: '',
};

const csrf = () => apiClient.get("/sanctum/csrf-cookie");


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("logged_in");
      state.user = null;
    },
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
