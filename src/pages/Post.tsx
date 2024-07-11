import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getUserPost} from "../servise/usersService";
import {IPosts} from "../module/IPosts";
import {IUsers} from "../module/IUsers";
import posts from "./Posts";

const Post = () => {
    let {id} = useParams();
    let location= useLocation();
    let state = location.state
    let [post, setPost] = useState<IPosts | null>(null)
    useEffect(() => {
        getUserPost(state.id + '').then((value:IPosts[]) => {setPost(value)})
    }, [id]);

    return (
        <div>
            {
                post?.title
            }
        </div>
    );
};

export default Post;