import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
import React from "react";

const browserRouter = createBrowserRouter([
    {path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {path:'users', element: <Users/>},
            {path:'users/:id/posts', element: <Posts/>},
            {path:'posts', element: <Posts/>},
            {path:'posts/:id/comments', element: <Comments/>},
            {path:'comments', element: <Comments/>}
        ]
    }
])

export default browserRouter