import { configureStore  } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "../reducers"


const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store