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
    }, [id]);
    return (
        <div>
            <h3>User Details</h3>

            {user && user.map(value => <div key={value.id}> <h3>{value.name}</h3><p><NavLink to={'/users/'+ value.id}><h3>{value.name}</h3></NavLink></p></div>)}
        </div>
    );
};

export default User;