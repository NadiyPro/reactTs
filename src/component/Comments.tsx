import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";

const Comments = () => {
    const comments = useAppSelector(state => state.commentStore.comments);
    const isLoaded = useAppSelector(state => state.postStore.isLoaded);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            <h3>Comments</h3>

            {comments.map(comment => <div key={comment.id}><h3>postId:{comment.postId}</h3>
                <p>id:{comment.id} body:{comment.body}</p></div>)}
        </div>
    );
};

export default Comments;