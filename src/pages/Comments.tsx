import React, {FC, useEffect, useState} from 'react';
import {getAllPostComments, getPostComments} from "../servise/usersService";
import {IComments} from "../module/IComments";
import Comment from "../component/Comment";
import {useParams} from "react-router-dom";

const Comments:FC  = () => {
    let {id} = useParams();
    const [comments,setComments] = useState<IComments[]>([]);

    useEffect(() => {
        if(id){
            getPostComments(id).then(value => {
                setComments(value)
            })
        } else {getAllPostComments().then(value => {
                setComments(value)})}
    }, [id]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;