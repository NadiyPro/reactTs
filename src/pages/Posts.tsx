import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../servise/usersService";
import {IPosts} from "../module/IPosts";
import Post from "../component/Post";

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
               posts.map(post => <Post post={post}/>)
            }
        </div>
    );
};

export default Posts;