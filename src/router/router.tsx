import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../page/UsersPage";
import PostsPage from "../page/PostsPage";
import CommentsPage from "../page/CommentsPage";
import React from "react";
import MainLayout from "../layout/MainLayout";
import HeaderComponent from "../component/HeaderComponent";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout/>,
            children: [
                {path:'users', element: <UsersPage/>},
                {path:'posts', element: <PostsPage/>},
                {path:'comments', element: <CommentsPage/>}
            ]
        }
    ]
)