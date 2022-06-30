import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './redux/features/user/userSlice'
export const store = configureStore({
    reducer: {
       user: UserReducer
    }
});