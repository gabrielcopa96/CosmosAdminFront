import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from "../async"
import { UserOutPut } from "../async/interfaces/async.interfaces"

type PayloadUser = {
    ok: boolean;
    msg: string;
    userAuth: UserOutPut
}

interface LoginState {
    user: UserOutPut | any | null;
    status: 'success' | 'loading' | 'failed';
    error: string | null;
}

const initialState = {
    user: null,
    status: 'loading',
    error: null
} as LoginState

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                const { userAuth } = action.payload;
                state.status = 'success';
                console.log(action.payload);
                state.user = userAuth;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
})

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;