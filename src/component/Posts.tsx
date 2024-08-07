import React, { useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";
import {useNavigate, useParams} from "react-router-dom";

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
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            <h3>Posts</h3>

            {posts.map(post =>
                <div key={post.id}>
                    <h3>userId:{post.userId}</h3>
                    <p>id:{post.id} title:{post.title} body:{post.body}</p>
                    <button onClick={() => navigate('/posts/' + post.userId + '/comments')}>detail comments</button>
                </div>)}
        </div>
    );
};

export default Posts;