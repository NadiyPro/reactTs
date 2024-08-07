import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/slices/postSlice";

const Post = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const post = useAppSelector(state => state.postStore.post);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(postActions.loadPost(+id));
    }, [id]);
    return (
        <div>
            <h3>Comments</h3>

            {post &&  post.map(value =>
                <div key={value.id} >
                    <h3>userId:{value.userId}</h3>
                    <p>id:{value.id} title:{value.title} body:{value.body}</p>
                    <button onClick={() => navigate('/posts/' + id + '/comments')}>detail comments</button>
                    </div>)}


        </div>
    );
};

export default Post;