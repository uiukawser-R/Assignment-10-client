import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ViewPage from "../pages/ViewPage/ViewPage";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<ViewPage></ViewPage>
            },
            {
                path:'recipe/:id',
                element:<ViewRecipes></ViewRecipes>
            }

        ]
    }
])

export default router;
