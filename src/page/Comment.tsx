import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";
import style from "../module/styleDom.module.css";

const Comment = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const comment = useAppSelector(state => state.commentStore.comment);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(commentActions.loadComment(+id));
    }, [id]);
    return (
        <div className={style.styleUser}>
            <h3>Comments</h3>

            {comment && comment.map(value =>
                <div key={value.id} className={style.divRend}>
                    <h3>postId:{value.postId}</h3>
                    <h4>id:{value.id}</h4>
                    <p>body:{value.body}</p>
                    <button onClick={() => navigate('/users')}>back home page</button>
                </div>)}
        </div>
    );
};

export default Comment;