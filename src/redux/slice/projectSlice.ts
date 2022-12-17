import { createSlice } from '@reduxjs/toolkit';
import { newProject } from '../async';

type PayloadProject = {
    ok: boolean;
    msg: string;
}

interface ProjectState {
    projects: any[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    projects: [],
    loading: false,
    error: null
} as ProjectState

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(newProject.pending, (state, action) => {
                state.loading = true
            })
            .addCase(newProject.fulfilled, (state, { payload }) => {
                state.loading = false
                console.log(payload, 'este es mi payload de create new project')
                state.projects = [...state.projects, payload]
            })
            .addCase(newProject.rejected, (state, { payload }) => {
                state.error = payload as string
            })
    }
})

export default projectSlice.reducer;