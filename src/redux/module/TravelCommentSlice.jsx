import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Comment: [],
  success: false,
  error:null,

};

export const getComment = createAsyncThunk(
  "comment/getComment",
 async (payload, thunkAPI) => {
 try{
  const data = await axios.get();
  console.log(data);
  return thunkAPI.fulfillWithValue(data.data);
  }catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }



 }
);


export const  TravelComment = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers : {}
});

export const {} =  TravelComment.actions;
export default TravelComment.reducer;