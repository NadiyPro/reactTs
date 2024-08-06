import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import {useParams} from "react-router-dom";

const User = () => {
    let {id} = useParams();
    let {userStore: {user}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        if(id) dispatch(userActions.loadUser(+id));
    }, [id]);
    return (
        <div>
            {JSON.parse(JSON.stringify(user))}
        </div>
    );
};

export default User;