import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: [],
};

export const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        //actions
        create_data: function (state, action) {
            return { ...state, posts: [...action.payload] };
        },
        include_data: function (state, action) {
            return { ...state, posts: [...state.posts, action.payload] };
        },
    },
});

// Action creators are generated for each case reducer function
export const { create_data, include_data } = postSlice.actions;

export default postSlice.reducer;
