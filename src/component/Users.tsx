import React, {Component, FC, useEffect, useState} from 'react';
import {IUsers} from "../module/IUsers";
import {getAllUsers, getUserPost} from "../servise/userServise";
// import UserComponent from "./User";
import {IPosts} from "../module/IPosts";
type UsersState = {
    users:IUsers[]
    posts:IPosts[]
}
class UsersComponents extends Component<{}, UsersState>{
    state: UsersState = {
        users: [],
        posts: []
}
    componentDidMount() {
        getAllUsers().then(value => this.state.users)
    }
    // componentDidMount(id:number) {
    //     getUserPost(id).then(value => this.state.posts)
    // }

    render() {
        return (
            <div>
                {this.state.users.map(user=> (<div> {user.id} {user.firstName} {user.lastName} {user.maidenName} age - {user.age}</div>))}
            </div>
        )
    }
}