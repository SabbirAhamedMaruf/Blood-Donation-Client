import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/Error/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Security/Login";
import Register from "../pages/Security/Register";
import Dashboard from "../layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import VolunteerHome from "../pages/Dashboard/Volunteer/VolunteerHome";


const routes = createBrowserRouter([
  // Normal Routes
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ],
  },

  // Dashboard Routes
  {
    path:"/dashboard",
    element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
    children:[
      // Admin Routes
      {
        path:"/dashboard/adminprofile",
        element:<AdminProfile/>
      },


      // Donor Routes
      {
        path:"/dashboard/userprofile",
        element:<UserProfile/>
      },


      // Volunteer Routes
      {
        path: "/dashboard/volunteerhome",
        element:<VolunteerHome/>
      }
    ]
  }
]);

export default routes;
