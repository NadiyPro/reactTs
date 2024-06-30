import React, {FC} from "react";
import {IUsers} from "./IUsers";
import "./userPostStyle.css";

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