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

    }, [id]);
    return (
        <div>
            {posts.map(post => <div key={post.id}>userId:{post.userId} id:{post.id} title:{post.title} body:{post.body} <NavLink to={'/posts/' + post.userId + '/comments'}>detail comments</NavLink> </div>)}
        </div>
    );
};

export default Posts;