import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";
import {NavLink, useParams} from "react-router-dom";

const Posts = () => {
    let {id} = useParams();
    let {postStore:{posts}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
        if(id) dispatch(postActions.loadPost(+id));

    }, []);
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.id} {post.title} <NavLink to={'/posts/' + id + '/comments'}>detail comments</NavLink> </div>)}
        </div>
    );
};

export default Posts;