import React, {FC} from 'react';
import {IComments} from "../module/IComments";

interface IComment{
    comment:IComments
}
const Comment:FC<IComment> = ({comment}) => {
    return (
        <div>
            <div key={comment.id}><h4>postId: {comment.postId}</h4>id: {comment.id} <br/>
                name: {comment.name} <br/> email: {comment.email} <br/> body: {comment.body} </div>
        </div>
    );
};

export default Comment;