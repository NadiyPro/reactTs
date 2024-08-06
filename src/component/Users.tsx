import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {NavLink} from "react-router-dom";

const Users = () => {
    let {userStore: {users,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <div key={user.id}><NavLink to={'/users/'+user.id}>{user.name}</NavLink></div>)}
        </div>
    );
};

export default Users;