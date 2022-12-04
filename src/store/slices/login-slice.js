import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    accessToken: "",
    // loading: false,
    // error: "",
    // status: "",
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      console.log("i'm in lodin cli");
      console.log({...state})
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.accessToken = "";
    },
    // loginReq(state) {
    //   state.loading = true;
    // },
    // loginSuccess(state, action) {
    //   state.token = action.payload.accessToken;
    //   state.loading = false;
    //   state.isLoggedIn = true;
    //   state.status = "success";
    // },

    // loginFailed(state, action) {
    //   state.loading = false;
    //   state.status = "failed";
    //   state.error = action.payload;
    // },
    // logout(state) {
    //   state.isLoggedIn = false;
    //   state.accessToken = "";
    //   state.status = "";
    // },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
