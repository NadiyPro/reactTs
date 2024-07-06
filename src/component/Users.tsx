import React, {Component} from 'react';
import {IUsers} from "../module/IUsers";
import {getAllUsers} from "../servise/userServise";
import UserComponent from "./User";

type UsersState = {
    users:IUsers[],
}

class UsersComponents extends Component<{}, UsersState>{
    state: UsersState = {
        users: []
    }

    componentDidMount() {
        getAllUsers().then(value => this.setState({users: value.users}));
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.users.map(user => (<UserComponent key={user.id} user={user} />))}
                </div>
            </div>
        )
    }
}

export default UsersComponents