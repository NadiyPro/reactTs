import {createSlice} from "@reduxjs/toolkit";
import {loadPosts} from "../reducers/posts/post.extra.reducers";
import {IPost} from "../../models/IPost";


type PostSliceType = {
    posts: IPost[],
}

const postInitState: PostSliceType = {
    posts: [],
}

export const postSlice = createSlice({
    name: "postsSlice",
    initialState: postInitState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(action.payload)
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts

}