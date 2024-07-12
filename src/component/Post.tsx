import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../module/IPosts";
import {useParams} from "react-router-dom";
import {getUserPost} from "../servise/usersService";

interface IPost{
    post:IPosts
}
const Post:FC<IPost> = ({post}) => {
    const {id} = useParams()
console.log(id)
    const [posts,setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        getUserPost(post.userId).then(value => setPosts(value))
    }, []);

    return (
        <div>
            <div><h2>{post.title}</h2> <p> userId - {post.userId} id post - {post.id} </p> <p>body
                - {post.body}</p></div>
        </div>
    );
};

export default Post;