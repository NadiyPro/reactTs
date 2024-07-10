import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../servise/usersService";
import {IUsers} from "../module/IUsers";



const Users:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(value  => setUsers(value.users))
    }, []);

    return (
        <div>
            {
                users.map(user => <div> {user.id} {user.firstName} {user.lastName} {user.maidenName} age - {user.age}</div>)
            }
        </div>
    );
};

export default Users;