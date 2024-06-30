import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "./IUsers";
import {getAllUsers, getUserPost} from "./userServise";
import UserComponent from "./User";
const UsersComponents:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(value => setUsers(value.users))
    }, []);

    const getPost =  (id:number) => {getUserPost(id).then(value =>setUsers(value.post))}

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

                }
            </div>
        </div>
    );
};

export default UsersComponents;