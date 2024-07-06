import React, {Component} from "react";
import {IUsers} from "../module/IUsers";

type UserProps = {
    user:IUsers,
    getPost: (userId:number) => void
}
class UserComponent extends Component<UserProps, {}>{

    render() {
        return (<div>
            <div>
                {this.props.user.id} {this.props.user.firstName} {this.props.user.lastName} {this.props.user.maidenName} age
                - {this.props.user.age}
                <button onClick={() => {
                    this.props.getPost(this.props.user.id)
                }}>Click
                </button>
            </div>
        </div>);
    }
}

export default UserComponent