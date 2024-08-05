import {createSlice} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";
import {loadComments} from "../reducers/comments/comments.extra.reducers";


type CommentSliceType = {
    comments: IComment[],
}

const commentInitState: CommentSliceType = {
    comments: [],
}

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action) => {
                console.log(action.payload)
            });
    }
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments

}