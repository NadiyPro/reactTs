import React, {FC} from 'react';
import {IPosts} from "../module/IPosts";
import {useNavigate} from "react-router-dom";

interface IPost{
    post:IPosts
}
const Post:FC<IPost> = ({post}) => {
    let navigate = useNavigate();
    return (
        <div>
            <div><h2>{post.title}</h2> <p> userId - {post.userId} id post - {post.id} </p> <p>body
                - {post.body}</p></div>
            <button onClick={() => navigate(post.id.toString() + '/comments')}>comment details</button>
        </div>
    );
};

export default Post;