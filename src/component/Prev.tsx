import React, {FC, useState} from 'react';
import {usePrevHook} from "./PrevHook";

const Prev:FC = () => {
    const [count,setCount] = useState(0)
    let prevCount = usePrevHook(count);
    return (
        <div style={{
            backgroundColor: 'mediumseagreen',
            height: '50vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h2>Count: {count}</h2>
            <h3>Prev count: {prevCount}</h3>
            <button onClick={() => setCount(count + 1)}
                    style={{height: '60px', width: '200px', backgroundColor: 'darkcyan', fontSize: '24px', borderRadius: '15px'}}>Click Prev
            </button>
            <button onClick={() => {setCount(0)}}
                    style={{height: '60px', width: '200px', backgroundColor: 'darkcyan', fontSize: '24px', borderRadius: '15px'}}>Clean counter
            </button>
        </div>
    );
};

export default Prev;