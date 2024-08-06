import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const Posts = () => {
    let {postSlice:{posts}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.id} {post.title}</div>)}
        </div>
    );
};

export default Posts;