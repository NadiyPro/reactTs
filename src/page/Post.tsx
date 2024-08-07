import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const Post = () => {
    const {id} = useParams();
    const post = useAppSelector(state => state.postStore.post);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(postActions.loadPost(+id));
        console.log(post)
    }, [id]);

    console.log(post);
    return (
        <div>

            {JSON.stringify(post)}
                <NavLink to={'/posts/' + id + '/comments'}>detail comments</NavLink>


        </div>
    );
};

export default Post;