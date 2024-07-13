import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><NavLink to={'users'}>users</NavLink></li>
            <li><NavLink to={'posts'}>posts</NavLink></li>
            <li><NavLink to={'comments'}>comments</NavLink></li>
        </ul>
    );
};

export default Menu;