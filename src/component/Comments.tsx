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
            {comments.map(comment => <div key={comment.id}><h3>postId:{comment.postId}</h3><p>id:{comment.id} body:{comment.body}</p> </div>)}
        </div>
    );
};

export default Comments;