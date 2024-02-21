import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './RootReducer'

export const store = configureStore({
    devTools: true,
    reducer: reducers
})