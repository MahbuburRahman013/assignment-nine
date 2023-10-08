import { createBrowserRouter } from "react-router-dom";
import AllBlogs from "../components/AllBlogs";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import Registeration from "../components/Registeration";
import ServiceDetails from "../components/ServiceDetails";
import Layout from "../Layout/Layout";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/wedding.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registeration></Registeration>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path:'/blogs',
                element:<PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
            }
        ]
    }
])

export default router;