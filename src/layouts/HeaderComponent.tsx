import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={style.header}>
            <ul>
                <li><NavLink to={'/'}>auth page</NavLink></li>
                <li><NavLink to={'cars'}>cars page</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;