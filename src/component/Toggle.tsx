import React, { useState} from 'react';

const Toggle = (init:boolean) => {
    const [toggle, setToggle] = useState<boolean>(init)
  const colorToggle = () => setToggle(value => !value)
    return [
        toggle,colorToggle
    ];
};

export default Toggle;