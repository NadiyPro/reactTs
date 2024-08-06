import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../page/UsersPage";
import PostsPage from "../page/PostsPage";
import CommentsPage from "../page/CommentsPage";
import React from "react";
import MainLayout from "../layout/MainLayout";
import ErrorElement from "../layout/errorElement";
import User from "../page/User";
import Post from "../page/Post";
import Comment from "../page/Comment";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout/>,
            errorElement:<ErrorElement/>,
            children: [
                {path:'users', element: <UsersPage/>},
                {path:'posts', element: <PostsPage/>},
                {path:'comments', element: <CommentsPage/>},
                {path:'users/:id', element: <User/>},
                {path:'posts/:id/', element: <Post/>},
                {path:'comments/:id', element: <Comment/>}
            ]
        }
    ]
)