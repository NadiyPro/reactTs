import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../component/HeaderComponent";
import style from "../module/styleDom.module.css"


const MainLayout = () => {
    return (
        <div className={style.fon}>
            <div><HeaderComponent/></div>
            <div className={style.textDisplay}><Outlet/></div>
        </div>
    );
};

export default MainLayout;