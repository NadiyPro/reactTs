import React, {FC} from "react";
import {IUsers} from "./IUsers";
import {getUserPost} from "./userServise";

interface IUser{
    user:IUsers
    getPost:(id:number) => void
}
const UserComponent: FC<IUser> = ({user,getPost}) => {
    return (
        <div>
            {user.firstName} {user.lastName} {user.maidenName} {user.age}
            <button onClick = {() =>
                getUserPost(user.id)}>Click</button>
        </div>
    )
};

export default UserComponent