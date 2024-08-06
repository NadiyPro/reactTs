import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";

const Comments = () => {
    let {commentStore:{comments}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {comments.map(comment => <div key={comment.id}>postId:{comment.postId} id:{comment.id} body:{comment.body}</div>)}
        </div>
    );
};

export default Comments;