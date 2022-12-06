import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: "",
    accessToken: "",
    error: null,
    loading: false,
  },
  reducers: {
    logInReq(state) {
      state.loading = true;
      state.error = "";
    },
    logInSuccess(state, action) {
      state.isLoggedIn = "success";
      state.loading = false;
      state.accessToken = action.payload;
    },
    logInFailed(state, action) {
      state.isLoggedIn = "failed";
      state.loading = false;
      state.error = action.payload;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.accessToken = "";
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
