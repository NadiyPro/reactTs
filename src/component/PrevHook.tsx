import {useRef} from 'react';

export const usePrevHook = (value:number):number | undefined => {
    const currentValue = useRef<number>(value)
    const prevValue = useRef<number>()
    if(currentValue.current !== value){
        prevValue.current = currentValue.current;
        currentValue.current = value;
    }
    return prevValue.current;
};