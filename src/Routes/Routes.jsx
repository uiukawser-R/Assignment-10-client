import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ViewPage from "../pages/ViewPage/ViewPage";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import Menu from "../pages/Menu/Menu";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<ViewPage></ViewPage>
            },
            {
                path:'recipe/:id',
                element:<PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>
            },
            {
                path:'menu',
                element:<Menu></Menu>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }

        ]
    }
])

export default router;
