

import { configureStore } from "@reduxjs/toolkit";


import sign from "../module/SignSlice";
import comment from "../module/TravelCommentSlice"
import formReducer from "../module/TravelFormSlice";
import posts from "../module/TravelFormSlice"


const store = configureStore({
  reducer: {sign:sign,comment:comment,cardpost: formReducer,posts:posts}
});

export default store;