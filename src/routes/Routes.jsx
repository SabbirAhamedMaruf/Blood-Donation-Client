import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Errorpage from "../pages/Error/Errorpage";
import Home from "../pages/Home/Home";
import Login from "../pages/Security/Login";
import Register from "../pages/Security/Register";
import Dashboard from "../layouts/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import AdminProfile from "../pages/Dashboard/Admin/AdminProfile";
import VolunteerProfile from "../pages/Dashboard/Volunteer/VolunteerProfile";
import DonorProfile from "../pages/Dashboard/Donor/DonorProfile";
import DonorHome from "../pages/Dashboard/Donor/DonorHome";


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
        path:"/dashboard/donorprofile",
        element:<DonorProfile/>
      },
      {
        path:"/dashboard/donorhome",
        element: <DonorHome/>
      },


      // Volunteer Routes
      {
        path: "/dashboard/volunteerprofile",
        element:<VolunteerProfile/>
      }
    ]
  }
]);

export default routes;
