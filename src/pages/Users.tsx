import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../servise/usersService";
import {IUsers} from "../module/IUsers";
import User from "../component/User";


const Users:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers().then(value => {
          setUsers(value)
        })
    }, []);


    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;