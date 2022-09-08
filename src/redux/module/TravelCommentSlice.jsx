import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../cookie";

const initialState = {
    Comment: [],
    success: false,
    error: null,
};

//여행폼조회
export const getComment = createAsyncThunk(
<<<<<<< HEAD
  "comment/getComment",
 async (payload, thunkAPI) => {
 try{
  const data = await axios.get(`http://localhost:3001/comment`);
  
  return thunkAPI.fulfillWithValue(data.data);
  }catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
=======
    "comment/getComment",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(
                `http://43.201.36.176/api/comment/${payload}`
            );
>>>>>>> f436be0be48723d7f707c0c24a400eb00f1263dc

            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const TravelComment = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: {
        [getComment.pending]: (state) => {
            state.success = true;
        },

        [getComment.fulfilled]: (state, action) => {
            state.success = false;
            state.comment = action.payload;
        },
        [getComment.rejected]: (state, action) => {
            state.success = false;
            state.error = action.payload;
        },
    },
});

export const {} = TravelComment.actions;
export default TravelComment.reducer;
