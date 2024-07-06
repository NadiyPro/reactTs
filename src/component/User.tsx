import React, {Component} from "react";
import { IPosts } from "../module/IPosts";
import {IUsers} from "../module/IUsers";
import {getUserPost} from "../servise/userServise";

interface UserProps{
    user:IUsers
}
interface UserState{
    getPost: (id:number) => void
    posts: IPosts []
}
class UserComponent extends Component<UserProps, UserState>{

    componentDidMount() {
        getUserPost(this.props.user.id).then(value => this.setState({posts: value.posts}))
    }
    render() {
        return (<div>
            {this.props.user.id} {this.props.user.firstName} {this.props.user.lastName} {this.props.user.maidenName} age - {this.props.user.age}
            <button onClick={() => {
                this.state.getPost(this.props.user.id)
            }}>Click
            </button>
        </div>);
    }
}
export default UserComponent