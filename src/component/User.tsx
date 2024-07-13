import React, {FC} from 'react';
import {IUsers} from "../module/IUsers";

interface IUser{
    user:IUsers
}
const User:FC<IUser> = ({user}) => {

    return (
        <div>
            <div><h4> id:{user.id} </h4> <p> name: {user.name}
                <br/> username: {user.username} <br/> email: {user.email}<br/></p>

                <p>address: <br/> suite:{user.address.suite} <br/> city:{user.address.city}
                    <br/>zipcode:{user.address.zipcode} <br/> geo: <br/> lat:{user.address.geo.lat}
                    <br/> lng:{user.address.geo.lng} <br/> phone: {user.phone} <br/> website:{user.website}  </p>

                <p> company: <br/> name: {user.company.name} <br/> catchPhrase: {user.company.catchPhrase}
                    <br/> bs: {user.company.bs} </p>
                <hr/>
            </div>
        </div>
    );
};

export default User;