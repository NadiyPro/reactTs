import React, {FC} from 'react';
import {IPaginatedModel} from "../module/IPaginatedModel";
import {useSearchParams} from "react-router-dom";

interface IPropsPaginated{
    next: null | IPaginatedModel,
    prev: null | IPaginatedModel
}
const PaginatedComponent:FC<IPropsPaginated> = ({next,prev}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const changePage = (nextPrev:string) => {
        switch (nextPrev) {
            case 'next':
                setQuery({...next});
                break;
            case 'prev':
                setQuery({...prev});
                break;
        }
    }
    return (
        <div>
            <button disabled={!next} onClick={() => {changePage('next')}}>next</button>
            <button disabled={!prev} onClick={() => {changePage('prev')}}>prev</button>
        </div>
    );
};

export default PaginatedComponent;