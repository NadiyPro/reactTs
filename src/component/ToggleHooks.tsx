import React from 'react';
import {useToggle} from "./Toggle";

const ToggleHooks = () => {
    let [colorToggle,backgroundColor]=useToggle(false)
    return (
        <div style={{backgroundColor: backgroundColor, height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick = {colorToggle} style={{height: '70px', width: '200px', backgroundColor: 'darkcyan', fontSize: '24px'}}>click</button>
        </div>
    );
};

export default ToggleHooks;