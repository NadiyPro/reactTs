import React, {useEffect, useState} from 'react';
import { getPostComments} from "../servise/usersService";
import {IComments} from "../module/IComments";
import Comment from "../component/Comment";

const Comments = () => {
    const [comments,setComments] = useState<IComments[]>([]);

    useEffect(() => {
        getPostComments().then(value => {
            setComments(value)
        })
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment comment={comment}/>)}
        </div>
    );
};

export default Comments;