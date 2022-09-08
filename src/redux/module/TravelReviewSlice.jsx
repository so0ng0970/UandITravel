import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../cookie";

const initialState = {
    review: [],
    success: false,
    error: null,
};

//여행리뷰댓글조회
export const getReview = createAsyncThunk(
    "review/getReview",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(
                `http://43.201.36.176/api/review/${payload}`
            );
            console.log(data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//여행리뷰넣기 post
export const postReview = createAsyncThunk(
    "review/postReview",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post(
                " http://43.201.36.176/api/auth/participation",
                payload
            );
            console.log(data.data);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//리뷰삭제
//   export const deleteReview = createAsyncThunk(
//     "review/DELETE_Review",
//     async (payload, thunkAPI) => {
//         try {
//             const data = await axios.delete(
//                 `/review/${payload}`
//             );
//             return thunkAPI.fulfillWithValue(payload);
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error);
//         }
//     }
// );

//리뷰수정 review 페이지에 있음!
// export const updateReview= createAsyncThunk(
//     "review/UPDATE_Review",
//   async (payload, thunkAPI) => {
//       try {
//           const data = await axios.put(
//               `/review${payload.id}`,
//               payload
//           );
//           return thunkAPI.fulfillWithValue(data.data);
//       } catch (error) {
//           return thunkAPI.rejectWithValue(error);
//       }
//   }  );

export const TravelReview = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: {
        [getReview.pending]: (state) => {
            state.success = true;
        },

        [getReview.fulfilled]: (state, action) => {
            state.success = false;
            state.review = action.payload;
        },
        [getReview.rejected]: (state, action) => {
            state.success = false;
            state.error = action.payload;
        },
        //post
        [postReview.pending]: (state) => {
            state.success = true;
        },
        [postReview.fulfilled]: (state, action) => {
            state.success = false;
            state.review.push(action.payload);
            console.log(action);
        },

        [postReview.rejected]: (state, action) => {
            state.success = false;
            state.error = action.payload;
        },
        //삭제
        //   [deleteReview.pending]: (state) => {
        //     state.success = true;
        // },
        // [deleteReview.fulfilled]: (state, action) => {
        //     state.success = false;
        //     state.review = state.review.filter(
        //         (review) => review.id !== action.payload
        //     );
        // },
        // [deleteReview.rejected]: (state, action) => {
        //     state.success = false;
        //     state.error = action.payload;
        // },
        // [updateReview]: (state) => {
        //     state.success = true;
        //   },
        //   [updateReview]: (state, action) => {
        //     state.success = false;
        //     state.review = state.review.map((review) =>
        //     review.id === action.payload.id ? { ...action.payload } :review
        //     );
        //   },
        //   [updateReview]: (state, action) => {
        //     state.success = false;
        //     state.error = action.payload;
        //   },
    },
});

export const {} = TravelReview.actions;
export default TravelReview.reducer;
