import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getUserPost} from "../servise/usersService";
import {IPosts} from "../module/IPosts";

const Post = () => {
    const {id} = useParams()
    const [posts,setPosts] = useState<IPosts[]>([]);
    useEffect(() => {
        getUserPost(userId).then(value => setPosts(value))
    }, []);
    return (
        <div>
            ffff {id}
        </div>
    );
};

export default Post;