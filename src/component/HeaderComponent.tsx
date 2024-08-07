import React from 'react';
import {NavLink} from "react-router-dom";


const HeaderComponent = () => {
    return (

            <div>
                <div><NavLink to={'users'}>users </NavLink></div>
                <div><NavLink to={'posts'}>posts </NavLink></div>
                <div><NavLink to={'comments'}>comments </NavLink></div>
            </div>

    );}

export default HeaderComponent;