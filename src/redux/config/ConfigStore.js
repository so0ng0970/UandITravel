

import { configureStore } from "@reduxjs/toolkit";


import sign from "../module/SignSlice";
import comment from "../module/TravelCommentSlice"


const store = configureStore({
  reducer: {sign:sign,comment:comment}
});

export default store;