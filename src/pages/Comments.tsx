import React, {FC, useEffect, useState} from 'react';
import { getPostComments} from "../servise/usersService";
import {IComments} from "../module/IComments";
import Comment from "../component/Comment";

const Comments:FC  = () => {
    const [comments,setComments] = useState<IComments[]>([]);

    useEffect(() => {
        getPostComments().then(value => {
            setComments(value)
        })
    }, []);
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;