import React, {FC} from 'react';
import Toggle from "./component/Toggle";
import "./module/styleToggle.css"


const App:FC = ()=> {

    return (
        <div>
            <Toggle init={true}/>
        </div>
    );
}
export default App;
