import React, { useState} from 'react';

export const useToggle = (init:boolean) => {
    const [toggle, setToggle] = useState<boolean>(init)
    const [backgroundColor, setBackgroundColor] = useState<string>('cornflowerblue')
    const colorToggle = () => {
        setToggle(value => !value);
        setBackgroundColor(toggle? 'cornflowerblue' : 'rosybrown' )
  }

    return [colorToggle,backgroundColor];
};

