import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getUserPost} from "../servise/usersService";
import {IPosts} from "../module/IPosts";



const Post = () => {
    let {id} = useParams();
    let location= useLocation();
    let state = location.state
    let [post, setPost] = useState<IPosts[]>([])
    useEffect(() => {
        getUserPost(state.userId + '').then((value) => {setPost(value)})
    }, [id]);

    return (
        <div>

            dddd

        </div>
    );
};

export default Post;