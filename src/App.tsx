import React, {FC} from 'react';
import './App.css';
import UsersComponents from "./components/Users";


const App:FC = () => {

    return (
        <div>
            {
                <UsersComponents/>
            }
        </div>
    );
}
export default App;