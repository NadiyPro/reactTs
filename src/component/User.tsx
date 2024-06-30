import React, {FC} from "react";
import {IUsers} from "./IUsers";

interface IUser{
    user:IUsers
    getPost:(id:number) => void
}
const UserComponent: FC<IUser> = ({user,getPost}) => {
    return (
        <div>
            {user.id} {user.firstName} {user.lastName} {user.maidenName} age - {user.age}
            <button onClick={() => {
                getPost(user.id)}}>Click</button>
        </div>
    )
};

export default UserComponent