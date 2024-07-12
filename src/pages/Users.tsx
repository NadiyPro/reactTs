import React, {FC, useEffect, useState} from 'react';
import {getAllUsers, getUserPost} from "../servise/usersService";
import {IUsers} from "../module/IUsers";
import User from "../component/User";
import {IPosts} from "../module/IPosts";



const Users:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers().then(value => {
          setUsers(value)
        })
    }, []);

    const [posts,setPosts] = useState<IPosts[]>([]);
    const getPost =  (userId:string) => {getUserPost(userId).then(value =>setPosts(value))}
    return (
        <div>
            {
                users.map(user => <User user={user} getPost={getPost}/>)
            }
        </div>
    );
};

export default Users;