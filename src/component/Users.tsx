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

            <h3>Users</h3>

            {users.map(user =>
                <div key={user.id}>
                   <p><NavLink to={'/users/' + user.id}>{user.name}</NavLink></p>
            </div>)}
        </div>
    );
};

export default Users;