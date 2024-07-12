import React, {useEffect, useState} from 'react';
import { getPostComments} from "../servise/usersService";
import {IComments} from "../module/IComments";

const Comments = () => {
    const [comments,setComments] = useState<IComments[]>([]);

    useEffect(() => {
        getPostComments().then(value => {
            setComments(value)
        })
    }, []);
    return (
        <div>
            {comments.map(comment => <div key={comment.id}><h4>postId: {comment.postId}</h4>id: {comment.id} <br/>
                name: {comment.name} <br/> email: {comment.email} <br/> body: {comment.body} </div>)}
        </div>
    );
};

export default Comments;