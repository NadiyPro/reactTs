import React, {Component} from 'react';
import {IUsers} from "../module/IUsers";
import {getAllUsers, getUserPost} from "../servise/userServise";
// import UserComponent from "./User";
import {IPosts} from "../module/IPosts";
import UserComponent from "./User";
type UsersState = {
    users:IUsers[],
    posts: IPosts[]
}
class UsersComponents extends Component<{}, UsersState>{
    state: UsersState = {
        users: [],
        posts: []
}
    componentDidMount() {
        getAllUsers().then(value => this.state.users)
        const getPost =  (id:number) => {getUserPost(id).then(value =>this.state.posts)}
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.users.map(user => (<UserComponent key={user.id}/>))}
                </div>
                <hr/>
                <div>
                    {
                        this.state.posts.map(post => <div key={post.id}><h2>{post.title}</h2> <p> userId - {post.userId} id post
                            - {post.id} </p> <p>body - {post.body}</p></div>)
                    }
                </div>
            </div>
        )
    }
}

export default UsersComponents