import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/slices/commentSlice";

const Comment = () => {
    let {id} = useParams();
    let {commentStore: {comment}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(commentActions.loadComment(+id));
    }, [id]);
    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export default Comment;