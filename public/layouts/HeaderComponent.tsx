import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./HeaderComponent.module.css"

const HeaderComponent = () => {
    return (
        <div className={style.header}>
            <ul>
                <li><NavLink to={'/'}></NavLink></li>
                <li><NavLink to={'cars'}></NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default HeaderComponent;