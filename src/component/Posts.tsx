import React, { useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";
import {useNavigate, useParams} from "react-router-dom";
import style from "../module/styleDom.module.css";

const Posts = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const posts = useAppSelector(state => state.postStore.posts);
    const isLoaded = useAppSelector(state => state.postStore.isLoaded);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
        if (id) dispatch(postActions.loadPost(+id));

    }, [id]);

    return (
        <div className={style.styleUser}>
            {!isLoaded && <div>Loading in process....</div>}

            <h2>Posts</h2>

            {posts.map(post =>
                <div key={post.id} className={style.divRend}>
                    <h3>userId:{post.userId}</h3>
                    <h4>id:{post.id}</h4>
                    <p> title:{post.title} body:{post.body}</p>
                    <button onClick={() => navigate('/posts/' + post.userId + '/comments')}>detail comments</button>
                </div>)}
        </div>
    );
};

export default Posts;