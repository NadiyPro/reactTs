import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {NavLink, useParams} from "react-router-dom";


const User = () => {
    let {id} = useParams();
    let {userStore: {user}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(userActions.loadUser(+id));
    }, [id]);
    return (
        <div>
            <h3>User Details</h3>
            {(JSON.parse(JSON.stringify(user)))} <p><NavLink to={'/users/' + id + '/posts'}>detail posts</NavLink></p>
        </div>
    );
};

export default User;