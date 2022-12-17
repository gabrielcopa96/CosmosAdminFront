import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from "../slice/loginSlice";
import projectSlice from "../slice/projectSlice";

// newProject

const rootReducer = combineReducers({
    // Add the generated reducer as a specific top-level slice
    login: loginSlice,
    project: projectSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
