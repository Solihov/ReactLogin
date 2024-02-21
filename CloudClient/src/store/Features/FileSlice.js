import { createSlice } from "@reduxjs/toolkit";
// import api from "@/api"

const initialState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none'
}

export const FileSlice= createSlice({
    name: 'FileSlice',
    initialState,
    reducers: {
        SetPopupDisplay: (state, action) => {
            state.popupDisplay = action.payload
        }
    },
})

export const { SetPopupDisplay } = FileSlice.actions

export default FileSlice.reducer