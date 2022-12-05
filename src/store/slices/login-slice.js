import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    accessToken: "",
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.accessToken = action.payload;
      console.log("i'm in login page");
      console.log({ ...state });
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.accessToken = "";
      console.log("i'm logout");
      console.log({ ...state });
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
