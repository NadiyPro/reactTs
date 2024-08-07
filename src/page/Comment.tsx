import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";

const Comment = () => {
    const {id} = useParams();
    const comment = useAppSelector(state => state.commentStore.comment);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(commentActions.loadComment(+id));
    }, [id]);
    return (
        <div>
            <h3>Comments</h3>

            {comment && comment.map(value =>
                <div key={value.id}>
                    <h3>postId:{value.postId}</h3>
                <p>id:{value.id} body:{value.body}</p></div>)}
        </div>
    );
};

export default Comment;