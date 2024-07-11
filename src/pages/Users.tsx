import React, {FC, useEffect, useState} from 'react';
import {getAllUsers} from "../servise/usersService";
import {IUsers} from "../module/IUsers";
import {NavLink} from "react-router-dom";



const Users:FC = () => {
    const [users,setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getAllUsers().then(value => {
          setUsers(value)
        })
    }, []);
console.log(users)
    return (
        <div>
            {
                users.map(user => <div key={user.id}><p> id:{user.id} <br/> name: {user.name}
                    <br/> username: {user.username} <br/> email: {user.email}
                    <br/><NavLink to={user.id.toString()}>posts</NavLink></p>
                    <p>address: <br/> suite:{user.address.suite} <br/> city:{user.address.city}
                        <br/>zipcode:{user.address.zipcode} <br/> geo: <br/> lat:{user.address.geo.lat}
                        <br/> lng:{user.address.geo.lng} <br/> phone: {user.phone} <br/> website:{user.website}  </p>
                    <p> company: <br/> name: {user.company.name} <br/> catchPhrase: {user.company.catchPhrase}
                        <br/> bs: {user.company.bs} </p>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export default Users;