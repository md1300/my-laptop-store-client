import { createBrowserRouter } from "react-router-dom";

import Header from "../Component/Header";
import Home from "../Component/Home";
import AddCard from "../Component/AddCard";
import ShowCard from "../Component/ShowCard";
import UpdateCart from "../Component/UpdateCart";


const router=createBrowserRouter([
    {
       path:'/',
       element:<Header></Header>,
       children:[
        {
            path:'/',
            element:<Home/>
        },
        {
         path:'/addcraft',
         element:<AddCard/>
        },
        {
            path:'/cart',
            element:<ShowCard/>
        },
        {
            path:'/updates/:id',
            element:<UpdateCart/>,
            loader:({params})=>fetch(`http://localhost:3000/updates/${params.id}`)
        }
       ]
    },
])

export default router;