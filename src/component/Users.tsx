import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {NavLink} from "react-router-dom";

const Users = () => {
    const users= useAppSelector(state => state.userStore.users);
    const isLoaded = useAppSelector(state => state.postStore.isLoaded);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <div key={user.id}> <NavLink to={'/users/'+ user.id}><h3>{user.name}</h3></NavLink></div>)}
        </div>
    );
};

export default Users;