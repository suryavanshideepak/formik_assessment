import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllData = createAsyncThunk(
    'getapicall', async() =>{
        try{
            const response = await axios.get('https://dummyjson.com/products')
            return response.data
        }
        catch(err){
            console.log(err)
        }
    }
)

const initialValue = {
    getData:[]
}

const getApiSlice = createSlice({
    name:'getApi',
    initialState:initialValue,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getAllData.fulfilled,(state,action) => {
            state.getData = action.payload
        })
    }
})

export default getApiSlice.reducer;



