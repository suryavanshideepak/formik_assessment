import { configureStore } from "@reduxjs/toolkit";
import getApiReducer from './getApiSlice';

export const store = configureStore({
    reducer:{
        getData:getApiReducer
    }
})