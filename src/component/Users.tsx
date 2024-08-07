import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {NavLink} from "react-router-dom";
import style from "../module/styleDom.module.css";

const Users = () => {
    const users= useAppSelector(state => state.userStore.users);
    const isLoaded = useAppSelector(state => state.postStore.isLoaded);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div className={style.styleUser}>
            {!isLoaded && <div>Loading in process....</div>}

            <h2>Users</h2>

            {users.map(user =>
                <div key={user.id} className={style.divRend}>
                   <p><NavLink to={'/users/' + user.id} style={{color:'#4a555e'}}>{user.name}</NavLink></p>
            </div>)}
        </div>
    );
};

export default Users;