import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const Post = () => {
    let {id} = useParams();
    let post = useAppSelector(state => state.postStore.post);

    let dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(postActions.loadPost(+id));
    }, [id, dispatch]);
    return (
        <div>

            {post ? (
                <div>
                    <p><strong>body:</strong> {post.body}</p>
                    <p><strong>title:</strong> {post.title}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Post;