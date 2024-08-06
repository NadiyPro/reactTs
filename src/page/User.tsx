import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {useParams} from "react-router-dom";

const User = () => {
    let {id} = useParams();
    let user = useAppSelector(state => state.userSlice.user);

    let dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(userActions.loadUser(+id));
    }, [id]);
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
};

export default User;