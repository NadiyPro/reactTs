import {Component} from 'react';
import './App.css';
import {IPosts} from "./module/IPosts";
import UsersComponents from "./component/Users";

type AppState = {
    userId: number | null;
    posts: IPosts[]
}

class App extends Component<any, AppState>{
    state:AppState = {
        userId:null,
        posts: []
    }
    render() {
        return (<div>
            <div>
                <UsersComponents/>
            </div>
            <hr/>
            <div>

            </div>
        </div>);
    }
}
export default App;
