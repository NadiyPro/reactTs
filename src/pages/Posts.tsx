import React, {FC, useEffect, useState} from 'react';
import {getAllPosts} from "../servise/usersService";
import {IPosts} from "../module/IPosts";
import Post from "../component/Post";


const Posts:FC = () => {
    const [posts,setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        getAllPosts().then(value => {
            setPosts(value)
        })
    }, []);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;