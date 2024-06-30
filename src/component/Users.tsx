import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "./IUsers";
import {getAllUsers, getUserPost} from "./usersServise";
import UserComponent from "./User";
const UsersComponents:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(value => setUsers(value.users))
    }, []);

    const getPost =  (id:number) => {getUserPost(id).then(post =>console.log(post))}

    return (
        <div>
            {
                users.map(user => <UserComponent
                    key={user.id} user={user} getPost={getPost}
                />)
            }
        </div>
    );
};

export default UsersComponents;