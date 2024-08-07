import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userActions} from "../redux/slices/userSlice";
import { useNavigate, useParams} from "react-router-dom";


const User = () => {
    const navigate = useNavigate();
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
                    <p>name:{user.name} <br/> username:{user.username} <br/> email:{user.email}</p>
                    <button onClick={() => navigate('/users/' + user.id + '/posts')}>details post</button>
                </div>}
        </div>
    );
};

export default User;