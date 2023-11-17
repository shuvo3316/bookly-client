import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Dashboard from "../Components/Dashboard/Dashboard";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import Addservice from "../Components/Addservice/Addservice";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Allservices from "../Components/Pages/Allservices";
import ServiceDetails from "../Components/ServiceCard/ServiceDetails";
import ManageServices from "../Components/ServiceCard/ManageServices";
import UpdateService from "../Components/ServiceCard/UpdateService";
import Myschedule from "../Components/Dashboard/Myschedule";
import ErrorPage from "../Components/Pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'services',
            element:<Services></Services>
        },
        {
            path:'dashboard',
            element:<Dashboard></Dashboard>
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
            path:'addservice',
            element:<PrivateRoute><Addservice></Addservice></PrivateRoute>
        },
        {
            path:'updateservice/:id',
            element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
            loader:({params})=>fetch(`https://bookly-server.vercel.app/allservices/service/${params.id}`)
        },
        {
            path:'allservice',
            element:<Allservices></Allservices>
        },
        {
            path:'my-schedule',
            element:<PrivateRoute><Myschedule></Myschedule></PrivateRoute>
        },
        {
            path:'manageservice/:uid',
            element:<PrivateRoute><ManageServices></ManageServices></PrivateRoute>
        },
        {
            path:'allservice/service/:id',
            element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://bookly-server.vercel.app/allservices/service/${params.id}`)
        },
      ]
    },
  ]);

export default router;