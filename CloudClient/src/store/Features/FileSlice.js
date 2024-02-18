import { createSlice } from "@reduxjs/toolkit";
import api from "@/api"

const initialState = {
    user: null,
    loading: false,
    status: '',
    isAuth: false
}

export const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {

    }
})