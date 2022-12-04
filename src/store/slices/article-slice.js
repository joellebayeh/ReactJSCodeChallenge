import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
    name: 'article',
    initialState: {},
    reducers: {}
})

export const articleActions = articleSlice.actions;

export default articleSlice;