import React, {FC, useEffect, useState} from 'react';
import {getAllPosts,getPosts} from "../servise/usersService";
import {IPosts} from "../module/IPosts";
import Post from "../component/Post";
import {useParams} from "react-router-dom";


const Posts:FC = () => {
    let {id} = useParams();
    const [posts,setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        if(id){
            getPosts(id).then(value => {
                setPosts(value)
            })
        } else {getAllPosts().then(value => {
            setPosts(value)
        })}
    }, [id]);

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;