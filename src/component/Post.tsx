import React, {FC} from 'react';
import {IPosts} from "../module/IPosts";


interface IPost{
    post:IPosts
}
const Post:FC<IPost> = ({post}) => {
    return (
        <div>
            <div><h2>{post.title}</h2> <p> userId - {post.userId} id post - {post.id} </p> <p>body
                - {post.body}</p></div>
        </div>
    );
};

export default Post;