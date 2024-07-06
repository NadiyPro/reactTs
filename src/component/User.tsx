import React, {Component} from "react";
import {IUsers} from "../module/IUsers";
import "./userPostStyle.css";

interface PostState{
    user:IUsers
    getPost:(id:number) => void
}

class UserComponent extends Component<{}, PostState>{
    render() {
        return (<div>
                {this.state.user.id} {this.state.user.firstName} {this.state.user.lastName} {this.state.user.maidenName} age - {this.state.user.age}
                <button onClick={() => {
                    this.state.getPost(this.state.user.id)
                }}>Click
                </button>
        </div>);
    }
}
export default UserComponent