import { instance } from "../../api/Api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../cookie";

const initialState = {
    posts: [],
    success: false,
    error: null,
};





// db에 데이터를 넣음
export const __addTravelCard = createAsyncThunk(
    "travel/__addTravelCard",
    async (payload, thunkAPI) => {
        try {
            const data = await instance.post(
                "/api/auth/post",payload
            );
            console.log("d",data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// 서버에서 데이터 get 요청.
export const getTravelList = createAsyncThunk(
    "travel/getTravelList ",
    async (payload, thunkAPI) => {
        console.log(getTravelList)
        try {
            const data = await instance.get("/api/post");
            console.log(data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
    }
);

/** db내 데이터 삭제 **/
export const __deleteTravelCard = createAsyncThunk(
    "travel/DELETE_TRAVELCARD",
    async (payload, thunkAPI) => {
        try {
            const data = await instance.delete(
                `/api/auth/post/${payload}`
            );
            return thunkAPI.fulfillWithValue(payload);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//수정
export const __updateTravelCard = createAsyncThunk(
    "travel/UPDATE_MUSIC",
    async (payload, thunkAPI) => {
        try {
            const data = await instance.put(
                `/api/auth/post/${payload.id}`,

                payload
            );
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const cardpost = createSlice({
    name: "cardpost",
    initialState,
    reducers: {},
    extraReducers: {
        // addTravelCard Thunk
        [__addTravelCard.pending]: (state) => {
            state.success = true;
        },
        [__addTravelCard.fulfilled]: (state, action) => {
            state.success = false;
            state.posts.push(action.payload);
            console.log(action);
        },

        [__addTravelCard.rejected]: (state, action) => {
            state.success = false;
            state.error = action.payload;
        },

        // getTravelList Thunk
        [getTravelList.pending]: (state) => {
            state.success = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
        },
        [getTravelList.fulfilled]: (state, action) => {
            state.success = false;
            state.posts = action.payload.data;
            // console.log(action.payload);
            // console.log(action.payload.data);
        },
        [getTravelList.rejected]: (state, action) => {
            state.success = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },

        // deleteTravelCard Thunk
        [__deleteTravelCard.pending]: (state) => {
            state.success = true;
        },
        [__deleteTravelCard.fulfilled]: (state, action) => {
            state.success = false;
            state.posts = state.posts.filter(
                (card) => card.id !== action.payload
            );
        },
        [__deleteTravelCard.rejected]: (state, action) => {
            state.success = false;
            state.error = action.payload;
        },
        [__updateTravelCard]: (state) => {
            state.success = true;
        },
        [__updateTravelCard]: (state, action) => {
            state.success = false;
            state.posts = state.posts.map((posts) =>
                posts.id === action.payload.id ? { ...action.payload } : posts
            );
        },
        [__updateTravelCard]: (state, action) => {
            state.success = false;
            state.error = action.payload;
        },
    },
});
export default cardpost.reducer;