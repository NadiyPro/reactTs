import {createSlice, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";
import {loadUsers} from "../reducers/users/users.extra.reducers";
import {loadUser} from "../reducers/users/user.extra.reducers";


type UserSliceType = {
    users: IUser[],
    isLoaded: boolean,
    user: IUser[] | null,
    error: string
}

const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
    user: null,
    error:''
}

export const userSlice = createSlice({
    name: "usersSlice",
    initialState: userInitState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addMatcher(isRejected (loadUsers,loadUser), (state, action) => {
                state.error = action.payload as string;
            })
});

export const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUser
}