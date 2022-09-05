import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
};

// db에 데이터를 넣음
export const __addTavelCard = createAsyncThunk(
    "music/ADD_TRAVELCARD",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post(
                "http://localhost:3001/posts",
                payload
            );
            console.log(data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getTravelList = createAsyncThunk(
    "travel/getTravelList ",
    async (payload, thunkAPI) => {
      try {
        const data= await axios.get("http://localhost:3001/posts");
          console.log(data.data)
        return thunkAPI.fulfillWithValue(data.data);
    
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );  

const cardpost = createSlice({
    name: "cardpost",
    initialState,
    reducers: {},
    extraReducers: {
        // addMusic Thunk
        [__addTavelCard.pending]: (state) => {
            state.isLoading = true;
        },
        [__addTavelCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.list.push(action.payload);
            console.log(action);
        },

        [__addTavelCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getTravelList.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [getTravelList.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts= action.payload;
          },
          [getTravelList.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
    },
});
export default cardpost.reducer;