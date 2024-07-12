import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import ErrorLayout from "./layouts/ErrorLayout";
import Post from "./pages/Post";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const browserRouter = createBrowserRouter([
    {path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {path:'users', element: <Users/>},
            {path:'posts', element: <Posts/>},
            {path:'users/:id', element: <Post/>},
            {path:'comments', element: <Comments/>}
        ]
    }
])

root.render(
    <RouterProvider router={browserRouter} />
);

reportWebVitals();
