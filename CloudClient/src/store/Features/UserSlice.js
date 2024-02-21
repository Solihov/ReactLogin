import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api"

const initialState = {
    user: null,
    loading: false,
    status: '',
    isAuth: false,
}

export const UserAuth = createAsyncThunk('user/auth', async (params, thunkAPI) => {
    try {
        const token = localStorage.getItem('token')
        const res = await api.get('api/auth/auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        localStorage.setItem('token', res.data.token)
        return res.data

    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || 
        error.message || 
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null
            state.isAuth = false
            localStorage.removeItem('token')
        }
    },
    extraReducers: {
        // builder
    }
})

export const {logOut} = UserSlice.actions
export default UserSlice.reducer