import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";
import {useNavigate} from "react-router-dom";

const Comments = () => {
    const navigate = useNavigate();
    const comments = useAppSelector(state => state.commentStore.comments);
    const isLoaded = useAppSelector(state => state.postStore.isLoaded);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            <h2>Comments</h2>

            {comments.map(comment =>
                <div key={comment.id} >
                    <h3>postId:{comment.postId}</h3>
                    <h4>id:{comment.id}</h4>
                    <p>body:{comment.body}</p>
                    <button onClick={() => navigate('/users')}>back home page</button>
                </div>)}

        </div>
    );
};

export default Comments;