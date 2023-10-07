import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Registeration from "../components/Registeration";
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
            }
        ]
    }
])

export default router;