import React from 'react';
import {useToggle} from "./Toggle";

const ToggleHooks = () => {
    let [colorToggle,backgroundColor]=useToggle(false)
    return (
        <div style={{backgroundColor: backgroundColor}}>
            <button onClick = {colorToggle}>click</button>
        </div>
    );
};

export default ToggleHooks;