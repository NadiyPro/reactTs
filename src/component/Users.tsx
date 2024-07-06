import React, {Component, FC, useEffect, useState} from 'react';
import {IUsers} from "../module/IUsers";
import {getAllUsers, getUserPost} from "../servise/userServise";
// import UserComponent from "./User";
import {IPosts} from "../module/IPosts";
type UsersState = {
    users:IUsers[]
}

class UsersComponents extends Component<{}, UsersState>{
    state: UsersState = {
        users: []
}

    componentDidMount() {
        getAllUsers().then(value => value.users)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}