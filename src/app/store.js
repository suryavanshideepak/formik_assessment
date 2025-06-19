import { configureStore } from "@reduxjs/toolkit";
import getDemoDataReducer from '../app/getDemoData';

export const store = configureStore({
    reducer:{
        getData:getDemoDataReducer
    }
})