import React, {Component} from "react";
import {IUsers} from "../module/IUsers";

interface UserProps{
    user:IUsers
}
class UserComponent extends Component<UserProps, {}>{

    render() {
        return (<div>
            <div>
                {this.props.user.id} {this.props.user.firstName} {this.props.user.lastName} {this.props.user.maidenName} age
                - {this.props.user.age}
                <button onClick={() => {

                }}>Click
                </button>
            </div>
        </div>);
    }
}

export default UserComponent