import {createSlice, isRejected} from "@reduxjs/toolkit";
import {loadPosts} from "../reducers/posts/posts.extra.reducers";
import {IPost} from "../../models/IPost";
import {loadPost} from "../reducers/posts/post.extra.reducers";


type PostSliceType = {
    posts: IPost[],
    isLoaded: boolean,
    post: IPost | null,
    error: string
}

const postInitState: PostSliceType = {
    posts: [],
    isLoaded: false,
    post: null,
    error: ''
}

export const postSlice = createSlice({
    name: "postsSlice",
    initialState: postInitState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPost.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addMatcher(isRejected (loadPosts,loadPost), (state, action) => {
                state.error = action.payload as string;
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPost

}