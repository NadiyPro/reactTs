import {createSlice, isRejected} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";
import {loadComments} from "../reducers/comments/comments.extra.reducers";
import {loadPosts} from "../reducers/posts/posts.extra.reducers";
import {loadPost} from "../reducers/posts/post.extra.reducers";
import {loadComment} from "../reducers/comments/comment.extra.reducers";


type CommentSliceType = {
    comments: IComment[],
    isLoaded: boolean,
    comment: IComment | null,
    error: string
}

const commentInitState: CommentSliceType = {
    comments: [],
    isLoaded: false,
    comment: null,
    error: ''
}

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadComment.fulfilled, (state, action) => {
                state.comment = action.payload;
            })
            .addMatcher(isRejected (loadPosts,loadPost), (state, action) => {
                state.error = action.payload as string;
            })
    }
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments,
    loadComment

}