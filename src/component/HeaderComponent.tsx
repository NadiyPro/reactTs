import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../module/styleDom.module.css"


const HeaderComponent = () => {
    return (

            <div className={style.menu}>
                <NavLink to={'users'} className={style.menuText}>Users </NavLink>
                <NavLink to={'posts'} className={style.menuText}>Posts </NavLink>
                <NavLink to={'comments'} className={style.menuText}>Comments </NavLink>
            </div>

    );}

export default HeaderComponent;