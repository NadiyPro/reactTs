import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getUserPost} from "../servise/usersService";
import {IPosts} from "../module/IPosts";
import {IUsers} from "../module/IUsers";

const Post = () => {
    let {id} = useParams();
    let location= useLocation();
    let state: IPosts = location.state
    let [post, setPost] = useState<IPosts | null>(null)
    useEffect(() => {
        getUserPost(state.id + '').then(value => console.log(value))
    }, []);

    return (
        <div>
           htht
        </div>
    );
};

export default Post;