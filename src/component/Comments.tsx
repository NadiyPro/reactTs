import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";
import {useNavigate} from "react-router-dom";
import style from "../module/styleDom.module.css";

const Comments = () => {
    const navigate = useNavigate();
    const comments = useAppSelector(state => state.commentStore.comments);
    const isLoaded = useAppSelector(state => state.postStore.isLoaded);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);
    return (
        <div className={style.styleUser}>
            {!isLoaded && <div>Loading in process....</div>}

            <h2>Comments</h2>

            {comments.map(comment =>
                <div key={comment.id} className={style.divRend}>
                    <h3>postId:{comment.postId}</h3>
                    <h6>id:{comment.id}</h6>
                    <p>body:{comment.body}</p>
                    <button onClick={() => navigate('/users')}>back home page</button>
                </div>)}

        </div>
    );
};

export default Comments;