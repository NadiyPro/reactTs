import React, {Component, FC} from "react";
import {IUsers} from "../module/IUsers";
import "./userPostStyle.css";

interface PostState{
    user:IUsers
    getPost:(id:number) => void
}

class UserComponent extends Component<{}, PostState>{

    render() {
        return (<div>

        </div>);
    }
}