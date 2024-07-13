import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainLayout from "./layouts/MainLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import Users from "./pages/Users";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Comments from "./pages/Comments";
import Posts from "./pages/Posts";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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

root.render(
    <RouterProvider router={browserRouter} />
);
reportWebVitals();
