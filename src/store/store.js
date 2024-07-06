import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import fileReducer from './reducers/file-reducer';
export const store = configureStore({
    reducer: {
        // auth:[],
        file:fileReducer
    },
})