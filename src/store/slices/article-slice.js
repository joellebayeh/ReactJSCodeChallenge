import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    articles: [],
    filterArticles: [],
    searchInput: "",
  },
  reducers: {
    allArticles(state, action) {
      state.articles = action.payload;
      console.log("in slice", { ...state }, action.payload);
    },
    searchArticles(state, action) {
      console.log(action.payload);
      state.searchInput = action.payload;
      state.filterArticles = state.articles.filter((article) => {
        return (
          article.abstract
            .toString()
            .toLowerCase()
            .match(action.payload.toString().toLowerCase()) ||
          article.headline.main
            .toString()
            .toLowerCase()
            .match(action.payload.toString().toLowerCase())
        );
      });
      console.log(state.filterArticles);
    },
  },
});

export const articleActions = articleSlice.actions;

export default articleSlice;
