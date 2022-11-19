import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";

const rootReducer = combineReducers({
    // Add the generated reducer as a specific top-level slice
    login: loginSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
