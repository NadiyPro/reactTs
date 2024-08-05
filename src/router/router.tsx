import {createBrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import MainLayout from "../layouts/MainLayout";
import CarsPage from "../pages/CarsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>Error!</h1>,
        children:[
            {index: true, element: <AuthPage/>},
            {path: 'cars', element: <CarsPage/>}
        ]
    }
    ])
export default router;