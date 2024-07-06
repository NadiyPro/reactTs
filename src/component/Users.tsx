import React, {Component} from 'react';
import {IUsers} from "../module/IUsers";
import {getAllUsers} from "../servise/userServise";
import {getUserPost} from "../servise/userServise";
import UserComponent from "./User";
import {IPosts} from "../module/IPosts";

type UsersState = {
    users:IUsers[]
}
type UsersProps = {
    getPost: (userId:number) => void
}
class UsersComponents extends Component<UsersProps, UsersState>{
    state: UsersState = {
        users: []
    }

    componentDidMount() {
        getAllUsers().then(value => this.setState({users: value.users}));
    }

    render() {
      const {getPost}=this.props
        return (
            <div>
                <div>
                    {this.state.users.map(user => (<UserComponent key={user.id} user={user} getPost={getPost}/>))}
                </div>
            </div>
        )
    }
}

export default UsersComponents