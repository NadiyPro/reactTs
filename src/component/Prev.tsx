import React, {useState} from 'react';
import {usePrevHook} from "./PrevHook";

const Prev = () => {
    const [count,setCount] = useState(0)
    let prevCount = usePrevHook(count);
    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Prev count: {prevCount}</h2>
            <button onClick={() => setCount(count + 1)}>Click Prev</button>
        </div>
    );
};

export default Prev;