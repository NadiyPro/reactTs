import React, {FC} from 'react';
import {IPosts} from "../module/IPosts";
import {useParams} from "react-router-dom";



interface IPost{
    post:IPosts
}
const Post:FC<IPost> = ({post}) => {
    const {id} = useParams()
console.log(id)
    return (
        <div>
            {id}
            <div><h2>{post.title}</h2> <p> userId - {post.userId} id post - {post.id} </p> <p>body
                - {post.body}</p></div>
        </div>
    );
};

export default Post;