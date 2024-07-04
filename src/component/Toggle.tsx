import React, {FC} from 'react';
import {useToggle} from "./ToggleHook";

const Toggle:FC= () => {
    let [colorToggle,backgroundColor]=useToggle(false)
    return (
        <div style={{backgroundColor: backgroundColor, height: '50vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick = {colorToggle} style={{height: '70px', width: '200px', backgroundColor: 'darkcyan', fontSize:'24px', borderRadius: '15px'}}>Click Toggle</button>
        </div>
    );
};

export default Toggle;