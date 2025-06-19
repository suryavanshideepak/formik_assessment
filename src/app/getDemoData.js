import { createSlice } from "@reduxjs/toolkit";
import field_config from '../helper/Data.json';

const initialValue = {
    getFieldConfig : field_config
}

const getDemoDataSlice = createSlice({
    name:'getApi',
    initialState:initialValue,
    reducers:{},
})


export const { getAllData } = getDemoDataSlice.actions;
export default getDemoDataSlice.reducer;



