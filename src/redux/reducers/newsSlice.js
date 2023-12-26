import { createSlice } from "@reduxjs/toolkit";

import { getNews } from "../actions";

const initialState = {
    allNews: [],
    backup_news: [],
}

export const newsSlice = createSlice ( {
    name: "News",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.allNews = action.payload;
            state.backup_news = action.payload;
        })
    }
});

export default newsSlice.reducer;