import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../servise/usersService";
import {IPosts} from "../module/IPosts";

const Posts = () => {
    const [posts,setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        getAllPosts().then(value => {
            setPosts(value)
        })
    }, []);
    return (
        <div>
            {
                posts && posts.map(post => <div key={post.id}><h2>{post.title}</h2> <p> userId - {post.userId} id post - {post.id} </p> <p>body - {post.body}</p></div>)
            }
        </div>
    );
};

export default Posts;