import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type User = {
    _id: string;
    email: string;
    password: string;
    username: string;
    firstname: string;
    lastname: string;
    image?: string;
    projects?: string[];
}

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (user: User) => {
        const response = await fetch('http://localhost:3002/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return response.json();
    }
)

interface LoginState {
    user: User | {};
}

const initialState = {
    user: {},
} as LoginState

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export default loginSlice.reducer