import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "./slices/login-slice";
import articleSlice from "./slices/article-slice";

const store = configureStore({
  reducer: {
    login : loginSlice.reducer,
    article : articleSlice.reducer
  },
});

export default store;
