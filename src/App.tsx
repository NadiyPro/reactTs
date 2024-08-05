import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector } from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";
import {commentActions, commentSlice} from "./redux/slices/commentSlice";

const App = () => {

    let {userSlice: {users,isLoaded}, postSlice:{posts}, commentSlice:{comments}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments);
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <div key={user.id}>{user.name}</div>)}

            <hr/>

            {posts.map(post => <div key={post.id}>{post.id} {post.title}</div>)}

            <hr/>

            {comments.map(comment => <div key={comment.id}>{comment.id} {comment.body}</div>)}

        </div>
    );
}

export default App;
