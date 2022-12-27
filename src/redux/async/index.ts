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

// function async for renew token
export const fetchRenewToken = createAsyncThunk(
    'auth/renew',
    async (token: string, thunkApi) => {

        try {

            const response = await fetch('http://localhost:3002/auth/renew', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            return response.json();

        } catch (error: any) {

            return thunkApi.rejectWithValue(error.message);

        }
    }
)

// function async for logout user
export const fetchLogout = createAsyncThunk(
    'auth/logout',
    async (token: string, thunkApi) => {
        try {

            const response = await fetch('https://cosmos-api.onrender.com/auth/signout', {
                method: 'DELETE',
            })
            return response.json();

        } catch (error: any) {

            return thunkApi.rejectWithValue(error.message);

        }
    }
)

// function async for create new project
export const newProject = createAsyncThunk(
    'project/new',
    async (data: any, thunkApi) => {
        try {

            const responseNewProject = await fetch('https://cosmos-api.onrender.com/project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            return responseNewProject.json();

        } catch (error: any) {

            return thunkApi.rejectWithValue(error.message);
        }
    }
)