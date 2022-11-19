import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogin, UserInput, UserOutPut } from "./interfaces/async.interfaces";


// function async for login user
export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (user: UserLogin, thunkApi) => {
        try {

            const response = await fetch('http://localhost:3002/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            return response.json();


        } catch (error: any) {

            return thunkApi.rejectWithValue(error.message);

        }
    }
)

// function async for register user
export const fetchRegister = createAsyncThunk(
    'auth/register',
    async (user: UserInput, thunkApi) => {

        try {

            const response = await fetch('http://localhost:3002/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            return response.json();

        } catch (error: any) {

            return thunkApi.rejectWithValue(error.message);

        }
    }
)