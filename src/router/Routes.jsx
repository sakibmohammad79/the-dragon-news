import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Home/Catagory/Catagory";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import LogIn from "../layout/LogIn";
import Loginn from "../pages/Loginn/Loginn/Loginn";
import Register from "../pages/Loginn/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Shared/terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LogIn></LogIn>,
        children: [
            {
                path: '/',
                element: <Navigate to='/catagory/0'></Navigate>
            },
            {
                path: '/login',
                element: <Loginn></Loginn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'catagory',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Catagory></Catagory>,
                loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])
export default router;