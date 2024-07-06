import {Component} from 'react';
import './App.css';
import {IPosts} from "./module/IPosts";
import UsersComponents from "./component/Users";
import {getUserPost} from "./servise/userServise";
import UserComponent from "./component/User";

type AppState = {
    userId: number | null;
    posts: IPosts[],
}

class App extends Component<any, AppState>{
    state:AppState = {
        userId: null,
        posts: []
    }

    render() {
        const getPost = (userId:number) => {getUserPost(userId).then(value => this.setState({posts: value.posts}))};
        return (<div>
            <div>
                <UsersComponents getPost={getPost}/>
            </div>
            <hr/>
            <div>
                {this.state.posts.map(post => <div key={post.id}><h2>{post.title}</h2> <p> userId - {post.userId} id post - {post.id} </p> <p>body - {post.body}</p></div>)}
            </div>
        </div>);
    }
}
export default App;
