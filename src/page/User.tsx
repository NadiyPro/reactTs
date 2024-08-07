import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {NavLink, useParams} from "react-router-dom";


const User = () => {
    const {id} = useParams();
    const user = useAppSelector(state => state.userStore.user);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(userActions.loadUser(+id));
    }, [id,dispatch]);
    return (
        <div>
            <h3>User Details</h3>

            {user &&
                <div key={user.id}>
                <p>id:{user.id}</p>
                <p>name:{user.name} username:{user.username} email:{user.email}</p>
                <p><NavLink to={'/users/' + user.id + '/posts'}>details post</NavLink></p>
                </div>}
        </div>
    );
};

export default User;