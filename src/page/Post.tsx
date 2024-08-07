import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const Post = () => {
    const {id} = useParams();
    const post = useAppSelector(state => state.postStore.post);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(postActions.loadPost(+id));
    }, [id, dispatch]);
    return (
        <div>

            {post ? (
                <div>
                    <p>body: {post.body}</p>
                    <p>title: {post.title}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}

        </div>
    );
};

export default Post;