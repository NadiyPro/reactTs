import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "./IUsers";
import {getAllUsers, getUserPost} from "./userServise";
import UserComponent from "./User";
import {IPosts} from "./IPosts";

const UsersComponents:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(value => setUsers(value.users))
    }, []);
    const [posts,setPosts] = useState<IPosts[]>([]);
    const getPost =  (id:number) => {getUserPost(id).then(value =>setPosts(value.posts))}

    return (
        <div>
            <hr/>
            <div>
                {
                    users.map(user => <UserComponent
                        key={user.id} user={user} getPost={getPost}
                    />)
                }
            </div>
            <hr/>
            <div>
                {
                    posts.map(post => <div key={post.userId}><h2>{post.title}</h2> <p> {post.userId} </p> <p>{post.id} </p> <p>{post.body}</p></div>)
                }
            </div>
        </div>
    );
};

export default UsersComponents;