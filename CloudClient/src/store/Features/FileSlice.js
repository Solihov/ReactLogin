import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./api"

const initialState = {
    files: [],
    currentDir: null,
    popUpDisplay: 'none',
    loading: false
}

export const FileSlice = createSlice({
    name: 'FileSlice',
    initialState,
    reducers: {
        SetPopupDisplay: (state, action) => {
            state.popUpDisplay = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase
    // }
})
export const createFile = createAsyncThunk('create/files', async (params, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const res = await api.post('/api/files', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const FileCheck = createAsyncThunk('api/files', async (params, thunkAPI) => {
    try {
        const res = await api.post('/api/files/parent', params)
        localStorage.setItem('token', res.data.token)
        return res.data
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)

export const { SetPopUpDisplay } = FileSlice.actions

export default FileSlice.reducer