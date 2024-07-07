import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import fileReducer from './reducers/file-reducer';
import authReducer from './reducers/auth-reducer';
export const store = configureStore({
    reducer: {
        file:fileReducer,
        auth:authReducer
    },
})