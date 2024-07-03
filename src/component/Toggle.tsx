import React, {useEffect, useState} from 'react';

interface IToggle {
    className:string
}
const Toggle = (init:boolean) => {
    const [toggle, setToggle] = useState(init)
  const colorToggle = () => setToggle(value => !value)
    return (
        <div>

        </div>
    );
};

export default Toggle;